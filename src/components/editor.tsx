import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { EditorView } from "prosemirror-view";
import nameGenerator from "src/utility/name-generator";
import { RichTextEditor, Link } from "@mantine/tiptap";

const colors = [
  "#958DF1",
  "#F98181",
  "#FBBC88",
  "#FAF594",
  "#70CFF8",
  "#94FADB",
  "#B9F18D",
];

let i = 1;

const getInitialUser = () => {
  return {
    name: nameGenerator(),
    color: colors[~~(Math.random() * colors.length)],
  };
};

EditorView.prototype.updateState = function updateState(state) {
  // @ts-ignore
  if (!this.docView) return; // This prevents the matchesNode error on hot reloads
  // @ts-ignore
  this.updateStateInner(state, this.state.plugins !== state.plugins);
};

export const EditorWrapper = () => {
  const [provider, setProvider] = useState<WebrtcProvider | null>(null);
  const yDoc = useMemo(() => {
    return new Y.Doc();
  }, []);
  useEffect(() => {
    const provider = new WebrtcProvider("collab-demo", yDoc);
    setProvider(provider);
    return () => {
      provider?.destroy();
    };
  }, [yDoc]);

  if (!yDoc || !provider) return null;

  return <Editor yDoc={yDoc} provider={provider} />;
};

interface IEditorProps {
  yDoc: Y.Doc;
  provider: WebrtcProvider;
}

const Editor: FC<IEditorProps> = ({ yDoc, provider }) => {
  const [users, setUsers] = useState<{ [p: string]: any; clientId: number }[]>(
    []
  );

  // console.log(users);
  const [currentUser, setCurrentUser] = useState(getInitialUser);

  const editor = useEditor({
    extensions: [
      StarterKit,
      CollaborationCursor.configure({
        provider,
        onUpdate: (updatedUsers) => {
          setUsers(updatedUsers);
          return null;
        },
        user: currentUser,
      }),
      Collaboration.configure({
        document: yDoc,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none prose-stone h-[50vh] bg-white overflow-scroll mx-0 mt-8 rounded-lg border px-4 py-3",
      },
    },
    content: "",
  });

  const setName = useCallback(() => {
    const name = (window.prompt("Name") || "").trim().substring(0, 32);

    if (name) {
      return setCurrentUser({ ...currentUser, name });
    }
  }, [currentUser]);

  useEffect(() => {
    if (editor && currentUser) {
      editor.chain().focus().user(currentUser).run();
    }
  }, [editor, currentUser]);

  return (
    <div style={{ height: "100%" }}>
      <RichTextEditor editor={editor} sx={{ border: 0, height: "100%" }}>
        <RichTextEditor.Toolbar
          sticky
          sx={{
            border: 0,
            backgroundColor: "#edf2fa",
            height: "56px",
            borderRadius: "30px",
            color: "#000000B3",
            display: "flex",
            justifyContent: "center",
            fontSize: "16px",
            width: "100%",
          }}
        >
          <RichTextEditor.ControlsGroup sx={{ background: "transparent" }}>
            <RichTextEditor.Bold sx={{ fontSize: 16 }} />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <div className="editor__name">
        <button onClick={setName}>{currentUser.name}</button>
      </div>
    </div>
  );
};

export default Editor;

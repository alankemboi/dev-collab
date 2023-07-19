import { EditorContent, useEditor } from "@tiptap/react";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { WebrtcProvider } from "y-webrtc";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { EditorView } from "prosemirror-view";
import { RichTextEditor, Link } from "@mantine/tiptap";
import StarterKit from "@tiptap/starter-kit";
import { Chip, Container, Snackbar, Alert } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import * as Y from "yjs";

const colors = [
  "#958DF1",
  "#F98181",
  "#FBBC88",
  "#FAF594",
  "#70CFF8",
  "#94FADB",
  "#B9F18D",
];
const names = [
  "Lea Thompson",
  "Cyndi Lauper",
  "Tom Cruise",
  "Madonna",
  "Jerry Hall",
  "Joan Collins",
  "Winona Ryder",
  "Christina Applegate",
  "Alyssa Milano",
  "Molly Ringwald",
  "Ally Sheedy",
  "Debbie Harry",
  "Olivia Newton-John",
  "Elton John",
  "Michael J. Fox",
  "Axl Rose",
  "Emilio Estevez",
  "Ralph Macchio",
  "Rob Lowe",
  "Jennifer Grey",
  "Mickey Rourke",
  "John Cusack",
  "Matthew Broderick",
  "Justine Bateman",
  "Lisa Bonet",
];

const getRandomElement = (list: any | any[]) =>
  list[Math.floor(Math.random() * list.length)];

const getRandomRoom = () => {
  const variables =
    "Zen,Steampunk,Nebula";

  const roomNumbers = variables.trim()?.split(",") ?? [10, 11, 12];

  return getRandomElement(roomNumbers.map((number: any) => `rooms.${number}`));
};
const getRandomColor = () => getRandomElement(colors);
const getRandomName = () => getRandomElement(names);

const room = getRandomRoom();

const ydoc = new Y.Doc();
const websocketProvider = new TiptapCollabProvider({
  appId: "7j9y6m10",
  name: room,
  document: ydoc,
});

const getInitialUser = () => {
  const users = JSON.parse(localStorage.getItem("currentUser")!);
  return (
    users || {
      name: getRandomName(),
      color: getRandomColor(),
    }
  );
};

// const getInitialUser = () => {
//   return {
//     name: nameGenerator(),
//     color: colors[~~(Math.random() * colors.length)],
//   };
// };

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
    // Trigger a web socket connection to the signaling server
    fetch("/api/create-doc", { method: "GET" }).then((res) => {
      console.log(res);
    });
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
  const [status, setStatus] = useState("connecting");
  const [currentUser, setCurrentUser] = useState(getInitialUser);
  const [open, setOpen] = React.useState(true);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: websocketProvider,
        onUpdate: (updatedUsers) => {
          setUsers(updatedUsers);
          return null;
        },
        user: currentUser,
      }),
    ],

    content: "",
  });
  useEffect(() => {
    // Update status changes
    websocketProvider.on("status", (event: any) => {
      setStatus(event.status);
    });
  }, []);

  // Save current user to localStorage and emit to editor
  useEffect(() => {
    if (editor && currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      editor.chain().focus().updateUser(currentUser).run();
    }
  }, [editor, currentUser]);

  const setName = useCallback(() => {
    const name = (window.prompt("Name") || "").trim().substring(0, 32);

    if (name) {
      return setCurrentUser({ ...currentUser, name });
    }
  }, [currentUser]);

  if (editor) {
    localStorage.clear();
    localStorage.setItem(
      "allUsers",
      JSON.stringify(editor.storage.collaborationCursor.users)
    );
  }

  return (
    <div style={{ height: "100%", margin: "0 auto" }}>
      <div className="editor__footer" style={{ border: 0 }}>
        <div className={`editor__status editor__status--${status}`}>
          <Chip label={status} variant="filled" />
        </div>

        <Chip icon={<FaceIcon />} label={currentUser.name} variant="filled" />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={10000} // Set the duration (in milliseconds) for how long the Snackbar is displayed
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* Snackbar Content */}
        <Alert
          // elevation={6}
          variant="outlined"
          onClose={() => setOpen(!open)}
          severity="info" // You can use "error", "warning", "info", or "success"
        >
          {status === "connected"
            ? `${editor?.storage.collaborationCursor.users.length} user${
                editor?.storage.collaborationCursor.users.length === 1
                  ? ""
                  : "s"
              } online in ${room}`
            : "offline"}
        </Alert>
      </Snackbar>
      <Container
        sx={(theme) => ({
          backgroundColor: "white",
          width: "210mm",
          height: "297mm",
          // padding: "24px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #cacaca",
          gap: "24px",
          mb: "24px",
          padding: theme.spacing(2),
          [theme.breakpoints.down("sm")]: {
            width: "100%", // Adjust the width for small devices
            padding: theme.spacing(1),
          },
        })}
      >
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
      </Container>
      <div className="editor__name">
        <button onClick={setName}>{currentUser.name}</button>
      </div>
    </div>
  );
};

export default Editor;

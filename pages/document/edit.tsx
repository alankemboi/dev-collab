import { Container, Card, CardContent, Typography } from "@mui/material";
import { MainHeader } from "@components/header/header";

import { EditorWrapper } from "@components/editor";

export default function DocumentEditPage() {
  return (
    <>
      <MainHeader search={false} acc />
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "rgb(249 251 253)",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "16px",
        }}
      >
        <Container
          sx={{
            backgroundColor: "white",
            width: "210mm",
            height: "297mm",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #cacaca",
            gap: "24px",
            mb: "24px",
          }}
        >
          <EditorWrapper />
        </Container>
      </Container>
    </>
  );
}

DocumentEditPage.noLayout = true;

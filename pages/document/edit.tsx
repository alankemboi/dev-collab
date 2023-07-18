import { Container, Card, CardContent, Typography } from "@mui/material";
import { MainHeader } from "@components/header/header";

import { EditorWrapper } from "@components/editor";

export default function DocumentEditPage() {
  return (
    <>
      <MainHeader search={false} acc />
      {/* <Container
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
      > */}
      <EditorWrapper />
      {/* </Container> */}
    </>
  );
}

DocumentEditPage.noLayout = true;

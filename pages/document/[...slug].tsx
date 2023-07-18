import {
  Container,
  Card,
  styled,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Button,
  CardActions,
  TextField,
} from "@mui/material";
import { MainHeader } from "@components/header/header";
import { EditorWrapper } from "@components/editor";
import React from "react";
import { Comment } from "@mui/icons-material";

const CommentButtonWrapper = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  color: "#707070",
  top: theme.spacing(16),
  right: theme.spacing(8),
  zIndex: 1000,
  boxShadow: "0 0 #000",
  backgroundImage: "#edf2fa",
  textTransform: "none",
}));
const CommentBox = styled(Card)(({ theme }) => ({
  position: "fixed",
  color: "#707070",
  padding: "16px",
  top: theme.spacing(32),
  right: theme.spacing(8),
  zIndex: 1000,
  boxShadow: "0 0 #000",
  backgroundColor: "#edf2fa",
  borderRadius: "8px",
  textTransform: "none",
}));

const AddCommenWrapper = styled(Card)(({ theme }) => ({
  position: "fixed",
  color: "#707070",
  padding: "4px",
  top: theme.spacing(24),
  right: theme.spacing(8),
  zIndex: 1000,
  borderRadius: "8px",
  textTransform: "none",
}));

const AvatarWrapper = styled(Avatar)(() => ({
  width: 36,
  height: 36,
  fontSize: 12,
}));

export default function DocumentEditPage() {
  const [currentTime, setCurrentTime] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const openCommentBox = () => setOpen(!open);
  React.useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm} Today`);
    };

    const timer = setInterval(updateCurrentTime, 1000); // Update time every second
    updateCurrentTime(); // Call once immediately to display initial time

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

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
        <EditorWrapper />
        <CommentButtonWrapper
          aria-label="Scroll to top"
          size="medium"
          onClick={openCommentBox}
        >
          <Comment />
        </CommentButtonWrapper>
        {open && (
          <>
            {/* <AddCommenWrapper>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AvatarWrapper>HR</AvatarWrapper>
                  </ListItemIcon>
                  <ListItemText primary="Join" secondary="" />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Comment"
                    id="standard-required"
                    variant="standard"
                  />
                </ListItem>
              </List>
              <CardActions>
                <CardActions>
                  <Button size="small" variant="outlined">
                    Comment
                  </Button>
                  <Button size="small" variant="outlined">
                    Cancel
                  </Button>
                </CardActions>
              </CardActions>
            </AddCommenWrapper> */}
            <CommentBox>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AvatarWrapper>TD</AvatarWrapper>
                  </ListItemIcon>
                  <ListItemText primary="@kemboi" secondary={currentTime} />
                </ListItem>
                <ListItem>Hi</ListItem>
              </List>
            </CommentBox>
          </>
        )}
      </Container>
    </>
  );
}

DocumentEditPage.noLayout = true;

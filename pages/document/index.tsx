import { NewFile } from "@components/app-icon/file";
import { GetStartedAccord } from "@components/get-started";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { ChevronRight, Folder } from "@mui/icons-material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { nanoid } from "nanoid";
import { blue } from "@mui/material/colors";

export default function DocumentPage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex", // Use Flexbox display
        // justifyContent: "center", // Center the items horizontally
        // alignItems: "center", // Center the items vertically
        // width: "90%", // Set the width to 90%
        margin: "0px auto", // Center the container horizontally
        //mt: 8,
        minHeight: "100vh",
        backgroundColor: "#fff",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <GetStartedAccord />
      <Link
        component="a"
        href="/document/edit"
        sx={{ color: "#000", textDecoration: "none" }}
      >
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[500] }}>
                <Folder />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nebula" secondary="Common Room" />
          </ListItem>
        </List>
      </Link>
      <Box
        sx={{ display: "flex", width: "100%", flexDirection: "column", mt: 4 }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "1rem" }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            My recent files
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              component="a"
              href="#"
              sx={{ fontSize: 14 }}
            >
              My documents
            </Typography>
            <ChevronRight sx={{ ml: "2px" }} />
          </Box>
        </Box>
        <Card
          variant="outlined"
          sx={{
            border: 0,
            backgroundImage:
              "linear-gradient(to bottom,#eef2ff,rgba(248,250,252,0))",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <NewFile />
            </Box>
          </CardContent>
        </Card>

        <Typography
          sx={{
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "no-wrap",
            fontWeight: 700,
            lineHeight: 1.5,
            mb: 2,
          }}
        >
          Get started by creating files
        </Typography>
        <div style={{ margin: "0 auto" }}>
          <Link
            // component="button"
            variant="body2"
            // onClick={() => {}}
            sx={{
              fontSize: 14,
              color: "indigo",
              textAlign: "center",
              whiteSpace: "no-wrap",
              fontWeight: 700,
              lineHeight: 1.5,
              mb: 2,
            }}
            href={`/document/${nanoid(32)}/edit`}
          >
            Create a new file
          </Link>
        </div>
      </Box>
    </Container>
  );
}

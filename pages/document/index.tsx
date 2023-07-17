import { NewFile } from "@components/app-icon/file";
import { DocList } from "@components/doc-page";
import { GetStartedAccord } from "@components/get-started";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  ListItemButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ChevronRight } from "@mui/icons-material";

export default function DocumentPage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex", // Use Flexbox display
        // justifyContent: "center", // Center the items horizontally
        // alignItems: "center", // Center the items vertically
        width: "90%", // Set the width to 90%
        margin: "0 auto", // Center the container horizontally
        mt: 8,
        minHeight: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <GetStartedAccord />
      {/* <DocList /> */}
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
          <Button size="small" sx={{ width: "auto" }}>
            Create a project
          </Button>
        </div>
      </Box>
    </Container>
  );
}
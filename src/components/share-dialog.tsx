import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { DialogContent } from "@mui/material";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { FileCopy } from "@mui/icons-material";
import { LinkOffOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const emails = ["username@gmail.com", "user02@gmail.com"];

export function ShareDialog(props: SimpleDialogProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [currentUser, setUser] = React.useState<any>();
  const router = useRouter();
  const path = router.asPath;
  React.useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    const allUsers = JSON.parse(localStorage.getItem("allUsers")!);
    setUser(allUsers[0]["name"] || "Anonymous");
  }, []);
  console.log("sd", currentUser);
  // Ensure slug is an array and get the first element (path after domain)
  // console.log(slug);
  const handleCopy = () => {
    if (inputRef && inputRef.current) {
      inputRef?.current.select();
      document.execCommand("copy");
      setCopied(true);
    }
  };
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle>Share with friends</DialogTitle>
      <DialogContent>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={`${currentUser || "User"} (You)`} />
          </ListItem>
          <ListItem disableGutters>
            <TextField
              variant="filled"
              fullWidth
              inputRef={inputRef}
              sx={{ border: 0 }}
              value={`https://collab.kemboi.app${path}`}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                      <IconButton aria-label="Copy Link" onClick={handleCopy}>
                        <FileCopy />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleCopy}
          variant="outlined"
          startIcon={<LinkOffOutlined />}
        >
          Copy Link
        </Button>
        <Button autoFocus onClick={handleClose} variant="contained">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

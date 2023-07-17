import React from "react";
import { List, ListItem, ListItemIcon } from "@mui/material";
import { Inbox, Mail, Drafts } from "@mui/icons-material";

const styles = {
  menu: {
    width: "200px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
  },
};

const VerticalHoverMenu = () => {
  return (
    <List component="nav" style={styles.menu}>
      <ListItem button style={styles.listItem}>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
      </ListItem>
      <ListItem button style={styles.listItem}>
        <ListItemIcon>
          <Mail />
        </ListItemIcon>
      </ListItem>
      <ListItem button style={styles.listItem}>
        <ListItemIcon>
          <Drafts />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export { VerticalHoverMenu };

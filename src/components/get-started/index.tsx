import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Slider,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Box,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tick } from "@components/app-icon/tick";

const styles = {
  slider: {
    width: "60%", // Adjust the slider's width to fit inside the Paper component
    marginLeft: "auto",
  },
  paper: {
    padding: "10px",
    background: "#fff",
    border: "1px solid rgb(241 245 249)",
    boxShadow: "none",
  },
  success: {
    border: "1px solid rgb(110 231 183)",
    backgroundColor: "#fff",
  },
  accord: {
    height: "100%",
    mb: 4,
    width: "100%",
    borderRadius: ".375rem",
    background: "rgb(248 250 252/1)",
    boxShadow: "none",
    outline: "1px solid rgb(241 245 249)",
  },
};

const GetStartedAccord = () => {
  return (
    <div>
      <Accordion style={styles.accord} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 1.5,
              whiteSpace: "no-wrap",
            }}
          >
            Get started with Dev Collab!
          </Typography>
          <Slider
            defaultValue={20}
            valueLabelDisplay="auto"
            style={styles.slider}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing="10px" columnSpacing={1}>
            <Grid item xs={6}>
              <List>
                <Paper style={{ ...styles.paper, ...styles.success }}>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          borderRadius: 9999,
                          // width: "16px",
                          // height: "16px",
                          outline: "4px solid rgba(16,185,129,.1)",
                          background: "rgb(16 185 129)",
                        }}
                      >
                        <Tick />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Join"
                      secondary="Welcome to Dev.Collab!"
                    />
                  </ListItem>
                </Paper>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <Paper
                  style={styles.paper}
                  sx={{
                    boxShadow:
                      "0 0 #0000,0 0 #0000,0 0 #0000,0px 0px 1px rgba(79,70,229,.26),0px 5px 50px -30px #4f46e5",
                    backgroundColor: "#fff",
                  }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          color: "rgb(67 56 202)",
                          backgroundImage:
                            "linear-gradient(to bottom,#eef2ff,#e0e7ff)",
                          boxShadow:
                            "0px 0px 1px rgba(79,70,229,.26),0px 5px 50px -30px #4f46e5",
                        }}
                      >
                        2
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Create a project"
                      secondary="The magic engine that powers Dev.Collab."
                    />
                  </ListItem>
                </Paper>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <Paper style={styles.paper}>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          backgroundColor: "rgb(248 250 252)",
                          color: "rgb(148 163 184)",
                        }}
                      >
                        3
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Create a project"
                      secondary="The magic engine that powers Dev.Collab."
                    />
                  </ListItem>
                </Paper>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <Paper style={styles.paper}>
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          backgroundColor: "rgb(248 250 252)",
                          color: "rgb(148 163 184)",
                        }}
                      >
                        4
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary="Share Dev.Collab"
                      secondary="Help someone out — thank you guaranteed!"
                    />
                  </ListItem>
                </Paper>
              </List>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export { GetStartedAccord };

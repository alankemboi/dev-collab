import * as React from "react";
import { useRouter } from "next/router";
import { styled, alpha, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Drawer,
  IconButton,
  Grid,
  Button,
  Avatar,
  AvatarGroup,
  Stack,
} from "@mui/material";
import { nanoid } from "nanoid";
import { useGetIdentity } from "@refinedev/core";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PlusIcon } from "@components/app-icon/plus";
import { InviteIcon } from "@components/app-icon/invite";
import { LightIcon } from "@components/app-icon/status";
import { Settings } from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { useDataProvider } from "@refinedev/core";
import { authProvider } from "src/authProvider";
import { ShareDialog } from "@components/share-dialog";
import { supabaseClient } from "src/utility";
import { RandAvatarIcons } from "@components/app-icon/avatar-icons";

interface IUser {
  id: string;
  name: string;
  avatar: string;
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    minWidth: "120px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 0.7)",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

export function MainHeader({ search, acc }: { search: Boolean; acc: Boolean }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentUser, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    setUser(currentUser);
  }, []);
  console.log(currentUser);
  // const { data: user } = useGetIdentity<IUser>();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleSignout = async () => {
    await supabaseClient.auth.signOut();
    console.log("SignedOut");
  };
  const [shareOpen, setShareOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] =
    React.useState("username@gmail.com");

  const handleClickOpen = () => {
    setShareOpen(true);
  };

  const handleClose = (value: string) => {
    setShareOpen(false);
    setSelectedValue(value);
  };

  const router = useRouter();
  const { pathname } = router;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const createNewDoc = async (e: any) => {
    const docSlugId = nanoid(32);
    if (pathname === "/document") {
      router.push(`document/${docSlugId}/edit/`);
    }
  };

  const ActionButtons = () => {
    return (
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Stack direction="row" spacing={1}>
            <RandAvatarIcons />
          </Stack>
        </Grid>
        {/* First Button */}
        <Grid item>
          <Button
            // variant="outlined"
            sx={{
              color: "rgb(51 65 85)",
              background: "#fff",
              whiteSpace: "no-wrap",
              fontSize: 13,
              border: "1px solid #ededed",
              textTransform: "none",
            }}
            onClick={handleClickOpen}
            endIcon={<InviteIcon />}
          >
            <span
              style={{ display: "flex", alignItems: "center", fontSize: 13 }}
            >
              Share
            </span>
          </Button>
        </Grid>
        {/* Second Button */}
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundImage: "linear-gradient(to bottom,#6366f1,#4f46e5)",
              boxShadow: "0 0 #0000",
              textTransform: "none",
            }}
            onClick={createNewDoc}
            endIcon={<PlusIcon />}
          >
            <span
              style={{ display: "flex", alignItems: "center", fontSize: 13 }}
            >
              New
            </span>
          </Button>
        </Grid>
      </Grid>
    );
  };
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    background: "#fff",
    color: "#5f6368",
    boxShadow: "none",
    borderBottom: "1px solid #dadce0",
    // height: "50px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Stack direction="row" spacing={1}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                fontSize: 12,
                backgroundColor: "#F98181",
                color: "#fff",
              }}
            >
              ME
            </Avatar>
          </Stack>
        </IconButton>
        <p>Account</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PlusIcon />
        </IconButton>
        <p>New</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ShareDialog
          selectedValue={selectedValue}
          open={shareOpen}
          onClose={handleClose}
        />
        <Toolbar>
          <IconButton
            size="large"
            onClick={handleDrawerOpen}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dev-Collab
          </Typography>
          {search && (
            <Search sx={{ background: "#f1f3f4" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box
            sx={{
              display: "flex",
              margin: "0 auto",

              maxWidth: 500,
            }}
          >
            <Box
              sx={{
                width: "100%",

                background:
                  "linear-gradient(91.36deg, rgb(255, 255, 255) 1.16%, rgb(238, 242, 255) 33.21%, rgb(253, 242, 248) 69.84%, rgb(255, 255, 255) 98.84%)",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#5f6368",
                  textTransform: "none",
                }}
              >
                Get Started
                <LightIcon />
              </Typography>
            </Box>
          </Box>
          {acc && (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <ActionButtons />
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary" // Changed the variant to temporary
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {["Account", "Share", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Settings" ? (
                    <Settings />
                  ) : text === "Share" ? (
                    <Share />
                  ) : (
                    <AccountCircle />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Button onClick={handleSignout}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="LOG OUT" />
              </ListItemButton>
            </ListItem>
          </Button>
        </List>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

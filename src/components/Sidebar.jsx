import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import theme from "./theme";

const primaryDark = theme.palette.primary.dark;
const primaryLight = theme.palette.primary.light;
const boldFontWeight = "bold";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="sidebar" >
      <header className="sidebar-header">
        <Typography variant="h5" sx={{ fontWeight: boldFontWeight }}>
          The King's Restaurant
        </Typography>
        <Typography variant="subtitle2" sx={{ color: primaryLight }}>
          Dashboard Owner
        </Typography>
      </header>

      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: primaryDark }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: primaryDark }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ Page" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

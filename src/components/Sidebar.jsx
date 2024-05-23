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

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="sidebar">
      <Box className="sidebar-header">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          The King's Restaurant
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.primary.light }}
        >
          Dashboard Owner
        </Typography>
      </Box>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: theme.palette.primary.dark }} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{ color: theme.palette.primary.dark }}
          />
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

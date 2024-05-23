import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Box className="app-container">
      <CssBaseline />
      <Sidebar />
      <Dashboard />
    </Box>
  );
}

export default App;

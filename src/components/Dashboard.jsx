import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Transactions from "./Transactions";
import theme from "./theme";

const Dashboard = () => {
  return (
    <Box component="main" className="dashboard">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        DASHBOARD
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: theme.palette.primary.light }}
      >
        Welcome to your dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent className="card-content">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                431,225
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                Sales Obtained
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                +21%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent className="card-content">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                32,441
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                New Clients
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                +5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent className="card-content">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                1,325,134
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                Traffic Received
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.light }}
              >
                +43%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent className="card-content">
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Revenue Generated
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: theme.palette.primary.light }}
              >
                $59,342.32
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>
      <Box>
        <Transactions />
      </Box>
    </Box>
  );
};

export default Dashboard;

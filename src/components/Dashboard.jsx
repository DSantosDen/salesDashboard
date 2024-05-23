import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import TrafficIcon from "@mui/icons-material/Traffic";
import Transactions from "./Transactions";
import theme from "./theme";

const primaryLight = theme.palette.primary.light;
const boldFontWeight = "bold";

const StatCard = ({ icon: IconComponent, value, label, change }) => (
  <Grid item xs={12} sm={4}>
    <Card className="card-parent" sx={{ height: "150px" }}>
      <CardContent className="card-content">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" flexDirection={"column"} alignItems="center">
            <IconComponent sx={{ color: primaryLight }} />
            <Typography variant="h5" sx={{ fontWeight: boldFontWeight }}>
              {value}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: primaryLight }}>
              {label}
            </Typography>
          </Box>
          <Box className="change-value-group">
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: primaryLight }}
            >
              {change}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Grid>
);

const Dashboard = () => {
  return (
    <Box component="main" className="dashboard">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: boldFontWeight }}>
        DASHBOARD
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: primaryLight }}>
        Welcome to your dashboard
      </Typography>

      <Grid container spacing={3}>
        <StatCard
          icon={PointOfSaleIcon}
          value="431,225"
          label="Sales Obtained"
          change="+21%"
        />
        <StatCard
          icon={ContactPhoneIcon}
          value="32,441"
          label="New Clients"
          change="+5%"
        />
        <StatCard
          icon={TrafficIcon}
          value="1,325,134"
          label="Traffic Received"
          change="+43%"
        />
      </Grid>

      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent className="card-content">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: boldFontWeight }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: boldFontWeight, color: primaryLight }}
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

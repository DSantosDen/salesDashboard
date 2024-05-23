import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Box,
} from "@mui/material";
import { mockTransactions } from "./mockData";
import theme from "./theme";

const primaryLight = theme.palette.primary.light;
const primaryMain = theme.palette.primary.main;
const boldFontWeight = "bold";

const Transactions = () => {
  return (
    <Card>
      <CardContent className="card-content">
        <Typography variant="subtitle2" sx={{ fontWeight: boldFontWeight }}>
          Recent Transactions
        </Typography>
        <List>
          {mockTransactions.map((transaction) => (
            <ListItem
              key={transaction.txId}
              divider
              sx={{
                borderBottomWidth: 5,
                borderBottomColor: primaryMain,
              }}
            >
              <ListItemText
                primary={
                  <span style={{ color: primaryLight }}>
                    {transaction.txId}
                  </span>
                }
                secondary={`${transaction.user} ${transaction.date}`}
                sx={{ paddingRight: 15 }}
              />

              <ListItemSecondaryAction>
                <Box className="transaction-cost">${transaction.cost}</Box>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Transactions;

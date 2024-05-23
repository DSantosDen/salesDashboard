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

const Transactions = () => {
  return (
    <Card>
      <CardContent className="card-content">
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Recent Transactions
        </Typography>
        <List>
          {mockTransactions.map((transaction) => (
            <ListItem
              key={transaction.txId}
              divider
              sx={{
                borderBottomWidth: 5,
                borderBottomColor: theme.palette.primary.main,
              }}
            >
              <ListItemText
                primary={
                  <span style={{ color: theme.palette.primary.light }}>
                    {transaction.txId}
                  </span>
                }
                secondary={`${transaction.user} ${transaction.date}`}
                sx={{ paddingRight: 10 }}
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

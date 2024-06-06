import { connect } from "react-redux";

function formatCurrency(value) {
  if (!value) return 0;
  console.log(`formatCurrency ${value}`);
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/*
  This is the old way to connect Redux store to 
  REACT components.

  NOTE: If the connection does not work just close
  and open the app again.
*/

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(store) {
  console.log(`mapStateToProps ${store}`);
  return {
    balance: store.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);

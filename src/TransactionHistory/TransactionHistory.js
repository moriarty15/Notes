import TransactionHistoryItem from "./TransactionHistoryItem"

export default function TransactionHistory({transactions}) {
    return (<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>    
  <tbody>
            {transactions.map((transaction) => (
                <TransactionHistoryItem
                    key = { transaction.id }
                    amount={transaction.amount}
                    type={transaction.type}
                    currency={transaction.currency}
                />                
    ))}
  </tbody>
</table>)
}
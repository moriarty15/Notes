export default function TransactionHistoryItem(props) {
    const {type, amount, currency} = props
    return (<tr>
        <td>{type }</td>
        <td>{amount }</td>
        <td>{currency}</td>
    </tr>)
}
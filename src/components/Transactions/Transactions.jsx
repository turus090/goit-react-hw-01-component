import RowItem from "./RowItem/RowItem"
import s from "./transactions.module.css"
const Transactions = (props) => {

    console.log(props)
    const RowCollection = props.transactions.map((item,index)=>{
        return(
            <RowItem 
                theme= {index%2 === 0?'white':'grey'}
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />
        )
    })
    return (
        <table className={s.table}>
            <thead className={s.thead}>
                <tr className={s.theadRow}>
                    <th className={`${s.item} ${s.itemWhite}`}>TYPE</th>
                    <th className={`${s.item} ${s.itemWhite}`}>AMOUNT</th>
                    <th className={`${s.item} ${s.itemWhite}`}>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
                {RowCollection}
            </tbody>
            
        </table>
    )
}
export default Transactions 
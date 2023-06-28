import RowItem from "./RowItem/RowItem"
import s from "./transactions.module.css"
const Transactions = ({transactions}) => {

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
                { transactions.map((item,index)=>{
                return(
                    <RowItem 
                        themeWhite= {index%2 === 0}
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                    )
                 })}
            </tbody>
            
        </table>
    )
}
export default Transactions 
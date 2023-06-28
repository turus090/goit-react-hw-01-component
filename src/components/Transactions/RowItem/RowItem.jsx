import s from '../transactions.module.css'
const RowItem = ({themeWhite, type, amount, currency}) => {
    let trStyle 
    if (themeWhite){
        trStyle = s.rowWhite
    } else {
        trStyle = s.rowGrey
    }
    return (
        <tr className={`${s.tr} ${trStyle}`}>
            <td className={s.item}>{type}</td>
            <td className={s.item}>{amount}</td>
            <td className={s.item}>{currency}</td>
        </tr>
    ) 
}
export default RowItem
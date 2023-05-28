import s from '../transactions.module.css'
const RowItem = (props) => {
    console.log(props)
    let trStyle 
    if (props.theme === "white"){
        trStyle = s.rowWhite
    } else {
        trStyle = s.rowGrey
    }
    return (
        <tr className={`${s.tr} ${trStyle}`}>
            <td className={s.item}>{props.type}</td>
            <td className={s.item}>{props.amount}</td>
            <td className={s.item}>{props.currency}</td>
        </tr>
    ) 
}
export default RowItem
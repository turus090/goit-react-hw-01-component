import propTypes from 'prop-types'

import s from '../transactions.module.css'
const RowItem = ({themeWhite, type, amount, currency}) => {
    console.log( typeof(type))
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

RowItem.propTypes = {
    themeWhite: propTypes.bool,
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string
}

export default RowItem
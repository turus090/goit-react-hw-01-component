import propTypes from 'prop-types'
import s from "./Button.module.css"
const Button = ({text}) => {
    return(
        <button className={s.btn}>{text}</button>
    )
}

Button.propTypes = {
  text: propTypes.string
}


export default Button
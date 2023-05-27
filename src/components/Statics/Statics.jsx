import s from './static.module.css'
const Statics = (props) => {
    const colors = [ s.blue, s.purple, s.pink, s.birch, s.yellow, s.repeta]
    const staticCollection = props.static.map((staticItem,index) =>{
        const randomColor = colors[Math.round(Math.random() * colors.length)]
        return(
            <li key={staticItem.id} className={`${s.item} ${randomColor}`}>
                <span className={s.label}>{staticItem.label}</span>
                <span className={s.percentage}>{staticItem.percentage}%</span>
            </li>
        ) 
    })

    return(
 <section className={s.statistics}>
     {props.title ? <h2 className={s.title}>{props.title}</h2> : null}

        <ul className={s.statList}>
            {staticCollection}
        </ul>
</section>
    )
}

export default Statics
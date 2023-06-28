import s from './static.module.css'
const Statics = ({staticInfo, title}) => {
    const colors = [ s.blue, s.purple, s.pink, s.birch, s.yellow, s.repeta]
    const staticCollection = staticInfo.map((staticItem,index) =>{
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
     {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
            {staticCollection}
        </ul>
</section>
    )
}

export default Statics
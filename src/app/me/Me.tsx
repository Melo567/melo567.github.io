import './Me.css'
import me from './../../assets/pierre.jpg'
const Me = () => {
    return (
        <div className='me'>
            <div className='leftMe'>
            <img src={me} className='imageMe'/>
            </div>
            <div className='rightMe'>
                <p><span>Développeur Mobile Senior</span> avec plus de 5 ans d'expérience dans la création d'applications innovantes sur Flutter, React Native, et d'autres technologies. J'ai travaillé sur des projets complexes, incluant des applications de gestion, de billetterie, et de géolocalisation. Mon expertise couvre toutes les étapes du développement, de la conception à la livraison, avec un fort accent sur la qualité du code et la satisfaction client. Prêt à collaborer sur de nouveaux projets et apporter des solutions sur-mesure qui répondent à vos besoins.</p>
            </div>
        </div>
    )
}

export default Me
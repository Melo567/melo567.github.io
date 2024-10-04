import react from '../../assets/react.png'
import kotlin from '../../assets/kotlin.png'
import swift from '../../assets/swift.png'
import flutter from '../../assets/flutter.png'

import './Techno.css'

const Techno = () => {

    return(
        <div className='techno'>
            <img className="technoLogo" src={flutter} alt='flutter'/>
            <img className="technoLogo" src={react} alt='react' />
            <img className="technoLogo" src={kotlin} alt='kotlin' />
            <img className="technoLogo" src={swift} alt='swift'/>
        </div>
    )
}

export default Techno
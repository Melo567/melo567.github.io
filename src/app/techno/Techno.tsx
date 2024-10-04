import react from '../../assets/react.png'
import kotlin from '../../assets/kotlin.png'
import swift from '../../assets/swift.png'
import flutter from '../../assets/flutter.png'
import firebase from '../../assets/firebase.png'
import java from '../../assets/java.png'
import springBoot from '../../assets/spring-boot.png'
import './Techno.css'

const Techno = () => {

    const images = [
        flutter,
        react,
        kotlin,
        swift,
        firebase,
        java,
        springBoot,
    ]
    return(
    <div className="slider-container">
        <div className="slider">
                {images.map((image, index) => (
                <div className="slide" key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
                ))}
                {images.map((image, index) => (
                <div className="slide" key={index + images.length}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
                ))}
        </div>
    </div>
    )
}

export default Techno
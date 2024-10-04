import './About.css'

const About = () => {

    return(
        <div className='profile'>
        <div className="left">
          <div className='about'>
            <p className='lastName'>RAKOTODIMIMANANA <span className='firstName'>Pierre</span></p>
            <p className='devMobile'>Développeur Mobile</p>
            <p className='slogan'>Créateur d'expériences mobiles sur mesure</p>
          </div>
        </div>
        <div className='right'>
          <img className="image" src='https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg' alt='Développeur Mobile'/>
        </div>
      </div>
    )
}

export default About
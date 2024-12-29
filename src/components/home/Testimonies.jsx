import React from 'react'
import './Testimonies.css'

const Testimonies = () => {
  
  return (
    
    
    <div className='testimonies_container'>
        
        <h3>TESTIMONIALS</h3>
        <h1>See how we are changing lives</h1>
        <h6>LifeTrak health tracker has empowered countless individuals to take control of their 
          <br/>wellness journeys. Our users have verifiably reported improved physical and mental 
          <br/>health after interacting with our various features. <br/>
        Here’s what some of them have to say:</h6>
        


          <div className="square__grid">
              <div className="square1">
              <div className='text_icon'>
              {/* <img className='icon1'src={jam_medical} alt="icon"/> */}
              <h3>Instant Consultation</h3>
              </div>
                <h5>Get expert health advice whenever you need it. With our instant consultation feature, connect with certified professionals in real time for personalized guidance and support. No waiting, just answers—right when you need them.</h5>
              
                <a href="https://demo.olivethemes.com/exo/2022/08/22/professionals-team-management-ideas/" target="_blank" rel="noopener noreferrer">
              <h2>Start Now <i class="fas fa-angle-right styled_icon"></i></h2>  
              </a>
              </div>
        
        
        
              <div className="square2">
              <div className='text_icon'>
              {/* <img className='icon2' src={wave} alt="icon"/> */}
              <h3>Health Tracking</h3>
              </div>
                <h5>Stay on top of your wellness journey with our comprehensive health tracking feature. Monitor your daily activities, diet, sleep, and fitness progress all in one place. Gain valuable insights to make informed decisions and achieve your health goals effortlessly.</h5>
                <a href="https://demo.olivethemes.com/exo/2022/08/22/professionals-team-management-ideas/" target="_blank" rel="noopener noreferrer">
              <h2>Start Now <i class="fas fa-angle-right styled_icon"></i></h2>  
              </a>
                    </div>
        
        
              <div className="square3">
              <div className='text_icon'>
              {/* <img className='icon3'src={medbrief} alt="icon"/> */}
              <h3>Personalized Fitness Plans</h3>
              </div>
                <h5>Achieve your fitness goals with a plan tailored just for you. Our personalized fitness plans adapt to your preferences, goals, and fitness level, providing step-by-step guidance and progress tracking to keep you motivated and on track.</h5>
                <a href="https://demo.olivethemes.com/exo/2022/08/22/professionals-team-management-ideas/" target="_blank" rel="noopener noreferrer">
              <h2>Start Now <i class="fas fa-angle-right styled_icon"></i></h2>  
              </a>
              
              </div>
              </div>
        
        </div>
  )
}

export default Testimonies
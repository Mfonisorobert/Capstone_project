import React from 'react'
import Navbar from './components/home/Navbar'
import './App.css'
import Hero from './components/home/Hero'
import Our_features from './components/home/Our_features'
import Insights from './components/home/Insights'

const App = () => {
  return (
    <main className='container'>
      <Navbar/>
      <div>
      <section id="home">
      <Hero/>
      </section>
      
      <section id="Our_features">
        <Our_features/>
        </section>
        
        <section id="Insights">
        <Insights/>
        </section>


        {/* <Portfolio/>
        <News/>
        <Footer/>  */}
        

      </div>
    </main>
    
  )
}

export default App

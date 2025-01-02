import React from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import './Sign Up.css'

export const Sign_Up = () => {
  return (
    <>
      <main className='bg container'>
        <div className='bg2'>
          <h1>Create your Profile</h1>
          <form action="">
            <section id='one' className='form-section'>
              <div className=''>
                <label htmlFor="name"> Full Name</label>
                <input type="text" id='name' />
              </div>
              <div className=''>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
              </div>
            </section>
            <section id='two' className='form-section'>
              <div className=''>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id='dob' />
              </div>
              <div className=''>
                <label htmlFor="gender">Gender</label>
                <select id='gender'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=''>
                <label htmlFor="weight">Weight</label>
                <input type="number" id='weight' />
              </div>
              <div className=''>
                <label htmlFor="height">Height</label>
                <input type="number" id='height' />
              </div>
            </section>
            <section className='form-section'>
              <div className=''>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' />
              </div>        
            </section>
            <section id='four' className='form-section'>
              <div className=''>
                <label htmlFor="password"> Password</label>
                <input type="text" id='password' />
              </div>
              <div className=''>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="text" id='confirm' />
              </div>
            </section>
            <section id='submit'>
            <button type='submit' className=''>Create</button>
            </section>
          </form>
        </div>
      </main>
    </>
  )
}

export default Sign_Up
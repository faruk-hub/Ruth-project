import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'
import Header from './Header'

const Contact = () => {
    return (
        <div className='contact'>
            <Header />
            {/* <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link> */}
            <div className="inputs">
                <h1>Contact us</h1>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contact

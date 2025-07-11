import './Contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contactInfo">
        <div className='contactLeft'>
            <h1>Contact Info</h1>
            <div className='contactItem'>
                <FaPhone />
                <span>thi-sis-anum</span>
            </div>
            <div className='contactItem'>
                <FaEnvelope />
                <span>thisisadomain@gmail.com</span>
            </div>
            <div className='contactItem'>
                <FaMapMarkerAlt />
                <span>A Place, California</span>
            </div>
        </div>

        <div className='contactRight'>
            <h1>Contact Info</h1>
            <div className='contactItem'>
                <FaPhone />
                <span>thi-sis-anum</span>
            </div>
            <div className='contactItem'>
                <FaEnvelope />
                <span>thisisadomain@gmail.com</span>
            </div>
            <div className='contactItem'>
                <FaMapMarkerAlt />
                <span>A Place, California</span>
            </div>
        </div>
    </div>
  )
}

export default Contact

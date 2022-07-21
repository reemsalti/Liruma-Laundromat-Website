import './Main.css';
import img  from './laundromat2.jpg'
import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { GiWashingMachine } from "react-icons/gi";
import "./Navbar/index";
import dispenser from "./dispenser.jpg";
import { BsFillCursorFill } from "react-icons/bs";
import { IoMdClock } from "react-icons/io";
import newlogofooter from "./Navbar/newlogo.png";
import { RiErrorWarningFill } from "react-icons/ri";

function Main() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <div className='container'>
                
            <div className='contents'><div className='helpwanted'>
                <h1>HELP WANTED</h1>
                    <p className='note'>If interested please contact us at <a href='tel:6476377981'>(647)-637-7981</a></p>
                </div>
                <img className='pic' src={img} alt='' />
                <div className='About' id='about'>=
                    <h2>ABOUT US</h2>
                    <p>Liruma Laundromat is a self-serve coin laundromat where kindness, respect, and cleanliness is valued.<br></br><GiWashingMachine className='ICON'/><br></br>
                    <br></br>We offer products on-site for all your laundry needs!<br></br> 
                    <br></br>
                        Laundry bags
                        <br></br>
                        Detergent
                        <br></br>
                        Softener
                        <br></br>
                        Dryer sheets
                        <br></br><br></br>
                        Perfect for your convenience! 
                    </p> 
                   <img className='dispenser' src={dispenser} alt="" />
                </div>
                <div className='Policy' id='policy'>
                    <h2>POLICY</h2>
                    <RiErrorWarningFill className="ICON" />
                    <p>Liruma Laundromat is equipped with round-the-clock surveillance to monitor customer safety and to maintain a respectful environment.<br>
                    </br><br></br>Please keep in mind that the laundromat is not responsible for lost or stolen items, so please try not to forget your items!<br></br></p>
                </div>
                <div className='Location' id='location'>
                    <h2>LOCATION & HOURS</h2>
                    <IoMdClock className='ICON'/>
                    <p>Mon-Sun: 6:00AM - 10:00PM<br></br><br></br>2645 Liruma Rd #2, <br></br>Mississauga, ON L5K 1Y9<br></br><BsFillCursorFill className='ICON'/></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6311688725013!2d-79.67399024834397!3d43.530883479023245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43959d75d5b5%3A0x4db8976787cf9b84!2sLiruma%20Laundromat!5e0!3m2!1sen!2sca!4v1640558808855!5m2!1sen!2sca" title='map'></iframe>
                </div>
                <div className='Contact' id='contact'>
                    <h2>CONTACT</h2>
                    <p>
                    Phone: <a className="number" href="tel:(647)-637-7981">(647)-637-7981</a> <br></br>OR <a className="number" href="tel:(416)-881-2828">(416)-881-2828</a>
                    
                    </p>
                    <h3>Customer Service Hours:</h3>
                    <IoMdClock className='ICON'/>
                    <p>Mon-Sun: 6:00AM - 10:00PM
                        <br></br><br></br>
                        Please keep in mind, calls will not be answered after 10PM.
                    </p>
                </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='bottomnav'>
                <a className="mininav" href='#about'>ABOUT</a>
                    <a className="mininav" href='#policy'>POLICY</a>
                    <a className="mininav" href='#location'>LOCATION</a>
                    <a className="mininav" href='#contact'>CONTACT</a>
                </div>
                <img className="newlogofooter" src={newlogofooter} alt="" />
                <p className='copyright'>Liruma Laundromat <strong>©</strong> 2022</p>
            </div>
        </>    
    )
}

export default Main

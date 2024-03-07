import React from 'react'
import Image from './../assesst/1.jpeg'
import './Screenbar.css'
import Button from './Button';


const Screenbar = () => {
  return (
    <div>
        <img src={Image} />
            <div className='screen'>
                <p style={{fontSize:'15px'}}>Think Health, Think Massage.</p>
                <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Button fontColor={"#FFFFFF"} backgroundColor={"rgb(153,31,72)"} padding={"0.7rem 1.5rem"} >LEARN MORE ABOUT US</Button>
            <Button fontColor={"#FFFFFF"} backgroundColor={"rgb(153,31,72)"} padding={"0.7rem 1.5rem"}>CONTACT US TODAY</Button>

            </div>
            <div className='paragraph'>
                <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            </div>
            <hr/>
            <div className='footer_main'>
                <p style={{fontSize:'22px', color:'rgb(153,31,72)'}}>Family Wellness Massage Therapy</p>
                <p style={{color:'rgb(117, 116, 115)', fontSize:'13px'}}>9876 Main Stree, Suite 123, Maniland, ML12345 <br/> Phone: 987-654-3210</p>
            </div>
    </div>
  )
}
export default Screenbar

import React from 'react'
import { BsGithub, BsTwitter } from "react-icons/bs"
import { RiCopyrightLine } from 'react-icons/ri'
import lens from "../../assets/lens_Icon.jpg"
import EthContribute from '../../assets/eth_contribute.jpg'

const Footer = () => {
  return (
    <footer>
      <div className='d-flex flex-column my-5'>
        <p className='d-flex justify-content-center'>About Us</p>
        <div className='d-flex justify-content-center py-3'>
          <BsGithub />
          <img src={lens} alt="" className='rounded-circle h-25' />
          <BsTwitter />
        </div>
        
      </div>
      <div className='d-flex flex-column align-items-center my-5'>
        <p>Contribute</p>
        <img src={EthContribute} alt="" />
      </div>
      <div className='d-flex justify-content-center my-4'>
        <RiCopyrightLine />
        <p>All rigth reserved</p>
        <strong className='px-1'>HackHub</strong>
      </div>
    </footer>
  )
}

export default Footer
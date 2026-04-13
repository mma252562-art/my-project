import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




export default function Nav() {
    return (
        <div className='h-16 bg-[#131722] flex justify-between items-center px-4'>
            
            <div>
                <img src="./public/logo-dark(1).webp" alt="" />
            </div>

            <div className='flex items-center gap-6'>
                <div className='text-white flex gap-3 text-xl'>
                    < FaFacebook />
                    < FaSpotify />
                    < FaInstagram />
                    < FaYoutube />
                </div>
                <div className='text-xl font-semibold'>
                    <button className=' text-white px-4  '>Register</button>
                    <button className=' text-white px-4 '>Login</button>
                </div>
            </div>

        </div>
    )
}
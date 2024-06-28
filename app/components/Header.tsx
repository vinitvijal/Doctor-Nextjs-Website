
import { MapPin, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'



function Header() {
  return (
    <header className=' z-20 bg-white w-full border-b fixed'>
        <div className=' px-20  flex justify-between items-center h-10 w-full bg-slate-800'>
            <h1 className='  text-stone-200 flex gap-4'><MapPin/> Maharaja Agrasen Hospital, Sector-24, Rohini</h1>
            <h1 className='  text-stone-200 flex gap-4 items-center'><PhoneCall/> (011)2345678  <BsInstagram size={20}/> <BsFacebook size={20}/> <BsTwitter size={20}/></h1>
        </div>
        <div className=' h-24 border-b flex items-center justify-between px-16'>
            <div className=' h-full'>
                <Image src="/logo.png" alt="alt" width={1000} height={1000} className=' h-full w-auto' />
            </div>
            <div className=' flex gap-10 items-center'>
                <Link href='/'>Treatments</Link>
                <Link href='/'>Heart Issues</Link>
                <Link href='/'>About Us</Link>
                <Link href='/'>FAQs</Link>
                <Link href='/'>Contact</Link>
                <button className=' rounded-full py-3 px-5 text-white bg-blue-500 hover:bg-blue-600 duration-100'>Book an Appointment</button>
            </div>
        </div>
    </header>
  )
}

export default Header

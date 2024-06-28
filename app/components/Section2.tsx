import { Plus, PlusCircle, PlusSquare } from 'lucide-react'
import React from 'react'
import { FcAdvance } from 'react-icons/fc'

function Section2() {
  return (
    <section className=' h-screen w-full gap-10 flex items-center justify-between px-12 '>
      <img src="https://uploads-ssl.webflow.com/61013411b41b5f0b1ac69667/619253690a3bf00264ad8d58_Photography_MFC_HomeSection-p-1600.jpeg" alt="" className=' w-3/5 rounded-lg shadow-lg' />
      <div className='  w-full px-10  flex flex-col gap-8'>
        <h1 className=' text-5xl font-bold'>The Home of Heart Care</h1>
        <p className=' text-slate-500'>The Mississauga Foot Clinic is one of Canadas longest operating foot clinics. Since our inception in 1990 weve been dedicated to treating some of the most challenging foot issues ever seen.</p>
        <p className=' flex gap-3 font-extrabold text-lg'><PlusSquare/> University of Delhi</p>
      </div>
    </section>
  )
}

export default Section2

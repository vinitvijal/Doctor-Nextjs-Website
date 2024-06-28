import React from 'react'

function Landing() {
  return (
    <section className=" z-0 h-screen w-full pt-28">
      <div className=' absolute z-10  h-[85%] w-1/2 flex pl-28 justify-center text-white   flex-col'>
        <h1 className=' font-semibold mb-28 border-l-2 pl-2 border-black text-lg'>Maharaja Hospitals.</h1>
        <h1 className=' text-6xl pr-24'>Experience excellence with us.</h1>
        <h1 className=' text-gray-200'>Your partner in business</h1>
        <button className=' mt-10 px-3 py-2 rounded-xl hover:shadow-lg duration-200 bg-white text-black max-w-fit '>Learn More</button>
      </div>
      <img src="bg.png" alt="" className=' z-0 w-full h-[90%] object-cover absolute' />
    </section>
  )
}

export default Landing

import React from 'react'
import { Link as Anchor } from 'react-router-dom'

function Home() {
  return (
    <div className='grow bg-black flex flex-col items-center py-5 justify-between'>
        <img className='w-11/12' src="/banner-example.jpg" alt="" />
        <p className='text-white ps-4 py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquam asperiores optio nisi consectetur excepturi atque dolorem vitae praesentium nobis vel sint aperiam architecto ratione pariatur sapiente culpa quo. Deserunt!</p>
        <article className='calltoaction w-11/12 h-60 rounded-md flex flex-col justify-center items-center md:h-96 xl:h-[600px] bg-cover'><div className='text-white rounded-md flex flex-col bg-slate-400 bg-opacity-70 items-center gap-3 py-5 w-[268px] md:w-[400px] lg:w-[600px] lg:py-10'><p className='md:text-2xl lg:text-3xl'>Mira nuestros productos y servicios</p><Anchor to={"/products"} className='self-center bg-blue-950 rounded p-1 hover:scale-110 md:text-2xl lg:p-2'>Productos</Anchor></div></article>
    </div>
  )
}

export default Home

//        <article className='relative px-2'><img className='rounded-lg' src="/calltoaction.jpg" alt="" /><div className='text-white rounded-md absolute top-[15%] left-7 flex flex-col bg-slate-400 bg-opacity-70 py-5 px-2 gap-3'><p>Mira nuestros productos y servicios</p><Anchor to={"/products"} className='self-center bg-blue-950 rounded p-1 hover:scale-110'>Productos</Anchor></div></article>

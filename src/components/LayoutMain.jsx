import React from 'react'
import { Link as Anchor, useLocation } from 'react-router-dom'

function LayoutMain(props) {
    let location = useLocation()
    const paths = [
        {nombre : "Inicio" , path: "/" , estado : "/" == location.pathname},
        {nombre : "Productos" , path: "/products" , estado : "/products" == location.pathname},
        {nombre : "Sobre Nosotros" , path: "/about" , estado : "/about" == location.pathname},
        {nombre : "Contacto" , path: "/contact" , estado : "/contact" == location.pathname}
    ]
  return (
    <div className='bg-blue-900 flex flex-col min-h-screen w-full'>
    <header className='flex flex-col items-center py-2 gap-2'>
        <p className='text-slate-300 grow font-custom text-xl md:text-5xl lg:text-6xl'>Casco</p>
        <p className='text-slate-300 grow font-custom text-xl md:text-5xl lg:text-6xl'>electronics</p>
        <nav className='flex gap-2 text-slate-300'>
            {paths.map((path) => <Anchor key={path.nombre} to={path.path} className={path.estado ? " p-1 text-sm rounded-lg bg-white text-black md:text-xl lg:text-2xl" : "bg-blue-950 p-1 text-sm rounded-lg hover:bg-white hover:text-black md:text-xl lg:text-2xl"}>{path.nombre}</Anchor>)}
        </nav>
    </header>
    {props.children}
    <footer>
        <div className='flex justify-evenly md:py-5'>
            <nav className='flex flex-col gap-4 py-2 text-slate-300 underline'>
                <Anchor className='hover:text-black md:text-2xl lg:text-3xl xl:text-4xl' to={"/"}>Inicio</Anchor>
                <Anchor className='hover:text-black md:text-2xl lg:text-3xl xl:text-4xl' to={"/products"}>Productos</Anchor>
            </nav>
            <nav className='flex flex-col gap-4 py-2 text-slate-300 underline'>
                <Anchor className='hover:text-black md:text-2xl lg:text-3xl xl:text-4xl' to={"/about"}>Sobre Nosotros</Anchor>
                <Anchor className='hover:text-black md:text-2xl lg:text-3xl xl:text-4xl' to={"/contact"}>Contacto</Anchor>
            </nav>
        </div>
    </footer>
    </div>
  )
}

export default LayoutMain


//Acomodr titulo de casco electronics 
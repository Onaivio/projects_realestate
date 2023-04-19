import React from 'react'
import { DiReact } from "react-icons/di"

const Footer = () => {
  return (
    <footer className='bg-black py-8  text-center text-white'>
      <div className=' mx-auto'>
        Made with React  by <a className='text-violet-500 hover:text-white transition font-semibold' href="https://ovaivi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Onaivio.</a>
      </div>
    </footer>
  )
}

export default Footer

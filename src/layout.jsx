import React from 'react'
import { Navbar } from './Components/Navbar'
import Footer from './Components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col bg-cover bg-center h-screen ">
            {/* Video background */}
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover">
              <source src="https://res.cloudinary.com/ddxcd04ok/video/upload/v1734002999/Bouncing_Ball_ClevaHQ_Website_Background_an7fek.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay: 4/5 transparent, 1/5 black */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 via-transparent via-[80%]" />

            {/* Optional overlay for additional darkening */}
            <div className="absolute inset-0 bg-black opacity-50" />

            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
  )
}

export default Layout

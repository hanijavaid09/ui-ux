import Image from 'next/image'
import React from 'react'
// import { FaSearch } from 'react-icons/fa'; 

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="flex flex-wrap justify-between items-center w-full max-w-screen-xl h-[124px] py-4">
    
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Logo.png"
            alt="logo"
            height={44}
            width={148}
            className="leading-[48px]"
          />
        </div>

        {/* Search input */}
        <div className="flex items-center flex-grow justify-center sm:ml-4 mt-4 sm:mt-0 w-full sm:w-auto">
          <div className="relative w-full sm:max-w-[492px] h-[44px]">
            <input
              type="text"
              placeholder="Search something here"
              className="border pl-[36px] pr-4 p-2 rounded-full w-full h-[44px]"
            />
            {/* <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>
        
        {/* Icons container */}
        <div className="flex justify-between w-full sm:w-auto mt-4 sm:mt-0 space-x-4 sm:space-x-8">
          <Image
            src="/images/Like.png"
            alt="like"
            height={44}
            width={44}
            className="h-8"
          />
          <Image
            src="/images/Notification.png"
            alt="notification"
            height={44}
            width={44}
            className="h-8"
          />
          <Image
            src="/images/Settings.png"
            alt="settings"
            height={44}
            width={44}
            className="h-8"
          />
          <Image
            src="/images/Profil.png"
            alt="profile"
            height={44}
            width={44}
            className="h-8"
          />
        </div>
      </div>
    </div>
  )
}

export default Header;

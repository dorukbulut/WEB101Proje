import { useRouter } from 'next/router'
import {useState} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  
}
  
  export default function Example() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    let router = useRouter();
    return (
      <nav className="bg-main-color fixed w-screen">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center h-16 items-center justify-between">
      

    <div onClick={() => setIsNavOpen(!isNavOpen)} className="flex md:hidden hover:cursor-pointer lg:hidden sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>
    </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          
          <div className="flex flex-shrink-0 items-center">
            <img className="block h-8 w-auto lg-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
  
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
  
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button onClick={() => {
            router.push("/signin")
          }} className='bg-violet-400 p-2 w-32 rounded-md hover:bg-violet-600'>Sign In</button>
        </div>
        
      </div>
    </div>
  
    <div className={isNavOpen ? "flex " : "flex hidden"} id="mobile-menu-open">
      <div className="space-y-1 px-2 pt-2 pb-3">
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
  
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
  
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
      </div>
    </div>
    
  </nav>
  
    )
  }
  
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
   <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-a flex jutify-between items-center sm:px-16 px-6 py-4'>
    <Link href="https://www.google.com/" className="flex justify-center items-center">
            <Image 
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain" 
            />
        </Link>

        <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] '
/>
    </nav>
   </header>
  )
}

export default Navbar
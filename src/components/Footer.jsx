import React from 'react'
import logo from "../../public/logo 1.png";
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <div>
        <div className="form flex items-center justify-center gap-4  bg-[#955EDA] w-[80vw] mx-auto py-16">
            <div className="left text-white font-bold text-3xl">Stay Connected</div>
            <div className="rightrs flex items-center justify-cente gap-4">
                <form className='flex items-center justify-center gap-1' action="">

                <input className='p-4 bg-[#8636e867]  'placeholder='Enter your name' type="text" />
                <input className='p-4 bg-[#8636e867]   'placeholder='Enter your contact number' type="text" />
                <input className='p-4 bg-[#8636e867]  'placeholder='Enter your email address' type="text" />
                </form>
                <button className='border-2 px-10 bg-gray-300 rounded-3xl'>Submit</button>
            </div>
        </div>
<div className="logo w-[100%] ">
<Image
        className="pl-20 mx-auto my-10"
          src={logo}
          width='auto'
          height='auto'
          alt="Picture of the author"
        />
</div>
<div className="links w-[100%] pb-10">
    <div className='mx-96 pointer'>
{/* Who we are   |   Our Offerings   |   How It Works    |     Blog   |   Contact Us   |   Advantages   |     Pricing   |   Testimonials  */}

<Link href="/">Who we are    |  </Link>
<Link href="/">Our Offerings  | </Link>
<Link href="/"> How It Works  | </Link>
<Link href="/">  Blog  |</Link>
<Link href="/"> Contact U   |</Link>
<Link href="/"> Advantages   |</Link>
<Link href="/"> Pricing   |</Link>
<Link href="/"> Testimonials</Link>
    </div>

</div>

<div className='bg-black text-white flex items-center justify-center'>
  <p className='py-10'>© Copyright 2022 - 2023 .          All Rights Reserved | Privacy Policy | Refund Policy</p>
</div>

    </div>
  )
}

export default Footer
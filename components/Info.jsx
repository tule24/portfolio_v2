import Image from 'next/image'
import { BiEnvelope, BiPhone, BiHome, BiCake } from 'react-icons/bi'
import React from 'react'
import images from '../img'
function Info() {
    return (
        <div className="flex flex-col max-w-md p-4 mx-auto rounded-lg dark:text-gray-100 dark:bg-zinc-800 my-shadow">
            <Image src={images.avatar} alt="ava" width='128' height='128' className="mx-auto rounded-full aspect-square"/>
            <div className="space-y-4 divide-y divide-gray-700">
                <div className="my-2 space-y-1 text-center">
                    <h2 className="text-xl font-semibold sm:text-3xl uppercase">Le Cong Tu</h2>
                    <h2>Web Developer</h2>
                </div>
                <div className="space-y-2 pt-5">
                    <p className='flex items-center flex-wrap'><BiCake className='mr-1 inline' />DOB: &nbsp;<span className='font-semibold'>02/04/1997</span></p>
                    <p className='flex items-center flex-wrap'><BiEnvelope className='mr-1 inline' />Email: &nbsp;<span className='font-semibold'>tulecong24@gmail.com</span></p>
                    <p className='flex items-center flex-wrap'><BiPhone className='mr-1 inline' />Phone: &nbsp;<span className='font-semibold'>058 420 4904</span></p>
                    <p className='flex items-center flex-wrap'><BiHome className='mr-1 inline' />Address: &nbsp;<span className='font-semibold'>Ho Chi Minh City</span></p>
                </div>
            </div>
        </div>
    )
}

export default Info
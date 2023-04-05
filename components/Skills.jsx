import React from 'react'
import Image from 'next/image'
import images from '../img'
function Skills() {
    return (
        <div className='fixed space-y-4 h-screen right-0 top-[5rem] w-[20%] text-gray-800 dark:text-gray-100 shadow-xl'>
            <h1 className='text-3xl font-semibold tracking-widest flex items-center px-3'>Skills</h1>
            <div className='h-[80vh] overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg space-y-2'>
                <div className='space-y-2'>
                    <div className='bg-gray-300 w-max px-3 py-1 rounded-tr-lg rounded-br-lg'>
                        <p className='font-semibold'>Programming language</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.javascript} width={50} height={50} className='rounded-full' />
                            <p>Javascripts</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.solidity} width={50} height={50} className='rounded-full' />
                            <p>Solidity</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='bg-gray-300 w-max px-3 py-1 rounded-tr-lg rounded-br-lg'>
                        <p className='font-semibold'>Framework & Database</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.react} width={50} height={50} className='rounded-full' />
                            <p>React JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.nextjs} width={50} height={50} className='rounded-full' />
                            <p>Next JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.node} width={50} height={50} className='rounded-full' />
                            <p>Node JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.mongodb} width={50} height={50} className='rounded-full' />
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='bg-gray-300 w-max px-3 py-1 rounded-tr-lg rounded-br-lg'>
                        <p className='font-semibold'>Testing</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.chai} width={50} height={50} className='rounded-full' />
                            <p>Chai</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.mocha} width={50} height={50} className='rounded-full' />
                            <p>Mocha</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='bg-gray-300 w-max px-3 py-1 rounded-tr-lg rounded-br-lg'>
                        <p className='font-semibold'>Other</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.redux} width={50} height={50} className='rounded-full' />
                            <p>Redux</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.graphql} width={50} height={50} className='rounded-full' />
                            <p>GrahpQL</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.apollo} width={50} height={50} className='rounded-full' />
                            <p>Apollo</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.rust} width={50} height={50} className='rounded-full' />
                            <p>Rust</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.ether} width={50} height={50} className='rounded-full' />
                            <p>Etherjs</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.polkadot} width={35} height={35} className='rounded-full' />
                            <p>Polkadotjs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
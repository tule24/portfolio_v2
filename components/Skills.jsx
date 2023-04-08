import React from 'react'
import Image from 'next/image'
import images from '../img'

function Skills() {
    return (
        <div className='fixed space-y-4 h-screen right-0 top-[5rem] xl:w-[20%] w-[30%] lg:block hidden text-gray-800 dark:text-gray-100 shadow-xl'>
            <h1 className='text-3xl font-semibold tracking-widest flex items-center px-3'>Skills</h1>
            <div className='h-[80vh] ml-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg space-y-2'>
                <div className='space-y-2'>
                    <p className='font-semibold text-violet-600 tracking-widest'>Programming language</p>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.javascript} width={50} height={50} className='rounded-full' alt='js' />
                            <p>Javascripts</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.solidity} width={50} height={50} className='rounded-full' alt='solidity' />
                            <p>Solidity</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-semibold text-violet-600 tracking-widest'>Framework & Database</p>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.react} width={50} height={50} className='rounded-full' alt='react' />
                            <p>React JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.nextjs} width={50} height={50} className='rounded-full' alt='next' />
                            <p>Next JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.node} width={50} height={50} className='rounded-full' alt='node' />
                            <p>Node JS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.mongodb} width={50} height={50} className='rounded-full' alt='mongo' />
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-semibold text-violet-600 tracking-widest'>Testing</p>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.chai} width={50} height={50} className='rounded-full' alt='chai' />
                            <p>Chai</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.mocha} width={50} height={50} className='rounded-full' alt='mocha' />
                            <p>Mocha</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-semibold text-violet-600 tracking-widest'>Other</p>
                    <div className='grid grid-cols-3'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.redux} width={50} height={50} className='rounded-full' alt='redux' />
                            <p>Redux</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.graphql} width={50} height={50} className='rounded-full' alt='graphql' />
                            <p>GrahpQL</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.apollo} width={50} height={50} className='rounded-full' alt='apollo' />
                            <p>Apollo</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.rust} width={50} height={50} className='rounded-full' alt='rust' />
                            <p>Rust</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={images.ether} width={50} height={50} className='rounded-full' alt='ether' />
                            <p>Ethers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
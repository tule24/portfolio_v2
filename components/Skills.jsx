import React from 'react'
import Image from 'next/image'
import images from '../img'
function Skills() {
    return (
        <div className='fixed space-y-4 h-screen right-0 top-[5rem] w-[20%] px-3 text-gray-800 dark:text-gray-100 shadow-xl'>
            <h1 className='text-3xl font-semibold tracking-widest flex items-center'>Skills</h1>
            <div className='space-y-2'>
                <p>Programming Language</p>
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.javascript} width={50} height={50} className='rounded-full' />
                        <p>Javascripts</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.solidity} width={50} height={50} className='rounded-full' />
                        <p>Solidity</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.rust} width={50} height={50} className='rounded-full' />
                        <p>Rust</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p>Front-end</p>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.react} width={50} height={50} className='rounded-full' />
                        <p>React JS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.nextjs} width={50} height={50} className='rounded-full' />
                        <p>Next JS</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p>Back-end</p>
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.node} width={50} height={50} className='rounded-full' />
                        <p>Node JS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.nextjs} width={50} height={50} className='rounded-full' />
                        <p>Next JS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.mongo} width={50} height={50} className='rounded-full' />
                        <p>Mongo DB</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p>Blockchain</p>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.ethereum} width={50} height={50} className='rounded-full' />
                        <p>Ethereum</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={images.substrates} width={50} height={50} className='rounded-full' />
                        <p>Substrate</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p>Testing</p>
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
        </div>
    )
}

export default Skills
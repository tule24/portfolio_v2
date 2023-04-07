import React from 'react'
import { SiSolidity, SiMongodb, SiRedux, SiIpfs, SiReact, SiParitysubstrate, SiRust, SiNodedotjs, SiGraphql, SiApollographql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Slider from './Slider'
import images from '../img'
import Image from 'next/image'
import { BiCake, BiEnvelope, BiHome, BiPhone } from 'react-icons/bi'
const wallet = [
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-0_pm00bh.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-1_qy4dwt.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-2_amj5tf.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-3_z1rcbt.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-4_utcohg.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680682948/portfolio/wallet-5_dzn1qi.png'
]
const nft = [
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684227/portfolio/nft-0_jsogxr.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684228/portfolio/nft-1_mgi5kf.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684227/portfolio/nft-2_fggnnp.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684227/portfolio/nft-3_zfkgap.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684226/portfolio/nft-4_bteiw6.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684227/portfolio/nft-5_e9lcaa.png',
]
const dex = [
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684959/portfolio/dex-0_ps4grs.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684959/portfolio/dex-1_uftamg.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684959/portfolio/dex-2_rz6ihw.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684959/portfolio/dex-3_w72aba.png',
    'https://res.cloudinary.com/dy6zbixol/image/upload/v1680684959/portfolio/dex-4_g4pwcb.png'
]
const ecom = ['https://res.cloudinary.com/dy6zbixol/image/upload/v1680685379/portfolio/ecommerce_fgnwwh.png']
function Project() {
    return (
        <div className='w-full'>
            <div className="xl:hidden grid grid-cols-[1fr_2fr] w-full mb-10 sm:p-6 p-4 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <div className='text-center'>
                    <Image src={images.avatar} alt="ava" width='200' height='200' className="mx-auto rounded-full sm:w-[12rem] sm:h-[12rem] w-20 h-20" />
                </div>
                <div className="sm:pl-10 pl-5">
                    <div>
                        <h2 className="font-semibold sm:text-3xl text-2xl uppercase">Le Cong Tu</h2>
                        <h2>Web Developer</h2>
                    </div>
                    <div className="space-y-2 mt-5 sm:block hidden">
                        <p className='flex items-center flex-wrap'><BiCake className='mr-1 inline' />DOB: &nbsp;<span className='font-semibold'>02/04/1997</span></p>
                        <p className='flex items-center flex-wrap'><BiEnvelope className='mr-1 inline' />Email: &nbsp;<span className='font-semibold'>tulecong24@gmail.com</span></p>
                        <p className='flex items-center flex-wrap'><BiPhone className='mr-1 inline' />Phone: &nbsp;<span className='font-semibold'>058 420 4904</span></p>
                        <p className='flex items-center flex-wrap'><BiHome className='mr-1 inline' />Address: &nbsp;<span className='font-semibold'>Ho Chi Minh City</span></p>
                    </div>
                </div>
                <div className="space-y-2 mt-5 sm:hidden block col-span-2">
                    <p className='flex items-center flex-wrap'><BiCake className='mr-1 inline' />DOB: &nbsp;<span className='font-semibold'>02/04/1997</span></p>
                    <p className='flex items-center flex-wrap'><BiEnvelope className='mr-1 inline' />Email: &nbsp;<span className='font-semibold'>tulecong24@gmail.com</span></p>
                    <p className='flex items-center flex-wrap'><BiPhone className='mr-1 inline' />Phone: &nbsp;<span className='font-semibold'>058 420 4904</span></p>
                    <p className='flex items-center flex-wrap'><BiHome className='mr-1 inline' />Address: &nbsp;<span className='font-semibold'>Ho Chi Minh City</span></p>
                </div>
            </div>
            <div className="xl:hidden block w-full p-6 mb-10 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <h1 className='text-2xl font-semibold'>About me</h1>
                <p className='text-justify'>My name is Cong Tu. I live in Ho Chi Minh City. I'm currently pursuing a career as a Web developer. With 2 years of experience working for a technology start-up, I believe that my knowledge and experience will will be very valuable to the business. I'm a progressive man, I have the ability to self-study and research new technology. I'm hoping to land a job that will allow me to reach my full potential.</p>
            </div>
            <div className="flex flex-col mb-10 w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <h2 className='sm:text-3xl text-2xl tracking-wider font-semibold'>Social <span className='text-lg'>(FE, BE)</span></h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-blue-500 text-black px-2 rounded-lg text-sm flex items-center w-fit'>ReactJS <SiReact className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>NodeJS <SiNodedotjs className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    <span className='bg-[#e535ab] text-black px-2 rounded-lg text-sm flex items-center w-fit'>GraphQL <SiGraphql className='ml-1' /></span>
                    <span className='bg-blue-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Apollo <SiApollographql className='ml-1' /></span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/Social_project_be" target='_blank' className='text-violet-600'>BE</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://github.com/tule24/Social_project_fe" target='_blank' className='text-violet-600'>FE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://tule-social.netlify.app" target="_blank" className='text-green-500'>Live demo</a>
                </p>
                <div className='mt-5'>
                    <p className='text-justify font-semibold'>Main function: </p>
                    <ul className='list-disc ml-5'>
                        <li>Using GraphQL query, mutation, subscription</li>
                        <li>Register, login, authentication with token, refreshtoken using JWT</li>
                        <li>Add friend, send friend request, confirm friend request</li>
                        <li>Create, edit, delete post with 3 vision: private, friend, public</li>
                        <li>Store image on cloudinary</li>
                        <li>Scroll infinite to show post</li>
                        <li>Like, unlike post, comment, replies</li>
                        <li>2 level comments, create, edit, delete comment, replies</li>
                        <li>Realtime user chat</li>
                        <li>Realtime push notification</li>
                        <li>Light, dark theme</li>
                        <li>Reponsive desktop, tablet, mobile</li>
                    </ul>
                </div>
                <Slider images={ecom} />
            </div>
            <div className="flex flex-col mb-10 w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <h2 className='sm:text-3xl text-2xl tracking-wider font-semibold'>Ecommerce API <span className='text-lg'>(BE)</span></h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>NodeJS <SiNodedotjs className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/ecommerce_api" target='_blank' className='text-violet-600'>BE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://documenter.getpostman.com/view/22237843/2s93CSprP9" target='_blank' className='text-violet-600'>Postman API Documentation</a>
                </p>
                <div className='mt-5'>
                    <p className='text-justify font-semibold'>Main function: </p>
                    <ul className='list-disc ml-5'>
                        <li>Sign-up, sign-in, reset password via email</li>
                        <li>Authentication with token, refreshtoken using JWT</li>
                        <li>CRUD user, product, order</li>
                        <li>Management, buy and sale products</li>
                    </ul>
                </div>
                <Slider images={ecom} />
            </div>
            <div className="flex flex-col mb-10 w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800" >
                <h2 className='sm:text-3xl text-2xl tracking-wider font-semibold'>Multisig Wallet <span className='text-lg'>(Smart Contract, BE, FE)</span></h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Solidity <SiSolidity className='ml-1' /></span>
                    <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit'>NextJS <TbBrandNextjs className='ml-1' /></span>
                    <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit'>ReduxToolkit <SiRedux className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='text-violet-600'>Smart contract</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='text-violet-600'>BE + FE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://www.youtube.com/watch?v=h5wzYKiDfWU" target='_blank' className='text-red-500'>Youtube</a> | &nbsp;
                    <a href="https://multi-sig-wallet-tule.vercel.app/" target="_blank" className='text-green-500'>Live demo</a> <span className='text-[12px] italic'>(Require metamask wallet and ETH goerli testnet)</span></p>
                <div className='mt-5'>
                    <p className='text-justify font-semibold'>Main function: </p>
                    <ul className='list-disc ml-5'>
                        <li>Login by metamask wallet</li>
                        <li>Deposit, transfer, and receive ethers</li>
                        <li>Create one or multiple multi-sig wallets</li>
                        <li>Make voting when making a transaction or changing owners</li>
                        <li>Record history of the wallet</li>
                    </ul>
                </div>
                <Slider images={wallet} />
            </div>
            <div className="flex flex-col mb-10 w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <h2 className='sm:text-3xl text-2xl tracking-wider font-semibold'>NFT Marketplace <span className='text-lg'>(Smart Contract, BE, FE)</span></h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Solidity <SiSolidity className='ml-1' /></span>
                    <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit'>NextJS <TbBrandNextjs className='ml-1' /></span>
                    <span className='bg-[rgb(99,211,215)] text-black px-2 rounded-lg text-sm flex items-center w-fit'>IPFS <SiIpfs className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/NFT_Marketplace_Contract" target='_blank' className='text-violet-600'>Smart contract</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://github.com/tule24/NFT-Marketplace" target='_blank' className='text-violet-600'>BE + FE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://youtu.be/NI7Djuy6Ii8" target='_blank' className='text-red-500'>Youtube</a> | &nbsp;
                    <a href="https://nft-marketplace-tule.vercel.app/" target="_blank" className='text-green-500'>Live demo</a> <span className='text-[12px] italic'>(Require metamask wallet and ETH goerli testnet)</span>
                </p>
                <div className='mt-5'>
                    <p className='text-justify font-semibold'>Main function: </p>
                    <ul className='list-disc ml-5'>
                        <li>Login by metamask wallet</li>
                        <li>Mint your NFT</li>
                        <li>Set NFT's price, listing or unlisting NFT</li>
                        <li>Buy & sell NFT</li>
                        <li>Manage your NFTs</li>
                    </ul>
                </div>
                <Slider images={nft} />
            </div>
            <div className="flex flex-col mb-10 w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800">
                <h2 className='sm:text-3xl text-2xl tracking-wider font-semibold'>Dex Orderbook Exchange<span className='text-lg'>(Blockchain L1, FE)</span></h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Substrate <SiParitysubstrate className='ml-1' /></span>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Rust <SiRust className='ml-1' /></span>
                    <span className='bg-blue-500 text-black px-2 rounded-lg text-sm flex items-center w-fit'>ReactJS <SiReact className='ml-1' /></span>
                    <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit'>ReduxToolkit <SiRedux className='ml-1' /></span>
                    <span className='bg-orange-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>PolkadotJS</span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/substrate_dex_orderbook" target='_blank' className='text-violet-600'>Blockchain L1</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://github.com/tule24/substrate-dex-fe" target='_blank' className='text-violet-600'>FE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://youtu.be/BvUq3oLQxXA" target='_blank' className='text-red-500'>Youtube</a>
                </p>
                <div className='mt-5'>
                    <p>This project took part in the hackathon held by Octopus Network and VBI </p>
                    <p className='text-justify font-semibold'>Main function: </p>
                    <ul className='list-disc ml-5'>
                        <li>Login by polkadot wallet</li>
                        <li>Issue, transfer token</li>
                        <li>SCreate tradepair</li>
                        <li>Make limit order, buy, sell, cancel order</li>
                    </ul>
                </div>
                <Slider images={dex} />
            </div>
            <div className="lg:hidden flex flex-col mb-10 w-full p-6 space-y-5 overflow-hidden rounded-lg my-shadow bg-zinc-100 dark:text-gray-100 dark:bg-zinc-800" >
                <h1 className='text-2xl font-semibold'>Skills</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-5'>
                    <div className='space-y-2 text-center'>
                        <p className='font-semibold text-violet-600 tracking-widest'>Programming language</p>
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
                    <div className='space-y-2 text-center'>
                        <p className='font-semibold text-violet-600 tracking-widest'>Testing</p>
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
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-5'>
                    <div className='space-y-2 text-center'>
                        <p className='font-semibold text-violet-600 tracking-widest'>Framework & Database</p>
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
                    <div className='space-y-2 text-center'>
                        <p className='font-semibold text-violet-600 tracking-widest'>Other</p>
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
        </div>
    )
}

export default Project
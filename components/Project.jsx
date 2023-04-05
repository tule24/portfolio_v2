import React from 'react'
import { SiSolidity, SiMongodb, SiRedux, SiIpfs, SiReact, SiParitysubstrate, SiRust, SiNodedotjs, SiGraphql, SiApollographql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Slider from './Slider'
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
        <div className='w-full space-y-10'>
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100">
                <h2 className='text-3xl tracking-wider font-semibold'>Social <span className='text-lg'>(FE, BE)</span></h2>
                <div className='flex flex-wrap mt-2'>
                    <span className='bg-blue-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReactJS <SiReact className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NodeJS <SiNodedotjs className='ml-1' /></span>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>MongoDB <SiMongodb className='ml-1' /></span>
                    <span className='bg-[#e535ab] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>GraphQL <SiGraphql className='ml-1' /></span>
                    <span className='bg-blue-400 text-black px-2 rounded-lg text-sm flex items-center w-fit'>Apollo <SiApollographql className='ml-1' /></span>
                </div>
                <p className='text-black dark:text-white font-semibold text-sm mt-2'>Source code: &nbsp;
                    <a href="https://github.com/tule24/Social_project_be" target='_blank' className='text-violet-600'>BE</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://github.com/tule24/Social_project_fe" target='_blank' className='text-violet-600'>FE</a>
                </p>
                <p className='text-black dark:text-white font-semibold text-sm'>Demo: &nbsp;
                    <a href="https://youtu.be/NI7Djuy6Ii8" target='_blank' className='text-red-500'>Youtube</a> | &nbsp;
                    <a href="https://nft-marketplace-tule.vercel.app/" target="_blank" className='text-green-500'>Live demo</a>
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
                        <li>Reponsive desktop, tablet</li>
                    </ul>
                </div>
                <Slider images={ecom} />
            </div>
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100">
                <h2 className='text-3xl tracking-wider font-semibold'>Ecommerce API <span className='text-lg'>(BE)</span></h2>
                <div className='flex flex-wrap mt-2'>
                    <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NodeJS <SiNodedotjs className='ml-1' /></span>
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
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100">
                <h2 className='text-3xl tracking-wider font-semibold'>Multisig Wallet <span className='text-lg'>(Smart Contract, BE, FE)</span></h2>
                <div className='flex flex-wrap mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                    <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                    <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReduxToolkit <SiRedux className='ml-1' /></span>
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
                        <li>Deposit, transfer, and receive ethers</li>
                        <li>Create one or multiple multi-sig wallets</li>
                        <li>Make voting when making a transaction or changing owners</li>
                        <li>Record history of the wallet</li>
                    </ul>
                </div>
                <Slider images={wallet} />
            </div>
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100">
                <h2 className='text-3xl tracking-wider font-semibold'>NFT Marketplace <span className='text-lg'>(Smart Contract, BE, FE)</span></h2>
                <div className='flex flex-wrap mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                    <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                    <span className='bg-[rgb(99,211,215)] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>IPFS <SiIpfs className='ml-1' /></span>
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
                        <li>Mint your NFT</li>
                        <li>Set NFT's price, listing or unlisting NFT</li>
                        <li>Buy & sell NFT</li>
                        <li>Manage your NFTs</li>
                    </ul>
                </div>
                <Slider images={nft} />
            </div>
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow bg-zinc-100">
                <h2 className='text-3xl tracking-wider font-semibold'>Dex Orderbook Exchange<span className='text-lg'>(Blockchain L1, FE)</span></h2>
                <div className='flex flex-wrap mt-2'>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Substrate <SiParitysubstrate className='ml-1' /></span>
                    <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Rust <SiRust className='ml-1' /></span>
                    <span className='bg-blue-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReactJS <SiReact className='ml-1' /></span>
                    <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReduxToolkit <SiRedux className='ml-1' /></span>
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
                        <li>Issue, transfer token</li>
                        <li>SCreate tradepair</li>
                        <li>Make limit order, buy, sell, cancel order</li>
                    </ul>
                </div>
                <Slider images={dex} />
            </div>
        </div>
    )
}

export default Project
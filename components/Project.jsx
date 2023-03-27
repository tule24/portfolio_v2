import React from 'react'
import { SiSolidity, SiMongodb, SiIpfs, SiCsharp, SiReact, SiParitysubstrate, SiNodedotjs, SiTailwindcss, SiRust, SiRedux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

function Project() {
    return (
        <div className='w-full'>
            <div className="flex flex-col w-full p-6 overflow-hidden rounded-lg my-shadow dark:bg-zinc-800 dark:text-gray-100">
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
                    <p className='text-justify'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                </div>
            </div>
        </div>
    )
}

export default Project
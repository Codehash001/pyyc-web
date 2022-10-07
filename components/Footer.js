import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer () {
    return(
      <div className='flex md:justify-evenly items-center justify-between w-full h-20 px-2 2xl:px-16 bg-black my-4'>
	<ul>
            <li><a href="https://Opensea.io" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Opeansea</a></li>
            <li><a href="https://twitter.com" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Twitter</a></li>
	</ul>
	
            <Link href="/"><Image src="/Logo.png" height='80px' width="80px" className='cursor-pointer'/></Link>
	<ul>
            <li><a href="https://etherscan.io" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Etherscan</a></li>
            <li><a href="https://discord.gg" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Discord</a></li>
	</ul>	
      </div>
    )
}

export default Footer
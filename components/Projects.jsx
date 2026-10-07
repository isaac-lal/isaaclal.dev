import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


// import WeatherApp_Img from '../public/assets/projects/weatherapp.jpg';
// import BlogPost_IMG from '../public/assets/projects/blogpost.jpg';
// import BillSplitter_IMG from '../public/assets/projects/billsplitter.jpg';
// import EcommerceDashboard_IMG from '../public/assets/projects/ecommercedashboard.jpg';
import WIP_IMG from '../public/assets/projects/wip.png';

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
           <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#00bfff] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={WIP_IMG}
        alt='/'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          Work In Progress
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React, TailwindCSS</p>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Demo
          </p>
        </Link>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Code
          </p>
        </Link>
      </div>
    </div>
           <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#00bfff] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={WIP_IMG}
        alt='/'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          Work In Progress
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React, TailwindCSS</p>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Demo
          </p>
        </Link>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Code
          </p>
        </Link>
      </div>
    </div>
           <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#00bfff] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={WIP_IMG}
        alt='/'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          Work In Progress
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React, TailwindCSS</p>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Demo
          </p>
        </Link>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Code
          </p>
        </Link>
      </div>
    </div>
     <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#00bfff] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={WIP_IMG}
        alt='/'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          Work In Progress
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React, TailwindCSS</p>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Demo
          </p>
        </Link>
        <Link href="https://www.isaaclal.dev/">
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Code
          </p>
        </Link>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

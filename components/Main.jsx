import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div
      id='home'
      className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-100'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-400'>
            Hi, I&#39;m <span className='text-[#00bfff]'> Isaac</span>
          </h1>
          <h1 className='py-2 text-gray-400'>A Web Developer</h1>
          <p className='py-4 text-gray-100 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/isaac-lal/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-6 text-xl text-gray-100 hover:text-[#00bfff] cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/isaac-lal'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-6 text-xl text-gray-100 hover:text-[#00bfff] cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:isaaclal124@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-6 text-xl text-gray-100 hover:text-[#00bfff] cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://drive.google.com/file/d/1t49qY5hB5HiJJeOpuKQQ4UUfWnGKEKsB/view?usp=sharing'>
              <div className='rounded-full shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-6 text-xl text-gray-100 hover:text-[#00bfff] cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
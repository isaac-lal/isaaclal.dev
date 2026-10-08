import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../public/assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#000000');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-md shadow-gray-500 z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={Logo}
              alt='/'
              width='100'
              height='100'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm text-gray-100 uppercase hover:text-[#00bfff] hover:border-b border-[#00bfff] ease-in duration-100'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm text-gray-100 uppercase hover:text-[#00bfff] hover:border-b border-[#00bfff] ease-in duration-100'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm text-gray-100 uppercase hover:text-[#00bfff] hover:border-b border-[#00bfff] ease-in duration-100'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm text-gray-100 uppercase hover:text-[#00bfff] hover:border-b border-[#00bfff] ease-in duration-100'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm text-gray-100 uppercase hover:text-[#00bfff] hover:border-b border-[#00bfff] ease-in duration-100'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden'>
            <AiOutlineMenu
              size={25}
              className='cursor-pointer text-gray-100'
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={Logo}
                    width='64'
                    height='64'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] ease-in duration-200 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='flex flex-col items-center text-center uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='pt-4 inline-block border-b border-transparent text-gray-100 hover:text-[#00bfff] hover:border-[#00bfff] ease-in duration-100'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='pt-4 inline-block border-b border-transparent text-gray-100 hover:text-[#00bfff] hover:border-[#00bfff] ease-in duration-100'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='pt-4 inline-block border-b border-transparent text-gray-100 hover:text-[#00bfff] hover:border-[#00bfff] ease-in duration-100'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='pt-4 inline-block border-b border-transparent text-gray-100 hover:text-[#00bfff] hover:border-[#00bfff] ease-in duration-100'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li
                  onClick={() => setNav(false)}
                  className='pt-4 inline-block border-b border-transparent text-gray-100 hover:text-[#00bfff] hover:border-[#00bfff] ease-in duration-100'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#00bfff] text-center'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/isaac-lal/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full text-xl text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/isaac-lal'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full text-xl text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='mailto:isaaclal124@gmail.com'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full text-xl text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='https://drive.google.com/file/d/1t49qY5hB5HiJJeOpuKQQ4UUfWnGKEKsB/view?usp=sharing'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full text-xl text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

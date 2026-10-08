import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Contact
        </p>
        <h2 className='py-4 text-gray-400'>Get In Touch</h2>
        <div className='col-span-3 w-full h-auto shadow-lg shadow-gray-100 hover:shadow-[#00bfff] rounded-xl lg:p-4  hover:scale-105 ease-in duration-300'>
          <div className='p-4'>
            <form
              action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
              method='POST'
              encType='multipart/form-data'>
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm text-gray-100 py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex bg-[#121212] text-gray-100 border-gray-600'
                    type='text'
                    name='name'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm text-gray-100 py-2'>Phone Number</label>
                  <input
                    className='border-2 rounded-lg p-3 flex bg-[#121212] text-gray-100 border-gray-600'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 flex bg-[#121212] text-gray-100 border-gray-600'
                  type='email'
                  name='email'
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 py-2'>Subject</label>
                <input
                  className='border-2 rounded-lg p-3 flex bg-[#121212] text-gray-100 border-gray-600'
                  type='text'
                  name='subject'
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 py-2'>Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 flex bg-[#121212] text-gray-100 border-gray-600'
                  rows='10'
                  name='message'></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12'>
        <Link href='/'>
          <a>
            <div className='rounded-full text-gray-100 hover:text-[#00bfff] shadow-lg shadow-gray-100 hover:shadow-[#00bfff] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import About_IMG from '../public/assets/about.jpg';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#00bfff]'>
            About
          </p>
          <h2 className='py-4 text-gray-400'>Who I Am</h2>
          <p className='py-2 text-gray-100'>
            I started learning to code during my senior year of high school,
            when I took an Introduction to Programming course and learned
            Python. The course was extremely fun and made me want to learn more
            about coding. In college, I learned C++ and worked on systems-level
            projects through the terminal, which helped build my coding
            foundation. Afterward, I began learning web development with HTML,
            CSS, and JavaScript, creating a couple of basic static-site
            projects.
          </p>
          <p className='py-2 text-gray-100'>
            When I moved on to React, it really made me want to pursue web
            development. I had a lot of fun learning how to manipulate the DOM
            and create impressive, interactive websites. I complemented React
            with the MERN stack, MongoDB, Express, and Node.js, to build
            projects that combined front-end and back-end development. I then
            learned additional technologies, such as Next.js and Tailwind CSS.
          </p>
          <p className='py-2 text-gray-100'>
            This gave me a better understanding of the web as a whole and how
            its components work together in each project to communicate between
            the client and server. These projects helped me understand how the
            web interacts with users and how projects function within an
            environment. They have definitely inspired me to continue pursuing
            web development and creating even more interactive websites!
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-lg shadow-gray-100 hover:shadow-[#00bfff] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src={About_IMG}
            className='rounded-xl'
            alt='/'
            width={756}
            height={1008}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

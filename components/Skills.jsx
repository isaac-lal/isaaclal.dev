import Image from 'next/image';
import React from 'react';
import HTML_IMG from '../public/assets/skills/html.png';
import CSS_IMG from '../public/assets/skills/css.png';
import JavaScript_IMG from '../public/assets/skills/javascript.png';
import TypeScript_IMG from '../public/assets/skills/typescript.png';
import React_IMG from '../public/assets/skills/react.png';
import Mongo_IMG from '../public/assets/skills/mongo.png';
import Postgres_IMG from '../public/assets/skills/postgres.png';
import Node_IMG from '../public/assets/skills/node.png';
import Express_IMG from '../public/assets/skills/express.png';
import Next_IMG from '../public/assets/skills/next.png';
import Tailwind_IMG from '../public/assets/skills/tailwind.png';
import Git_IMG from '../public/assets/skills/git.png';

const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Skills
        </p>
        <h2 className='py-4 text-gray-400'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={HTML_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={CSS_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={JavaScript_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={TypeScript_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={React_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Mongo_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Postgres_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Node_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Express_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Next_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Tailwind_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 hover:shadow-[#00bfff] text-gray-100 hover:text-[#00bfff] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Git_IMG}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
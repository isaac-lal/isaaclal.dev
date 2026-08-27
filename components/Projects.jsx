import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import weatherAppImg from '../public/assets/projects/weatherApp.jpg';
import entertainmentSearchImg from '../public/assets/projects/entertainmentSearch.jpg';
import billSplitterImg from '../public/assets/projects/billSplitter.jpg';
import passwordGeneratorImg from '../public/assets/projects/passwordGenerator.jpg';
import ProjectItem from './ProjectItem';

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
          <ProjectItem
            title='Property Finder'
            backgroundImg={weatherAppImg}    
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={entertainmentSearchImg}
            tech='React JS'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={billSplitterImg}
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={passwordGeneratorImg}
            tech='HTML, CSS, JavaScript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

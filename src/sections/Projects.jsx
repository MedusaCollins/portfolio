import { profilePic } from '../import.js';
import React, { useState} from 'react';
import { motion} from 'framer-motion';


const Item = (props) => {
  return (
    <section className='flex items-center'>
      <div className='sticky top-0 w-1/2 h-[70vh] bg-red-400 p-11'>
        <div className='flex flex-col justify-between h-full font-semibold tracking-wide'>
          <div className='text-3xl'>0{props.index + 1}</div>
          <div className='space-y-8'>
            <p className='text-7xl font-bold'>{props.project.name}</p>
            <div className='flex'>
              {props.project.stack.map((item, index) => (
                <span key={index} className='mx-1 flex flex-col bg-[#16E0BD] text-[#16312d] p-2 rounded-full'>
                  {item}
                </span>
              ))}
            </div>
            <p>{props.project.description}</p>
          </div>
          <div>
            <p>Github: {props.project.links.github}</p>
            <p>Live: {props.project.links.live}</p>
          </div>
        </div>
      </div>
      <div className='h-[1000px] w-1/2 grid grid-cols-2 items-center place-items-center bg-green-500'>
        {props.project.image.map((item, index) => (
          <div key={index} className='w-32' style={{ backgroundColor: '#16E0BD' }}>
          <motion.img
            // ref={ref}
            src={item}
            alt={index}
            className='w-full'
            style={{
              // translateY: inView ? props.scrollPosition : 0
              translateY: props.scrollPosition - props.index*-170
            }}
          />
        </div>
        ))}
      </div>
    </section>
  );
};

export default function Projects() {
  const [info] = React.useState([
    {
      project: {
        name: 'FR Design system',
        description: "Multi brand e-commerce design system for websites and native mobile applications.",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [profilePic, profilePic, profilePic, profilePic],
        links: { github: 'www.github.com/medusacollins/frdesginsystem', live: 'test' }
      }
    },
    {
      project: {
        name: 'LASHIC',
        description: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [profilePic, profilePic, profilePic, profilePic],
        links: { github: 'www.github.com/medusacollins/lashic', live: 'test' }

      }
    },
    {
      project: {
        name: 'Eyep',
        description: "Single purpose website to show your IP address and location.",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [profilePic, profilePic, profilePic, profilePic],
        links: { github: 'www.github.com/medusacollins/frdesginsystem', live: 'test' }
      }
    },
    {
      project: {
        name: 'sağdaki yazı 4',
        description: "",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [profilePic, profilePic, profilePic, profilePic],
        links: { github: 'www.github.com/medusacollins/frdesginsystem', live: 'test' }
      }
    },
    {
      project: {
        name: 'sağdaki yazı 5',
        description: "",
        stack: ['react', 'node', 'express', 'mongoDB', 'tailwindcss'],
        image: [profilePic, profilePic, profilePic, profilePic],
        links: { github: 'www.github.com/medusacollins/frdesginsystem', live: 'test' }
      }
    }
  ]);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useState(() => {
    const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {info.map((project, index) => (
        <div key={index} className='flex flex-col mb-24'>
          <Item project={project.project} index={index} scrollPosition={-scrollPosition / 10} />
        </div>
      ))}
    </div>
  );
}
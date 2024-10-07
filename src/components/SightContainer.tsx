"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import { Sight } from 'Resources';

import SightImage from './SightImage';

interface SightProp {
    sight: Sight;
    index: number;
}

const SightContainer: React.FC<SightProp> = ({ sight, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isImageFirst = index % 2 === 0;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='sight'>
        
        <div className='sight__container' ref={containerRef}>
        {/* {isImageFirst ? <SightImage img={sight.img}/> : null}  */}
          <div className='sight__text'>
            <h2  className='sight__title'>{sight.name}</h2>
            <p className='sight__p'>
            {sight.info}
            </p>
            <Link href={sight.location}>
            <button className='button submit'>Google Maps</button>
            </Link>
            
            {/* <img src={sight.url} alt={sight.name} /> */}
          </div>
          {/* {isImageFirst ? null : <SightImage img={sight.img}></SightImage>} */}
          
        </div>
        
    </div>
  );
};
  
export default SightContainer;
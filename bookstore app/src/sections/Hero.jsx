import { useState } from "react";

import { books, statistics } from "../constants";
import { Button, BookCard } from "../components";
import { bigBook1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigBookImg, setBigBookImg] = useState(bigBook1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Latest collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Book</span> Store
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          All your favourite books under one roof !! New & preloved titles in Store.
        </p>

        <Button label='Rent now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigBookImg}
          alt='book colletion'
          width={610}
          height={1000}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-10 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {books.map((image, index) => (
            <div key={index}>
              <BookCard
                index={index}
                imgURL={image}
                changeBigBookImage={(book) => setBigBookImg(book)}
                bigBookImg={bigBookImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
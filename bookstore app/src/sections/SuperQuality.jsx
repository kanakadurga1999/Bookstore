import { Link } from "react-router-dom";
import { book8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Books
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          We provide express shipping for 27000+ Indian pin codes. WhatsApp customer support to resolve issues at the earliest.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Link
          to={'/about'}>
          <Button label='View details' />
          </Link>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={book8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
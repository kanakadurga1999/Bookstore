import { Navbar, TextInput,Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { headerLogo } from "../assets/images";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { navLinks } from "../constants/index";

const Header = () => {
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
       <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[150px] h-[px]'
          />
      </Link>
      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          
        >
           <FaMoon />
        </Button>
        
         
          <Link to='/signin'>
            <Button gradientDuoTone='pinkToOrange' outline>
              Sign In
            </Button>
          </Link>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
         <Navbar.Link >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link >
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link >
          <Link to='/books'>Books</Link>
        </Navbar.Link> 
       
         {/* <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.path}>
              <a
                href={item.link}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.path}
              </a>
            </li>
          ))}
        </ul> */}
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
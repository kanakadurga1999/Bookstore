import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

export default function PostCard({ post }) {
  return (


    

    // <Card
    //   className="max-w-sm "
    //   imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
    //   // imgSrc={post.image}
    // >
    //   <Link to={`/post/${post.slug}`}>
    //      <img
    //        src={post.image}
    //        alt='post cover'
    //        className='h-[160px]  group-hover:h-[160px] transition-all duration-300 z-20 '
    //      />
    //    </Link>
    //   <a href="#">
    //     <h5 className="text-xl font-semibold text-gray-900 dark:text-white  truncate">
    //       {post.title}
    //     </h5>
    //   </a>
    //   <div className="mb-5 mt-2.5 flex items-center">
    //     <svg
    //       className="h-5 w-5 text-yellow-300"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    //     </svg>
    //     <svg
    //       className="h-5 w-5 text-yellow-300"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    //     </svg>
    //     <svg
    //       className="h-5 w-5 text-yellow-300"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    //     </svg>
    //     <svg
    //       className="h-5 w-5 text-yellow-300"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    //     </svg>
    //     <svg
    //       className="h-5 w-5 text-yellow-300"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    //     </svg>
    //     <span className="ml-3 mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-green-200 dark:text-cyan-800">
    //       5.0
    //     </span>
    //   </div>
    //   <div className="flex items-center justify-between ">
    //     {/* <span className="text-xl font-bold text-gray-900 dark:text-white">$2.00</span> */}
    //     <button
         
    //       className="  px-1 py-1  text-center text-sm  text-green-500 font-medium   "
    //     >
    //       Available
    //     </button>
    //     <Link 
    //     to={'/create-listing'}
    //     className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-cyan-800">
    //        Rent Now
    //       </Link>
       

    //   </div>
    // </Card>
    <Card className="max-w-sm h-full ">
      <Link to={`/post/${post.slug}`}>
      <div className="h-52 overflow-hidden"> {/* Set fixed height for image container */}
          <img
            src={post.image}
            alt="post cover"
            className=" object-cover  "
          />
        </div>
      </Link>
     
        <a href="#" className="block mt-2">
          <h5 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
            {post.title}
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
          <span className="ml-3 mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-green-200 dark:text-cyan-800">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button className="px-1 py-1 text-center text-sm text-green-500 font-medium">
            {post.status}
          </button>
          <Link 
            to={'/create-listing'}
            className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-cyan-800"
          >
            Rent Now
          </Link>
        </div>
      
    </Card>
 





  )
}
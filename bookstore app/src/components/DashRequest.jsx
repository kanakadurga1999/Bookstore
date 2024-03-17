import { Table } from 'flowbite-react';
import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function DashRequest(){
    const {currentUser} = useSelector((state)=>state.user)
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings,setUserListings]= useState([]);
    
    
    

    
        const handleShowListings = async () => {
            try {
              setShowListingsError(false);
              const res = await fetch(`/api/user/listings/${currentUser._id}`);
              const data = await res.json();
              if (data.success === false) {
                setShowListingsError(true);
                return;
              }
        
              setUserListings(data);
            } catch (error) {
              setShowListingsError(true);
            }
          };
          const handleListingDelete = async (listingId) => {
            try {
              const res = await fetch(`/api/listing/delete/${listingId}`, {
                method: 'DELETE',
              });
              const data = await res.json();
              if (data.success === false) {
                console.log(data.message);
                return;
              }
              alert('Request Deleted successfully!');
        
              setUserListings((prev) =>
                prev.filter((listing) => listing._id !== listingId)
              );
            } catch (error) {
              console.log(error.message);
            }
        
        };
        
    return(
        <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500' >
        
       {!currentUser.isAdmin &&  (
      <button onClick={handleShowListings}  className='font-medium text-gray-900 dark:text-white w-full'>
        Show Requests
      </button>
      )}
      <p className='text-red-700 mt-5'>
        {showListingsError ? 'Error showing requests' : ''}
      </p>
     
      {userListings && userListings.length > 0 && (
        
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Book image</Table.HeadCell>
              <Table.HeadCell>Book title</Table.HeadCell>
              
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userListings.map((listing) => (
              <Table.Body className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(listing.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  
                  <Table.Cell className='font-medium text-gray-900 dark:text-white'>
                    
                      {listing.name}
                    
                  </Table.Cell>
                  <Table.Cell>{listing.author}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => handleListingDelete(listing._id)}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-listing/${listing._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
           
        </>
      )}
       
    </div>

    )
}
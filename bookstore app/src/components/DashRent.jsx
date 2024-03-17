import { Table, TableHead } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const DashRent = () => {
    const {currentUser} = useSelector((state) =>state.user);
    const [userListings, setUserListings] = useState([]);
    const [showMore, setShowMore] = useState(true);

    console.log(userListings);

    useEffect(() =>{
        const fetchListings = async () =>{
            try {
                const res = await fetch('/api/listing/getlistings')
                const data = await res.json()
                if(res.ok){
                    setUserListings(data.listings);
                    if(data.listings.length < 9){
                        setShowMore(false);
                    }
                }
                
            } catch (error) {
                console.log(error.message)
                
            }
        };
        if(currentUser.isAdmin) {
            fetchListings();
        }
    }, [currentUser._id]);

    const handleShowMore = async () => {
        const startIndex = userListings.length;
        try {
          const res = await fetch(
            `/api/listing/getlistings?${startIndex}`
          );
          const data = await res.json();
          if (res.ok) {
            setUserListings((prev) => [...prev, ...data.listings]);
            if (data.listings.length < 9) {
              setShowMore(false);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
       {currentUser.isAdmin && userListings.length > 0 ?(
        <>
        <Table hoverable className='shadow-md'>
            <Table.Head>
                <Table.HeadCell>Date Updated</Table.HeadCell>
                <Table.HeadCell>Book Name</Table.HeadCell>
                <Table.HeadCell>Author</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Library Id</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            {userListings.map((listing) =>(
                <Table.Body className='divide-y'>
                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                            {new Date(listing.updatedAt).toLocaleDateString()}
                        </Table.Cell>
                        <Table.Cell className='font-medium text-gray-900 dark:text-white' >{listing.name}</Table.Cell>
                        <Table.Cell>{listing.author}</Table.Cell>
                        <Table.Cell>{listing.nameOfUser}</Table.Cell>
                        <Table.Cell>{listing.idNumber}</Table.Cell>
                        <Table.Cell>
                            <span className='font-medium text-green-500 hover:underline cursor-pointer'>Approved</span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            ))}
        </Table>
        {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
       ):(
        <p>You have no requests yet!</p>
       )
    }
    </div>
  )
}

export default DashRent
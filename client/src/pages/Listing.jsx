// 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Button, Table } from 'flowbite-react';




export default function Listing() {
 
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      
      {listing && !loading && !error && (
        <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
         
          
          
          
          <Table hoverable className='shadow-md'>
            <Table.Head>
              
              <Table.HeadCell>Book Name</Table.HeadCell>
              <Table.HeadCell>Author</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
           
                <Table.Body key={listing._id} className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    
                    <Table.Cell className='font-medium text-gray-900 dark:text-white'>{listing.name}</Table.Cell>
                    <Table.Cell >{listing.author}</Table.Cell>
                    <Table.Cell className=' text-green-700 font-medium'>Rented</Table.Cell>
                  </Table.Row>
                </Table.Body>
              
          </Table>
        </div>
      )}
    </main>
  );
}
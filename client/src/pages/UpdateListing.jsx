import { useState , useEffect} from 'react';


import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    
    name: '',
    author:'',
    idNumber:'',
    nameOfUser:'',
    contactNumber:''
    });
  
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formData);

  useEffect(() => {
    const fetchListing = async () => {
      const listingId = params.listingId;
      const res = await fetch(`/api/listing/get/${listingId}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
    };

    fetchListing();
  }, []);

  

 
  

  const handleChange = (e) => {
     if (
      e.target.type === 'number' ||
      e.target.type === 'text' 
      
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/listing/update/${params.listingId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
    //   navigate(`/listing/${data._id}`);
    alert('Updated successfully!');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Update Request
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name of Book'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
            onChange={handleChange}
            value={formData.name}
          />
          
          <input
            type='text'
            placeholder='Author'
            className='border p-3 rounded-lg'
            id='author'
            required
            onChange={handleChange}
            value={formData.author}
          />
          <input
            type='number'
            placeholder='Library ID Number'
            className='border p-3 rounded-lg'
            id='idNumber'
            required
            onChange={handleChange}
            value={formData.idNumber}
          />
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='nameOfUser'
            required
            onChange={handleChange}
            value={formData.nameOfUser}
          />
          <input
            type='number'
            placeholder='Contact Number'
            className='border p-3 rounded-lg'
            id='contactNumber'
            required
            onChange={handleChange}
            value={formData.contactNumber}
          />
          
          
        
         
         
          <button
            // disabled={loading || uploading}
            className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Updating...' : 'Update '}
          </button>
          {error && <p className='text-red-700 text-sm'>{error}</p>}
        </div>
      </form>
    </main>
  );
}
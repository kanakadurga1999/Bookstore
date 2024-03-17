import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    

    <div className='w-full '>
    <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
      <img
        src={post.image}
        width={300}
        height={200}
        className=' mt-10 p-3 rounded-lg'
        style={{ maxWidth: '100%', height: '100%' }}
       />
      <div className='p-2'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
         {post && post.title}
       </h1>
       <Link
         to={`/search?category=${post && post.category}`}
         className='self-center mt-5'
       >
         <Button color='gray' pill size='xs'>
           {post && post.category}
         </Button>
       </Link>
        {/* <h2 className='text-lg mb-3 font-bold'>
          {post.title}
        </h2> */}
        
        <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs '>
        <span className='italic dark:text-white'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content  '
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>ISBN Number:</span>
          {post.isbn}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Publication Year:</span>
          {post.year}
        </p>
        <CommentSection postId={post._id} />
        
      </div>
     
      
      
    </div>
    <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent books</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    
  </div>
  );
}
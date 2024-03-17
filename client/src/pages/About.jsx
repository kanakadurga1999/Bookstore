export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
           Who We Are
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Bookart is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading.
            </p>

            <h2>
              A Message From Our Co-Founder
            </h2>

            <p>
            When I was in second grade, I discovered the Hardy Boys series. Ever since, I've loved to read — both for fun and to improve my mind. And I'm always looking for the next great book.

One afternoon while I was scanning a friend's bookshelf for ideas, it struck me: when I want to know what books to read, I'd rather turn to a friend than any random person or bestseller list.

So I decided to build a website – a place where I could see my friends' bookshelves and learn about what they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote the code. We started in my living room, motivated by the belief that there was a better way to discover and discuss good books, and that we could build it.

Bookart is that site. It is a place where you can see what your friends are reading and vice versa. You can create "bookshelves" to organize what you've read (or want to read). You can comment on each other's reviews. You can find your next favorite book. And on this journey with your friends you can explore new territory, gather information, and expand your mind. 

Knowledge is power, and power is best shared among readers. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
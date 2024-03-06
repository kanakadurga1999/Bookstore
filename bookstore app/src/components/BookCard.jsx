const BookCard = ({ imgURL, changeBigBookImage, bigBookImg }) => {
    const handleClick = () => {
      if (bigBookImg !== imgURL.bigBook) {
        changeBigBookImage(imgURL.bigBook);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigBookImg === imgURL.bigBook
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover  sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='book colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default BookCard;
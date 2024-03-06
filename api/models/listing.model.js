import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    isbnNumber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      
    },
    description: {
        type: String,
       
      },
    languages: {
        type: String,
       
      },
    publicationYear: {
        type: Number,
        
      },
    availabilityStatus:{
        type: Boolean,
        
    },
    rentalPeriod: {
        type: Number,
        
      },
    
    imageUrls: {
      type: Array,
      
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
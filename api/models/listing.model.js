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
    
    idNumber: {
      type: Number,
      required: true,
    },
    nameOfUser: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
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
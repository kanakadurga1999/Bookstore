import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigBook1, bigBook2, bigBook3, customer1, customer2, book4, book5, book6, book7, thumbnailBook1, thumbnailBook2, thumbnailBook3 } from "../assets/images";

export const navLinks = [
    // { href: "#home", label: "Home" },
    // { href: "#about-us", label: "Books" },
    // { href: "#products", label: "Sign Up" },
    // { href: "#contact-us", label: "Contact Us" },
    { link: "Home", path: "Home" },
    { link: "Books", path: "Books" },
    { link: "Sign UP", path: "SignUp" },
    { link: "Rent your book", path: "Rentbook" },
];

export const books = [
    {
        thumbnail: thumbnailBook1,
        bigBook: bigBook1,
    },
    {
        thumbnail: thumbnailBook2,
        bigBook: bigBook2,
    },
    {
        thumbnail: thumbnailBook3,
        bigBook: bigBook3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: book4,
        name: "Do It Today",
        price: "$2.20",
    },
    {
        imgURL: book5,
        name: "Getting Started",
        price: "$2.20",
    },
    {
        imgURL: book6,
        name: "The Mountain is You",
        price: "$2.20",
    },
    {
        imgURL: book7,
        name: "Read People Like A Book",
        price: "$2.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Do It today", link: "/" },
            { name: "Read people like a book", link: "/" },
            { name: "Getting started", link: "/" },
            { name: "Atomic habits", link: "/" },
            { name: "The mountain is you", link: "/" },
            { name: "Ikigai", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@bookart.com", link: "mailto:customer@bookart.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
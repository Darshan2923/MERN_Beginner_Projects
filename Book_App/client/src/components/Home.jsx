import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const result = await axios.get("http://localhost:3001/books");
                setBookData(result);
                console.log(result);
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchBookData();
    }, [])

    return (
        <div>
            <h1 className="text-center">Welcome to the home page</h1>
            <ul>
                {bookData.map((book) => (
                    <li key={book._id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <img src={book.bookImg} alt="book-image" />
                        <p>{book.price} (in rupees)</p>
                    </li>
                ))};
            </ul>
        </div>
    )
}

export default Home
import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
    const [blogs, setBlogs] = useState({
        title: "",
        author: "",
        content: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogs(prevState => ({ ...prevState, [name]: value }))
    }
    const onSubmit = async () => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/createBlog", blogs);
            alert('Blog created successfully');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>Create a New Blog Post</h1>
            <form action="/submit-post" method="POST" onSubmit={onSubmit}>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required onChange={handleChange} />
                <br /><br />

                <label for="author">Author:</label>
                <input type="text" id="author" name="author" required onChange={handleChange} />
                <br /><br />

                <label for="content">Content:</label>
                <textarea id="content" name="content" rows="6" required onChange={handleChange}></textarea>
                <br /><br />

                <input type="submit" value="Submit Post" />
            </form>
        </>
    )
}

export default CreateBlog
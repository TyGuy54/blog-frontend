import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const HomePage = () => {
    const [post, setPost] = useState('');

    useEffect(() => {
        const make_get_request = async () => {
            axios.get("http://127.0.0.1:8000/view_articals").then((response) => {
                setPost(response.data)
            })
        }

        make_get_request()
        
    }, []);

    if (!post) return null

    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Welcome to the Ty-Blog</h1>
                <h1>where you can find everything Programming</h1>

                <p>{post[0].title}</p>
                <p>{post[0].content}</p>
            </div>
        </>
    )
}
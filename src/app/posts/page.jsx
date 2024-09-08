import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';


const page = async() => {
    
    const postData = await getPosts()

    return (
        <div className=''>
            <h3>All Posts: {postData.length}</h3> 
            <div className='grid grid-cols-4 gap-6'>
                {
                    postData.slice(0,20)?.map(({title, id, body}) => (
                        <div key={id} className='border-2 p-6'>
                                <h3>Title: {title}</h3>
                                <p>Description: {body}</p>
                                <button className='bg-red-500 p-3'><Link href={`/posts/${id}`}>See Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;
import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import axios from 'axios'
import { PostType } from '../../Utility/PostType'

const Feed = () => {
    
    let [posts, setPosts] = useState([{} as PostType])
    let [loading, load] = useState(true)

    useEffect(() => {
        const url = 'http://localhost:5500/api/posts'

        axios.get(url).then((response) => {
            console.log('response: ' + response)
            setPosts(response.data.body)
            load(false)
        }).catch((err) => {
            console.error('Error: ', err)
        })
    }, [])
    if(loading) {
        return (
            <div>loading</div>
        )
    } else {
        return (
        <>
            {posts.map((post: PostType, index: number) =>
                <Post post={post} key={index}/>
            )}
        </>)
    }
}

export default Feed
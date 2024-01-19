import React, { useEffect, useState } from 'react'
import { PostType } from '../../Utility/PostType'
const Post = (props: {post: PostType}) => {
    let [release, setRelease] = useState({} as any)
    let [loading, load] = useState(true)
    let [coverArt, setCoverArt] = useState('')

    const mburl = "https://musicbrainz.org/ws/2/"
    const coverarturl = "https://coverartarchive.org/release/"

    useEffect(() => {
        fetch(`${mburl}release-group/${props.post.mbid}?inc=aliases%2Bartist-credits%2Breleases&fmt=json`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setRelease(result)
                //check individual releases for cover art
                // for(let i = 0; i < result.releases.length; i++) {
                //     fetch(`${mburl}release/${result.releases[i].id}/cover-art`, 
                //         // {headers: {"Content-Type": "application/json",
                //         // "Access-Control-Allow-Origin": "*",
                //         // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
                //         // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
                //         // }}
                //         )

                //         .then((response) => response.json())
                //         .then((result) => {
                //             console.log("cover art json: ")
                //             console.log(result)
                //             setCoverArt(result.images.image)
                    // })
                //}
            })
    }, [])


    
    return (
        <div className='rounded-3xl bg-slate-100'>
            <div className='flex flex-col items-start p-5'>
            <h2 className='text-2xl'>username</h2>
            <div className=''>{props.post.body}</div>
            <div>{release.title}</div>
            <div>by {release['artist-credit'][0].name}</div>
            </div>

            {/* Album cover */}
            <div className=''></div>
        </div>
    )
}

export default Post
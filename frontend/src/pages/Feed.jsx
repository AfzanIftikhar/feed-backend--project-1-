import  {useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Feed = () => {
    const [ posts, setPosts] = useState([])
    
useEffect(() => {
   
    
    axios.get('http://localhost:3000/posts')
    .then((response)=>{
        console.log(response)
        setPosts(response.data.posts)
        
    }).catch((error)=>{
        console.error('Error fetching posts:', error)
    })
  
}, [])

  return (
    <div className='feed'>

        <div className='feed-header'>
            <h1>Feed</h1>
            <Link to="/CreatePost">Create Post</Link>
        </div>
    {posts.length > 0 ? (
        posts.map((post) => (
            <div key={post._id} className='post'>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>
        ))
    ) : (
        <p>No posts available.</p>
    )}
    </div>
  )
}

export default Feed

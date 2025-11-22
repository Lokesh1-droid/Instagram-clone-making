import {useState,useEffect} from 'react'
export default function Posts(){
  const [posts,setpost] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/posts').then((data)=>{
      console.log(data);
      return data.json();
    
      
    })
    
    .then((data)=>{setpost(data)})
    .catch((error)=>{console.log(error)})
  },[])
  
  return(
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
      <div>
        {posts.map((post)=>(
        <div className="my-3" key={post.id}>
          <div className="d-flex">
            <img className="db rounded-circle" src={post.profilePic} alt="profile-pic"/>
            <h4>{post.username}</h4>
          </div>
          <img src={post.image} className="post-img"/>
          <div>
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <div>
            <b>{post.likes} likes</b>
          </div>
          <p>{post.caption}</p>
      </div>
      ))}
        </div>
        ):(
        <div>
          Loading Posts
        </div>
        )}
      
       
      
    </div>
    
    
  )
}
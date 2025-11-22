import { useEffect,useState } from 'react'
export default function Stories(){
  const [Stories,setStories] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/stories')
    .then(res => res.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
  },[])
  if(!Stories){
    return(
      <p>Loading.....</p>
      )
  }
  return(
    <div className="story d-flex ms-auto">
      {Stories.length > 0 ? (
        Stories.map((story)=>(
         <div key={story.id} className="mx-1">
           <div className="gradient-border">
          <img src={story.user.profilePic} alt="db" className="story-db rounded-circle"/>
          </div>
          <p className="text-truncate" style={{width:"55px"}}>{story.user.username}</p>
         </div>
      ))
      ):(
      <p>Loading...</p>
      )}
    </div>
    )
}
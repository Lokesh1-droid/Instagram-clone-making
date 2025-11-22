import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function ViewStory(){
  const {id} = useParams();
  const [story,setstory] = useState(null);
  useEffect(()=>{
    
  })
  return(
    <div>ViewStory</div>
    )
}
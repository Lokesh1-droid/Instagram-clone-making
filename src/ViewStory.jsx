import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function ViewStory(){
  const {id} = useParams();
  const [story,setstory] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:3000/ststories
    .then((data)=>{data.json()})
    .then((data)=>{setstory(data)})
  },[])
  return(
    <div>ViewStory</div>
    )
}
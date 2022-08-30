import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const UserOrderCard = ({ id,name,qual,location,address}) => {
  const [status,setStatus]=useState('')
  // const userName = useSelector(state=>state.userInfo.userName)
  

const showAddModal=()=>{
  console.log('clcked')
}
const [longString,setLongString]=useState(true);
  const truncate=(string,n)=>{
      return longString? string.substr(0,n-1)+'...': string;
  }

const handleOnClick=()=>{
  
}
  return (
    <Link to={`/${id}`}><div onClick={handleOnClick} className={`user-order-card `}>
      <p>{name}</p>
      <p>{location}</p>
      <p>{qual}</p>
      <p>{truncate(address,10)} <span>see more</span></p>
       
      
    </div></Link>
  )
}

export default UserOrderCard
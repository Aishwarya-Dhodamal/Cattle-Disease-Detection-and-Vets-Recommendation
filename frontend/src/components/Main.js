import React ,{ useState}from 'react'
import addbillimage from '../assets/images/Add files-rafiki.png'
import viewbillimage from '../assets/images/Add tasks-pana.png'
import managebills from '../assets/images/Credit card-cuate.png'
import PlateCard from './PlateCard'
import Modal from './Modal'
import UserOrderCard from './UserOrderCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBils } from '../actions'
const Main = () => {
  const [activeIndex,setActiveIndex]=useState(0)
  const [thaliDetails,setDetails]=useState({name:"Veg Thali", price:130})
  const [showModal,setShowModal]=useState(false)

  

  
  
  const allBills = useSelector(state=>state.bills)

  const thalies =[
    {
      text:'Add Vet',
      imgUrl:addbillimage,
    },
    {
      text:'View Vets',
      imgUrl:viewbillimage,
    },
    {
      text:'Manage',
      imgUrl:managebills,
    },
  ]
 
  return (
    <>
    <div className='main'>
      <h2> Dashboard</h2>
      <div className="plates">
        {
          thalies.map((thali,i)=>(
            <PlateCard text={thali.text} img={thali.imgUrl} i={i} active={i===activeIndex?true:false} setActiveIndex={setActiveIndex} setDetails={setDetails}/>
          ))
        }
        
      </div>
      <div className="users-orders">
        <div className="status">
          <p>Name</p>
          <p>Location</p>
          <p>Qualification</p>
          <p>Address</p>
          
        </div>
        {
         allBills.map((bill)=>(
           <UserOrderCard 
           key={bill?._id}
           id={bill?._id}
          name={bill?.Name}
          qual={bill?.Qualification}
          location={bill?.District}
          address={bill?.Address}
           />
         ))
        }
          

         
      </div>
      {/* <button onClick={prev}>Prev</button>
<button onClick={next} style={{marginLeft:'10px'}}>Next</button> */}
    </div>
    {/* <Modal setShowModal={setShowModal}/> */}
    </>
  )
}

export default Main
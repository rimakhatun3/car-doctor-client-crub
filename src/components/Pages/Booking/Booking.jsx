import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookItem from '../BookItem/BookItem';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
const {user} = useContext(AuthContext)

const navigate = useNavigate()
    const [booking,setBooking] = useState([])
const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(()=>{
        fetch(url,{
        method:'GET',
        headers:{
            authorization:`bearer ${localStorage.getItem('secret')}`
        }    
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setBooking(data)
            }
            else{
                navigate('/')
            }
            })
    },[url,navigate])

    const handleRemove=(id)=>{
        const procced = confirm('are you sure u want to delete')
        if(procced){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
    if(data.deletedCount>0){
        alert('delete confirm')
        const remaining = booking.filter(book=>book._id!==id)
        setBooking(remaining)
    }
            })
        }
    }

    const handleUpdate =(id)=>{
        const update =confirm('are u sure you want update')
        if(update){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:'PATCH',
                headers:{'content-type':'application/json'},
                body:JSON.stringify({status:'confirm'})
            })
            .then(res=>res.json())
            .then(data=>{
if(data.modifiedCount>0){
    const remaining = booking.filter(book=>book._id!==id)
const update = booking.find(book=>book._id===id)
update.status ='confirm'
const newUpdate = [update,...remaining]

setBooking(newUpdate)
}
            })
        
        }
    }


    return (
        <div>

            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
            
            {
                booking.map(bookItem=><BookItem key={bookItem._id} handleRemove={handleRemove} handleUpdate={handleUpdate} bookItem={bookItem}></BookItem>)
            }
             </tbody>

</table>
</div>
        </div>
    );
};

export default Booking;
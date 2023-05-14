import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg1  from '../../../assets/images/banner/3.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Book = () => {

    const services = useLoaderData()
    console.log(services)
    const {img,title,_id} = services

    const {user} = useContext(AuthContext)

const handleSubmit =(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value
    const date = form.date.value
    const price = form.price.value

    const bookItem = {
       img,
       title,
        name,
        email,
        date,
        
        price,
        service_id:_id
    }

    // console.log(bookItem)

    fetch('http://localhost:5000/book',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(bookItem)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'data added succesfully',
                
              })
        }
    })
}

    return (
        <div>
            <div className='relative mb-16'>
                <img className='h-[300px] w-full rounded-lg' src={bg1} alt="" />
                <span className='absolute bottom-0  left-1/2 '>
                <Link  to='/'><button className='btn bg-[#FF3811] '> Home/Service</button></Link>
                </span>

            </div>

            <div className=" bg-base-200 p-20">
            <form onSubmit={handleSubmit}>
                <div>
                <div className='w-full flex gap-5'>
      
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' className="input input-bordered" />
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input type="date" name='date'  className="input input-bordered" />
        
      </div>
      
    </div>
    <div className='w-full flex gap-5'>
      
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" />
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input type="text" name='price' defaultValue={services.price}  className="input input-bordered" />
        
      </div>
      
    </div>

                </div>

      <input className="btn bg-[#FF3811] w-full my-4" type="submit" value="order confirm" />
    </form>
  </div>
</div>
           
            
        
    );
};

export default Book;
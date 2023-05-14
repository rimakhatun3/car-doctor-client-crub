import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service)
    const {img,title,price,_id} = service
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <p className='text-lg font-semibold text-[#FF3811]'>Price:{price}</p>
<div className=' my-4'>
<Link to={`/book/${_id}`}><button className='btn bg-[#FF3811]'><FaArrowRight className='mr-2'/> Book Now</button></Link>
</div>
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Service;
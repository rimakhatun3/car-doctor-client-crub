import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
    .then(res=>res.json())
    .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-4'>
                <h1 className='text-lg font-semibold text-[#FF3811]'>Service</h1>
                <h2 className='text-3xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            </div>

           <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    services.map(service=><Service key={service._id} service={service} ></Service>)
                }
            </div>
            <div className='text-center'>
            <button className='btn btn-outline btn-warning ml-5 my-5 '>More Services</button>
            </div>
           </div>

        </div>
    );
};

export default Services;
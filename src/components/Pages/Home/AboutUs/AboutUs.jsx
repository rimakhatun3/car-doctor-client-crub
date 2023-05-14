import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className='card card-side gap-10  my-24 '>
            <div className='w-1/2 relative '>
<div className='w-3/4 '><img src={person} alt="" /></div>
<div className='w-1/2 absolute bottom-10 right-20'><img src={parts} alt="" /></div>
            </div>
            <div className='w-1/2 space-y-4'>
                <h1 className='text-lg font-semibold text-[#FF3811]'>About Us</h1>
<h2 className='text-3xl font-bold'>We are qualified <br/> & of experience <br/> in this field</h2>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
<p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
<button className='btn bg-[#FF3811]'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import Banner1 from '../../../../assets/images/banner/1.jpg'
import Banner2 from '../../../../assets/images/banner/2.jpg'
import Banner3 from '../../../../assets/images/banner/3.jpg'
import Banner4 from '../../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[600px] rounded-lg">
    <img src={Banner1} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform  bottom-10 right-5">
      <a href="#slide4" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
    </div>
    <div className="absolute space-y-4  text-white transform w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-20 top-24 ">
     <div className='p-4'>
     <h1 className='text-3xl font-bold'>Affordable <br/> Price For Car  <br/> Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex my-4'>
     <button className='btn bg-[#FF3811]'>Discover More</button>
      <button className='btn btn-outline btn-info ml-5'>Latest-projects</button>
     </div>
     </div>

     
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[600px] rounded-lg">
    <img src={Banner2} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform  bottom-10 right-5">
      <a href="#slide1" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
    </div>
    <div className="absolute space-y-4  text-white transform w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-20 top-24 ">
     <div className='p-4'>
     <h1 className='text-3xl font-bold'>Affordable <br/> Price For Car  <br/> Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex my-4'>
     <button className='btn bg-[#FF3811]'>Discover More</button>
      <button className='btn btn-outline btn-info ml-5'>Latest-projects</button>
     </div>
     </div>

     
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-[600px] rounded-lg">
    <img src={Banner3} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform  bottom-10 right-5">
      <a href="#slide2" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
    </div>
    <div className="absolute space-y-4  text-white transform w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-20 top-24 ">
     <div className='p-4'>
     <h1 className='text-3xl font-bold'>Affordable <br/> Price For Car  <br/> Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex my-4'>
     <button className='btn bg-[#FF3811]'>Discover More</button>
      <button className='btn btn-outline btn-info ml-5'>Latest-projects</button>
     </div>
     </div>

     
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-[600px] rounded-lg">
    <img src={Banner4} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform  bottom-10 right-5">
      <a href="#slide3" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
    </div>
    <div className="absolute space-y-4  text-white transform w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-20 top-24 ">
     <div className='p-4'>
     <h1 className='text-3xl font-bold'>Affordable <br/> Price For Car  <br/> Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='flex my-4'>
     <button className='btn bg-[#FF3811]'>Discover More</button>
      <button className='btn btn-outline btn-info ml-5'>Latest-projects</button>
     </div>
     </div>

     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
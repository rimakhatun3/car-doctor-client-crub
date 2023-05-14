import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';

import Services from '../service/Services';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Services></Services>
        </div>
    );
};

export default Home;
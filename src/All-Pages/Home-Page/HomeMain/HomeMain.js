import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Service-Page/Services';

const HomeMain = () => {
    return (
        <div>
            <HomeBanner/>
           <Services/> 
           <AppointmentBanner/>
        </div>
    );
};

export default HomeMain;
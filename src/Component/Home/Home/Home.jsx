import React from 'react';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
             <div className=''><Banner></Banner></div>
             <div className=''><Description></Description></div>
             <div className=''><Services></Services></div>
        </div>
    );
};

export default Home;
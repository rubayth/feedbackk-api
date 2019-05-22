import React from 'react';
import { Image } from 'react-bootstrap';
import landingImg from '../assets/landing.jpg';

const Landing = () => {
    return (
        <section 
            className='full-width'
            style={{ 
            textAlign: 'center',
            height: '100vh'
            }}>
            <Image 
                style={{
                    backgroundSize:'cover',
                }}
                src={landingImg} fluid />
            <div style={{
                position: 'absolute',
                top:'50%',
                left:'0',
            }}>
                <h1>You need feedback from your users.</h1>
                <h1>What now?</h1>
            </div>

        </section>
    ); 
};

export default Landing;
import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import Hire from '../Hire-me/Hire';
import './Main.css';

const Main = () => {
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        fetch('./developers.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])

    return (
        <div className="main-container">
            <div className="developers">
                {
                    developers.map(developer => <Developer
                        key={developer._id}
                        developer={developer}
                    >
                    </Developer>)
                }
            </div>
            <div >
                <Hire></Hire>
            </div>
        </div>
    );
};



export default Main;
import React from 'react';
import './Developer.css';

const Developer = (props) => {
    console.log(props);
    const { img, name, profession, skill, experience, salary, mail } = props.developer;

    return (
        <div className="developer">
            <div>
                <img src={img} />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <p>Profession: {profession}</p>
                <p>Skill: {skill}</p>
                <p>Experience: {experience}</p>
                <p>Salary: {salary}</p>
                <p>E-mail: {mail}</p>
            </div>
            <div>
                <button className='btn-hire-me'>
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default Developer;
import React from 'react';
import './Rows.css';

const Row = (props) => {
    const {name, email, picture, location, dob, id} = props.user;
    
    return(
        <div className="row">
            <section>
                <div className="img">
                    <img src={picture.medium}/>
                </div>
                <div className="info">
                    <div className="name"><strong>{name.title + " " + name.first + " " + name.last}</strong></div>
                    <div className="email">{email}</div>
                    <div className="age">Age: {dob.age}</div>
                </div>
            </section>
            
            <section>
                <div className="location">
                    <div className="city">{location.city}</div>
                    <div className="state_country">{location.state}, {location.country}</div>
                </div>
            </section>

            <section>
                <div className="id">
                    <div className="id_name">{id.name}</div>
                    <div className="value">{id.value}</div>
                </div>
            </section>
        </div>
    )
}

export default Row;
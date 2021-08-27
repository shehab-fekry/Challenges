import React, {Component} from 'react';
import Row from './Rows/Rows';
import './Table.css';
import Header from './Header/Header';

const Table = (props) => {
    return(
        <div className="container">
            <Header/>
            {props.usersArray.map((user, indx) => <Row key={indx} user={user}/>)}
            <button onClick={props.clicked} className="button">LOAD MORE</button>
        </div>
    )
}

export default Table;
import React, { Component } from 'react';
import './title.css';

const Title = (props) => {
    return (
        <div className="title">
            {props.text}
        </div>
    );
}

export default Title
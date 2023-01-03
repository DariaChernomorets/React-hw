import React from 'react';
import PropTypes from 'prop-types';

export default function CardNew({title,text}) {

    if (typeof title !== "string")
        return (<div className="card">
            <div className="card-body">
                <p className="card-text">how are you? {text}</p>
            </div>
        </div>)
    else if (typeof text !== "string")
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">hi {title}</h4>
                </div>
            </div>
        )
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">hi {title}</h4>
                <p className="card-text">how are you? {text}</p>
            </div>
        </div>
    )
}
CardNew.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

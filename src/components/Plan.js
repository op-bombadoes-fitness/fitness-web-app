import React from 'react';

const Plan = ({ id, name, muscles }) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-unstyled mt-3 mb-4">
                    {muscles.map(function (muscle, index) {
                        return <li key={index}>{muscle}</li>;
                    })}
                </ul>
                <button value={id} className="btn btn-sm btn-primary">Começar!</button>
            </div>
        </div>
    )
}

export default Plan;
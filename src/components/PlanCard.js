import React from 'react';

class PlanCard extends React.Component {

    render() {
        return (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <ul className="list-unstyled mt-3 mb-4">
                        {this.props.muscles.map(function (muscle, index) {
                            return <li key={index}>{muscle}</li>;
                        })}
                    </ul>
                    <a href="#" className="btn btn-sm btn-primary">Começar!</a>
                </div>
            </div>
        );
    }
}

export default PlanCard;
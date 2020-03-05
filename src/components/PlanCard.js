import React from 'react';

class PlanCard extends React.Component {

    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello(id) {
        alert(id);
    }

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
                    <button value={this.props.id} className="btn btn-sm btn-primary" onClick={(e) => this.sayHello(e.target.value)}>Começar!</button>
                </div>
            </div>
        );
    }
}

export default PlanCard;
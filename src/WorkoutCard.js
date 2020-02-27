import React from 'react';

class WorkoutCard extends React.Component {

    render() {
        return (
            <div class="col-md-4" >
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">{this.props.date}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            {this.props.muscles.map(function (muscle, index) {
                                return <li key={index}>{muscle}</li>;
                            })}
                        </ul>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn btn-lg btn-block btn-primary">ver treino</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkoutCard;
import React from 'react';

// import { Link } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';
import Exercise from '../components/Exercise.js';

// adicionar aqui os mocks
const sessionObject =
{
    id: "1",
    name: "Peito Biceps Abdominais",
    exercises: [
        {
            name: "Aberturas (deitado no banco)",
            numberOfRepetitions: 3,
            repetitions: [
                { index: 1, weight: "10" },
                { index: 2, weight: "15" },
                { index: 3, weight: "20" },
            ]
        },
        {
            name: "Curl biceps puxador",
            numberOfRepetitions: 3,
            repetitions: [
                { index: 1, weight: "10" },
                { index: 2, weight: "15" },
                { index: 3, weight: "20" },
            ]
        },
        {
            name: "Abdominais",
            numberOfRepetitions: 3,
            repetitions: [
                { index: 1, weight: "0" },
                { index: 2, weight: "0" },
                { index: 3, weight: "0" },
            ]
        }
    ]
};

class Session extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { match } = this.props // coming from React Router.

        // console.log(match.path) // /topics/:topicId/:subId

        // console.log(match.url) // /topics/react-router/url-parameters

        return (
            <div className="container-fluid">
                <h4 className="mb-3">{sessionObject.name}</h4>
                <form className="needs-validation">
                    <ul className="list-group mb-3">
                        {sessionObject.exercises.map(function (exercise, index) {
                            return <Exercise name={exercise.name}
                                numberOfRepetitions={exercise.numberOfRepetitions}
                                repetitions={exercise.repetitions}
                                key={index} />;
                        })}

                        {/* <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Dumbbell bench press</h6>
                                <small className="text-muted">3 repetições</small>
                                <div className="btn-toolbar" role="toolbar">
                                    <div className="btn-group mr-1" role="group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary btn-sm">
                                                30Kg
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">35Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">40Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">45Kg</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="btn-group mr-1" role="group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary btn-sm">
                                                30Kg
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">35Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">40Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">45Kg</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="btn-group mr-1" role="group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary btn-sm">
                                                3
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">35Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">40Kg</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">45Kg</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="btn-group mr-1" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-primary btn-sm">+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Flexões</h6>
                                <small className="text-muted">3 repetições</small>
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-1" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm">1</button>
                                    </div>
                                    <div className="btn-group mr-1" role="group">
                                        <button type="button" className="btn btn-primary btn-sm">2</button>
                                    </div>
                                    <div className="btn-group mr-1" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-primary btn-sm">3</button>
                                    </div>
                                    <div className="btn-group mr-1" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-primary btn-sm">+</button>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                    <button className="btn btn-primary btn-block" type="submit">Terminar treino</button>
                </form>
            </div>
        );
    }
}

export default Session;
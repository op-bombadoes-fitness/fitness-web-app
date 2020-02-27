import React from 'react';
import './App.css';

import { Redirect, Link, Route,Switch } from 'react-router-dom';
import WorkoutCard from './WorkoutCard';

import { Dropdown } from 'react-bootstrap';

// mocks
const workoutsList = [
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
  { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] }
];

function App() {
  return (
    <div className="App bg-light">
      <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal"><b>Fitness App</b> by op-bombadoes</h5>
      </div>

      <div className="container-fluid"><h3>Bom dia, Rui!</h3></div>

      <div className="container-fluid">
        <span>Ainda não tens um plano de treino!</span>
        <span>Criar plano</span>
      </div>

      <hr className="mb-4" />
      <div className="container-fluid">
        <h4 className="mb-3">Os teus planos de treino</h4>
        <div className="row">
          <div className="col-md-4" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Costas Biceps Abdominais</h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>3 X Dumbbell bench press</li>
                  <li>3 X Flexoes</li>
                </ul>
                <a href="#" className="btn btn-sm btn-primary">Começar!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mb-4" />
      <div className="container-fluid">
        <h4 className="mb-3">Costas Biceps Abdominais</h4>
        <form className="needs-validation">
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
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
            </li>
          </ul>
          <button className="btn btn-primary btn-block" type="submit">Terminar treino</button>
        </form>
      </div>

      <hr className="mb-4" />
      <div className="container-fluid">
        <h4 className="mb-3">Histórico de treinos</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Treino</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">20/01/2020</th>
              <td>Costas Biceps Abdominais</td>
            </tr>
            <tr>
              <th scope="row">21/01/2020</th>
              <td>Costas Biceps Abdominais</td>
            </tr>
            <tr>
              <th scope="row">22/01/2020</th>
              <td>Costas Biceps Abdominais</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="container">
        <div className="row">
          {workoutsList.map(function (workout, index) {
            return <WorkoutCard date={workout.date} muscles={workout.muscles} />;
          })}
        </div>
      </div> */}
      {/* <footer className="footer">
        <div className="container">
          <div className="float-right"><button type="button" className="btn btn-primary">Novo treino</button></div>
        </div>
      </footer> */}

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/plans" component={Plans} />
        <Route path="/sessions" component={Sessions} />
      </Switch>
    </div >
  );
}

//Home component
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)

//Home component
const Plans = (props) => (
  <div>
    <h2>Rui Felgueiras {console.log(props)}</h2>
  </div>
)

//Home component
const Sessions = (props) => (
  <div>
    <h2>Rui Felgueiras {console.log(props)}</h2>
  </div>
)

export default App;
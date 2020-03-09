import React from 'react';
import './App.css';

import { Redirect, NavLink, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home.js';
import Plans from './pages/Plans.js';
import Sessions from './pages/Sessions.js';
import Session from './pages/Session.js';

// adicionar aqui os mocks
// const plansList = [
//   { name: "Peito Biceps Abdominais", exercises: ["3 x Aberturas (deitado no banco)", "3 x Curl biceps puxador", "3 x abdominais"] },
//   { name: "Costas Triceps Abdominais", exercises: ["3 x Puxadora ao peito (pega larga)", "3 x Triceps (deitado no banco) com halter", "3 x abdominais"] },
//   { name: "Pernas", exercises: ["3 x Deadlift", "3 x Kettlebell squat", "3 x Agachamento com barra"] }
// ];

const sessionsList = [
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
      <nav className="navbar navbar-light fixed-top bg-light">
        <Link className="navbar-brand" to="/"><b>Fitness App</b> by op-bombadoes</Link>
      </nav>

      <main className="pt-5">

        {/* TODO: create greeting componente? */}
        <div className="container-fluid"><h3>Bom dia, Rui!</h3></div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/plans" component={Plans} />
          {/* <Route path="/sessions" component={Sessions} /> */}
          <Route path="/sessions/:sessionId" component={Session}/>
        </Switch>
      </main>

      <footer className="footer">
        <div className="text-center py-3">© 2020 Copyright: <a href="#">op-bombadoes</a>
        </div>
      </footer>


      {/* <hr className="mb-4" />
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
      </div> */}
      {/* <div className="container">
        <div className="row">
          {workoutsList.map(function (workout, index) {
            return <WorkoutCard date={workout.date} muscles={workout.muscles} />;
          })}
        </div>
      </div> */}

    </div >
  );
}

export default App;
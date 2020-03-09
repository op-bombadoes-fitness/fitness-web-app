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

      {/* <div className="container">
        <div className="row">
          {workoutsList.map(function (workout, index) {
            return <WorkoutCard date={workout.date} muscles={workout.muscles} />;
          })}
        </div>
      </div> */}

    </div>
  );
}

export default App;
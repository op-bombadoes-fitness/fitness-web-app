import React from 'react';
import './styles/App.css';

import { Redirect, NavLink, Route, Switch, Link } from 'react-router-dom';

// import Home from '../pages/Home.js';
// import Plans from '../pages/Plans.js';
// import Sessions from '../pages/Sessions.js';
// import Session from '../pages/Session.js';

import PlansContainer from '../containers/PlansContainer'
import SessionsContainer from '../containers/SessionsContainer'
import ContainerSeparator from '../components/ContainerSeparator'

// adicionar aqui os mocks
// const plansList = [
//   { name: "Peito Biceps Abdominais", exercises: ["3 x Aberturas (deitado no banco)", "3 x Curl biceps puxador", "3 x abdominais"] },
//   { name: "Costas Triceps Abdominais", exercises: ["3 x Puxadora ao peito (pega larga)", "3 x Triceps (deitado no banco) com halter", "3 x abdominais"] },
//   { name: "Pernas", exercises: ["3 x Deadlift", "3 x Kettlebell squat", "3 x Agachamento com barra"] }
// ];

// const sessionsList = [
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] },
//   { date: "18/01/2020", muscles: ["costas", "biceps", "abdominais"] }
// ];

function App() {
  return (
    <div className="App bg-light">
      <main className="pt-5">
        <div className="container-fluid"><h3>Bom dia, Rui!</h3></div>
        <PlansContainer />
        <ContainerSeparator />
        <SessionsContainer />

        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/plans" component={Plans} />
          <Route path="/sessions" component={Sessions} />
          <Route path="/sessions/:sessionId" component={Session}/>
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
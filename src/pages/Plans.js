// import React from 'react';

// import PlanCard from '../components/PlanCard.js'

// import { Link } from 'react-router-dom';

// // adicionar aqui os mocks
// const plansList = [
//     { id: "1", name: "Peito Biceps Abdominais", exercises: ["3 x Aberturas (deitado no banco)", "3 x Curl biceps puxador", "3 x abdominais"] },
//     { id: "2", name: "Costas Triceps Abdominais", exercises: ["3 x Puxadora ao peito (pega larga)", "3 x Triceps (deitado no banco) com halter", "3 x abdominais"] },
//     { id: "3", name: "Pernas", exercises: ["3 x Deadlift", "3 x Kettlebell squat", "3 x Agachamento com barra"] }
// ];

// function NoPlans() {
//     return (
//         <div className="container-fluid">
//             <div class="row"></div>
//             <div class="alert alert-primary" role="alert">Ainda não tens um plano de treino!</div>
//             <button className="btn btn-primary" type="submit">Criar plano de treino</button>
//         </div>
//     );
// }

// function WithPlans(props) {
//     return (
//         <div className="container-fluid">
//             <h4 className="mb-3">Os teus planos de treino</h4>
//             <div className="row">
//                 <div className="col-md-4 mb-2" >
//                     {plansList.map(function (plan, index) {
//                         return <PlanCard name={plan.name} muscles={plan.exercises} id={plan.id} key={index} />;
//                     })}
//                 </div>
//             </div>
//             <Link className="btn btn-outline-primary btn-sm btn-block" type="button" to="/plans">Ver todos os planos</Link>
//         </div>
//     );
// }

// const Plans = (props) => {
//     // const hasPlans = props.Plans;
//     const hasPlans = plansList;
//     if (hasPlans) {
//         return <WithPlans />;
//     } else {
//         return <NoPlans />;
//     }
// }

// export default Plans;
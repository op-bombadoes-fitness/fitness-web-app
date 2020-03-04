import React from 'react';



function NoPlans () {
    return (
        <div className="container-fluid">
            <div class="row"></div>
            <div class="alert alert-primary" role="alert">
                Ainda não tens um plano de treino!
                </div>
            <button className="btn btn-primary" type="submit">Criar plano de treino</button>
        </div>
    );
}

function WithPlans (props) {
    return (
        <div className="container-fluid">
            <h4 className="mb-3">Os teus planos de treino</h4>
            <div className="row">
                <div className="col-md-4" >
                    <div className="card mb-2">
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
    );
}

const Home = (props) => {
    const hasPlans = props.Plans;
    if (hasPlans) {
        return <WithPlans />;
    } else {
        return <NoPlans />;
    }
}

export default Home;
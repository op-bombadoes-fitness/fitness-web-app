import React from 'react';

import { Link } from 'react-router-dom';

class Session extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h4 className="mb-3">Histórico de sessões</h4>
                <table className="table table-light">
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
                {/* <button type="button" className="btn btn-outline-primary btn-sm btn-block">Ver todas as sessões</button> */}
                <Link className="btn btn-outline-primary btn-sm btn-block" type="button" to="/sessions">Ver todos as sessões</Link>
            </div>
        );
    }
}

export default Session;
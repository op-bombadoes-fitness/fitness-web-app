import React from 'react'

const SessionsList = ({ sessions }) => {
    const hasSessions = sessions.length > 0
    const sessionsRender = hasSessions ? (
        sessions.map((session, key) =>
            <Session date={session.date} muscles={session.muscles} key={key} />
        )
    ) : (
            <div className="container-fluid">
                <div className="row"></div>
                <div className="alert alert-primary" role="alert">Ainda não treinaste!</div>
                <button className="btn btn-primary" type="submit">Criar plano de treino</button>
            </div>
        )

    if (hasSessions) {
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
                        {sessionsRender}
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary btn-block">Ver todos as sessões</button>
            </div>
        )
    }
    else {
        return (
            <div>
                {sessionsRender}
            </div>
        )
    }
}

const Session = ({ date, muscles }) => (
    <tr>
        <th scope="row">{date}</th>
        <td>{muscles.join(', ')}</td>
    </tr>
)

// Cart.propTypes = {
//     products: PropTypes.array,
//     total: PropTypes.string,
//     onCheckoutClicked: PropTypes.func
//   }

export default SessionsList
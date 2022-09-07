import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
    return (
        <>
            <div className="meta-card">
                <h2 className="title-sales">Vendas</h2>
                <div>
                    <div className="meta-form-container">
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="meta-form-container">
                        <input className="form-control" type="text"/>
                    </div>
                </div>

                <div>
                    <table className="meta-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="show992">#1</th>
                                <th className="show">30/08/2022</th>
                                <th>Rhuan</th>
                                <th className="show992">1</th>
                                <th className="show992">10</th>
                                <th>R$ 100</th>
                                <th>
                                    <div className="meta-btn-container">
                                   <NotificationButton/>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="show992">#1</th>
                                <th className="show">30/08/2022</th>
                                <th>Rhuan</th>
                                <th className="show992">1</th>
                                <th className="show992">10</th>
                                <th>R$ 100</th>
                                <th>
                                    <div className="meta-btn-container">
                                    <NotificationButton/>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="show992">#1</th>
                                <th className="show">30/08/2022</th>
                                <th>Rhuan</th>
                                <th className="show992">1</th>
                                <th className="show992">10</th>
                                <th>R$ 100</th>
                                <th>
                                    <div className="meta-btn-container">
                                    <NotificationButton/>

                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}

export default SalesCard

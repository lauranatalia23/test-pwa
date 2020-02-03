import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from '../../../config/Fire';

export default class IndexRM extends Component {
    constructor(props) {
        super(props);
        this.ref = fire.firestore().collection('rekam_medis');
        this.unsubscribe = null;
        this.state = {
            rekam_medis: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const rekam_medis = [];
        querySnapshot.forEach((doc) => {
            const { user, unit, dokter, tindakan, tanggal, tarif, hubungan, nama, gender,alamat, pekerjaan } = doc.data();
            rekam_medis.push({
                key: doc.id,
                doc, //Document Snapshot
                user,
                unit,
                dokter,
                tindakan,
                tanggal,
                tarif,
                hubungan,
                nama,
                gender,
                alamat,
                pekerjaan
            });
        });
        this.setState({
            rekam_medis
        })
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="card">  
                    <div className="card-body">
                        <h3 className="card-title">Data Rekam Medis IGD</h3>
                        <div className="card-body">
                            <table className="table table-stripe">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Tanggal Masuk</th>
                                        <th>Tindakan</th>
                                        <th>Dokter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rekam_medis.map(rekam_medis =>
                                        <tr>
                                            <td><Link to={`/showRM/${rekam_medis.key}`}>{rekam_medis.user}</Link></td>
                                            <td>{rekam_medis.tanggal}</td>
                                            <td>{rekam_medis.tindakan}</td>
                                            <td>{rekam_medis.dokter}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
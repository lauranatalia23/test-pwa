import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../../config/Fire';

export default class IndexPasien extends Component {
    constructor(props) {
        super(props);
        this.ref = fire.firestore().collection('pasien');
        this.unsubscribe = null;
        this.state = {
            pasien: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const pasien = [];
        querySnapshot.forEach((doc) => {
            const { nama, ttl, agama, status, jk, pendidikan, pekerjaan, alamat, ktp, hp } = doc.data();
            pasien.push({
                key: doc.id,
                doc, //Document Snapshot
                nama,
                ttl,
                agama,
                status,
                jk,
                pendidikan,
                pekerjaan,
                alamat,
                ktp,
                hp
            });
        });
        this.setState({
            pasien
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
                        <h3 className="card-title">Data Pasien IGD Rumah Sakit</h3>
                        <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Tanggal Lahir</th>
                                        <th>Agama</th>
                                        <th>Alamat</th>
                                        <th>Jenis Kelamin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.pasien.map(pasien =>
                                        <tr>
                                            <td><Link to={`/show/${pasien.key}`}>{pasien.nama}</Link></td>
                                            <td>{pasien.ttl}</td>
                                            <td>{pasien.agama}</td>
                                            <td>{pasien.alamat}</td>
                                            <td>{pasien.jk}</td>
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
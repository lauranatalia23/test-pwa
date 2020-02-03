import React, { Component } from 'react';
import fire from '../../../config/Fire';
import { Link } from 'react-router-dom';

export default class ShowPasien extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pasiens: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = fire.firestore().collection('pasien').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if(doc.exists) {
                this.setState({
                    pasiens: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    delete(id) {
        fire.firestore().collection('pasien').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="card">  
                    <div className="card-body">
                        <h3 className="card-title">{this.state.pasiens.nama}</h3>
                            <dl>
                                <dt>Tempat tanggal lahir: </dt>
                                <dd>{this.state.pasiens.ttl}</dd>
                                <dt>Agama: </dt>
                                <dd>{this.state.pasiens.agama}</dd>
                                <dt>Status Perkawinan: </dt>
                                <dd>{this.state.pasiens.status}</dd>
                                <dt>Jenis Kelamin: </dt>
                                <dd>{this.state.pasiens.jk}</dd>
                                <dt>Alamat: </dt>
                                <dd>{this.state.pasiens.alamat}</dd>
                                <dt>Pendidikan: </dt>
                                <dd>{this.state.pasiens.pendidikan}</dd>
                                <dt>Pekerjaan: </dt>
                                <dd>{this.state.pasiens.pekerjaan}</dd>
                                <dt>No. KTP: </dt>
                                <dd>{this.state.pasiens.ktp}</dd>
                                <dt>No. HP: </dt>
                                <dd>{this.state.pasiens.hp}</dd>
                            </dl>
                            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
                            <Link to={`/createRM`} className="btn btn-primary">Tambah Rekam Medis</Link>&nbsp;
                            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
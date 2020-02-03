import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from '../../../config/Fire';

export default class ShowRM extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rekam_mediss: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = fire.firestore().collection('rekam_medis').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if(doc.exists) {
                this.setState({
                    rekam_mediss: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    delete(id) {
        fire.firestore().collection('rekam_medis').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render () {
        return (
            <div className="contaiener-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="panel panel-default">
                            <div class="panel panel-primary">
                                <br />
                                <div class="card-body">
                                    <div class="card bg-primary">
                                        <div class="card-header">
                                            Data Rekam Medis Pasien
                                        </div>
                                        <div class="card-body bg-light">
                                            <table class="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th>Nama Pasien :</th>
                                                    <td>{this.state.rekam_mediss.user}</td>
                                                </tr>
                                                <tr>
                                                    <th>Unit :</th>
                                                    <td>{this.state.rekam_mediss.unit}</td>
                                                </tr>
                                                <tr>
                                                    <th>Dokter :</th>
                                                    <td>{this.state.rekam_mediss.dokter}</td>
                                                </tr> 
                                                <tr>
                                                    <th>Tanggal :</th>
                                                    <td>{this.state.rekam_mediss.tanggal}</td>
                                                </tr> 
                                                <tr>
                                                    <th>Tindakan :</th>
                                                    <td>{this.state.rekam_mediss.tindakan}</td>
                                                </tr>    
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel panel-primary">
                                <br />
                                <div className="card-body">
                                    <div className="card bg-primary">
                                        <div className="card-header">
                                            Data Penanggung Jawab
                                        </div>
                                        <div className="card-body bg-light">
                                            <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th>Nama Penanggung Jawab :</th>
                                                    <td>{this.state.rekam_mediss.nama}</td>
                                                </tr>
                                                <tr>
                                                    <th>Hubungan :</th>
                                                    <td>{this.state.rekam_mediss.hubungan}</td>
                                                </tr>
                                                <tr>
                                                    <th>Gender :</th>
                                                    <td>{this.state.rekam_mediss.gender}</td>
                                                </tr> 
                                                <tr>
                                                    <th>Alamat :</th>
                                                    <td>{this.state.rekam_mediss.alamat}</td>
                                                </tr> 
                                                <tr>
                                                    <th>Pekerjaan :</th>
                                                    <td>{this.state.rekam_mediss.pekerjaan}</td>
                                                </tr>    
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6">
                    <Link to={`/editRM/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
                    <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>    
                </div>
            </div>
        )
    }
}
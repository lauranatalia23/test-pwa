import React, { Component } from 'react';
import fire from '../../../config/Fire';

export default class CreatePasien extends Component {

    constructor(props) {
        super(props);
        this.ref = fire.firestore().collection('pasien');
        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeTtl = this.onChangeTtl.bind(this);
        this.onChangeJk = this.onChangeJk.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeAgama = this.onChangeAgama.bind(this);
        this.onChangePendidikan = this.onChangePendidikan.bind(this);
        this.onChangePekerjaan = this.onChangePekerjaan.bind(this);
        this.onChangeAlamat = this.onChangeAlamat.bind(this);
        this.onChangeKtp = this.onChangeKtp.bind(this);
        this.onChangeHp = this.onChangeHp.bind(this);
        this.state = {
            nama: '',
            ttl: '',
            jk:'',
            status:'',
            agama: '',
            pendidikan: '',
            pekerjaan: '',
            alamat: '',
            ktp: '',
            hp: ''
        };
    }

    onChangeNama =(e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            nama: e.target.value
        });
    }

    onChangeJk = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            jk: e.target.value
        })
    }

    onChangeTtl = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            ttl: e.target.value
        })
    }

    onChangeStatus = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            status: e.target.value
        })
    }

    onChangeAgama = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            agama: e.target.value
        })
    }

    onChangePendidikan = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            pendidikan: e.target.value
        })
    }

    onChangePekerjaan = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            pekerjaan: e.target.value
        })
    }

    onChangeAlamat = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            alamat: e.target.value
        })
    }

    onChangeKtp = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            ktp: e.target.value
        })
    }

    onChangeHp = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({
            hp: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nama, ttl, jk, status, agama, pendidikan, pekerjaan, alamat, ktp, hp} = this.state;

        this.ref.add({
            nama,
            ttl,
            jk,
            status,
            agama,
            pendidikan,
            pekerjaan,
            alamat,
            ktp,
            hp
        }).then((docRef) => {
            this.setState({
                nama: '',
                ttl: '',
                jk: '',
                status: '',
                agama: '',
                pendidikan: '',
                pekerjaan: '',
                alamat: '',
                ktp: '',
                hp: ''
            });
            this.props.history.push("/indexPasien")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="card">  
                    <div className="card-body">
                        <h3 className="card-title">Form Pasien</h3>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Nama: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nama"
                                            value={this.state.nama}
                                            onChange={this.onChangeNama}
                                            placeholder="Nama Lengkap" />
                                    </div>
                                    <div className="form-group">
                                        <label>Tanggal Lahir: </label>
                                        <input 
                                            type="date"
                                            className="form-control"
                                            name="ttl"
                                            value={this.state.ttl}
                                            onChange={this.onChangeTtl}
                                            placeholder="Tempat Tanggal Lahir" />
                                    </div>
                                    <div className="form-group">
                                        <label>Jenis Kelamin:</label>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="Perempuan" className="custom-control-input" id="customRadio" 
                                                checked={this.state.jk === "Perempuan"}
                                                onChange={this.onChangeJk} />
                                            <label className="custom-control-label"  htmlFor="customRadio">Perempuan</label>
                                        </div>   

                                        <div className="custom-control custom-radio">
                                            <input type="radio" value="Laki-laki" className="custom-control-input" id="customRadio2" 
                                                checked={this.state.jk === "Laki-laki"}
                                                onChange={this.onChangeJk} />
                                            <label className="custom-control-label" htmlFor="customRadio2">Laki-Laki</label>
                                        </div>  
                                    </div>
                                    <div className="form-group">
                                        <label>Status: </label>
                                        <select className="form-control" value={this.state.status} onChange={this.onChangeStatus}>
                                            <option value="">Select Status</option>
                                            <option value="Belum Kawin">Belum Kawin</option>
                                            <option value="Kawin">Kawin</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Agama: </label>
                                        <select className="form-control" value={this.state.agama} onChange={this.onChangeAgama}>
                                            <option value="">Select Agama</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Kristen">Kristen</option>
                                            <option value="Katolik">Katolik</option>
                                            <option value="Buddha">Buddha</option>
                                            <option value="Hindu">Hindu</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Pendidikan: </label>
                                        <select className="form-control" value={this.state.pendidikan} onChange={this.onChangePendidikan}>
                                            <option value="">Select Pendidikan</option>
                                            <option value="TK">TK</option>
                                            <option value="SD">SD</option>
                                            <option value="SMP">SMP</option>
                                            <option value="SMA">SMA</option>
                                            <option value="SMK">SMK</option>
                                            <option value="D1">D1</option>
                                            <option value="D3">D3</option>
                                            <option value="D4/S1">D4/S1</option>
                                            <option value="S2">S2</option>
                                            <option value="S3">S3</option>
                                            <option value="lainnya">lainnya</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Pekerjaan: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pekerjaan"
                                            value={this.state.pekerjaan}
                                            onChange={this.onChangePekerjaan}
                                            placeholder="Pekerjaan" />
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="alamat"
                                            value={this.state.alamat}
                                            onChange={this.onChangeAlamat}
                                            placeholder="Alamat" />
                                    </div>
                                    <div className="form-group">
                                        <label>No KTP: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="ktp"
                                            value={this.state.ktp}
                                            onChange={this.onChangeKtp}
                                            placeholder="No KTP" />
                                    </div>
                                    <div className="form-group">
                                        <label>No Hp: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="hp"
                                            value={this.state.hp}
                                            onChange={this.onChangeHp}
                                            placeholder="No HP" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button type="submit" className="btn btn-success btn-block">Simpan</button>
                            </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
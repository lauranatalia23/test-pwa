import React, { Component } from 'react';
import fire from '../../../config/Fire';

export default class EditRM extends Component {
    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeUnit = this.onChangeUnit.bind(this);
        this.onChangeDokter = this.onChangeDokter.bind(this);
        this.onChangeTindakan = this.onChangeTindakan.bind(this);
        this.onChangeTanggal = this.onChangeTanggal.bind(this);

        this.onChangeHubungan = this.onChangeHubungan.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAlamat = this.onChangeAlamat.bind(this);
        this.onChangePekerjaan = this.onChangePekerjaan.bind(this);
        this.onChangeNama = this.onChangeNama.bind(this);

        this.state = {
            user: '',
            unit: '',
            dokter: '',
            tindakan: '',
            tanggal: '',
            hubungan: '',
            gender: '',
            alamat: '',
            pekerjaan:'',
            nama: ''
        };
    }

    componentDidMount() {
        const ref = fire.firestore().collection('rekam_medis').doc(this.props.match.params.id);
        const reff = fire.firestore().collection('data_pasien').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const rekammedis = doc.data();
                this.setState({
                    key: doc.id,
                    user: rekammedis.user,
                    unit: rekammedis.unit,
                    dokter: rekammedis.dokter,
                    tindakan: rekammedis.tindakan,
                    tanggal: rekammedis.tanggal,
                    hubungan: rekammedis.hubungan,
                    gender: rekammedis.gender,
                    alamat: rekammedis.alamat,
                    pekerjaan: rekammedis.pekerjaan,
                    nama: rekammedis.nama
                });
            } else {
                console.log("No such document!");
            }
        });
        reff.get()
            .then(response => {
                const loadedRes = [""]
                response.forEach((doc) => {
                    loadedRes.push(doc.data().tindakan)
                });
                this.setState({
                    data_pasien: loadedRes
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUser = (e) => {
        this.setState({
            user: e.target.value
        })
    }
    
    onChangeUnit = (e) => {
        this.setState({
            unit: e.target.value
        })
    }

    onChangeDokter = (e) => {
        this.setState({
            dokter: e.target.value
        })
    }

    onChangeTindakan = (e) => {
        this.setState({
            tindakan: e.target.value
        })
    }

    onChangeTanggal = (e) => {
        this.setState({
            tanggal: e.target.value
        })
    }

    onChangeHubungan = (e) => {
        this.setState({
            hubungan: e.target.value
        })
    }

    onChangeGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    onChangePekerjaan = (e) => {
        this.setState({
            pekerjaan: e.target.value
        })
    }

    onChangeNama = (e) => {
        this.setState({
            nama: e.target.value
        })
    }

    onChangeAlamat = (e) => {
        this.setState({
            alamat: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { user, unit, dokter, tindakan, tanggal, hubungan, gender, pekerjaan, nama, alamat } = this.state;

        const updateRef = fire.firestore().collection('rekam_medis').doc(this.state.key);
        updateRef.set({
            user,
            unit,
            dokter,
            tindakan,
            tanggal,
            hubungan,
            gender,
            pekerjaan,
            nama,
            alamat
        }).then((docRef) => {
            this.setState({
                key: '',
                user: '',
                unit: '',
                dokter: '',
                tindakan: '',
                tanggal: '',
                hubungan: '',
                gender: '',
                pekerjaan: '',
                nama: '',
                alamat: ''
            });
            this.props.history.push("/showRM/"+this.props.match.params.id)
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
                        <h3 className="card-title">Form Rekam Medis</h3>
                        <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h4 className="panel-title">Data Pasien IGD</h4>
                                <div className="form-group">
                                    <label>Nama Pasien: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="user"
                                        value={this.state.user}
                                        onChange={this.onChangeUser}
                                        placeholder="Nama Pasien" />
                                </div>
                                <div className="form-group">
                                    <label>Tanggal: </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="tanggal"
                                        value={this.state.tanggal}
                                        onChange={this.onChangeTanggal}
                                        placeholder="tanggal" />
                                </div>
                                <div className="form-group">
                                    <label>Unit: </label>
                                    <select className="form-control" value={this.state.unit} onChange={this.onChangeUnit}>
                                        <option value="">Select Unit</option>
                                        <option value="IGD">IGD</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Nama Dokter: </label>
                                    <select className="form-control" value={this.state.dokter} onChange={this.onChangeDokter}>
                                        <option value="">Select Dokter</option>
                                        <option value="dr. Irawati K.">dr. Irawati K.</option>
                                        <option value="Dr. A. Dhedie Prasatia Sam, Sp.OT">Dr. A. Dhedie Prasatia Sam, Sp.OT</option>
                                        <option value="dr. Abdul Muttalib, Sp.An, Mkes">dr. Abdul Muttalib, Sp.An, Mkes</option>
                                        <option value="dr. Darwin maulana,Sp.JP">dr. Darwin maulana,Sp.JP</option>
                                        <option value="Dr. Fith Dahlan Sp.A">Dr. Fith Dahlan Sp.A</option>
                                        <option value="Dr. Nilla Mayasari, Sp.KFR">Dr. Nilla Mayasari, Sp.KFR</option>
                                        <option value="Dr. Mirella Afifuddin, Sp.M">Dr. Mirella Afifuddin, Sp.M</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Tindakan: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="tindakan"
                                        value={this.state.tindakan}
                                        onChange={this.onChangeTindakan}
                                        placeholder="tindakan" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="panel-title">Data Penanggung Jawab</h4>
                                <div className="form-group">
                                    <label>Nama Penanggung Jawab: </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="penanggungjawab"
                                        value={this.state.nama}
                                        onChange={this.onChangeNama}
                                        placeholder="Nama Penanggung Jawab" />
                                </div>
                                <div className="form-group">
                                    <label>Jenis Kelamin:</label>
                                    <div className="radio">
                                        <input type="radio"
                                            value="Perempuan"
                                            checked={this.state.gender === "Perempuan"}
                                            onChange={this.onChangeGender} /> Perempuan
                                    </div>

                                    <div className="radio">
                                        <input type="radio"
                                            value="Laki-laki"
                                            checked={this.state.gender === "Laki-laki"}
                                            onChange={this.onChangeGender}/> Laki-laki
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Hubungan: </label>
                                    <select className="form-control" value={this.state.hubungan} onChange={this.onChangeHubungan}>
                                        <option value="">Select Hubungan</option>
                                        <option value="saudara">Saudara</option>
                                        <option value="suami">Suami</option>
                                        <option value="istri">Istri</option>
                                        <option value="orangtua">Orang Tua</option>
                                        <option value="anak">Anak</option>
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
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-primary btn-block">Perbaharui</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
import React, {Component} from 'react';
import fire from '../../config/Fire';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import EditPasien from './DataPasien/EditPasien';
import Create from './DataPasien/CreatePasien';
import ShowPasien from './DataPasien/ShowPasien';
import IndexPasien from './DataPasien/IndexPasien';
import CreateRM from './RekamMedis/CreateRM';
import IndexRM from './RekamMedis/IndexRM';
import ShowRM from './RekamMedis/ShowRM';
import EditRM from './RekamMedis/EditRM';

import ProductList from '../ProductList';
import Cart from '../Cart/Cart';
import {ButtonContainer} from '../Button';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link to={'/'} className="navbar-brand">IGD Rumah Sakit</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to={'/'} className="nav-link">Beranda</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/indexPasien'} className="nav-link">Data Pasien</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/createRM'} className="nav-link">Form Rekam Medis</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/indexRM'} className="nav-link">Data Rekam Medis</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/productlist'} className="nav-link">Pembayaran</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">  
                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                            Kasir
                        </span>
                        </ButtonContainer>
                    </Link>
                        <button onClick={this.logout} className="btn btn-danger">Log out</button>
                    </form>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={ Create } />
                    <Route path='/show/:id' component={ShowPasien} />
                    <Route path='/edit/:id' component={EditPasien} />
                    <Route path='/indexPasien' component={IndexPasien} />
                    <Route path='/createRM' component={ CreateRM } />
                    <Route path='/indexRM' component={ IndexRM } />
                    <Route path='/showRM/:id' component={ ShowRM } />
                    <Route path='/editRM/:id' component={ EditRM } />
                    <Route path='/productlist' component={ ProductList } />
                    <Route path='/cart' component={ Cart } />
                </Switch>
            </Router>   
        )
    }
}

export default Navbar;
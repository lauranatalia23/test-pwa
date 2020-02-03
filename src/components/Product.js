import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render() {
        const {id, tindakan, layanan, tarif, jenis_tarif, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    {/* card header */}
                    <ProductConsumer>
                        {(value) => (
                        <div className="img-container p-3" onClick= {()=>value.handleDetail(id)}>
                            <Link to="/details">
                            <p>
                                {tindakan}
                            </p>
                            </Link>
                            <h5 className="text-blue mb-0">
                                <span className="mr-1">Rp</span>
                                {tarif}
                            </h5>
                        <button 
                            className="cart-btn" 
                            disabled={inCart ? true : false} 
                            onClick={() => {
                                value.addToCart(id);                              
                            }} 
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    in cart
                                </p>
                            ) : (
                                <i className="fas fa-plus" />
                            )}
                        </button>
                        </div>)}                    
                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {layanan}
                        </p>
                        <h5 className="text-blue  mb-0" id="blue">
                            <span className="mr-1" />
                            {jenis_tarif}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        tindakan:PropTypes.string,
        tarif:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}

.img-container{
    position:relative;
    overflow:hidden;
}
.cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.1rem;
    border-radius:0.5rem 0 0 0;
}


`;
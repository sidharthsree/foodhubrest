import React from 'react';
import PaymentDetails from './../../components/PaymentDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './../../stripe/config';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from '../../components/Checkout';
import './styles.scss'

const stripePromise = loadStripe(publishableKey);

const Payment = (total) => {
  return (
    <div className="stripebtn">
      <h1>Pay with Stripe</h1>
       <Elements stripe={stripePromise}>
    < StripeCheckoutButton/>
    
  </Elements></div>
   
  );
}

export default Payment;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import Checkout from '../Checkout';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';



const StripeCheckoutButton = ({price}) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_KzWXSJxJu3foClpqvGjmUlnp00c4Xcfgbb';
 
   const onToken = token => {
     alert('Successful payment!');
   };
   const mapState = createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal
    });
 
   return (
      
     <StripeCheckout
       label='Pay with 💳'
       name='FoodHub Ltd.'
       billingAddress
       shippingAddress
       image='https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/171289109_121223046724368_981274772739343386_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=481g9-mrx4oAX-lWjiN&_nc_ht=scontent-tir2-1.xx&oh=da8c8805bf5288f037923ab30546a366&oe=61BF5982'
       description={`Secure Payment with Stripe`}
       panelLabel='Pay now'
       amount={priceForStripe}
       token={onToken}
       stripeKey={publishableKey}
         />
         
   );
 };
 
 // const mapDispatchToProps = dispatch => ({
 //   resetCart: () => dispatch(resetCartAction()),
 //   push: route => dispatch(push(route))
 // });
 
 export default (StripeCheckoutButton);
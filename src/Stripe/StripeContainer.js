import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51PLrBuIqFiOMKt8ejCeIxxi2e2mFj5pleqDhFQUDo0XBveTQPun0zWFDrKguQkkTrih0f0NCJwfxlZW6dLxeYRPm00RNN9L4EG";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
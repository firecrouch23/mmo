import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY='pk_live_51QNqSLBVlVpszkxwmSLL0nhTLf6VkG2eDb4fWKOPMiNTP0PMHlnie4F9YJIvMj7R3SmfsKIFJxxdpbxkMKq0bzT000aYF8Wxxi'
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
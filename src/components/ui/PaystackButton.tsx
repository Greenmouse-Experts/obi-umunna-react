

import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaystackPaymentButton = ({ email, amount, onSuccess, onClose }:any) => {
  const publicKey = 'pk_test_77297b93cbc01f078d572fed5e2d58f4f7b518d7'; 

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: (reference: { reference: string; }) => {
      toast.success("Payment successful!");
      onSuccess(reference.reference); // Pass the reference ID
    },
    onClose: () => {
      toast.info("Payment closed!");
      onClose();
    },
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPaymentButton;

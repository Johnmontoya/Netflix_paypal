import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { selectPrice } from '../features/PriceSlice';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";


const Paypal = () => {
  const price = useSelector(selectPrice);
  const paypal = useRef();
  const [orderID, setOrderID] = useState(false)
  const [success, setSuccess] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState("")

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Netflix Subscripcion",
          amount: {
            currency_code: "USD",
            value: price
          }
        }
      ],
      application_contenxt: {
        shipping_preference: "NO _SHIPPING"
      }
    })
    .then((orderID) => {
      setOrderID(orderID);
      return orderID;
    })
  };
  
  const onApprove = (data, actions) => {
    return actions.order.capture()
      .then((details) => {
        const { payer } = details;
        setSuccess(true);
      })
  }

  const onError = (data, actions) => {
    setErrorMessage("Ha ocurrido un error con el pago")
  }

  useEffect(() => {
    if(success){
      alert("Pago realizado!")
    }
  }, [success])

  return (
    <PayPalScriptProvider options={{ "client-id": "AZ8su6lkTTIUqDlXsHXyZOtDLZlfT6m6p_0MteGOBRtjAZ9HLBDx4QilDmLYX4VhqoURL_j32Zye1qAi"}}>
      <PayPalButtons style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove}/>
    </PayPalScriptProvider>
  )
}

export default Paypal
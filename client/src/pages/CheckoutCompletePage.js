import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"; 
import axios from 'axios';


const CheckoutCompletePage = () => {
  const history = useHistory();

  useEffect(() => {
    axios
      .delete("/api/cart")
      .finally(() => {
        history.replace("/cart?checkout=success");
      });

  }, []);
  return null;
}

export default CheckoutCompletePage

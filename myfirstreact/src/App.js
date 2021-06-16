import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import { useCardForm } from "reactjs-credit-card";
import { useState } from "react";

function App() {
  //useCardForm is a hook which returns a function.If this function calls,function returns credit card form data values and their validations
  const getFormData = useCardForm();
  const [numberValid, setNumberValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const [data, isValid] = getFormData();
    if (!data.number.isValid) setNumberValid(false); //we'll set a hook to show a error if card number is invalid

    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? "valid" : "invalid"
        }`
      );
  }

  function handleFocus() {
    setNumberValid(true);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <Card fixClass="fix-new" cardClass="card-new" />
      <div class="form-group">
          <br></br>
          <h5>Card Number</h5>
          <CardNumber 
            placeholder="Card Number"
            className={`input-text${!numberValid ? " error" : ""}`}
            onFocus={handleFocus}/>
      </div>
      <div class="form-group">
          <h5>Card Name</h5>
          <CardHolder placeholder="Card Holder" className="input-text" />
      </div>
          <div className="flex-wrapper">
            <div className="semi flex-wrapper">
                <div class="col-6">
                  <div className="from-group">
                  <h5 class="control-label mb-1">Expiration Date</h5>
                <ValidThruMonth placeholder="Card Holder" className="input-text semi"/>
                <ValidThruYear placeholder="Card Holder" className="input-text semi"/>
                  </div>
            </div>
          <div class="row">
                <h5>CVV</h5>
                <CardSecurityCode value="CVV"placeholder="CVV" className="input-text semi" />
            </div>
          </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
  );
}

export default App;
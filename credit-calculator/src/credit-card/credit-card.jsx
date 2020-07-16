import React from 'react';
import './credit-card.scss';


const CreditCard = (props) => {
const { month, credits } = props;
return <div className="card border-secondary m-3" style={{width: '18rem'}}>
<div class="card-header capitalize-title">{month}</div>
  <div className="card-body">
    <p className="card-text">Available credits: <span className="text-primary">{credits}</span></p>
  </div>
</div>
}

export default CreditCard;
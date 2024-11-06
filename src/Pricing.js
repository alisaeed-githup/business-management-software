import React from 'react';

function Pricing() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Pricing</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Basic</h3>
          <p>$10/month</p>
        </div>
        <div className="col-md-4">
          <h3>Standard</h3>
          <p>$20/month</p>
        </div>
        <div className="col-md-4">
          <h3>Premium</h3>
          <p>$30/month</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

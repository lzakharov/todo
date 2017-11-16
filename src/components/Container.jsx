import React from 'react';

const Containter = ({children}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {children}
      </div>
    </div>
  </div>
);

export default Containter;

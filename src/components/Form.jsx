import React from 'react';

const Form = ({onSubmit, children}) => (
<form onSubmit={onSubmit}>
  <div className="form-group">
    {children}
  </div>
</form>
);

export default Form;

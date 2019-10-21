import React from "react";

function AppHooks(initialState) {
  const [values, setValues] = React.useState(initialState);

  React.useEffect(() => {
  
  }, [values]);

  function handleChange(event) {
    console.log("handleChange");
    console.log(event);
    setValues({
      ...values,
      [event.name]: event.value
    });
  }

  return {  
    handleChange, 
    values  
  };
}

export default AppHooks;

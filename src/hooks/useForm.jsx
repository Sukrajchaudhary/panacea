import { useState } from 'react';


const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    
    if (validate) {
      let validationErrors = validate(values);
      setErrors(validationErrors);
    }
  };

  
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();

    let validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

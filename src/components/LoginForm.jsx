import React from 'react';
import useForm from '../hooks/useForm';

// Validation function for the form
const validateForm = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateForm
  );

  const submitForm = () => {
    console.log('Form Submitted!', values);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.username && <p className="text-red-500 text-sm mt-2">{errors.username}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

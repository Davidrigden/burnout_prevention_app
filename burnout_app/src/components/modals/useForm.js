import { useState, useEffect } from 'react';
import {addNewUser, loginUser} from '../../components/lib/app'
import HomePage from '../../components/pages/Homepage';
import HomePageLooged from '../../components/pages/LoggedHomepage'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    FirstName: '',
    LastName:'',
    email: '',
    password: '',
    password2: '',
     Phone:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(values)

 addNewUser(values);

    localStorage.setItem("user",JSON.stringify(values))
    setIsSubmitting(true);
  };
  const handleLogSubmit = e => {
    e.preventDefault();
    loginUser(values)
   var user = JSON.parse(localStorage.getItem("user"))
     if(user.username == values.username)
     <HomePageLooged/>
    //  setErrors(validate(values));
    //   setIsSubmitting(true);
    //   return <HomePageLooged />
  };

  useEffect(
    () => {
      
    },
    [errors]
  );

  return { handleChange, handleSubmit, handleLogSubmit, values, errors };
};

export default useForm;
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import "./testdb.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register2 = () => {
    const initalValues = {
        username: "",
        password: ""
      }

      const validationSchema = Yup.object().shape({
        username: Yup.string().min(6).max(12).required("You must enter username !"),
        password: Yup.string().min(6).max(20).required("You must enter password !")
      })

      const Navigate = useNavigate();
      const onSubmit = (data) =>{
        axios.post("http://localhost:8080/auth", data).then(() =>{
              Navigate('/Login');
            console.log(data);
        });
      }

  return (
    <div className='form-create'>
        <Formik initialValues={initalValues} 
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          >
            <Form>
            <h1>Create data</h1>
            <div className="input-dt">
              <label>Username: </label>
                  <ErrorMessage name="username" component="span" />
                  <Field 
                      id="input"
                      name="username"
                      placeholder="Enter username here...."
                  />
            </div>
            <div className='input-dt'>
              <label>Password: </label>
                  <ErrorMessage name="password" component="span" />
                  <Field 
                      id="input"
                      name="password"
                      placeholder="Enter password here...."
                  />
            </div>
            <div className='btn-dt'>
              <button  type='submit'>Sign Up</button>
            </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Register2;
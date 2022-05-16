import React from "react";
import "../testdata/testdb.scss";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import

const CreatDT = () => {
  let Navigate = useNavigate();
  const initalValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/posts", data).then((res) => {
      Navigate("/displaydata");
      console.log("Create successfull !");
    });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    address: Yup.string().required(),
    price: Yup.number().required(),
    member: Yup.number().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  return (
    <div className="form-create">
      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <h1>Create data</h1>
          <div className="input-dt">
            <label>Title: </label>
            <ErrorMessage name="title" component="span" />
            <Field id="input" name="title" placeholder="Enter title here...." />
          </div>
          <div className="input-dt">
            <label>address: </label>
            <ErrorMessage name="address" component="span" />
            <Field
              id="input"
              name="address"
              placeholder="Enter address here...."
            />
          </div>
          <div className="input-dt">
            <label>price: </label>
            <ErrorMessage name="price" component="span" />
            <Field id="input" name="price" placeholder="Enter price here...." />
          </div>
          <div className="input-dt">
            <label>member: </label>
            <ErrorMessage name="member" component="span" />
            <Field
              id="input"
              name="member"
              placeholder="Enter member here...."
            />
          </div>
          <div className="input-dt">
            <label>Username: </label>
            <ErrorMessage name="username" component="span" />
            <Field
              id="input"
              name="username"
              placeholder="Enter username here...."
            />
          </div>
          <div className="btn-dt">
            <button type="submit">Create</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatDT;

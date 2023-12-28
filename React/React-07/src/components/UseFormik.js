import { useFormik } from "formik";
import React from "react";

export default function UseFormik() {
  // const formik = useFormik({
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "bedirhan",
      lastName: "balci",
      email: "bedirhanbalci@deneme.com",
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="row mb-3">
        <div className="col">
          <h1>Use Formik2</h1>
          <hr />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 offset-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="form-control"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="form-control"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@doe.com"
                className="form-control"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 pt-2 text-center">
              <button className="btn btn-primary" type="submit">
                Send Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

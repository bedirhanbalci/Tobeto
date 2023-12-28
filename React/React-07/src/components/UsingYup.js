import { useFormik } from "formik";
import React from "react";
import validations from "./Validations";

export default function UsingYup() {
  // const formik = useFormik({
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: validations,
  });

  return (
    <div>
      <div className="row mb-3">
        <div className="col">
          <h1>Using Yup</h1>
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
              <div className="badge small bg-danger text-end">
                {errors.firstName}
              </div>
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
              <div className="badge small bg-danger text-end">
                {errors.lastName}
              </div>
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
              <div className="badge small bg-danger text-end">
                {errors.email}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                className="form-control"
                value={values.password}
                onChange={handleChange}
              />
              <div className="badge small bg-danger text-end">
                {errors.password}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="repassword" className="form-label">
                Re-Password
              </label>
              <input
                type="password"
                id="repassword"
                name="repassword"
                placeholder="******"
                className="form-control"
                value={values.repassword}
                onChange={handleChange}
              />
              <div className="badge small bg-danger text-end">
                {errors.repassword}
              </div>
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

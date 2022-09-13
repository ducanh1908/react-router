import React from "react";
import { useFormik } from "formik";

function Form() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import { useState, useSearchParams } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
Author.propTypes = {};

function Author(props) {
  const [selected,setSelected] = useState(-1)
  const [list, setListAuthor] = useState([
    {
      name: "To Huu",
      age: 76,
    },
    {
      name: "Nguyen Trai",
      age: 80,
    },
  ]);
  

  const validateForm = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    age: Yup.number().required("Required"),
  });
  const [author, setAuthor] = useState({
    name: "",
    age: "",
  });
  const handleDelete = (index) => {
    let newListAuthor = list.filter((item, id) => !(id === index));
    setListAuthor(newListAuthor);
  };
  const handleEdit = (index) => {
    setAuthor({
      name: list[index].name,
      age: list[index].age,
    });
    setSelected(index);
    console.log(index);
    
  };
  const handleSubmit = (values, form, event) => {
    if(selected === -1) {
      setListAuthor([...list, values]);
      console.log(values);
    }
    else {
      list.splice(selected, 1, values);
      setListAuthor(list);
      setSelected(-1)
    }
    
    form.resetForm();
    setAuthor({
      name: "",
      age: "",
    })
  };
  
  return (
    <div className="container">
      <h1>Create Author</h1>
      <Formik
        initialValues={author}
        enableReinitialize
        validationSchema={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <Field className="name" type="text" name="name" />
            <ErrorMessage
              name="name"
              className="alert  alert-danger alert-dismissible"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="col-sm-2 col-form-label">
              Age
            </label>
            <Field className="age" type="text" name="age" />
            <ErrorMessage
              name="age"
              className="alert  alert-danger alert-dismissible"
              component={"span"}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </Form>
      </Formik>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((book, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{book.name}</td>
              <td>{book.age}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Author;

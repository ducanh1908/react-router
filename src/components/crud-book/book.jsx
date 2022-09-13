import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

Book.propTypes = {};

const listAuthors = ['John', 'Davis', 'Michael', 'Rome'];

function Book(props) {
  const [selected, setSelected] = useState(-1);
  const [list, setList] = useState([
    {
      name: 'ABC',
      author: 'Jonh',
      amount: 1,
    },
    {
      name: 'DCE',
      author: 'Davis',
      amount: 1,
    },
  ]);
  const validateForm = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
    amount: Yup.number().required('Required'),
  });
  const [book, setBooks] = useState({
    name: '',
    author: listAuthors[0],
    amount: '',
  });
  const handleDelete = (index) => {
    // let newList = [];
    // for (let i = 0; i < list.length; i++) {
    //   if (i !== index) {
    //     newList.push(list[i]);
    //   }
    // }
    const newList = list.filter((item, i) => !(i === index));
    setList(newList);
  };

  const handleEdit = (index) => {
    setBooks({
      name: list[index].name,
      author: list[index].author,
      amount: list[index].amount,
    });
    setSelected(index);
  };
  const handleSubmit = (values, form) => {
    if (selected === -1) {
      console.log(values);
      setList([...list, values]);
    } else {
      list.splice(selected, 1, values);
      setSelected(-1);
      setList(list);
    }
    form.resetForm();

    setBooks({
      name: '',
      author: listAuthors[0],
      amount: '',
    });
  };

  return (
    <div>
      <h1>Create Book</h1>
      <Formik initialValues={book} enableReinitialize validationSchema={validateForm} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" /> <br />
          <ErrorMessage component="div" name="name" />
          <label htmlFor="name">Author</label>
          <Field name="author" as="select" className="my-select">
            {listAuthors.map((author) => (
              <option value={author}>{author}</option>
            ))}
          </Field>
          <br />
          <label htmlFor="name">Amount</label>
          <Field name="amount" type="number" />
          <ErrorMessage component="div" name="amount" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <h1>List Book</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.amount}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
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

export default Book;

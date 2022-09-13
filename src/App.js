import './App.css';
// import Contact from './components/contact/contact';
// import Form from './components/header/form';
import Book from './components/crud-book/book';
import Author from './components/crud-author/author';
import Header from './components/header/header';
import { Routes, Route, Link, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link " aria-current="page" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/books" className="nav-link">
                    Book
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink to="/authors" className="nav-link ">
                    Author
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/books" element={<Book />} />
        <Route path="/authors" element={<Author />} />
      </Routes>
    </>
  );
}

export default App;

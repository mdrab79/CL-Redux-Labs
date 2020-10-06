import {NavLink} from "react-router-dom";
import React from "react";

const Layout = ({children}) => {
  const styles = {
    main: {
      marginTop: "3rem"
    }
  };

  return (
    <>
      <nav className="navbar has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <h2 className="navbar-item title is-4">TwojePrzepisy.pl</h2>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/recipes" className="navbar-item" activeClassName="is-active">
                <span className="icon has-text-primary">
                  <i className="fas fa-folder"/>
                </span>
                <span>Przepisy</span>
              </NavLink>
              <NavLink to="/products" className="navbar-item" activeClassName="is-active">
                <span className="icon has-text-danger">
                  <i className="fas fa-pizza-slice"/>
                </span>
                <span>Produkty</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={styles.main}>
        <div className="columns">
          <div className="column is-one-fifth">
          <aside className="menu" style={{marginRight: "4rem", marginTop: "1rem"}}>
            <p className="menu-label">
              Podstrony
            </p>
            <ul className="menu-list">
              <li><NavLink to={"/"} exact activeClassName={"is-active"}>Strona główna</NavLink></li>
              <li><NavLink to={"/recipes"} exact activeClassName={"is-active"}>Przepisy</NavLink></li>
              <li><NavLink to={"/products"} exact activeClassName={"is-active"}>Produkty</NavLink></li>
            </ul>
            <p className="menu-label">
              Akcje
            </p>
            <ul className="menu-list">
              <li><NavLink to={"/recipes/add"} activeClassName={"is-active"}>Dodaj Przepis</NavLink></li>
              <li><NavLink to={"/products/add"} activeClassName={"is-active"}>Dodaj Produkt</NavLink></li>
            </ul>
          </aside>
          </div>
          <div className="column is-four-fifths">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
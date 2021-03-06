import React from 'react';

import { Link, IndexLink } from 'react-router';

import NavLink from './components/NavLink';

class App extends React.Component {
  render() {
    return (
        <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">ReactLibrary</span>
                    <span className="mdl-layout-spacer"></span>
                    <nav className="mdl-navigation">
                        <NavLink to="/" onlyActiveOnIndex={true}
                        className="mdl-navigation__link">Home</NavLink>
                        <NavLink to="/about" className="mdl-navigation__link">About Project</NavLink>
                        <NavLink to="/books" className="mdl-navigation__link">Books</NavLink>
                    </nav>
                </div>
            </header>

            <main className="mdl-layout__content">
              {this.props.children}
            </main>
        </div>
    );
  }
}

export default App;

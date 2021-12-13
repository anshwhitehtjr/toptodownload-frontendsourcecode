import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { anchors, mode, title } = props;

    return (
        <nav className={ `navbar navbar-expand-lg navbar-${ mode } bg-${ mode }` }>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{ title }</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            anchors.map(e => {
                                return (
                                    <li key={ e.sno } className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={ `${ e.href }` }>{ e.title }</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// anchors = [{title: '', href: ''}, ]

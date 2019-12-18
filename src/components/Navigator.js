import React from 'react';
import {Link} from 'react-router-dom'

function Navigator() {

    return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
<button className="navbar-toggler navbar-toggler-right" type="button"
data-toggle="collapse" data-target="#navbarSupportedContent"aria-
controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id ="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-itemactive">
<Link className="nav-link" to="/"  >Trainings</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/ListCustomers">Customers</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/Calendar">Calendar</Link>
</li>
</ul >
 </div>
 </nav>
    );
}

export default Navigator;
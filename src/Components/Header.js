import React from 'react';
import '../css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{
    render(){
        var isLoggedIn = true;
        return (
            <header style={{'textAlign':'center'}}>
                <h1>Defect Tracker</h1>
                {isLoggedIn? 
                <>
                    <a href="#" id="logout">logout</a> <br/>
                    <span><a href="#" id="addDefect">Add Defect</a> &nbsp; <a href="#" id="viewDefects">View Defects</a></span>
                </>
                    : <a>login</a>}
            </header>
        )
    }
}

export default Header
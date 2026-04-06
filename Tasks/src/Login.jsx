import React from "react"
import { Link } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    updateData(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    dologin() {
        var user = localStorage.getItem("username")
        var pass = localStorage.getItem("password")
        if (this.state.txt1 == user && this.state.txt2 == pass) {
            alert("Login Success")
            window.location.href = "/Profile"
        }
        else {
            alert("Login Failed")
        }
    }
    render() {
        return (<>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Login</h1>
            <form action="" style={{ border: "1px solid black", padding: "10px", }}>
                Username:
                <input style={{ margin: "10px", display: "block" }} type="text" name="txt1" onChange={this.updateData.bind(this)} />
                Password:
                <input style={{ margin: "10px", display: "block" }} type="password" name="txt2" onChange={this.updateData.bind(this)} />
                <input style={{ margin: "10px" }} type="button" value="Login" onClick={this.dologin.bind(this)} />
            </form>
        </>);
    }
}

export default Login;
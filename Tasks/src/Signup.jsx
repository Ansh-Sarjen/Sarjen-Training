import React from "react"
import { Link } from "react-router-dom"

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    confirmpass(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    dosignup() {
        if (this.state.txt1 == "" || this.state.txt2 == "" || this.state.txt3 == "") {
            this.setState({ msg: "Please fill all the fields" })
        }
        else if (this.state.txt2 != this.state.txt3) {
            this.setState({ msg: "Password and Confirm Password do not match" })
        }
        else {
            this.setState({ msg: "Signup Success" })
            localStorage.setItem("username", this.state.txt1)
            localStorage.setItem("password", this.state.txt2)
            window.location.href = "/Profile"
        }
    }

    updateData(e) {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.type === "checkbox") {
            let hobbies = this.state.txt5 ? this.state.txt5.split(',') : [];
            if (e.target.checked) {
                hobbies.push(e.target.value);
            } else {
                hobbies = hobbies.filter(h => h !== e.target.value);
            }
            this.setState({ txt5: hobbies.join(',') });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    render() {
        return (<>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Signup</h1>
            <form action="" style={{ border: "1px solid black", padding: "10px", }}>
                Username:
                <input style={{ margin: "10px", display: "block" }} type="text" name="txt1" placeholder="Username" onChange={this.updateData.bind(this)} />
                Password:
                <input style={{ margin: "10px", display: "block" }} type="password" name="txt2" placeholder="Password" onChange={this.confirmpass.bind(this)} />
                Confirm Password:
                <input style={{ margin: "10px", display: "block" }} type="password" name="txt3" placeholder="Confirm Password" onChange={this.confirmpass.bind(this)} />
                Gender:
                <input style={{ margin: "10px" }} type="radio" name="txt4" value="Male" onChange={this.updateData.bind(this)} />Male
                <input style={{ margin: "10px" }} type="radio" name="txt4" value="Female" onChange={this.updateData.bind(this)} />Female
                <input style={{ margin: "10px" }} type="radio" name="txt4" value="Other" onChange={this.updateData.bind(this)} />Other
                <br />
                Hobbies:
                <input style={{ margin: "10px" }} type="checkbox" name="txt5" value="Reading" onChange={this.updateData.bind(this)} />Reading
                <input style={{ margin: "10px" }} type="checkbox" name="txt5" value="Sports" onChange={this.updateData.bind(this)} />Sports
                <input style={{ margin: "10px" }} type="checkbox" name="txt5" value="Music" onChange={this.updateData.bind(this)} />Music
                <input style={{ margin: "10px" }} type="checkbox" name="txt5" value="Other" onChange={this.updateData.bind(this)} />Other
                <br />
                <input style={{ margin: "10px" }} type="button" value="Signup" onClick={this.dosignup.bind(this)} />
                {this.state.msg}
                <br />
                Already have an account?
                <input style={{ margin: "10px", display: "block" }} type="button" value="Login" onClick={() => { window.location.href = "/Login" }} />
            </form>
        </>);
    }
}

export default Signup;

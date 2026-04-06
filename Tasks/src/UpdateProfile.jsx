import React from "react"
import { Link } from "react-router-dom"

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: localStorage.getItem("username") || "",
            txt2: localStorage.getItem("password") || "",
            txt3: localStorage.getItem("password") || "",
            txt4: localStorage.getItem("gender") || "",
            txt5: localStorage.getItem("hobbies") || "",
            msg: ""
        }
    }

    updateData(e) {
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

    updateprofile() {
        if (this.state.txt1 === "" || this.state.txt2 === "" || this.state.txt3 === "") {
            this.setState({ msg: "Please fill all required fields" });
        } else if (this.state.txt2 !== this.state.txt3) {
            this.setState({ msg: "Passwords do not match" });
        } else {
            localStorage.setItem("username", this.state.txt1);
            localStorage.setItem("password", this.state.txt2);
            localStorage.setItem("gender", this.state.txt4);
            localStorage.setItem("hobbies", this.state.txt5);
            this.setState({ msg: "Profile Updated Successfully" });
        }
    }

    render() {
        const { txt1, txt2, txt3, txt4, txt5, msg } = this.state;
        const hobbiesList = txt5 ? txt5.split(',') : [];

        return (
            <>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/Profile">Profile</Link>
                </nav>
                <h1>Update Profile</h1>
                <form style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
                    Username:
                    <input
                        style={{ margin: "10px", display: "block" }}
                        type="text"
                        name="txt1"
                        value={txt1}
                        onChange={this.updateData.bind(this)}
                    />
                    Password:
                    <input
                        style={{ margin: "10px", display: "block" }}
                        type="password"
                        name="txt2"
                        value={txt2}
                        onChange={this.updateData.bind(this)}
                    />
                    Confirm Password:
                    <input
                        style={{ margin: "10px", display: "block" }}
                        type="password"
                        name="txt3"
                        value={txt3}
                        onChange={this.updateData.bind(this)}
                    />
                    Gender:
                    <input
                        style={{ margin: "10px" }}
                        type="radio"
                        name="txt4"
                        value="Male"
                        checked={txt4 === "Male"}
                        onChange={this.updateData.bind(this)}
                    />Male
                    <input
                        style={{ margin: "10px" }}
                        type="radio"
                        name="txt4"
                        value="Female"
                        checked={txt4 === "Female"}
                        onChange={this.updateData.bind(this)}
                    />Female
                    <input
                        style={{ margin: "10px" }}
                        type="radio"
                        name="txt4"
                        value="Other"
                        checked={txt4 === "Other"}
                        onChange={this.updateData.bind(this)}
                    />Other
                    <br />
                    Hobbies:
                    <input
                        style={{ margin: "10px" }}
                        type="checkbox"
                        name="txt5"
                        value="Reading"
                        checked={hobbiesList.includes("Reading")}
                        onChange={this.updateData.bind(this)}
                    />Reading
                    <input
                        style={{ margin: "10px" }}
                        type="checkbox"
                        name="txt5"
                        value="Sports"
                        checked={hobbiesList.includes("Sports")}
                        onChange={this.updateData.bind(this)}
                    />Sports
                    <input
                        style={{ margin: "10px" }}
                        type="checkbox"
                        name="txt5"
                        value="Music"
                        checked={hobbiesList.includes("Music")}
                        onChange={this.updateData.bind(this)}
                    />Music
                    <input
                        style={{ margin: "10px" }}
                        type="checkbox"
                        name="txt5"
                        value="Other"
                        checked={hobbiesList.includes("Other")}
                        onChange={this.updateData.bind(this)}
                    />Other
                    {/* <br /> */}
                    <input
                        style={{ margin: "10px" }}
                        type="button"
                        value="Update"
                        onClick={this.updateprofile.bind(this)}
                    />
                    <div style={{ color: "green", margin: "10px" }}>{msg}</div>
                    {/* <br /> */}
                    <div>
                        <input type="button" style={{ marginRight: "10px" }} value="Back" onClick={() => { window.location.href = "/Profile" }} />
                        <input type="button" value="Logout" onClick={() => {
                            localStorage.removeItem("username")
                            localStorage.removeItem("password")
                            localStorage.removeItem("gender")
                            localStorage.removeItem("hobbies")
                            window.location.href = "/Login"
                        }} />
                    </div>
                </form>

            </>
        );
    }
}

export default UpdateProfile;
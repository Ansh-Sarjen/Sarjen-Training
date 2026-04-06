import React from "react"

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var user = localStorage.getItem("username")
        return (<>
            <h1>Profile</h1>
            <p>Welcome {user}</p><br />
            <input type="button" style={{ marginRight: "10px" }} value="Update Profile" onClick={() => { window.location.href = "/UpdateProfile" }} /><br /><br />
            <input type="button" style={{ marginRight: "10px" }} value="Logout" onClick={() => {
                localStorage.removeItem("username")
                localStorage.removeItem("password")
                window.location.href = "/Login"
            }} />
        </>);
    }
}

export default Profile;
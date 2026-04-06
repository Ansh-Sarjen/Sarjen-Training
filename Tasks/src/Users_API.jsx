import React from "react"

class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ users: data, loading: false }))
            .catch(error => {
                console.error("Error fetching users:", error);
                this.setState({ loading: false });
            });
    }

    render() {
        const { users, loading } = this.state;
        return (
            <div style={{ padding: "20px" }}>
                <h1>Users API</h1>
                <button onClick={() => this.setState({ loading: true })}>Refresh</button>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                {loading ? (
                    <p>Loading users...</p>
                ) : users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table style={{ border: "1px solid black", width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f2f2f2" }}>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.name}</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}

export default UsersAPI
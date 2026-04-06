import React from 'react'
import { Link } from 'react-router-dom'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, msg: "" }
    }
    increment() {
        if (this.state.counter >= 10) {
            this.setState({ msg: "Counter cannot be greater than 10" })
        }
        else {
            this.setState({ counter: this.state.counter + 1, msg: "" })
            localStorage.setItem("counter", this.state.counter + 1)
        }
    }
    decrement() {
        if (this.state.counter <= 0) {
            this.setState({ msg: "Counter cannot be less than 0" })
        }
        else {
            this.setState({ counter: this.state.counter - 1, msg: "" })
            localStorage.setItem("counter", this.state.counter - 1)
        }
    }
    render() {
        return (<>
            <nav>
                <Link to="/">HOME</Link>
            </nav>
            <h1>Counter Application</h1>
            {this.state.counter}
            <input style={{ margin: "10px" }} type="button" value="+" onClick={this.increment.bind(this)} />
            <input style={{ margin: "10px" }} type="button" value="-" onClick={this.decrement.bind(this)} />
            <input style={{ margin: "10px" }} type="button" value="Reset" onClick={() => {
                this.setState({ counter: 0 });
                localStorage.setItem("counter", 0)
            }} />
            {this.state.msg}

        </>);
    }
}

export default Counter;
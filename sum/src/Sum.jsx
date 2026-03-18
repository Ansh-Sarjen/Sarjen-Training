import React from 'react'
class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    dosum() {
        var c = parseInt(this.state.txt1) + parseInt(this.state.txt2)
        this.setState({msg: "Sum is " + c})
    }
    render() {
        return (<>

            <h1>Sum With Arrow Functions</h1>
            No1. <input type='text' name='txt1' onChange={(e) => this.setState({ txt1: e.target.value })} />
            No2. <input type='text' name='txt2' onChange={(e) => this.setState({ txt2: e.target.value })} />

            <input type="button" value="Sum" onClick={this.dosum.bind(this)} />
            {this.state.msg}
        </>);
    }
}

export default Sum; 
import React from 'react'
class Sum2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    updateData(e){
        this.setState({[e.target.name]:e.target.value})
    }

    doSum(){
        var c = parseInt(this.state.txt1) + parseInt(this.state.txt2)
        this.setState({msg:"Sum is" + c})
    }
    render() {
        return (<>
        <h1>Sum with Dynamic Textbox</h1>
            No 1.<input type="text" name='txt1' onChange={this.updateData.bind(this)}/>
            No 2.<input type="text" name='txt2' onChange={this.updateData.bind(this)}/>
            {/* No 3.<input type="text" name='txt3' onChange={this.updateData.bind(this)}/> */}
            <input type="button" value = "+"onClick={this.doSum.bind(this)}/>
            {this.state.msg}
        </>);
    }
}

export default Sum2;
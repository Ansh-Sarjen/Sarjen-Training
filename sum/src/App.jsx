import React from 'react'
class sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  dosum(){

  }
  render() {
    return (<>

      No1. <input type='text' name='txt1' onChange={(e)=>this.setState({txt1:e.target.value})}/>
      No2. <input type='text' name='txt2' onChange={(e)=>this.setState({txt2:e.target.value})}/>

      

    </>);
  }
}

export default sum; 
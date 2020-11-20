import React, {Component} from 'react';
import { Link } from "react-router-dom";

class About extends Component {

    // by using js going to diffrent page
    gotohome=()=>
    {
        this.props.history.push('/')
    }

  render()
  {
    return(
      <div>
      <h1>About Page</h1>
      {/* <Link to="/">Go to home</Link> */}
      <button onClick={this.gotohome}>Go to home</button>
    </div>
    )
  }
}

export default About;

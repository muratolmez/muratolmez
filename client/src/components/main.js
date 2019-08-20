import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Main extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
      };
      
      
      callApi = async () => {
        const response = await fetch('/testAPI/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
      
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/testAPI/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: body });
      };
      
    render() {
        return (
            <div className="App">
            <p>{this.state.response}</p>
            <form onSubmit={this.handleSubmit}>
              <p>
                <strong>Post to Server:</strong>
              </p>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseToPost}</p>
            <Link to="/finance/">finance</Link>
          </div>
    
            );
    }
}

export default Main;

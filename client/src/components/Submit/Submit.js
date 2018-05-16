import React, { Component } from 'react';
import API from '../../utils/API';
class Submit extends Component {
  state = {
    name: "",
    image: ""
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API
      .saveChihuahua(this.state)
      .then(res => {
        this.setState({
          name: "",
          image: ""
        });
      }).catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Submit Page</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              onChange={this.handleInputChange}
              value={this.state.image}
            />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default Submit;
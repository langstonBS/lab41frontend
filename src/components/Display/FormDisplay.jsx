import React from 'react'
import { postCereal} from '../../service/cerealService'


function FormDisplay() {

  state = {}

  handleSubmit = event => {
    event.preventDefault();
    postCereal(this.state)
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>add a Cereal and rate it</h2>
        </label>
        <input input type="text" value={this.state.cerealName} onChange={this.handleChange} ></input>
        <label>
          <h4>Talk about it</h4>
        </label>
        <textarea type='text' value={this.state.cerealThoughs} onChange={this.handleChange} ></textarea>
        <label>
          <h4>Rate it</h4>
        </label>
        <input type='number' value={this.state.cerealRatings} onChange={this.handleChange}></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormDisplay

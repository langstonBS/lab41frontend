import React, { useState } from 'react'
import { postCereal} from '../../service/cerealService'


function FormDisplay() {

  const [cerealName, setCerealName] = useState('');
  const [cerealThoughs, setCerealThoughs] = useState('');
  const [cerealRatings, setCerealRatings] = useState('');

  const handleChange = ({target}) => {
    if(target.cerealName === 'cerealName') setCerealName(target.value);
    if(target.cerealThoughs === 'cerealThoughs') setCerealThoughs(target.value);
    if(target.cerealRatings === 'cerealRatings') setCerealRatings(target.cerealRatings)
  }

  const handleSubmit = event => {
    event.preventDefault();
    postCereal(cerealName, cerealThoughs, cerealRatings)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>add a Cereal and rate it</h2>
        </label>
        <input
          type="text"
          name="cerealName"
          value={cerealName}
          onChange={handleChange} />
        <label>
          <h4>Talk about it</h4>
        </label>
        <textarea
          type='text'
          name="cerealThoughs"
          value={cerealThoughs}
          onChange={handleChange} >
          </textarea>
        <label>
          <h4>Rate it</h4>
        </label>
        <input
          type='number'
          value={cerealRatings}
          name="cerealRatings"
          onChange={handleChange} />
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormDisplay

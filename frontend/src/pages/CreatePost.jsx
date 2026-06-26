import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {

  const navigate = useNavigate()

  const handleSubmit = async(e) => {

    e.preventDefault()

    const formData = new FormData(e.target)
  axios.post('http://localhost:3000/create-post', formData)
  .then(res =>{

    navigate('/')
    e.target.reset()
    
  })
  .catch(err => {
    console.error(err)
  })    


  }


  return (
    <div className='create-post'>
      <h1>Create Post</h1>

      <form
      onSubmit={handleSubmit}
      >
        <input type="file" name="image" required />
        <input type="text" name="caption" placeholder="Enter Caption Here"  required/>
        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default CreatePost

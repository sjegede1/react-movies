import React, { useState } from 'react'

function Form(props) {
    const [formData,setFormData] = useState({
        searchTerm: "",
    })

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.movieSearch(formData.searchTerm)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchTerm" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Form
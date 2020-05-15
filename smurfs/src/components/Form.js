import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { postNewData } from '../actions'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: '',
}

const Form = props => {

    const [ formValues, setFormValues ] = useState(initialFormValues)

    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setFormValues({...formValues, [name]: value})
    }
    const onFormSubmit = e => {
        e.preventDefault()

        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height,
        }

        axios.post(`http://localhost:3333/smurfs`, newSmurf)
            .then(response => {
                props.postNewData(response.data)
            })

        setFormValues(initialFormValues)
    }
    return (
        <div className='formContainer'>
            <h3>Add To Village</h3>
            <form>
                <input
                name='name'
                type='text'
                value={formValues.name}
                onChange={inputHandler}
                placeholder='Name'
                ></input>

                <input
                name='age'
                type='text'
                value={formValues.age}
                onChange={inputHandler}
                placeholder='Age'
                ></input>

                <input
                name='height'
                type='text'
                value={formValues.height}
                onChange={inputHandler}
                placeholder='Height'
                ></input>
            </form>

            <button onClick={onFormSubmit}>Add</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        apiData: state.apiData
    }
}
export default connect(mapStateToProps, {postNewData})(Form)
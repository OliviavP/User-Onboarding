import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import schema from './validation/formSchema'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
}

const initialErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [users, setUsers] = useState([])

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validat(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = () => {
    axios
      .post('https://reqres.in/api/users', formValues)
      .then((res) => {
        setUsers([res.data, ...users])
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialValues))
  }
  return (
    <div className='App'>
      <Form
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
      {users.map((user) => {
        ;<div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      })}
    </div>
  )
}

export default App

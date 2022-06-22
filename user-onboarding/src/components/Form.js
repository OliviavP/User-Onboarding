import React from 'react'

const Form = (props) => {
  const { change, submit, errors } = props
  const { name, email, password, tos } = props.values

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target
    const newValue = type === 'checkbox' ? checked : value
    change(name, newValue)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }
  return (
    <div>
      <h1>Form</h1>
      <p>{errors.first_name}</p>
      <p>{errors.last_name}</p>
      <p>{errors.email}</p>
      <p>{errors.password}</p>
      <p>{errors.tos}</p>
      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input
            type='text'
            name='first_name'
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='last_name'
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input type='email' name='email' value={email} onChange={onChange} />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms of Service:
          <input type='checkbox' name='tos' checked={tos} onChange={onChange} />
        </label>
        <input type='submit' value='Create Form' />
      </form>
    </div>
  )
}
export default Form

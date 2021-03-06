import React from 'react'
import validate from './validateInfo'
import useForm from './useForm'
import './Form.css'

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate)

  // I will be working on this validation, a good approach is to make a useState
  const hiddenUserNameErrorText = values.username === ''
  const hiddenEmailErrorText = values.email === ''
  const hiddenPasswordErrorText = values.password.length !== 6
  const hiddenPassword2ErrorText = values.password2 !== values.password || values.password2.length === 0

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Create account</h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {hiddenUserNameErrorText ? errors.username && <p>{errors.username}</p> : null}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {hiddenEmailErrorText ? errors.email && <p>{errors.email}</p> : null}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {hiddenPasswordErrorText ? errors.password && <p>{errors.password}</p> : null}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {hiddenPassword2ErrorText ? errors.password2 && <p>{errors.password2}</p> : null}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/'>here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup

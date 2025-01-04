import './App.css'
import { useState } from 'react'
import { validateEmail } from './utils'

const PasswordErrorMessage = () => {
  return <p className="FieldError">Password should have at least 8 characters</p>
}

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({
    value: '',
    isTouched: false
  })
  const [role, setRole] = useState('')

  const getIsFormValid = () => {
    // Implement this function
    // console.log(`
    //   Password: ${password.isTouched}
    //   firstName: ${firstName}
    //   email: ${email}
    //   role: ${role}
    //   validateEmail: ${validateEmail(email)}
    //   `)
    if (
      firstName &&
      validateEmail(email) &&
      Number(password.value.length) > 7 &&
      (role === 'individual' || role === 'business')
    ) {
      return true
    } else {
      return false
    }
  }

  const clearForm = () => {
    // Implement this function
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({
      value: '',
      isTouched: false
    })
    setRole('')
  }

  // Logic for password
  const handlePassword = e => {
    setPassword({
      ...password,
      isTouched: true,
      value: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!getIsFormValid()) {
      return
    }
    alert('Account created!')

    clearForm()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={handlePassword}
            />

            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}>
              <option
                value=""
                disabled>
                Role
              </option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default App

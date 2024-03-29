import React from 'react'
import styles from "../../styles/id/login.module.css"
import { useState } from 'react'
import Link from 'next/link'
// import { signIn } from 'next-auth/react'

const SignIn = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('') 
    const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    setLoading(true)

            console.log('helol')
    const response = await fetch(
      'https://backend-api-2022.onrender.com/api/auth/authorize',
      {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
      )

    const json = await response.json()
    console.log('her')
    if (json.status=='ok') {
    //   localStorage.setItem('auth-token', json.authToken)
      localStorage.setItem('status', 'authenticated')
      // localStorage.setItem('email', json.email)
      console.log(json.data)
      localStorage.setItem('userid' , json.data._id)
      localStorage.setItem('token' , json.data.token)
      localStorage.setItem('email' , json.email)
      // localStorage.setItem("user_id", json.user_id);
      window.alert('logged in successfully!!')
      console.log('jij')
      window.location.href = 'https://www.ecellbphc.in/id/portal'
       setLoading(false)
    } else {
      window.alert('Invalid Credentials!!')
      console.log('iu')
       setLoading(false)
    }

   
  }
  return <>
        <div className={styles.contain}>
            <div className={styles.header}>Internship Drive</div>
            <div className={styles.subheader}>Log In</div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          {/* <h1>{loginError}</h1> */}
          <input
            type="email"
            className={styles.inputField}
            name="username"
            placeholder="ID / Email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            className={styles.inputField}
            name="pass"
            placeholder="Password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.butn}>
        <button
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          {loading? (<>Loading...</>):(<>SIGN IN</>)}
        </button>
      </div>
      <div className={styles.forgot}>
        <Link href="/id/signUp" className={styles.forgotPwd}>
          Do not have an account?
        </Link>
      </div>
    </div>
  </>;
}

export default SignIn
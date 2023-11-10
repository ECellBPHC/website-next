import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbar1 from '../components/id/navbarID'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const [nav, setNav] = useState(true)
  const [foot, setFoot] = useState(false)
  const [render, setrender] = useState('hrlo')

  // if (process.browser) {
  //   let param = window.location.pathname
  //   if (param == "/id/portal") {
  //     setrender("ID")
  //     console.log(render)
  //   }
  // }
  const [status, setStatus] = useState('')
  const [session, setSession] = useState({
    _id: '',
    token: ''
  })
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (process.browser) {
      let params = window.location.pathname
      console.log(params)

      if (
        params == '/about' ||
        params == '/' ||
        params == '/competitions' ||
        params == '/bpRegisteration' ||
        params == '/commingsoon' ||
        params == '/esummit' ||
        params == '/peer' ||
        params == '/programs' ||
        params == '/404' ||
        params == '/blog/' ||
        params == '/groundreality' ||
        params == '/beyondprofits' ||
        params == '/startupexpo'
      ) {
        setNav(true)
        setFoot(false)
        console.log(nav)
      } else if (
        params == '/id/viewCompany' ||
        params == '/id/signIn' ||
        params == '/id/signUp' ||
        params == '/id/paynow' ||
        params == '/id/portal' ||
        params == '/id/profile'
      ) {
        setNav(false)
        setFoot(true)
        console.log(nav)
        setStatus(localStorage.getItem('status'))
        setSession({
          _id: localStorage.getItem('userid'),
          token: localStorage.getItem('token')
        })
        setEmail(localStorage.getItem('email'))
      } else if (params == '/id/paynow') {
        setNav(false)
        setFoot(true)
      }
    }
  }, [render])

  console.log(render)
  // console.log(nav + "hello");
  return (
    <>
      <Head>
        <title>ECell | Launchpad </title>
      </Head>
      {/* <SessionProvider session={session}> */}
      <div className={nav ? 'oldnav' : 'Navbar'}>
        {nav ? (
          <Navbar hook={setrender} />
        ) : (
          <Navbar1 email={email} session={session} status={status} />
        )}
      </div>
      <div className={nav ? 'nav0' : 'null'}>
        <Component {...pageProps} hooks={setrender} />
      </div>
      {foot ? null : <Footer />}
      {/* </SessionProvider> */}
    </>
  )
}

export default MyApp

import React from 'react'
import styles from '../../styles/id/companyCards.module.css'
import Image from 'next/image'
import launchpad from '../../assets/Launchpad.png'
import { useSession } from 'next-auth/react'

function CompanyCards() {
  const data = [
    {
      id: 1,
      image: './',
      prop1: 'Company X',
      prop2: 'Unpaid',
      prop3: 'XYZ developer',
      path: '',
      status: 'Apply'
    },
    
  ]
  const { data: session, status } = useSession()
  
  function auth() {
    if (status == 'authenticated') {
      return (
        <>
          <div className={styles.button}>{data.status}</div>
        </>
      )
    }
    else return null;
  }
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <div className={styles.cardContainer}>
              <div className={styles.image}>
                {<Image src={launchpad} width={160} height={160} />}
              </div>
              <div className={styles.props}>
                <div className={styles.propitem}>
                  <a className={styles.companyName}>{data.prop1}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.companyStipend}>{data.prop2}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.Eligibilty}>{data.prop3}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.Eligibilty} href={data.path} download>
                    Job Description
                  </a>
                </div>
              </div>
              {auth}
            </div>
          </>
        )
      })}
    </>
  )
}

export default CompanyCards

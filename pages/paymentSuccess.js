import React from 'react'
import  Link  from 'next/link'
import bodyParser from "body-parser";
import { promisify } from "util";
import styles from '../styles/razorCallback.module.css'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {
  if (req.method === "POST") {
    await getBody(req, res);
  }

  return {
    props: {
      orderId: req.body.razorpay_order_id
    }
  };
}

function PaymentSuccess(props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
                  <FontAwesomeIcon icon={faCheckDouble} className={styles.logoz}/>{' '}
        </div>
        <div className={styles.success}>Payment Successful</div>
        <div className={styles.success}>Order ID : {props.orderId}</div>
        <div className={styles.back}>
          Click here to go back to
          <Link href="/id/portal" className={styles.link}>E-Cell BPHC Internship Drive</Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;



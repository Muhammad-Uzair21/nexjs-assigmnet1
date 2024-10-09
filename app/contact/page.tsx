import Link from "next/link";
import styles from "./contact.module.css"

export default function About(){
    return(
        <>
        <header>
        <div className="nav">
          <div className="logo">
            <a href="/">Logo</a>
          </div>
          <div className="sec">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <main className={styles.main}>
      <div className={styles.cont}>
        <h1 className={styles.head}>Contact Us</h1>
        <p className={styles.para}>If you have any questions or need further information, feel free to reach out to us:</p>
        
        <h3 className={styles.head}>Email:</h3>
        <p className={styles.para}>uzair.jay21@gmail.com</p>

        <h3 className={styles.head}>Phone:</h3>
        <p className={styles.para}>+92 3702061941</p>

        <h3 className={styles.head}>Address:</h3>
        <p className={styles.para}>123 St, xyz City, PK</p>
    </div>
    </main>
        </>
    )
}
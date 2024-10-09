import Link from "next/link";
import styles from "./gfx.module.css"

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
        <h2 className={styles.head}>This is Graphic Design Portfolio page!</h2>
      </main>
        </>
    )
}
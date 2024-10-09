import Link from "next/link";
import styles from "./services.module.css"

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
      <main className={styles.body}>
        <h1 className={styles.head}>Our Services!</h1>
        <div className={styles.base}>
        <div className={styles.main}>
        <div className={styles.img}>
            <img src="/kalen-emsley-oY0EDfHGPH4-unsplash.jpg" width="320px" alt=""></img>
        </div>
        <div className={styles.info}>
            <h2>Graphics Designing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis ab quam deleniti ratione cumque asperiores ducimus necessitatibus. Est eaque expedita sapiente. Impedit quidem, commodi nesciunt ullam itaque sunt modi!</p>
        </div>
        <Link href="/services/gfx">
        <div className={styles.read}>
            <span>Read More</span>
        </div></Link>
        </div>

        <div className={styles.main}>
        <div className={styles.img}>
            <img src="/kalen-emsley-oY0EDfHGPH4-unsplash.jpg" width="320px" alt=""></img>
        </div>
        <div className={styles.info}>
            <h2>Ui/Ux Designing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis ab quam deleniti ratione cumque asperiores ducimus necessitatibus. Est eaque expedita sapiente. Impedit quidem, commodi nesciunt ullam itaque sunt modi!</p>
        </div>
        <Link href="/services/gfx">
        <div className={styles.read}>
            <span>Read More</span>
        </div></Link>
        </div>
        </div>
      </main>
        </>
    )
}
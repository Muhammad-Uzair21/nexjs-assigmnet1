import Link from "next/link";

export default function Main() {
  return (
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
      <main className="home">
        <div className="hero">
          <h3>Your Vision, Our Mission!</h3>
          <p>At the intersection of creativity and functionality, we craft visually stunning experiences that not only capture attention but also tell your brand’s unique story.</p>
          <Link href="/contact"><button>Join us Today!</button></Link>
        </div>
      </main>
    </>
  );
}

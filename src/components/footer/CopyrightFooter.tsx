import Image from "next/image";
import PlainNavBar from "../common/navbar/PlainNavBar";
import Link from "next/link";
import MainNavBar from "../common/navbar/MainNavBar";

const CopyrightFooter = () => {
  return (
    <section id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 align-self-center">
            <span>Copyright © 2024 Exyconn Business Solutions</span>
            <ul>
              <li>
                <Link href={"/"}>Contact Us</Link>
                <Link href={"/"}>Disclaimer</Link>
                <Link href={"/"}>Privacy Statement</Link>
                <Link href={"/"}>Sitemap</Link>
                <Link href={"/"}>Raise a Grievance</Link>
              </li>
            </ul>
            <p>We use cookies on our site. Please read more about <Link href={"/"}>cookies policy</Link> here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CopyrightFooter;

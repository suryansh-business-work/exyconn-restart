import Image from "next/image";
import PlainNavBar from "../common/navbar/PlainNavBar";
import Link from "next/link";
import MainNavBar from "../common/navbar/MainNavBar";

const Footer = () => {
  return (
    <section id="footer">
      <div className="primary-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 align-self-start">
              <div className="footer-menu menu">
                <h3>Services</h3>
                <ul>
                  <li><Link href="/">Digital Consulting</Link></li>
                  <li><Link href="/">Software-as-a-Service</Link></li>
                  <li><Link href="/">Application Modernization</Link></li>
                  <li><Link href="/">Enterprise Application</Link></li>
                  <li><Link href="/">Application Development</Link></li>
                  <li><Link href="/">Maintenance</Link></li>
                  <li><Link href="/">Data and Analytics</Link></li>
                  <li><Link href="/">Automation & Integration</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 align-self-start">
              <div className="footer-menu menu">
                <h3>Industries</h3>
                <ul>
                  <li><Link href="/">Travel, Transport, Logistics & Hospitality</Link></li>
                  <li><Link href="/">Fintech</Link></li>
                  <li><Link href="/">Public Sector</Link></li>
                  <li><Link href="/">Healthcare</Link></li>
                  <li><Link href="/">Retails</Link></li>
                  <li><Link href="/">Energy and Utilities</Link></li>
                  <li><Link href="/">Payments</Link></li>
                  <li><Link href="/">Manufacturing</Link></li>
                  <li><Link href="/">Consumer Goods</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 align-self-start">
              <div className="footer-menu menu">
                <h3>Digital Services</h3>
                <ul>
                  <li><Link href="/">Marketing Operations and Content</Link></li>
                  <li><Link href="/">Supply Chain Management</Link></li>
                  <li><Link href="/">Traking</Link></li>
                  <li><Link href="/">Digital Engineering</Link></li>
                </ul>
              </div>
              <div className="footer-menu menu">
                <h3>Resources</h3>
                <ul>
                  <li><Link href="/">Blog</Link></li>
                  <li><Link href="/">Case Studies</Link></li>
                  <li><Link href="/">Events and Webinars</Link></li>
                  <li><Link href="/">Trends and Insights</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 align-self-start">
              <div className="footer-menu menu">
                <h3><Link href="/">AI</Link></h3>
                <h3><Link href="/">Cloud</Link></h3>
                <h3><Link href="/">Digital</Link></h3>
                <h3><Link href="/">Emerging</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;

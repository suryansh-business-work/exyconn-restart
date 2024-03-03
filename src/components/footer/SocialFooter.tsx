import Image from "next/image";
import PlainNavBar from "../common/navbar/PlainNavBar";
import Link from "next/link";
import MainNavBar from "../common/navbar/MainNavBar";

const SocialFooter = () => {
  return (
    <section id="footer-social" className="footer-social">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 align-self-center">
            <div className="footer-social-items">
              <ul>
                <li><Link aria-label="Facebook (opens in a new tab)" href="https://www.facebook.com/exyconn" rel="nofollow noopener" title="Facebook" target="_blank"><i className="fab fa-facebook fa-fw">&nbsp;</i></Link></li>
                <li><Link aria-label="Twitter (opens in a new tab)" className="footer-x-icon" href="https://twitter.com/exyconn" rel="nofollow noopener" title="Twitter" target="_blank"><i className="fab fa-twitter fa-fw">&nbsp;</i></Link></li>
                <li><Link aria-label="LinkedIn (opens in a new tab)" href="https://www.linkedin.com/company/exyconn" rel="nofollow noopener" title="LinkedIn" target="_blank"><i className="fab fa-linkedin fa-fw">&nbsp;</i></Link></li>
                <li><Link aria-label="Instagram (opens in a new tab)" href="http://instagram.com/exyconn" rel="nofollow noopener" title="Instagram" target="_blank"><i className="fab fa-instagram fa-fw">&nbsp;</i></Link></li>
                <li><Link aria-label="Youtube (opens in a new tab)" href="https://www.youtube.com/user/exyconn" rel="nofollow noopener" title="Youtube" target="_blank"><i className="fab fa-youtube fa-fw">&nbsp;</i></Link></li>
                {/* <li><Link aria-label="Threads (opens in a new tab)" className="footer-threads-icon" href="https://www.threads.net/exyconn" rel="nofollow noopener" title="Threads" target="_blank">Threads</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialFooter;

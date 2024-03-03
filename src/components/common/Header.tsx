import Image from "next/image";
import PlainNavBar from "./navbar/PlainNavBar";
import Link from "next/link";
import MainNavBar from "./navbar/MainNavBar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <section id="header">
      <div className="primary-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 align-self-center">
              <div className="logo">
                <Link href={"/"}><Image src="https://ik.imagekit.io/esdata1/exyconn/logo/exyconn.svg" width={140} height={60} alt="Exyconn" /></Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 align-self-center">
              <div className="row justify-content-between">
                <PlainNavBar />
                <MainNavBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;

import PlainNavBar from "./navbar/PlainNavBar";
import MainNavBar from "./navbar/MainNavBar";

const TopHeader = () => {
  return (
    <section id="top-header" className="top-header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 align-self-center">
            <div className="row justify-content-between">
              <PlainNavBar />
              <MainNavBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopHeader;

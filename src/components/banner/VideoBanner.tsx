import Image from "next/image";

const VideoBanner = () => {
  return (
    <section className="showcase">
      <video autoPlay muted loop id="home-banner-video">
        <source src="https://ik.imagekit.io/esdata1/exyconn/pages/home/banner-video.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text">
              <h3>Get to know the key <br />digital players <br />behind global change.</h3>
              <p>We drive business growth by reimagining digital experiences to overcome complex challenges through innovation and agility..</p>
              <a href="#">Expert Consultation</a>
              <br /><a href="#" className="ms-2">AI Powered Cost Calculator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoBanner;
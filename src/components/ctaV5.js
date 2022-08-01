import React from "react";
import data from "../data/cta.json"

const CtaV5 = () => {
  const {ctav5 } = data;

  return (
    // <!-- ========== CTA v5 section start ========== -->
    <section className="section-padding ctav5" style={{backgroundImage: `url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1100%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(47%2c 72%2c 88%2c 1)'%3e%3c/rect%3e%3cpath d='M419.48 151.11 a103.55 103.55 0 1 0 207.1 0 a103.55 103.55 0 1 0 -207.1 0z' fill='rgba(194%2c 123%2c 127%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-44.1865776293487 341.2680566902807L61.09740790869498 322.70364940340374 42.533000621818054 217.41966386536006-62.75098491622563 235.984071152237z' fill='rgba(194%2c 123%2c 127%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1376.4193465754347 289.23934122062434L1490.2349756643416 236.1662417587381 1437.1618762024555 122.3506126698311 1323.3462471135485 175.42371213171734z' fill='rgba(194%2c 123%2c 127%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M640.2261329134633 406.249774940057L634.014917077496 317.42525022148425 545.1903923589232 323.63646605745157 551.4016081948905 412.46099077602435z' fill='rgba(194%2c 123%2c 127%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M710.15 385.38 a115.45 115.45 0 1 0 230.9 0 a115.45 115.45 0 1 0 -230.9 0z' fill='rgba(194%2c 123%2c 127%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1100'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e)`}}>
      <div className="container">
        <div className="row">
          <div className="ctav5__content">
            <h2
              className="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              {ctav5.title}
            </h2>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img className="img-fluid" src={ctav5.icon} alt="Star Icon" width="25" height="25" />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <img className="img-fluid" src={ctav5.icon} alt="Star Icon" width="25" height="25" />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <img className="img-fluid" src={ctav5.icon} alt="Star Icon" width="25" height="25" />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <img className="img-fluid" src={ctav5.icon} alt="Star Icon" width="25" height="25" />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <img className="img-fluid" src={ctav5.icon} alt="Star Icon" width="25" height="25" />
              </li>
            </ul>
            <p
              className="fs-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              {ctav5.text1} <br />
              {ctav5.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v5 section end ========== -->
  );
};

export default CtaV5;

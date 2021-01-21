import { Fragment, useEffect } from "react";
import M from "materialize-css";
const Service = ({ title, imageUrl, altText, side, info }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  }, []);
  return (
    <Fragment>
      <div className="row d-flex align-items-center flex-wrap service-container py-3">
        {side === "left" ? (
          <section className="reverse d-flex flex-wrap align-items-center"
          style={{ width: "100%" }}>
            <div className="col m12 l6 px-0 py-5 image-container d-flex">
              <img src={imageUrl} alt={altText} className="responsive-img" />
            </div>

            <div className="col m12 l6 px-3 py-4 col-container">
              <div className="service-text-container">
                <span className="service-title">{title}</span>
                <div className="btn-container">
                  <span
                    className="info-btn tooltipped"
                    data-position="bottom"
                    data-tooltip={info}
                  >
                    <span>more info</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            className="d-flex flex-wrap align-items-center"
            style={{ width: "100%" }}
          >
            <div className="col m12 l6 px-3 py-4 pr-1 relative d-flex justify-content-end reverse-col-container">
              <div className="service-text-container text-right">
                <span className="service-title">{title}</span>
                <div className="btn-container">
                  <span
                    className="info-btn tooltipped"
                    data-position="bottom"
                    data-tooltip={info}
                  >
                    <span>more info</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col m12 l6 px-0 py-5 d-flex image-container">
              <img src={imageUrl} alt={altText} className="responsive-img" />
            </div>
          </section>
        )}
      </div>
    </Fragment>
  );
};

export default Service;

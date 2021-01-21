import { Fragment } from "react";
import useMyData from "../useMyData";

const Technologies = () => {
  const data = useMyData();
  return (
    <Fragment>
      <section className="technologies-container scrollspy" id="competencies">
        {data && (
          <div className="container-fluid pt-2 pb-5 mx-0 skew">
            <div className="container pt-5 logos-container d-flex flex-wrap flex-row justify-content-center">
              {data.technologies.map((t, i) => (
                <div
                  key={i}className="logo"
                >
                  <svg
                    aria-hidden="true"
                    fill="#636e72"
                    style={{ width: t.width + "px" }}
                    focusable="false"
                    data-prefix="fab"
                    data-icon={t.name}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={t.viewBox || "0 0 512 512"}                  
                  >
                    {t.paths.map((path, i) => (
                      <path
                        key={i}
                        fill="currentColor"
                        d={path.path}
                        style={{ "--color": path.color }}
                      />
                    ))}
                  </svg>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Technologies;

import { Fragment, lazy, Suspense } from "react";
import useWidth from "../useWidth";
import Service from "./Service";
const ScrollingWords = lazy(() => import("./ScrollingWords"));
const About = () => {
  const servicesData = [
    {
      title: "Think outside the box",
      imageUrl: "/assets/openBox.jpg",
      altText: "Outside the box",
      side: "left",
      info: "To be creative and produce something that is not usual",
    },
    {
      title: "responsive web design",
      imageUrl: "/assets/devices-stack.jpg",
      altText: "Devices stack",
      side: "right",
      info:
        "Process of designing websites that will respond to the device they’re viewed on",
    },
    {
      title: "better user experience and interfaces",
      imageUrl: "/assets/wireframes.jpg",
      altText: "Wireframes",
      side: "left",
      info:
        "Create products that provide meaningful and relevant experiences to users",
    },
  ];
  const width = useWidth();

  return (
    <Fragment>
      <section className="services-container pt-5 scrollspy" id="about">
        <div className="container-fluid pt-5 pb-5 mx-0">
          {servicesData &&
            servicesData.map((s) => (
              <Service
                title={s.title}
                imageUrl={s.imageUrl}
                altText={s.altText}
                side={s.side}
                info={s.info}
                key={s.title}
              />
            ))}
        </div>
        {width >= 768 ? (
          <Suspense fallback={<Fragment></Fragment>}>
            <ScrollingWords />
          </Suspense>
        ) : null}
      </section>
    </Fragment>
  );
};

export default About;

import { Fragment } from "react";
import useMyData from "../useMyData";

const ScrollingWords = () => {
  let data = useMyData();

  const getWords = () => {
    let output = "";
    let wordsJoined = " " + data.wordList.join(" ");
    for (let i = 0; i < 15; i++) {
      output += wordsJoined;
    }
    return output;
  };

  const Words = () => {
    return (
      <div className="absolute">
        <h2 style={{ "--time": data.wordList.length * 70 + "s" }}>
          {getWords()}
        </h2>
      </div>
    );
  };
  return (
    <Fragment>
      {data && (
        <section className="words-container py-5 container-fluid">
          {Words()}
          {Words()}
        </section>
      )}
    </Fragment>
  );
};

export default ScrollingWords;

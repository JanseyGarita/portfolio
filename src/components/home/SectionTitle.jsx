const SectionTitle = ({ number, title, numberColor, spaceTop }) => {
  return (
    <div className="section-header" style={{ paddingTop: spaceTop}}>
      <div className="title skew">
        <h5 className="text-center font-weight-bold text-uppercase pt-2 pb-5">
          {title}
        </h5>
        <div className="number">
          <span className="number" style={{ "--text-color": numberColor }}>
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;

const Card = (props) => {
  return (
    <>
      <div className="card flex" id={props.caseId}>
        <div className="flex" id="content">
          {/*<div className="loader" id="yellow" />*/}
          <div>
            <h1 id={props.caseType + "-Cases"}>{props.cases}</h1>
          </div>
        </div>
        <div id="head">
          <h2>{props.caseType}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
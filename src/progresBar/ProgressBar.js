const ProgresBar = (props) => {
  const Parentdiv = {
    height: props.height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: props.bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgresBar;

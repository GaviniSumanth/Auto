import React from "react";
let emotions = {
  sad: "https://giphy.com/embed/QHcRJ6hMU6aedXpA03",
  happy: "https://giphy.com/embed/fqAX24uBSS9uN8RqrQ",
  busy: "https://giphy.com/embed/6hekgCiAKjMYVaczmh",
};
class Animation extends React.Component {
  constructor(props) {
    super();
    this.state = null;
  }
  componentDidMount() {}
  render() {
    return (
      <div
        id={this.props.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            position: "relative",
            border: "0px",
          }}
        >
          <iframe
            src={emotions[this.props.emotion]}
            width="100%"
            height="100%"
            style={{ position: "absolute", border: "0px" }}
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p
            style={{
              textAlign: "center",
              color: "var(--color1)",
              fontSize: "25px",
            }}
          >
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}
export default Animation;

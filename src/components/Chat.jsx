import React from "react";
function Bubble(props) {
  return (
    <div
      className="bubble"
      style={{
        display: "flex",
        flexDirection: props.name === "Autobot" ? "row" : "row-reverse",
        width: "fit-content",
        margin: "5px",
        gap: "10px",
        marginTop: "10px",
        marginRight: props.name === "Autobot" ? "auto" : "10px",
        marginLeft: props.name === "Autobot" ? "10px" : "auto",
      }}
    >
      <img
        src={props.image}
        style={{ width: "45px", height: "45px", borderRadius: "100px" }}
        alt={props.name + "'s profile pic"}
      />
      <div
        style={{
          backgroundColor: "var(--color1)",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <p className="user-name" style={{ fontWeight: "bold" }}>
          {props.name}
        </p>
        <p
          className="user-message"
          style={{ maxWidth: "300px", wordWrap: "break-word" }}
        >
          {props.message}
        </p>
      </div>
    </div>
  );
}
class Chat extends React.Component {
  constructor(props) {
    super();
    this.state = null;
  }
  componentDidMount() {}
  render() {
    return (
      <div id="Chat">
        <div
          id="ChatDisplay"
          style={{ overflowY: "scroll", height: "calc(100% - 50px)" }}
        >
          <Bubble
            image="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
            name="Autobot"
            message="Random text goes here..."
          />
          <Bubble
            image="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
            name="User"
            message="Random text goes here..."
          />
        </div>
        <div
          id="user-input"
          style={{
            height: "50px",
            width: "50vw",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            backgroundColor: "var(--color3)",
          }}
        >
          <input
            type="text"
            className="user-input"
            style={{
              height: "30px",
              marginLeft: "10px",
              borderRadius: "10px",
              padding: "2px 10px",
              border: "0px",
              width: "calc(100% - 50px)",
            }}
          />
          <button
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
              border: "0px",
              backgroundColor: "var(--color3)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--color5)"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
export default Chat;

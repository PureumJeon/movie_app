import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <h2>{location.state.title}</h2>
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;

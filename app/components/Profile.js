import React from "react";

export default class ProfileComponent extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <>
        <h2>Profile Page</h2>
        <hr />
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </>
    );
  }
}

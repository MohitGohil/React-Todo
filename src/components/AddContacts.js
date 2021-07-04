import React from "react";

class AddContacts extends React.Component {
  state = {
    email: "",
    message: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.message === "") {
      alert(" all the fields is mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ email: "", message: "" });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Contact Card</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              ></textarea>
            </div>
          </form>
          <button type="button" className="btn btn-primary" onClick={this.add}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddContacts;

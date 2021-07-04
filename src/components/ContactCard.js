import React from "react";

const ContactCard = (props) => {
  const { id, email, message } = props.contact;
  return (
    <>
      <div className="container mt-4">
        <h6>
          Id : {id} | User email : {email}
        </h6>
        <hr />
        <h6>Message : </h6>
        <p>{message}</p>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => props.clickHandler(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ContactCard;

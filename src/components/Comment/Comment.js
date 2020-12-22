import React from "react";

import "./index.scss";

const Comment = ({ comment }) => {
  return (
    <div className="comment d-flex flex-wrap my-4">
      <div className="col-1">
        <div
          className="comment-img"
          style={{
            backgroundColor: `${comment.avatar == "H" ? "red" : "green"}`,
          }}
        >
          <span className="text-sub-heading">{comment.avatar}</span>
        </div>
      </div>
      <div className="col-10 ml-3">
        <p className="text-normal font-weight-bold">{comment.user.email}</p>
        <p className="text-light">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;

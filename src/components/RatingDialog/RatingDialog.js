import React, { useState } from "react";
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Rate } from "antd";
import { Button } from "react-bootstrap";

import "./index.scss";

const RatingDialog = ({ handleClose, open, rating, setRating }) => {
  const [value, setValue] = useState(rating || 0);

  const handleSubmit = () => {
    setRating(value);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ padding: "30px" }}
      >
        <p className="text-heading">Đánh giá phim</p>
        <Rating
          style={{ fontSize: "64px" }}
          size="large"
          name="rating"
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />
        <DialogActions>
          <Button onClick={handleSubmit} variant="primary">
            Đánh giá
          </Button>
          <Button onClick={handleClose} variant="danger">
            Hủy
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default RatingDialog;

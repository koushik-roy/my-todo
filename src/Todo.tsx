import React from "react";
import { Button } from "react-bootstrap";

const Todo = ({ task }: any) => {
  return (
    <>
      <div> {task}</div>

      <div>
        <Button variant="info" className="m-1 rounded-pill">
          Edit
        </Button>
        <Button variant="success" className="m-1 rounded-pill">
          Done
        </Button>
      </div>
    </>
  );
};

export default Todo;

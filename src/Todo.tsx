
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

const Todo = ({task}: any) => {
  const [isStriked, setIsStriked] = useState(false);

  const handleButtonClick = () => {
    setIsStriked(!isStriked); 
  };

  const strikethroughStyle = {
    textDecoration: isStriked ? "line-through" : "none" 
  }

  return (
    <>
      <div><span style={strikethroughStyle}>{task}</span></div>

      <div>
        <Button variant="info" className="m-1 rounded-pill">
          Edit
        </Button>
        <Button variant="success" className="m-1 rounded-pill" onClick={handleButtonClick}>
          Done
        </Button>
      </div>
    </>
  );
};

export default Todo;

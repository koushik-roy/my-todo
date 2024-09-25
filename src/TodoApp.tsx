import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Todo from "./Todo";
import todoList from "./data/todos.json";
function TodoTemplate() {
  const todos = todoList;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: "50rem" }}>
          <Card.Header>
            <h5 className="text-center">MY TODOS</h5>
          </Card.Header>
          <ListGroup as="ul">
            {todos.map((todo: any) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <Todo key={todo.id} task={todo.task} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </>
  );
}

export default TodoTemplate;

<div className="b1"></div>;

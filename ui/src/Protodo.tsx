import React, { useState, useEffect } from "react";
import { todoserviceClient } from "proto/proto/protodo_grpc_web_pb";
import { todorequest, todoresponse } from "proto/proto/protodo_pb";
import { baseUrl } from "./constants";

const Protodo: React.FC = () => {
  const [todos, setTodos] = useState<todoresponse[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    const client = new todoserviceClient(baseUrl);
    const request = new todorequest();

    client.getTodoList(request, {}, (err: any, response: any) => {
      if (err) {
        console.error("Error:", err.message);
        return;
      }
      setTodos(response.getTodosList());
    });
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;

    const client = new todoserviceClient(baseUrl);
    const request = new todorequest();
    request.setTitle(newTodo);

    client.addtodo(request, {}, (err: any, _response: any) => {
      if (err) {
        console.error("Error adding todo:", err.message);
        return;
      }
      fetchTodos();
      setNewTodo("");
    });
  };

  const deleteTodo = (id: string) => {
    const client = new todoserviceClient(baseUrl);
    const request = new todorequest();
    request.setId(id);

    client.deletetodo(request, {}, (err: any, _response: any) => {
      if (err) {
        console.error("Error deleting todo:", err.message);
        return;
      }
      fetchTodos();
    });
  };

  const markTodoAsDone = (id: string) => {
    const client = new todoserviceClient(baseUrl);
    const request = new todorequest();
    request.setId(id);

    client.marktodoasdone(request, {}, (err: any, _response: any) => {
      if (err) {
        console.error("Error marking todo as done:", err.message);
        return;
      }
      fetchTodos();
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.getId()}>
            {todo.getTitle()}
            <button onClick={() => deleteTodo(todo.getId())}>Delete</button>
            <button onClick={() => markTodoAsDone(todo.getId())}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Protodo;

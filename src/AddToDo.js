import { useState } from 'react';
import { callCreateApi,callAllApi } from './backendAPI.js';

function AddToDo(props) {
  const todo = props.todo;
  const setTodo = props.setTodo;

  const [formData, setFormData] = useState({
    todoTitle: "",
    DueDate: "",
  });

  function handleChange(e) {
    const inputTagName = e.target.name;
    const inputTagValue = e.target.value;

    setFormData((previousObject) => ({
      ...previousObject,
      [inputTagName]: inputTagValue,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("form submitted,data=" + JSON.stringify(formData));
    let newTask = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.DueDate,
      status: "pending",
    };
    await callCreateApi('/create-todo', newTask);
    
const todoList=await callAllApi('/read-todos');
  setTodo(todoList)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 bg-purple-200 rounded-lg shadow-2xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Add ToDo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="font-bold">Add</label>
        <input
          type="text"
          name="todoTitle"   
          placeholder="Enter ToDo Title"
          value={formData.todoTitle}   
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-800 rounded-md"
        />

        <label className="font-bold">Due Date</label>
        <input
          type="date"
          name="DueDate"    
          value={formData.DueDate}  
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-800 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddToDo;

import { callDeleteApi } from "./backendAPI";

function DoneTodopage(props) {
  let Arr = props.todo;

  const handleDelete = async (id) => {
    try {
      const data = await callDeleteApi(`/delete-todo`, { todoId: id });
      console.log(data.msg);

      
      props.setTodo(prev => prev.filter(todo => todo.todoId !== id));

    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="bg-purple-100 min-h-[300px] flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-purple-300 text-white">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-300">Todo Title</th>
              <th className="py-3 px-4 text-left border border-gray-300">Status</th>
              <th className="py-3 px-4 text-center border border-gray-300">Completed On</th>
              <th className="py-3 px-4 text-center border border-gray-300">Action</th> 
            </tr>
          </thead>
          <tbody>
            {Arr.filter(todo => todo.status === 'completed')
              .map((todo) => (
                <tr key={todo.todoId}>
                  <td className="py-3 px-4 border border-gray-300">{todo.todoTitle}</td>
                  <td className="py-3 px-4 border border-gray-300">{todo.status}</td>
                  <td className="py-3 px-4 border border-gray-300 text-center">
                    {todo.completionDate ? new Date(todo.completionDate).toLocaleDateString() : "—"}
                  </td>
                  <td className="py-3 px-4 border border-gray-300 text-center">
                    <button
                      onClick={() => handleDelete(todo.todoId)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoneTodopage;

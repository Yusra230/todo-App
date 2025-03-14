interface Props {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e:React.FormEvent)=>void
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <>
      <form className="flex gap-2 mb-4" onSubmit={handleAdd}>
        <input
          type="text"
          value={todo}
          onChange={(e)=>{setTodo(e.target.value)}}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;

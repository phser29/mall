import { useState } from "react"
import { postAdd } from "../../api/todoApi"
import ResultModal from "../common/ResultModal"

const initState = {
  title: '',
  writer: '',
  dueDate: ''
}
const AddComponent = () => {

  const [todo, setTodo] = useState({...initState})
  const [result, setResult] = useState(null)

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value
    setTodo({...todo})
  }
  
  const handleClickAdd = () => {
    postAdd(todo)
    .then(result => {
      setResult(result.TNO)
      setTodo({...initState})
    }).catch(e => {
      console.error(e);
    })
  }

  const closeModal = () => {
    setResult(null)
  }
  
  return (
    <div className='p-4 m-2 mt-10 border-2 border-sky-200'>
      
      {result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/>: <></>}
      
      <div className='flex justify-center'>
        <div className='relative flex flex-wrap items-stretch w-full mb-4'>
          <div className='w-1/5 p-6 font-bold text-center'>Title</div>
          <input className='w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-500'
          name="title"
          type={'text'}
          value={todo.title}
          onChange={handleChangeTodo}>
          </input>        
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap items-stretch w-full mb-4 reative">
          <div className="w-1/5 p-6 font-bold text-center">Writer</div>
          <input className="w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-500"
          name="writer"
          type={'text'}
          value={todo.writer}
          onChange={handleChangeTodo}>
          </input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap items-stretch w-full mb-4 reative">
          <div className="w-1/5 p-6 font-bold text-center">DueDate</div>
          <input className="w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-500"
          name="dueDate"
          type={'date'}
          value={todo.dueDate}
          onChange={handleChangeTodo}>
          </input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative flex flex-wrap items-stretch p-4 mb-4">
          <button className="p-4 text-xl text-white bg-blue-500 rounded w-36" type="button"
          onClick={handleClickAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddComponent
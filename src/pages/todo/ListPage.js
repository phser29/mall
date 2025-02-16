import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ListComponent from '../../componets/todo/ListComponent'

const ListPage = () => {

  return (
    <div className='w-full p-4 bg-white'>
      <div className='text-3xl font-extrabold'>
        Todo List Page Compoent
      </div>

      <ListComponent/>
    </div>
  )
}

export default ListPage
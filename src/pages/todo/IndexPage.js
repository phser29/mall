import React, { useCallback } from 'react'
import BasicLayout from '../../Layouts/BasicLayout'
import { Outlet, useNavigate } from 'react-router-dom'

const IndexPage = () => {

  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({pathname: 'list'})
  })

  const handleClickAdd = useCallback(() => {
    navigate({pathname: 'add'})
  })
  
  return (
    <BasicLayout>
      <div className='flex w-full p-2 m-2'>
        <div className='w-20 p-2 m-1 text-xl font-extrabold text-centerunderline' onClick={handleClickList}>
          LIST
        </div>
        <div className='w-20 p-2 m-1 text-xl font-extrabold text-centerunderline' onClick={handleClickAdd}>
          ADD
        </div>
      </div> 
      <div className='flex flex-wrap w-full'>
        <Outlet/>
      </div>
    </BasicLayout>
    
  )
}

export default IndexPage
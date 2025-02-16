import React from 'react';
import BasicMenu from '../componets/menus/BasicMenu';

const BasicLayout = ({children}) =>{
  return (
    <>
      <BasicMenu/>
      
      <div className='flex w-full my-5 space-y-1 bg-white fle5x-col md:flex-row md:space-x-1 md:space-y-0'>
        <main className='px-5 py-5 bg-sky-300 md:w-4/5 lg:2-3/4'>
          {children}
        </main>
        
        <aside className='flex px-5 py-5 bg-green-300 md:w-1/3 lg:w-1/4'>
          <h1 className='text-2xl md:text-4xl'>
            Sidebar
          </h1>
        </aside>
      </div>
    </>
  );
}

export default BasicLayout;

const ResultModal = ({title,content,callbackFn}) => {
  return (
    <div className={`fixed top-0 left-0 z-[1055] flex h-full justify-center bg-black bg-opacity-20`}
    onClick={() => {
      if(callbackFn) {
        callbackFn()
      }
    }}>
      <div className="absolute w-1/4 px-6 mt-10 mb-10 bg-white rounded shadow opacity-100 dark:bg-gray-700 min-w-[600px]">
        <div className="justify-center mt-6 mb-6 text-2xl border border-b-4 border-gray-500 gb-warning-400-gray-500">
          {title}
        </div>
        <div className="pt-4 pb-4 text-4xl border-b-4 border-orange-400">
          {content}
        </div>
        <div className="flex justify-end">
          <button type="button" className="px-6 pt-4 pb-4 mt-4 mb-4 text-lg bg-blue-500 rounded text-while"
          onClick={() =>{if(callbackFn){callbackFn()}}}>
            Close 
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultModal

const TextMessage = ({message, user}) => {
  return (
    <div className=' bg-violet-300 m-1 p-1 rounded-xl shadow text-gray-900'>
        <p className='text-sm'>{user} {"9:10 pm"}</p>
        <p>{message}</p>
    </div>
  )
}

export default TextMessage
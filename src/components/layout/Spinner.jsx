import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-20 mt-20'>
        <img src={spinner} className='text-center mx-auto' alt="Loading..." />
    </div>
  )
}

export default Spinner
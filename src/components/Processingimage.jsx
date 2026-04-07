
import Card from './Card'

function Processingimage() {
  return (
    <>
    <Card className='animate-pulse h-25 w-130 flex justify-center items-center border-2 rounded-3xl border-black'>
        <p className='font-semibold text-xl text-black mb-2'>
            Processing image
        </p>
        <p className='text-gray-400 text-sm'>
            Lots of  people are creating images right now, so this might take a bit. We'll notify you when your image is ready.
        </p>
    </Card>
    </>
  )
}

export default Processingimage
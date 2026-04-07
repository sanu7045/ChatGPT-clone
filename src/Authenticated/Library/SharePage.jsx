import Share from './Share'
import Processingimage from '../../components/Processingimage'

import Hero2 from '../Search_Chat/Hero2'
import Footer from '../../components/Footer'


function SharePage() {
    return (
        <>
            <Share />
            <div className='fixed top-30 left-1/2 -translate-x-1/2 w-screen max-w-7xl px-30 pointer-events-none'>
                <div className='scale-90 origin-left pointer-events-auto'>
                    <Processingimage />
                </div>
            </div>
            <div className='fixed bottom-2 left-1/2 -translate-x-1/2 w-screen flex flex-col items-center pointer-events-none'>
                <div className="w-screen pointer-events-auto">
                    <Hero2 className="w-full" hideText={false} isCentered={false} cardScale="scale-80" maxW="max-w-7xl" cardPadding="p-2" inputGap="mt-2" />
                </div>
                <div className="w-full flex justify-end -mt-16 mr-50 pointer-events-auto">
                    <Footer showMessage={false} isFixed={false} />
                </div>
                <p className='text-center text-xs text-gray-500 -mt-4 mb-2 pointer-events-auto'>
                    ChatGPT can make mistakes. Check important info.
                </p>
            </div>

        </>
    )
}

export default SharePage
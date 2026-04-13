import React from 'react'
import DownloadHeader from './DownloadHeader'
import DownloadInput from './DownloadInput'
import ProcessedImage from './ProcessedImage'

function DownloadPage() {
    return (
        <div>
            <DownloadHeader />
            <div className='flex justify-center items-center translate-y-10'>
                <ProcessedImage hideText={false} />
            </div>
            <DownloadInput />
        </div>
    )
}

export default DownloadPage
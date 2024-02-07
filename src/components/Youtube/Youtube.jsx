import React, { useEffect, useState } from 'react'
import YoutubeCard from './YoutubeCard'
import { Ylogo } from '../../assets'
import { fetchFromYoutube } from '../../utils/api'

const Youtube = () => {

 
    const [allVideo,setAllVideo] = useState([])

    const res = fetchFromYoutube()
    res.then(data=>(
        setAllVideo(data)
    ))


  return (
    <div className='mx-auto'>
          <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>Youtube Videos</h1>

        <div className='flex items-center flex-wrap justify-center'>

            {
                 allVideo.map(item=>(
                    <YoutubeCard key={Math.random()} title={item.snippet.title} link={item.Videolink}/>
                ))
            }
        </div>

      </div>
  )
}

export default Youtube

import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi';

const VideosLists = (props) => {
   const {category} = useParams();
   const [videos, setVideos] = useState([])

   useEffect(() => {
      const getVideos = async() => {
         try {
            let res = await tmdbApi.getVideos(category, props.id)
            setVideos(res.results.slice(0 ,5))
         } catch (error) {
            console.log(error.message)
         }
      }

      getVideos();
   }, [category, props.id])

  return (
    <>
      {
         videos?.length > 0 && videos.map((item, i) => (
            <Video key={i} item={item}/>
         ))
      }
    </>
  )
}

const Video = (props) => {
   const {item} = props
   const iframeRef = useRef(null);

   useEffect(() => {

   }, [])
   return (
      <div className="video mb-[3rem]">
         <div className="video__title font-semibold mb-[1.3rem] text-[14px] md:text-[16px]">
            <h2>{item?.name}</h2>
         </div>
         <iframe className='aspect-video' src={`https://www.youtube.com/embed/${item?.key}`} ref={iframeRef} width="100%" title='video' allowFullScreen/>
      </div>
   )
}

export default VideosLists

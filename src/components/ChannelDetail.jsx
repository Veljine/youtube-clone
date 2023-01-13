import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { axiosAPI } from '../utils/axiosAPI'
import zIndex from '@mui/material/styles/zIndex'

const ChannelDetail = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axiosAPI(`channels?part=snippet&id=${id}`)
      .then( data => setChannelDetail(data?.items[0]))

      axiosAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then( data => setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ backgroundColor: 'white', zIndex: '10', height: '350px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='110px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '200px'} }}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
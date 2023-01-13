import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos} from './'
import {useParams} from 'react-router-dom'

import { axiosAPI } from '../utils/axiosAPI'

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {
      axiosAPI(`search?part=snippet&q=${searchTerm}`)
        .then( data => {setVideos(data.items)})
    }, [searchTerm])
    

  if(videos) {
    return (
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
               Search Results for <span style={{ color: '#F31503' }}>{searchTerm}</span>
          </Typography>
  
          <Videos videos={videos}/>
      </Box>
    )
  }
}

export default SearchFeed
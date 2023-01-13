import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import {Sidebar, Videos} from './'
import { axiosAPI } from '../utils/axiosAPI'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
      axiosAPI(`search?part=snippet&q=${selectedCategory}`)
        .then( data => setVideos(data.items) )
    }, [selectedCategory])
    

  return (
    <Stack sx={{ flexDirection: {
        sx: 'column', md: 'row'
    }, background: 'rgb(15 15 15)'}}>

    <Box sx={{ height: {
        sx: 'auto', md: '92vh'
    }, borderRight: '1px solid #3d3d3d', px: {
        sx: 0, md: 2
    } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>

        </Sidebar>

        <Typography sx={{ mt: 1.5, color: '#fff' }} className='copyright' variant='body2'>
            Copyright 2022 Veljine Media
        </Typography>
    </Box>

    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
             {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={videos}/>
    </Box>

    </Stack>
  )
}

export default Feed
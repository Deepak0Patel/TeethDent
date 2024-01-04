import React from 'react'
import { Box, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { LocalPhoneOutlined } from '@mui/icons-material';

const Right = () => {
  return (
    <div className='flex justify-end pr-10'>
     <Box className='flex  w-1/4 right-11 gap-3 h-auto   items-end justify-end pt-5'>
    <WhatsAppIcon sx={{color:'green'}} className='rounded-2xl'/> 
     <button className='px-4 py-1 bg-[#955EDA] rounded-lg text-white'> <LocalPhoneOutlined/> 011-6932-8350</button>
    <Typography className='font-bold text-sm'>Why Whistle    |     Price</Typography>
    </Box> 
    </div>
  )
}

export default Right
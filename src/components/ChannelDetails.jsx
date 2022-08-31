import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import Videos from "./Videos"
import ChannelCard from './ChannelCard'
import {fetchFromAPI} from "../utils/fetchFromAPI"

function ChannelDetails() {
  const {id} = useParams()
  const [channel,setChannel] = useState(null)
  const [videos,setVideos] = useState([])


 useEffect(()=>{
       fetchFromAPI(`channels?part=snippet&id=${id}`).then(data=>setChannel(data?.items[0]))
       fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data=>setVideos(data?.items))
  },[id])

  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{height:"300px",zIndex: 10, background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',}} />
        <ChannelCard channel={channel} marginTop="-90px" />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr:{sm:"150px"}}} />

          <Videos videos={videos} />

       

      </Box>

    </Box>
  )
}

export default ChannelDetails
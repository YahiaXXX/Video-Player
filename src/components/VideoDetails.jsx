import React,{useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import {Typography,Box,Stack} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"

import Videos from "./Videos"
import {fetchFromAPI} from "../utils/fetchFromAPI"

function VideoDetails() {
  const {id}=useParams()
  const [videoDetail,setVideoDetail]=useState(null)
  const [relatedVideos,setRelatedVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
    .then(data=>setRelatedVideos(data.items))
 },[id])
  return (
    <Box minHeight="95vh" >
      <Stack direction={{xs:"column",md:"row"}} >
        <Box flex={1} >
          <Box sx={{width:"100%",position:"sticky",top:"86px"}} >
            <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`} />
            <Typography color="#fff" variant="h5" fontWeight="bold" padding={2} >
              {videoDetail?.snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}  >
             <Link to={`/channel/${videoDetail?.snippet.channelId}`} >
              <Typography variant={{sm:"subtitle1",md:"h6"}} color="#fff" > 
                {videoDetail?.snippet.channelTitle}
                <CheckCircle sx={ { fontSize:"12px",color:"gray",ml:"5px" }} />
              </Typography>
             </Link>
             <Stack direction="row" gap="20px" alignItems="center" >
              <Typography variant="body1" sx={{opacity:0.7}} >
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
             </Typography>
             <Typography variant="body1" sx={{opacity:0.7}} >
                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
             </Typography>
             </Stack>
            </Stack>

          </Box>

        </Box>
        <Box px={2} pt={{md:1,xs:5}} justifyContent="center" alignItems="center" >
        <Videos videos={relatedVideos} direction="column" />
      </Box>
      </Stack>
      

    </Box>
  )
}

export default VideoDetails
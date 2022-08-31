import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Box} from "@mui/material"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetails from "./components/VideoDetails"
import ChannelDetails from "./components/ChannelDetails"
import SearchFeed from "./components/SearchFeed"

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}} >
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" exact element={<VideoDetails/>} />
        <Route path="/channel/:id" exact element={<ChannelDetails/>} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed/>} />
 

      </Routes>

    </Box>
    
    </BrowserRouter>
    
  );
}

export default App;

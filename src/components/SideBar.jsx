import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/constants"


function SideBar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack direction="row" sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'99%'},
        flexDirection:{md:'column'}
    }} >
        {categories.map((cat)=>(
            <button 
            key={cat.key}  
            className='category-btn' 
            onClick={()=>setSelectedCategory(cat.name)}
            style={{ background: cat.name===selectedCategory && '#fc1503',color:'white'  }} >
                 <span style={{color:cat.name===selectedCategory ? "white"  : "red",marginRight:"15px" }} >{cat.icon}</span>
                 <span style={{opacity:cat.name===selectedCategory ? "1"   : "0.8" }} >{cat.name}</span>
            </button>
        ))}


    </Stack>
  )
}

export default SideBar
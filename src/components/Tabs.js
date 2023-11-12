import React, { useState } from 'react'

export const Tabs = ({tabs}) => {
       const [content,setContent] = useState(tabs[0].content);

  return (
         <>
         <ul>
            {tabs.map((e)=>{
             return  <li onClick={()=> setContent(e.content)}>{e.title}</li>
            })
            }
         </ul>
         <h2>{content}</h2>
         </>
    )
}

export default Tabs;
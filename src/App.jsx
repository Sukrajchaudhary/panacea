import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
function App() {
  const [explorerData,setExplorerData]=useState(explorer)
  
  return (
   <>
   <Folder explorer={explorer}/>
   <button className='btn'>
    <span className='icon'>📞</span>
    phone
   </button>
   
   </>
  )
}

export default App

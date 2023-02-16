import { useState } from "react"

const useDisplay = () => {
    const [displayContent, setDisplayContent] = useState(false)
    const handleContent = () => setDisplayContent(!displayContent)
  
    return {displayContent, handleContent}
  }

export default useDisplay;
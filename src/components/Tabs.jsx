import { useState } from "react"
import '../styles/components/tabs.css';

export default function Tabs({headings=[], contents=[]}) {
  const [selectedHeading, setSelectedHeading] = useState((headings.length) ? 0 : -1);
  function handleClick(event) {
    setSelectedHeading((prevState) => (event.target.value !== undefined) ? event.target.value : prevState);
  }

  return (  
    <div className="tabs" onClick={handleClick}>
      <ul className="tabs-header">
      {headings.map((heading, index) => {
        return <li 
                key={index} 
                style={
                  (selectedHeading === index) ? {color: '#A741FF'} : null
                } 
                onClick={(event) => handleClick(event, index)}
                value={index}
                >
                  {heading}
                </li>
      })}
      </ul>
      <ul className="tabs-content">
        {
          (selectedHeading === -1) ? null : contents[selectedHeading]
        }
      </ul>
    </div>
  )
}

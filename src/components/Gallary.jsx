import '../css/Gallary.css'
import { useRef, useEffect, useState } from 'react'

function Gallary({ imageCount }) {
    const galaryRef = useRef(null)
    const [childWidth, setChildWidth] = useState(0)

    const forward = <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>

    const gallaryItems = [
        {
            img:'ss.png',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
        {
            img:'vite.svg',
            priceCut:0,
            tag:0,
        },
    ]

    //runs on mount
    useEffect(() => {
        const updateChildWidth = () => {
            setChildWidth(galaryRef.current.offsetWidth/imageCount);
        }
        updateChildWidth()
        window.addEventListener('resize', updateChildWidth);

        //cleanup
        return () => window.removeEventListener('resize', updateChildWidth);
    }, [imageCount])
    
    
  return (
    <div className="galary" ref={galaryRef}>
        {gallaryItems.length > imageCount ? <button className="gallary-next">{forward}</button> : <></>}
        <div className="inner-gallary">
            {gallaryItems.map((obj, i) => {
                return <img className="galary-item" key={i} src={obj.img} width={childWidth+'px'} />
            })}
        </div>
    </div>
  )
}

export default Gallary
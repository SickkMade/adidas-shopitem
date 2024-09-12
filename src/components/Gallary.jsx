import '../css/Gallary.css'
import { useRef, useEffect, useState } from 'react'

function Gallary({ imageCount }) {
    const galaryRef = useRef(null)
    const [childWidth, setChildWidth] = useState(0)
    useEffect(() => {
        const updateChildWidth = () => {
            setChildWidth(galaryRef.current.offsetWidth/imageCount);
        }
        updateChildWidth()
        window.addEventListener('resize', updateChildWidth);

        //cleanup
        return () => window.removeEventListener('resize', updateChildWidth);
    }, [imageCount])
    
    const gallaryItems = [
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
  return (
    <div className="galary" ref={galaryRef}>
        {gallaryItems.map((obj, i) => {
            return <img className="galary-item" key={i} src={obj.img} width={childWidth+'px'} />
        })}
    </div>
  )
}

export default Gallary
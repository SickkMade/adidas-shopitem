import '../css/ShopItem.css'
import Gallary from './Gallary'
import Price from './Price'
import { useState } from 'react'

function ShopItem() {
    const [discount, setDiscount] = useState(0)
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState(0)
    

  return (
    <div className="shopitem">
        <img className="shopitem--image" src="vite.svg" />
        {/* <p className="shopitem--price">$999</p> */}
        <div className="shopitem--price">
            <Price discount={discount} price={price}/>
        </div>
        <Gallary imageCount={3} setDiscount={setDiscount} setPrice={setPrice} setTag={setTag}/>
        <div className="shopitem--description">
            <p className="shopitem--description__name">Vite Logo</p>
            <p className="shopitem--description__category">Logos</p>
            <p className="shopitem--description__colors">15 colors - {tag}</p>
        </div>
    </div>
  )
}

export default ShopItem
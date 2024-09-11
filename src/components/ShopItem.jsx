import '../css/ShopItem.css'

function ShopItem() {

  return (
    <div className="shopitem">
        <img className="shopitem--image" src="vite.svg" />
        <p className="shopitem--price">$999</p>
        <div className="shopitem--galary"></div>
        <div className="shopitem--description">
            <p className="shopitem--description__name">Vite Logo</p>
            <p className="shopitem--description__category">Logos</p>
            <p className="shopitem--description__colors">15 colors</p>
        </div>
    </div>
  )
}

export default ShopItem
import '../css/Price.css'

function Price({price, discount}) {

    const getReducedPrice = () => {
        return Math.floor(price * (1- discount/100))
    }
  return (
    <>
        <div className={discount > 0 ? "price__discount-percent" : "price__invisible"}>-{discount}%</div>
        <div className="price">
            <p className={discount > 0 ? 'price__crossed-out' : ''}>${price}</p>
            {discount>0 && <p className="price__discounted">${getReducedPrice()}</p>}
        </div>
    </>
  )
}

export default Price
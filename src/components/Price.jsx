import '../css/Price.css'

function Price({price, discount}) {

    const getReducedPrice = () => {
        return price * (discount/100)
    }
  return (
    <>
        <div className="price__discount-percent">-{discount}%</div>
        <div className="price">
            <p className={discount > 0 ? 'price__crossed-out' : ''}>${price}</p>
            <p className="price__discounted">${getReducedPrice()}</p>
        </div>
    </>
  )
}

export default Price
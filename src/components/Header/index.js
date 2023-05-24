import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }
  const getColor = current => {
    const {history} = props
    if (history.location.pathname === current) {
      return '#f7931e'
    }
    return '#334155'
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length
        console.log(cartList)

        return (
          <>
            {cartItemsCount > 0 && (
              <span className="cart-count-badge">{cartList.length}</span>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-bar-large-container">
        <div className="icon-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633608363/Frame_274_mqin4h.png"
              alt="website logo"
            />
          </Link>
          <h1 className="icon-heading">Tasty Kitchens</h1>
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value)
  return (
    <>
      {
        wishes.length ?
          <Products title="Sevimlilar" data={wishes} />
          :
          <h2>Empty</h2>
      }
    </>
  )
}

export default Wishlist
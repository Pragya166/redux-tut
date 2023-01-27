import React from 'react';


function Home() {
  return (
    <div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzYkNIAa4x-aMti2wMrfMeOFkfnwWrJ--2DiRYYyeAQ&s" alt="" />
            </div>
            <div className='img-wrapper item'>
                <img src="https://www.costco.co.uk/medias/sys_master/images/h65/hcb/99897047613470.jpg" alt="" />
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price:$10000.00
                </span>
            </div>
            <div className='btn-wrapper item'>
               <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
      <div className="content">
        <h3>Food made with <span>love</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          libero nostrum veniam facere tempore nisi.
        </p>
        <a className="btn">shop now</a>
      </div>
    </section>



    
     <h1 className="heading"><span>Categories</span></h1>
     <section className='category-section'>
      <div className="card category-card category-card1">
        <h3 className="card-title category-title">Italian </h3>
      </div>
      <div className="card category-card category-card2">
        <h3 className="card-title category-title">Chineese </h3>
      </div>
      <div className="card category-card category-card3">
        <h3 className="card-title category-title">Spanish </h3>
      </div>
      <div className="card category-card category-card4">
        <h3 className="card-title category-title">North-Indian </h3>
      </div>
      <div className="card category-card category-card5">
        <h3 className="card-title category-title">South-Indian </h3>
      </div>
    </section>


    <section className="products" id="products">
       <Link to='/products'><p className="btn product-btn">View All</p></Link>
    </section>

    </div>
  )
}

export default Home
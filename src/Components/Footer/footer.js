import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
         <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="https://twitter.com/MuskanChhatras1">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com/MuskanChhatrasal">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/muskan-chhatrasal/">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
        </div>
      </div>

      <div className="credit">by <span>Muskan</span> | all rights reserved</div>
    </section>
    </div>
  )
}

export default Footer
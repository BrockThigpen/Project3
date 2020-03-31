import React from 'react'
import { Link } from 'react-router-dom'
import vipImage from '../vip.png'

const Games = () => {
  return (
    <div className="card-deck">
      <Link to="/FlappyBird">
      <div className="card text-center text-danger" >
        <img src={vipImage} alt="VIP" class="card-img-top"/>
        <div className="card-body">
          <h3 className="card-title" ><strong>Dodge Ball</strong></h3>
        </div>
      </div>
      </Link>
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

    </div>
    // <div className="VIP">
    //   <span>
    //     <Link to="/FlappyBird">
    //       <img src={vipImage} alt="VIP" />
    //     </Link>
    //   </span>
    // </div>
  )
}

export default Games

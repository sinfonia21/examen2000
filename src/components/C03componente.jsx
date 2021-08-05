import React from 'react'

const C03componente = () => {
    return (
        <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
					<img src="https://i.ibb.co/n7x4PH3/exa2.jpg" className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-none d-md-block">
					  <h5>CompuFacil</h5>
					  <p>Algunos de nuestros productos.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/F61WfQG/exa4.jpg" className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-none d-md-block">
					  <h5>CompuFacil</h5>
					  <p>Algunos de nuestros productos.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/2ZJkpcn/exa3.jpg" className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-none d-md-block">
					  <h5>CompuFacil</h5>
					  <p>Algunos de nuestros productos.</p>
					</div>
				  </div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			  </div>



			  <br/>
			
        </div>
    )
}

export default C03componente
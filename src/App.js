import C01componente from "./components/C01componente";
import C02componente from "./components/C02componente";
import C02contador from "./components/C02contador";
import C03componente from "./components/C03componente";
import C04componente from "./components/C04componente";
import EjemploDeEstado from "./components/C04estado";
import C05componente from "./components/C05componente";

function App() {
  return (
    <div className="container">

      <C01componente />
	  <C02componente />
	  
	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning p-3"> 
		<C03componente />		
			  <br/>
		
			
			
		</article>
		
		<article className="col-md-3 bg-secondary p-3">
		<C04componente />
		<hr/>
		
						
		</article>

		<aside className="col-md-3 bg-primary p-3">
		<C05componente />


			
			<br/>

			

		
		</aside>




	</section>

	
	

		

	    <section className="row bg-success"> 

        <article className="col-md-7 bg-success p-3"> 
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15310.047591103728!2d-71.5369056!3d-16.3988084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc419f49d1f9cd270!2sPlaza%20de%20Armas%20de%20Arequipa!5e0!3m2!1ses!2spe!4v1628161900617!5m2!1ses!2spe" width="600" height="450" style={{width: '46rem'}} allowfullscreen="" loading="lazy"></iframe>
		<center><h1> Plaza de armas 302 </h1></center>

            
            





        </article>
        
        <article className="col-md-5 bg-warning p-3">
 
<iframe width="520" height="400" src="https://www.youtube.com/embed/KhKbGhRBDIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
        </article>





    </section>

	<footer className="row  bg-dark text-light">
	hola
	</footer>
		f

	


    </div>
    );
  }

  export default App;





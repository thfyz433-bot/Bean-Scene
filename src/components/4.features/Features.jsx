import './features.css'
import { FeaturesData } from './FeaturesData'
export default function Features() {
  return (
    <div className='container-features'>
        <img className='coffee_blast' src="coffee_blast (1).png" alt="img" />
        <div className="sub-container">
          <div className="text-features ">
            <h2>Why are we different?</h2>
            <p>We don’t just make your coffee, we make your day!</p>
          </div>
        <div className="row flex">
   {FeaturesData.map((items)=>{
    return(
        <div key={items.id} className="col">
            <img src={items.img} alt={items.title} />
            <h3>{items.title}</h3>
            <p>{items.p}</p>
            </div>
    );
   })}
           
        </div>
        <div className="bottom-features">
            <p>Great ideas start with great coffee, Lets help you achieve that</p>
            <h3>Get started today.</h3>
            <button>Join Us</button>
        </div>
        </div>
    </div>
  )
}

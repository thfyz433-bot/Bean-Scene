import './sectioncoffee.css'

export default function Sectioncoffee() {
  return (
    <div id='about' className='section-coffee'>
      <div className="container-section flex">
         <div className="text-section-coffee">
             <h2>Get a chance to have an Amazing morning</h2>
             <p>We are giving you are one time opportunity to
experience <br /> a better life with coffee.</p>
             <button>Order Now</button>
         </div>
         <img className='cup' src="cup.png" alt="img" />
          <img  className='coffee_bean' src="coffee_bean.png" alt="img" />
         </div>
    </div>
  )
}

import './menu.css'
import { MenuData } from './MenuData'
export default function Menu() {
  return (
    <div id='menu' className='container-menu'>
        <div className="text-menu">
            <h2>Enjoy a new blend of coffee style</h2>
            <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        </div>
        <div className="menu flex">
{MenuData.map((items)=>{
    return(
        <>
        <div key={items.id} className="col ">
         <img src={items.img} alt={items.title} />
         <h3>{items.title}</h3>
         <span>{items.off}</span>
           
         <span className='pric'>{items.pric}</span>
         <div className="button-menu" >   
         <button >Order Now</button>
         </div>
      </div>
      </>
    )
})}
   </div>    
    </div>
  )
}

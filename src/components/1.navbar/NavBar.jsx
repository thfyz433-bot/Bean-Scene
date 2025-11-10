import './navbar.css'

export default function NavBar() {
  return (
< div className='container-full'>
    <div className="container-nav">
          <nav  className=" flex">
            <a href=""><h1>Bean Scene</h1></a>
            <ul className="flex ">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="flex button">
                <span className='sign'><a href="">Sign In</a></span>
                <span className='sing'><a href="">Sing Up</a></span>
            </div>
          </nav>
    </div>


 <div id='home' className='container-hero'>
            <div className="text-hero">
                <span>We’ve got your morning covered with</span>
                <h1>Coffee</h1>
                <p>It is best to start your day with a cup of coffee. Discover the best 
                  flavours coffee you will ever have. We provide the best for our customers.</p>
            </div>
            <div className="bottom">
                  <button type='submit'>Order Now</button>
            </div>
    </div>
    </div>
  )
}

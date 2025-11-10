import './contact.css'

export default function Contact() {
  return (
    <div id='contact' className='container-contact'>
        <div className="contact">
         <div className="text-contact">
            <h2>Subscribe to get the Latest News</h2>
            <p>Don’t miss out on our latest news, updates, tips and special offers</p>
         </div>
         <div className="form">
            <form action="">
          <input type="email" required name='email' alt='email' id='email' placeholder='email address'/>
           <button className='submit' type="submit" > Submit</button>
           </form>
         </div>
           <img className='pngwing1' src="pngwing 1.png" alt="img" />
         <img className='pngwing2' src="pngwing 2.png" alt="img" />
         </div>
    </div>
  )
}

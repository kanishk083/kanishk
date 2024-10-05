import React from 'react'
export  const Title = () =>(
    <a href="/">
        <img 
        className="Logo"
        alt="Logo"
        src="https://content3.jdmagicbox.com/comp/ujjain/i2/9999px734.x734.220902165921.e9i2/catalogue/
        food-villa-freeganj-ujjain-ujjain-fast-food-j7m5i7idmz.jpg"
        />
    </a>
);

const header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
export default header

  
    
    
        
    
    
   

    
    
    
  
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/logo.css'; 

const Mobilelogo =()=>{
    
        return (
          
            <div className="row responsive-logos">
            <img 
              src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" 
              alt="Flutter Logo" 
              className="logo" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
              alt="React Logo" 
              className="logo" 
            />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGdS9eQQwoB95Ac_FvvvF3TVcOdMV1rivOg&s" 
              alt="Supabase Logo" 
              className="logo" 
            />
            <img 
              src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" 
              alt="Firebase Logo" 
              className="logo" 
            />
          </div>
           
        )
    
}

export default Mobilelogo;

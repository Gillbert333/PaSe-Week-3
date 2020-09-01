function Images  ()  {
     return (
         <div className="sample-wallpaper">
           <div className="wallpaper">
             <img src="./img/venom-1.jpg" alt="Venom 1" className="wallpaper"/>
            </div>
                    
           <div className="wallpaper">
             <img src ="./img/hulk-1.jpg"  alt="hulk #1" className="wallpaper"/>
           </div>
   
           <div className="wallpaper">
             <img src="./img/venom-2.jpg" alt="venom2" className="wallpaper"/> 
           </div>
   
           <style jsx>{`
             .sample-wallpaper {
               width: 100%;
               display: grid;
               grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
               gap: 4rem;
             }
             .wallpaper {
               height: 25rem;
               box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
             }
             .wallpaper > img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               object-position: center;
             }
           `}</style>
         </div>
     );
   };
   
   export default Images;
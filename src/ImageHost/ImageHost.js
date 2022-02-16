import './ImageHost.css';



// const imageVariants = [
//     {
//       url: " ",
//       width: 375
//     },
//     {
//       url: " ",
//       width: 491
//     },
//     {
//       url: "image-host-desktop.jpg",
//       width: 888
//     }
// ];
  
// // const srcSet = imageVariants.map(variant => `${variant.url} ${variant.width}w`).join(",");
// const srcSet= imageVariants[0].url;
// console.log(srcSet);


function imageHost(){
    return(
        <div className="image-host">
          {/* <img 
            srcset="image-host-mobile.jpg 375w, image-host-table.jpg 491w, image-host-desktop.jpg 888w"
            sizes="(max-width: 400px) 375px, (max-width: 770px) 491px, 888px"
            src="image-host-desktop.jpg"
            alt="Elva dressed as a fairy" /> */}
            
        </div>
    )
}

export default imageHost;
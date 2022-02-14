
const imageVariants = [
    {
      url: "image-host-mobile.jpg",
      width: 375
    },
    {
      url: "image-host-table.jpg",
      width: 491
    },
    {
      url: "image-host-desktop.jpg",
      width: 888
    }
];
  
const srcSet = imageVariants.map(variant => `${variant.url} ${variant.width}w`).join(",");

console.log(srcSet);

function imageHost(){
    return(
        <div className="image-host">
            <img 
                srcSet={srcSet}
                src={imageVariants[0].url}
                alt="a singer sings"
            />
        </div>
    )
}

export default imageHost;
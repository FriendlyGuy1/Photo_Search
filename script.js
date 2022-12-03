let search = location.search.split("=").pop()

const PhotoGrid = document.querySelector(".photos")




const RandomImg = async () => {
    try {
        const result = await fetch(`https://api.unsplash.com/photos/random/?client_id=0pm69UqOHL_y65VVlehattZqoY3RpHW_6sGOXOAvzyk&count=24`);
        const images = await result.json();

        images.forEach(element => {
            let my_img = document.createElement("img");
            my_img.src = element.urls.regular;
            PhotoGrid.appendChild(my_img)
        });
        

    } catch(error){
        console.log(error);
    }

};


const SearchImg = async () => {
    try {
        const result = await fetch(`https://api.unsplash.com/search/photos/?client_id=0pm69UqOHL_y65VVlehattZqoY3RpHW_6sGOXOAvzyk&query=${search}&per_page=24`);
        const images = await result.json();

        images.results.forEach(element => {
            let my_img = document.createElement("img");
            my_img.src = element.urls.regular;
            PhotoGrid.appendChild(my_img)
        });
        
    } catch(error){
        console.log(error);
    }
    
};

if(search == ''){
    RandomImg();
}else{
    SearchImg();
}

// buttons

function loadButton() {
    fetch ("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((data)=>displayButton(data.data))
};

function loadVideos() {
    fetch ("https://openapi.programming-hero.com/api/words/all")
    .then((res)=>res.json())
    .then ((data)=>displayVideos(data.data)) 
}


function displayButton(buttons) {
    const butlayButtontonDiv = document.getElementById('buttonDiv');
    
    for (let btn of buttons) {
        let div = document.createElement("div");
        div.innerHTML=`
        <button class="hover:text-white bg-white hover:bg-[#422AD5] text-[#422AD5] font-semibold p-1 rounded-sm 
         border-1 border-[#422AD5]">${btn.lessonName} </button>
        `
        
    
        buttonDiv.appendChild(div); 
}

}

const displayVideos = (videos) => {
    const videoDiv = document.getElementById('videoDiv');
    videoDiv.innerHTML = ""; 

    videos.forEach(element => {
        
    

        const videoCard = document.createElement('div');

        videoCard.innerHTML = `
             <div class="bg-white">
    
            <div class="card-body items-center">
              <h2 class="card-title font-bold">Eager</h2>
             <p class="font-semibold">Meaning /Pronounciation</p>
              <p class="font-bold">${element.meaning} <span class=" font-bold">/</span> ${element.pronunciation} </p>
            </div>
              <div class="card-actions justify-between px-4">
                <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-volume-high"></i></button>
             
            </div>
          </div>
        `;
        
        videoDiv.appendChild(videoCard); // Append properly
    });
};



loadButton();
loadVideos();
// buttons

function loadButton() {
    fetch ("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((data)=>displayButton(data.data))
};

// all video

// function loadVideos() {
//     fetch ("https://openapi.programming-hero.com/api/words/all")
//     .then((res)=>res.json())
//     .then ((data)=>displayVideos(data.data)) 
// }
// loadVideos();

// some video
// function someVideos(id) {
//   const url=`https://openapi.programming-hero.com/api/level/${id}`
//   fetch(url)
//   .then((res)=>res.json())
//   .then((data)=>displayVideos(data.data));

// }

// some video
function loadVideos(id) {
  const url=`https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=> {
    let clickButton = document.getElementById(`btn-${id}`);
    clickButton.classList.add('active');
    console.log('clickButton');

    displayVideos(data.data)
  });
};



function displayButton(buttons) {
    const buttonDiv = document.getElementById('buttonDiv');
    
    for (let btn of buttons) {
        let div = document.createElement("div");
        div.innerHTML=`
        <button id="btn-${btn.level_no}" onclick="loadVideos('${btn.level_no}')" class=" hover:text-whi bg-white hover:b-[#422AD5] text-[#422AD5] font-semibold p-1 rounded-sm 
         border-1 border-[#422AD5]">  <i class="fa-solid fa-book-open"></i> Lesson-${btn.level_no} </button>
        `;
        
    
        buttonDiv.appendChild(div); 
}

}

const displayVideos = (videos) => {
    const videoDiv = document.getElementById('videoDiv');
    videoDiv.innerHTML = "";

    if (videos.length === 0 ) {
      videoDiv.innerHTML = `
         <div class="flex  flex-col col-span-full justify-center items-center gap-4 mb-5">
              <img src="./assets/alert-error.png" alt="Error">
              <p class="text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
              <h1 class="text-3xl font-bold">নেক্সট Lesson এ যান</h1>
          </div>
      `;
      return; 
    }

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



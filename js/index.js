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

// remove button
function removeBtn() {
  const activeBtn =document.getElementsByClassName("active")
  for (btn of activeBtn) {
    btn.classList.remove("active");
  }
}

// some video
function loadVideos(id) {
  const url=`https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=> {

    removeBtn();
    // no active button
    let clickButton = document.getElementById(`btn-${id}`);
    clickButton.classList.add('active');
    console.log('clickButton');

  //  extra section hide
    let extraSection = document.getElementById('extraSection');
    if (extraSection) {
      extraSection.style.display = 'none';
    }

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

// const displayVideos = (videos) => {
//     const videoDiv = document.getElementById('videoDiv');
//     videoDiv.innerHTML = "";

//     if (videos.length === 0 ) {
//       videoDiv.innerHTML = `
//          <div class="flex  flex-col col-span-full justify-center items-center gap-4 mb-5">
//               <img src="./assets/alert-error.png" alt="Error">
//               <p class="text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
//               <h1 class="text-3xl font-bold">নেক্সট Lesson এ যান</h1>
//           </div>
//       `;
//       return; 
//     }

//     videos.forEach(element => {
//         const videoCard = document.createElement('div');

//         videoCard.innerHTML = `
//              <div class="bg-white">
    
//             <div class="card-body items-center">
//               <h2 class="card-title font-bold">Eager</h2>
//              <p class="font-semibold">Meaning /Pronounciation</p>
//               <p class="font-bold">${element.meaning} <span class=" font-bold">/</span> ${element.pronunciation} </p>
//             </div>
//               <div class="card-actions justify-between px-4">
//                 <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-circle-info"></i></button>
//                 <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-volume-high"></i></button>
             
//             </div>
//           </div>
//         `;
        
//         videoDiv.appendChild(videoCard); // Append properly
//     });
// };


const toggleVideos = () => {
  const videoDiv = document.getElementById('videoDiv');
  
  if (videoDiv.classList.contains('hidden')) {
      videoDiv.classList.remove('hidden'); 
  } else {
      videoDiv.classList.add('hidden'); 
  }
};

const displayVideos = (videos) => {
  const videoDiv = document.getElementById('videoDiv');
  videoDiv.innerHTML = "";

  if (videos.length === 0) {
      videoDiv.innerHTML = `
         <div class="flex flex-col col-span-full justify-center items-center gap-4 mb-5">
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
                <h2 class="card-title font-bold">${element.word}</h2>
                <p class="font-semibold">Meaning / Pronunciation</p>
                <p class="font-bold">${element.meaning} <span class="font-bold">/</span> ${element.pronunciation} </p>
              </div>
              <div class="card-actions justify-between px-4">
                <button onclick="videoDetails('${btn.word}')" class="btn bg-[#E8F4FF]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-volume-high"></i></button>
              </div>
           </div>
      `;

      videoDiv.appendChild(videoCard);
  });
};

// videoDetails
const videoDetails = (detailsId) => {
  const url = `https://openapi.programming-hero.com/api/word/${detailsId} `
  fetch (url)
  .then ((res)=>res.json())
  .then ((data) => displayVideoDetails(data.data))
};

const displayVideoDetails = (details) =>{
  document.getElementById("modal").showModal();
  const totalDtelails = document.getElementById ("totalDtelails");
    totalDtelails.innerHTML =`
    <div class="card card-border bg-base-100 w-96">
  <div class="card-body">
    <h2 class="card-title">Eager (     :ইগার)</h2>
    <p>আগ্রহী</p>
      <p>Example</p>
        <p>The kids were eager to open their gifts</p>
          <p>সমার্থক শব্দ গুলো</p>
              
  <div class="space-x-2">
        <button>Enthusiastic</button>
        <button>excited</button>
        <button>keen</button>
  </div>
          <button>Complete Learning</button>
  </div>
</div>
    `
  

}




loadButton();
loadVideos();



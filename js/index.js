
document.getElementById('spiner').style.display = "none";

// buttons>>>>>>>>>>>>>>>>>>>>.
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

// remove button>>>>>>>>>>>>>>>>>.
function removeBtn() {
  const activeBtn =document.getElementsByClassName("active")
  for (btn of activeBtn) {
    btn.classList.remove("active");
  }
}


// some fetch video>>>>>>>>>>>>>>>>>.

function loadVideos(id) {
  // show-spiner
  show("spiner")
  const url=`https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=> {

    removeBtn();
    // no active button
    let clickButton = document.getElementById(`btn-${id}`);
    clickButton?.classList?.add('active');
  //  extra section hide
    document.getElementById('extraSection').style.display = 'none';
// hide-spiner
    if (data.data) {
      displayVideos(data.data);
      makeHide("spiner")
    }
    
  });
 
};

// spiner == html code 
const makeHide = (id) => {
  document.getElementById(id).style.display ="none";
 }
 const show =(id) => {
  document.getElementById(id).style.display ="block";
 }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
           <div class="bg-white hover:bg-teal-100">
              <div class="card-body items-center">
                <h2 class="card-title font-bold">${element.word}</h2>
                <p class="font-semibold">Meaning / Pronunciation</p>
                <p class="font-bold">"${element.meaning?element.meaning:"অর্থ নাই"}" <span class="font-bold">/</span> ${element.pronunciation} </p>
              </div>
              <div class="card-actions justify-between px-6">
                <button onclick="videoDetails('${element.id}')" class="btn bg-[#E8F4FF]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#E8F4FF]"><i class="fa-solid fa-volume-high"></i></button>
              </div>
           </div>
      `;
    
        videoDiv.appendChild(videoCard);
        
  });
 
};

// videoDetails>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 function videoDetails(detailsId) {
  const url = `https://openapi.programming-hero.com/api/word/${detailsId}`
  fetch (url)
  .then ((res)=>res.json())
  .then ((data) => displayVideoDetails(data.data))
}
// >>>>>
function displayVideoDetails(detail) {
  document.getElementById("modal").showModal();

  let details = document.getElementById("details");
  details.innerHTML = `
          <h2>${detail.word} (<i class="fa-solid fa-microphone"></i>):${detail.pronunciation}</h2>
          <p><strong>Meaning:</strong></p>
          <p>${detail.meaning}</p>
        
          <p><strong>Example:</strong></p>
          <p>${detail.sentence}</p>
   
          <p><strong>সমার্থক শব্দ গুলো:</strong></p>
          <div class="space-x-2">
             <button>${detail.synonyms[0]?detail.synonyms[0]:" "}</button>
             <button>${detail.synonyms[1]?detail.synonyms[1]:" "}</button>
             <button>${detail.synonyms[2]?detail.synonyms[2]:" "}</button>
          </div>
          </div>
          <button class="bg-[#422AD5] text-white p-2 rounded-sm">Complete Learning</button>
      </div>
    `;
}





// const displayVideoDetails = (details) =>{

//   document.getElementById("modal").showModal();
//   const totalDtelails = document.getElementById ("totalDtelails");
//     totalDtelails.innerHTML =`
//     <div class="card card-border bg-base-100 w-96">
//   <div class="card-body">
//     <h2 class="card-title">${details.word}     :ইগার)</h2>
//     <p>আগ্রহী</p>
//       <p>Example</p>
//         <p>The kids were eager to open their gifts</p>
//           <p>সমার্থক শব্দ গুলো</p>
              
//   <div class="space-x-2">
//         <button>Enthusiastic</button>
//         <button>excited</button>
//         <button>keen</button>
//   </div>
//           <button>Complete Learning</button>
//   </div>
// </div>
//     `
// }




loadButton();
loadVideos();



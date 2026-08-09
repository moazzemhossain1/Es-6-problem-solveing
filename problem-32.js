const videos = [
  {title:"JS Tutorial", category:"Programming"},
  {title:"React Course", category:"Programming"},
  {title:"Football Highlights", category:"Sports"},
  {title:"Cricket Match", category:"Sports"},
  {title:"Cooking Recipe", category:"Food"}
];



let gropingVideos=videos.reduce((acc ,video)=>{
    let key=video.category;
    if(!acc[key]){
        acc[key]=[]
    }
    acc[key].push(video)
    return acc;

},{})

console.log(gropingVideos)


let countVideoGroping=videos.reduce((acc ,video)=>{
    let key=video.category;
    if(!acc[key]){
        acc[key]=0;
    }
    acc[key]++;
    return acc;
})
console.log(countVideoGroping)
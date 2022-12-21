
setInterval(()=>{
    let todate= new Date();
    let hours = todate.getHours();
    let minutes = todate.getMinutes(); 
    let seconds= todate.getSeconds()
    document.getElementById('clk').innerHTML=`${hours}: ${minutes} : ${seconds}`;


}, 1000)







as function submit(){
    let input = document.getElementById("input")
    let show = document.getElementById("show")

    let results = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+input.value);

    // console.log(results.length)
    let data = await results.json()
    console.log(data)

//  let shower = "";
//  for(let i =0;i<data[0].length;i++){
    show.innerHTML = `
            <div class="container">
                <b>
                    <i class="fas fa-volume"></i>
                    <audio controls autoplay><source src="${data[0].meaning}"></audio>
                </b>
                <h2>Transcription:<span></span></h2>
                <h2>Part of speech:<span></span></h2>
                <h2>Meaning:<span></span></h2>
                <h2>Example:<span></span></h2>

            </div>
    
    `
    // show.innerHTML = shower;
 }
 

// function empty_example(empty){
//     if (empty == undefined){
//         empty = ""
//     }

//     else{
//         empty = "Example" + empty
//     }
// }
//  <i style="margin: 15px;" class="fas fa-volume-up" onclick="vol()"></i>
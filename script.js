
// setInterval(()=>{
//     let todate= new Date();
//     let hours = todate.getHours();
//     let minutes = todate.getMinutes(); 
//     let seconds= todate.getSeconds()
//     document.getElementById('clk').innerHTML=`${hours}: ${minutes} : ${seconds}`;


// }, 1000)

function empty_example(empty){
    if (empty == undefined){
        empty = ""
    }

    else{
        empty = "Example" + empty
    }
}


    let inputValue = document.getElementById("input")
    let show = document.getElementById("show")

   function submit(){
 fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputValue.value)
 .then(res => res.json())
 .then(data =>{
    let results = "";
    for(let i = 0 ; i < data[0].meanings.length ; i++){
        results += `
                <div class="container-item m-3">
                        <audio controls autoplay><source src="${data[0].phonetics[0].audio}"></audio>
                    
                    <h5>Transcription:<span>${data[0].phonetics[0].text}</span></h5>
                    <header>Part of speech:<span>${data[0].meanings[i].partOfSpeech}</span></header><br>
                    <h5>Meaning:<span>${data[0].meanings[i].definitions[0].definition}</span></h5>
                    <p>Example:<span> ${empty_example(data[0].meanings[i].definitions[0].example)}</span></p> 
                </div>
        
        `
        }
        show.innerHTML = results;
 })
   
// 
    
 }
 

  
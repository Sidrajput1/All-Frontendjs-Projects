const inputBtn = document.getElementById('input')
const infoText = document.getElementById('text-info')
const meaningBox = document.getElementById('meaning-container')
const title = document.getElementById('title')
const meaning = document.getElementById('meaning')
const audio = document.getElementById('audio')

async function fetchApi(word){
    try {
        infoText.style.display = 'block';
        meaningBox.style.display = 'none'
        infoText.innerText = `Searching the meaning of ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        console.log("result",result.title)

        if(result.title){
            console.log("result",result.title)

            meaningBox.style.display = 'block'
            infoText.style.display = 'none'
            title.innerText = word
            meaning.innerText = "N/A"
            audio.style.display = 'none'

        } else{
            infoText.style.display = 'none'
            meaningBox.style.display = 'block'
            audio.style.display = 'inline-flex'
            title.innerText = result[0].word
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio

        }

        
    } catch (error) {
        console.log(error)
        infoText.innerText = `There is something an error,please ! try again`
        
    }
};

inputBtn.addEventListener('keyup',(e)=>{
    if(e.target.value && e.key === 'Enter'){
        fetchApi(e.target.value);
    }
});
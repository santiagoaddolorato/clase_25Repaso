const cardContainer = document.querySelector("main")

const BASE_URL = "https://rickandmortyapi.com/api/character/";

const getRandomNumber = ()=>{
   return  Math.floor( Math.random() * 825)+ 1;
};

const getpj = async ( ) =>{
   try {
      const newPj = await fetch(`${BASE_URL} ${getRandomNumber()}`)
      .then((res)=> res.json());
      console.log(newPj);
      return newPj;
   } catch (error) {
      cardContainer.innerHTML = `
      <h1>ROMPIMO TODO</h1>
      `
      console.log(error);
   }
}

const renderNewPj = (character)=>{
    const {image, name, species, origin, gender, id } = character
    cardContainer.innerHTML = `
    <div class="cardWrapper" id=${id}>
        <div class="imgContainer">
            <img src=${image} alt="" />
        </div>
        <div class="infoContainer">
            <h1>${name}</h1>
            <div class="info">
                <h2>ESPECIE:</h2>
                <span>${species}</span>
            </div>
            <div class="info">
                <h2>ORIGEN:</h2>
                <span>${origin.name}</span>
            </div>
            <div class="info">
                <h2>GENERO:</h2>
                <span>${gender}</span>
            </div>
        </div>
    </div>
    `
}

const getAnRenderPj = async () =>{
   cardContainer.innerHTML = `
      <h1>CARGANDO...</h1>
   `
   const pj = await getpj();
   renderNewPj(pj);
}

const init = () =>{
    window.addEventListener("DOMContentLoaded", getAnRenderPj)
}

init();
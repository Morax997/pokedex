import './App.css';
import data from "./data.json";

const getColorType = (type) => {
  let colorType = ""
  if (type === "Grass") {
    colorType = "backgroundGrass"
  } else if (type === "Poison"){
    colorType = "backgroundPoison"
  } else if (type === "Fire"){
    colorType = "backgroundFire"
  } else if (type === "Water"){
    colorType = "backgroundWater"
  } else if (type === "Electric"){
    colorType = "backgroundElectric"
  }
  return colorType
}

const pokeAlert = (alertMessage) => {
  alert(alertMessage)

}

const App = () => {
  return <div>
    <div className="container">
      {
        data.map(pokemon => {
          return <div className="pokeCard" onClick={() => {pokeAlert(pokemon.description)}}>
            <div className="pokeName">{pokemon.name}</div>
            <div>
              {
                pokemon.types.map(type => {
                  return <span className={"pokeTypes " + getColorType(type)}>{type}</span>
                })
              }

            </div>
            <img className="imgSize" src={pokemon.imageURL} alt=""/>
          </div>
        })
      }
    </div>
  </div>;
}

export default App;

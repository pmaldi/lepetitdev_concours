import Countdown from 'react-countdown';
import './App.css'

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  let name = queryParameters.get("name")

  if (!name) {
    name = "Le monde entier";
  }


  const Complete = () => <span>Vous etes déjà en 2023 !</span>;
  const bg = "https://static.vecteezy.com/system/resources/previews/001/409/931/large_2x/christmas-red-banner-background-with-snowflakes-vector.jpg";
  const gift = "https://upload.wikimedia.org/wikipedia/commons/8/84/Gift_Flat_Icon_Vector.svg"

  return (
    <div className="App">
      <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url("${bg}")` }}>
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={gift} width="150" alt="" />
              <h1 className="text-4xl font-bold">Bonne année 2023</h1><br />
              <h2 className="text-2xl font-semibold text-center leading-9">Il reste encore<br />
                <Countdown date='2023-01-01T00:00:00' >
                  <Complete />
                </Countdown>
                <br />avant le nouvel an !</h2>
            </div>

            <div className="mb-8 flex flex-col items-center">
              <p className="text-2xl font-semibold text-center leading-9">Mais c'est pas pour autant que </p>
              <p className="text-4xl font-semibold text-center mb-10 mt-10">{name}</p>
              <p className="text-2xl font-semibold text-center leading-9">ne vous souhaite pas une bonne année 2023 !</p>
              <blockquote className="text-xl italic font-semibold mt-10 text-center">
                <p>"J'aimerais avoir la chance de décider de ma vie, je crois que c'est le plus grand cadeau qui puisse nous être fait."</p>
                <p>"Grégoire Delacourt"</p>
              </blockquote>
            </div>
            <form action="#" method="get">
              <div className="flex flex-col items-center">
                <label htmlFor="name" className="text-2xl font-semibold text-center leading-9">Et vous, <br /> a qui voulez-vous que je souhaite une bonne année ?</label>
                <div className='flex items-center gap-2'>
                  <input type="text" name="name" id="name" className="mt-4 px-4 py-2 rounded-lg bg-gray-700 text-white" placeholder="Prénom de l'ami" />
                  <button type="submit" className="mt-4 px-4 py-2 rounded-lg bg-gray-700 text-white">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default App

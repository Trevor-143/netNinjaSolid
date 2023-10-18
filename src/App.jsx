import banner from "./assets/banner.jpg"
import Card from "./components/Card"

function App() {

  return (
    <>
      <header>
        <h1>Ninja Merch</h1>
      </header>

      <img src={banner} alt="banner"/>

      <Card />
    </>
  )
}

export default App
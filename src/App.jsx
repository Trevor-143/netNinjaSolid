import banner from "./assets/banner.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div className="container m-auto">
      <header>
        <h1>Ninja Merch</h1>
      </header>

      <img src={banner} alt="banner" className="rounded-md" />

      <div className="grid grid-cols-4 gap-10 my-4">
        <Card title='Teal mug' content='A ggod cup of tea deserves a good mug to go with it' price={10} rounded={true} flat={false} />
        <Card title='Lav pen' content='Write your best novels, articles and so much more smoothly and effectively' price={4} rounded={false} flat={true} />
        <Card title='Note Buk' content='The best way to keep your memories and ideas safe forever' price={7} />
      </div>
    </div>
  );
}

export default App;

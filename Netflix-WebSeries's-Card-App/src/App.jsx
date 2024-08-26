import "./App.css";
import Cards from "./Components/Cards";
import Sdata from "./Components/Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">List of Top 3 Netlix Series</h1>

      <Cards
        sname={Sdata[0].sname}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        links={Sdata[0].links}
      />
      <Cards
        sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        links={Sdata[1].links}
      />
      <Cards
        sname={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        links={Sdata[2].links}
      />
      <Cards
        sname={Sdata[3].sname}
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        links={Sdata[3].links}
      />
      <Cards
        sname={Sdata[4].sname}
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        links={Sdata[4].links}
      />
    </>
  );
}

export default App;

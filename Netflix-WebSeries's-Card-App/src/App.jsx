import "./App.css";
import Cards from './Components/Cards'

function App() {

  return (
    <>

    <h1 className='heading_style'>List of Top 3 Netlix Series</h1>

    <Cards sname="DARK" imgsrc="https://wallpapercave.com/uwp/uwp4471004.png" title= "Netflix Original Series" links= "https://www.netflix.com/in/title/80990668?source=35"/>

    <Cards sname="Stranger Things" imgsrc="https://wallpapercave.com/uwp/uwp4222465.jpeg" title= "Netflix Original Series" links= "https://www.netflix.com/in/title/80990668?source=35"/>

    <Cards sname="Extra Curricular" imgsrc="https://wallpapercave.com/wp/wp11171928.jpg" title= "Netflix Original Series" links= "https://www.netflix.com/in/title/80990668?source=35"/>
    </>
  );
}

export default App;
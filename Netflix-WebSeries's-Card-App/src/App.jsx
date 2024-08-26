import "./App.css";
import Cards from "./Components/Cards";
import Sdata from "./Components/Sdata";


// function ncard(CurrentVal,index,arr) -> a sample of a function with arguments it accepts !
// for more detailed information about this map() function, you can watch :- https://youtu.be/EETqnvQfpEg?si=C_j0G9Am39U_565L

// function ncard(val){
//   console.log(val)
//   return(
//     <Cards
//     sname={val.sname}
//     imgsrc={val.imgsrc}
//     title={val.title}
//     links={val.links}
//   />
//   );

// }
function App() {
  return (
    <>
      <h1 className="heading_style">List of Top 3 Netlix Series</h1>      
    {/* {Sdata.map(ncard)} // using this we can print as many times we want cards to get printed */}

    {Sdata.map((val)=> <Cards // This is the use of Fat Arrow Function
    sname={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    links={val.links}
  />)} {/* // you can also use inline method to print cards using map() function */}

    </>
  );
}

export default App;

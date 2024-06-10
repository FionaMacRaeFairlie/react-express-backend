import datasource from "./components/data.js";
import { useEffect, useState, useCallback } from "react";
import Search from "./components/Search";
import ShowOne from "./components/ShowOne.js"; 

function App() {
  const [ entryList, setEntryList ] = useState([{
    "subject": "",
    "contents": "",
    "author": "",
    "published": ""
  }]);

  const fetchData = useCallback(() => {
      fetch(datasource.baseURL, {
       method: "GET",
       headers: datasource.headers,
     }).then((response) => response.json())
       .then((data) => {
           console.log(data);
         const datalist = data;
          setEntryList(datalist);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
 
   useEffect(() => {
     fetchData();
   }, [fetchData]);

   
 return (
    <div className="App">
     <Search details={entryList}/>
     {/* <ShowOne details={entryList}/> */}
    </div>
  );
}

 
export default App;
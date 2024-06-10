import React, { useState } from "react";

function ShowOne({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((entry) => {
    return entry.author.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e);
    console.log(searchField);
  };

  function searchList() {
    console.log("****************************************");
    console.log(details);
    console.log(searchField);
    console.log(filteredPersons);
    console.log("****************************************");
    const filtered = filteredPersons.map((entry) => (
      <>
      There are some posts written by {entry.author}  on {entry.published}  
        {/* <div key={entry.subject} id={entry.subject}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{entry.subject}</h4>
              <p className="card-text">{entry.contents}</p>
              <div className="card-footer">
                <p>
                  Written by {entry.author} , on {entry.published}  
           <button onClick={(event) => handleChange(entry.author, event)}>{entry.author} </button>

                </p>
              </div>
            </div>
          </div>
        </div> */}
      </>
    ));
    return <div>{filtered}</div>;

  }

  function showList() {
    const list = details.map((entry) => (   
  <>
      <div key={entry.subject} id={entry.subject}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{entry.subject}</h4>
            <p className="card-text">{entry.contents}</p>
            <div className="card-footer">
              <p>
                Written by  <a href="/posts/{{author}}">{entry.author}</a> , on {entry.published}  
         {/* <button onClick={(event) => handleChange(entry.author, event)}>{entry.author} </button> */}

              </p>
             
            </div>
          </div>
        </div>
      </div>
    
        {/* <button onClick={(event) => handleChange(entry.author, event)}>{entry.author} </button>   */}
      </>
    ));
    return <div>{list}</div>;

  }




  return (
    <>
      <div className="container">
        {/* <p>
          Written by
          <button onClick={(event) => handleChange("Fred", event)}>Fred</button>{" "}
        </p>
        <p>
          Written by
          <button onClick={(event) => handleChange("Ann", event)}>Ann</button>{" "}
        </p>
        <p>
          Written by
          <button onClick={(event) => handleChange("Peter", event)}>
            Peter
          </button>{" "}
        </p> */}
        {/* {searchList()} */}
        {showList()}
      </div>
    </>
  );
}
export default ShowOne;

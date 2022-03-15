import React from 'react'

const Entry = ({entry}) => {
    return (

        <div  key={entry.subject} id={entry.subject} >    
              <div className="card">
                <div className="card-body">
                        <h4 className="card-title">{entry.subject}</h4>
                        <p className="card-text">
                            {entry.contents}
                        </p>
                        <div className="card-footer">
                            <p>Written by {entry.author} , on {entry.published}</p>
                        </div>
                </div>
        </div>
        </div>
      
    );
};

export default Entry;




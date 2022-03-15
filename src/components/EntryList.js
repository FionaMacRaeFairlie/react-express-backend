import React from 'react';
import Entry from './entry';

function EntryList({ filteredPersons }) {
  const filtered = filteredPersons.map(entry =>  
      <Entry key={entry} entry={entry} />); 
      return (
        <div>
          {filtered}
        </div>
      );
}

export default EntryList;
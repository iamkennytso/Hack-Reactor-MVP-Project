import React from 'react';
import RecentLeeted from './recentLeeted.jsx';

const RecentLeeteds = (props) => (
    
  <div>
    <h3> Rec3n7 1337z:  </h3>
    {props.text.recent5.map( (item) => {
      return <RecentLeeted leeted = {item}/>
    })}
  </div>
)


export default RecentLeeteds;
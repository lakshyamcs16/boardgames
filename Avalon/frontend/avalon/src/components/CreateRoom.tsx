import React, { useEffect, useState } from "react";
import api from '../api/index';
import Join from "./Join";

export default function CreateRoom() {
  // make an api call to generate a room id, get the room id and display it
  // also render an input box to get the name

  const [id, setId] = useState<string>('');
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    api.get('/games/avalon')
    .then(res => { setId(res.data.id); setErr('') })
    .catch(err => { setErr(err); setId('') });
  }, []);

  if(!id) return <div>Loading...</div>;
  if(err) return <div>{err}</div>;
  
  return <div>
    ID: {id}
    <Join id={id} isMaster />
  </div>;
}

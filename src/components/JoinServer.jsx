import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';



const JoinServer = () => {
  const [Search, setSearch] = useState("");
  const [Result, setResult] = useState([]);
  const [Servers, setServers] = useState(Cookies.get('allserver'));

  const ChangeData = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    try {
      setResult(() => {
        const inp = Search.toLowerCase();
        return Servers.filter((item) =>
          item.toLowerCase().startsWith(inp));
      }
      )
    } catch {
      console.log('error')
    };
    return () => {
      setResult([])
    }
  }, [Search, Servers]);


  return (
    <div>
      <div>
        <h1>search</h1>
        <input type="text" value={Search} onChange={ChangeData} />
      </div>
      {Result.map((item) => {
        <p>{item}</p>
      })}
    </div>
  )
}

export default JoinServer

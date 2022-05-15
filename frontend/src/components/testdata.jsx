import React,{useEffect, useState} from 'react';
import '../components/testdb.scss';
import axios from 'axios';


const Testdata = () => {

  const [listall, setListAll] = useState([]);

  useEffect(() =>{
      axios.get("http://localhost:8080/posts").then((res) =>{
          setListAll(res.data);
      console.log(res);
      });
  }, [])

  return (
    <div className='content-data'>
        {listall.map((value, index) =>{
          return(
            <div className="data-item">
                <h1 key={index}>{value.title}</h1>
                <p key={index}>{value.postText}</p>
                <h2 key={index}>{value.username}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default Testdata;
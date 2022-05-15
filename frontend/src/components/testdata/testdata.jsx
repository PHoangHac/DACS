import React,{useEffect, useState} from 'react';
import '../testdata/testdb.scss';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Testdata = () => {

  const [listall, setListAll] = useState([]);

  let navigate = useNavigate();

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
            <div key={index} className="data-item" onClick={() => navigate(`/post/${value.id}`)}>
                <h1 >{value.title}</h1>
                <p >{value.postText}</p>
                <h2 >{value.username}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default Testdata;
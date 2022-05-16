import React, { useEffect, useState } from "react";
import "../testdata/testdb.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Testdata = () => {
  const [listall, setListAll] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      setListAll(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div className="content-data">
      {listall.map((value, index) => {
        return (
          <div
            key={index}
            className="data-item"
            onClick={() => navigate(`/post/${value.id}`)}
          >
            <div className="card-img">
              <img src="" alt="house1" />
              <ul className="action">
                <li>
                  <i class="fa-regular fa-eye"></i>
                  <span>Click see more</span>
                </li>
                <li>
                  <i class="fa-solid fa-plus"></i>
                  <span>???????</span>
                </li>
                <li>
                  <i class="fa-solid fa-people-roof"></i>
                  <span>{value.member}</span>
                </li>
                <li>
                  <i class="fa-solid fa-heart"></i>
                  <span>Like</span>
                </li>
              </ul>
            </div>

            <div className="content">
              <div className="productName">
                <h2>{value.title}</h2>
                <h3>{value.address}</h3>
              </div>
              <div className="price_rating">
                <h2>{value.price}</h2>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testdata;

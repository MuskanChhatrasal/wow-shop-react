import React, { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/context";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext/authContext";

const Home = () => {
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilter();

  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const response = await axios("/api/categories");
    setCategories(response.data.categories);
  }, []);

  const {
    authState: { loggedIn },
  } = useAuth();
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Food made with <span>love</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          {loggedIn ? (
            <Link to="/products" className="btn">
              shop now
            </Link>
          ) : (
            <Link to="/login" className="btn">
              shop now
            </Link>
          )}
        </div>
      </section>

      <h1 className="heading">
        <span>Categories</span>
      </h1>
      <section className="category-section">
        {categories.map((item) => {
          return (
            <div
              className="card category-card"
              onClick={() => {
                navigate("/products");
                filterDispatch({
                  type: "CATEGORY",
                  payload: item.categoryName,
                });
              }}
            >
              <h3 className="card-title category-title">{item.categoryName}</h3>
            </div>
          );
        })}
      </section>

      <section className="products" id="products">
        <Link to="/products">
          <p className="btn product-btn">View All</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;

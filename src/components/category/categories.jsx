import React from 'react';
import "./categories.scss";

export const Categories = () => {
    const categories = [
        {
          id: 1,
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          id: 5,
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
      ];
  return (
    <div className="categories-container">
        {categories?.map((cat, index) => {
          return (
            <div className="category-container" key={index}>
              <div
                className="background-image"
                style={{ backgroundImage: `url(${cat?.imageUrl})` }}
              >
                {" "}
              </div>
              {/* <img src="#" alt="image" /> */}
              <div className="category-body-container">
                <h2>{cat?.title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
          );
        })}
      </div>
  )
}

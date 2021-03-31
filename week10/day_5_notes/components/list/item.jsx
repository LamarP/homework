import React from "react";

const Item = ({ item }) => (
  <div className="list-item">
    <h3>{item.name}</h3>
    <span>{item.body}</span>
  </div>
);

export default Item;
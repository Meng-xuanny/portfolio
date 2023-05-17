import React from "react";
import Card from "./Card";
import { sites } from "../data";

const Cards = () => {
  return (
    <div>
      <h2>My sites</h2>
      <div className="sites-container">
        {sites.map((site) => (
          <Card key={site.id} {...site} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

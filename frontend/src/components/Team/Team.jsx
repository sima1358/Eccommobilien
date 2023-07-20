import React from "react";
import "./team.css";
import { team } from "../../data/data.js";
import { Heading } from "../Heading/Heading";

export const Team = () => {
  return (
    <>
      <section className="team">
        <Heading title="Our professional team" />

        <div className="our-team ">
          {team.map((value, index) => {
            const { cover, name, property } = value;
            return (
              <div className="team-box" key={index}>
                <div className="team-card">
                  <img className="team-img" src={cover} alt="team"/>

                  <div className="team-content">
                    <h5>Name: {name}</h5>
                    <p>Department: {property} </p>
                  </div>
                  <button>click here</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

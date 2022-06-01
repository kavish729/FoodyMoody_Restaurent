import React, { useState } from "react";
import data from "../db.json";
import "../App.css";

const Showitem = () => {
  const [item, setItem] = useState(data);

  const [ppp, setValue] = useState({
    rating: "3",
    votes: "3",
    reviews: "400",
  });
  const namechange = (e) => {
    const inputname = e.target.name;
    setValue({
      ...ppp,
      [inputname]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setItem([ppp, ...item]);
    console.log(item);
  };

  const rating = (r) => {
    const item = data;
    const newitem = item.filter((i) => i.rating > r);
    setItem(newitem);
  };

  const payment = (p) => {
    const item = data;
    const newdata = item.filter((i) => i.payment === p);
    setItem(newdata);
  };
  const paymentall = () => {
    const item = data;
    setItem(item);
  };

  return (
    <>
      <div className="upperdiv">
        <div>
          <h3 style={{ marginLeft: "80px" }}>Add Dish</h3>
          <form onSubmit={handlesubmit}>
            <div className="kkkkk">
              <label>Name:- </label>
              <input
                type="text"
                placeholder="enter dish name"
                onChange={namechange}
                name="name"
                className="input1"
              />
            </div>
            <div>
              <label>Cost:- </label>
              <input
                type="number"
                placeholder="enter item cost"
                onChange={namechange}
                name="cost"
                className="input2"
              />
            </div>

            <div>
              <label>Image:- </label>
              <input
                type="url"
                placeholder="enter image url"
                onChange={namechange}
                name="image"
                className="input3"
              />
            </div>

            <div>
              <label> Category:-</label>
              <input
                type="text"
                placeholder="enter category"
                onChange={namechange}
                name="category"
                className="input4"
              />
            </div>

            <div>
              <label>Payment:-</label>
              <input
                type="text"
                placeholder="enter payment method"
                onChange={namechange}
                name="payment"
                className="input5"
              />
            </div>

            <div>
              <input
                style={{
                  marginLeft: "120px",
                  marginTop: "10px",
                  backgroundColor: "rgb(199, 6, 135)",
                  color: "white",
                  border: "none",
                  borderRadius: "7px",
                  cursor: "pointer",
                }}
                type="submit"
                value="Add Item"
              />
            </div>
          </form>
        </div>

        <div>
          {/* // for Sorting by rating */}
          <div className="sordingdiv">
            <h1>Sort by Rating</h1>
            <button onClick={() => rating(4)}>Above 4</button>
            <button onClick={() => rating(3)}>Above 3</button>
            <button onClick={() => rating(2)}>Above 2</button>
            <button onClick={() => rating(1)}>Above 1</button>
          </div>
          {/* // for sorting by payment method */}

          <div className="sordingdiv">
            <h1>Sort by Rating</h1>
            <button onClick={() => payment("Accepts cash payments only")}>
              Only Accept Cash
            </button>
            <button onClick={() => payment("Accepts online payments only")}>
              Only Accept Card
            </button>
            <button onClick={() => paymentall()}>Show All restaurent</button>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", color: "red" }}> Menu List</h1>

      <div className="maindiv">
        {item.map((i) => {
          return (
            <div className="border">
              <div className="singlediv">
                <div>
                  <img src={i.image} alt="" />
                </div>
                <div>
                  <h3>{i.name}</h3>
                  <p className="yehp">{i.category}</p>
                  <p className="yehp">cost {i.cost} for one</p>
                  <div className="kavish">
                    <p>Min $50 </p>
                    <li>min 30min</li>
                  </div>

                  <p>{i.payment}</p>
                </div>
                <div>
                  <p>⭐{i.rating}</p>
                  <p className="yehp">{i.votes} votes</p>
                  <p className="yehp">{i.reviews} reviews</p>
                </div>
              </div>
              <hr />
              <button className="orderbutton">Order Online {">"}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Showitem;

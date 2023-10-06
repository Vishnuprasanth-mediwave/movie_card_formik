import React, { useEffect, useState } from "react";
import Input from "./Components/input";
import Button from "./Components/button";
import Card from "./Components/card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles(() => {
      const data = { id: uuidv4(), title: title };
      return [...titles, data];
    });

    setTitle("");
  };

  function UpdateCard() {}

  function deleteCard(id) {
    const filterArray = titles.filter((check) => check.id !== id);
    setTitles(filterArray);
  }

  useEffect(() => {
    console.log(titles);
  }, [titles]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title"
            type="text"
            id="1"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button type="submit" name="Add" />
        </div>
      </form>

      {titles.map((item) => {
        return (
          <div>
            <Card
              values={item}
              deleteCard={() => deleteCard(item.id)}
              UpdateCard={() => UpdateCard(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

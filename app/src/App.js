import React, { useState } from "react";
import Input from "./Components/input";
import Button from "./Components/button";
import Card from "./Components/card";

function App() {
  const [formData, setFormData] = useState([{
    title: "",
    description: "",
    ratings: "",
    url: "",
  }]);
  const [cardData, setCardData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData([...cardData, formData]);
    setFormData({
      title: "",
      description: "",
      ratings: "",
      url: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ratings">Ratings</label>
          <Input
            type="number"
            id="ratings"
            name="ratings"
            placeholder="Ratings"
            value={formData.ratings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <Input
            type="url"
            id="url"
            name="url"
            placeholder="URL"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" name="Submit" />
      </form>
      <div className="card">
        {cardData &&
          cardData.map((item, index) => {
            return <Card key={index} values={item} />;
          })}
      </div>
    </div>
  );
}

export default App;

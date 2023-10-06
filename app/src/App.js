import { Formik, Form, Field } from "formik";
import Input from "./Components/input";
import Button from "./Components/button";
import "./App.css";
import * as Yup from "yup";
import { useState } from "react";
import Card from "./Components/card";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .required("Description is required")
    .min(5, "Description should be at least 5 characters"),
  ratings: Yup.number()
    .required("Ratings is required")
    .max(10, "Rating cannot be greater than 10"),
  url: Yup.string().url("Enter a valid URL").required("URL is required"),
});

function App() {
  const initialValues = {
    title: "",
    description: "",
    ratings: "",
    url: "",
  };
  const [carddata, setCarddata] = useState([]);
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setCarddata([...carddata, values]);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" placeholder="Title" />
              {touched.title && errors.title && (
                <div className="error">{errors.title}</div>
              )}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>
            <div>
              <label htmlFor="ratings">Ratings</label>
              <Field
                type="number"
                id="ratings"
                name="ratings"
                placeholder="Ratings"
              />
              {touched.ratings && errors.ratings && (
                <div className="error">{errors.ratings}</div>
              )}
            </div>
            <div>
              <label htmlFor="url">URL</label>
              <Field type="url" id="url" name="url" placeholder="URL" />
              {touched.url && errors.url && (
                <div className="error">{errors.url}</div>
              )}
            </div>
            <Button type="submit" name="Submit" />
          </Form>
        )}
      </Formik>
      <div className="card">
        {carddata &&
          carddata.map((item) => {
            return <Card values={item} />;
          })}
      </div>
    </div>
  );
}

export default App;

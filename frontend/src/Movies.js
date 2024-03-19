import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Layout from "./Layout";
import axios from "axios";

export default function Movies() {
  //isformactive is a state used to check whether the form is currently being shown or not
  //other states are used for collecting & handling data
  const [isFormActive, setIsFormActive] = useState(false);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [synopsis, setSynopsis] = useState("");

  //the handlers here tell how the add, update & delete buttons shud behave & wht they shud do
  const addHandler = () => {
    setCurrentAction(0);
    setIsFormActive(true);
  };
  const updateHandler = () => {
    setCurrentAction(1);
  };
  const deleteHandler = () => {
    setCurrentAction(2);
  };

  // useEffect is a hook that calls the functions mentioend inside it when the component loads
  useEffect(() => {
    getMovies();
  }, []);

  //movies is a state that stores the complete data of the movies table
  const [movies, setMovies] = useState([]);
  //currentaction is a state that shows the action like 0 for add, 1 for update, 2 for delete
  const [currentAction, setCurrentAction] = useState(0);

  // the below functions use axios to communicate with backend nodeJs server
  // nodeJs & express runs in localhost:5000 therefore that is being used as the port
  // axios is a communication library used to talk APIs easily
  // the nodeJS/express API has the following functionalities
  // getMovies for getting all data
  // updateMovie for updating specified tuple
  // deleteMovie for deleteing specified tuple
  // createMovie for inserting new tuple
  // getMovieById for getting 1 tuple
  const getMovies = async () => {
    const response = await axios.get("http://localhost:5000/movies");
    setMovies(response.data);
    console.log(response.data)
  };
  const updateMovie = async () => {
    await axios.patch(`http://localhost:5000/movies/${id}`, {
      title,
      genre,
      director,
      duration,
      rating,
      releaseDate,
      synopsis
    });
    getMovies();
  };
  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:5000/movies/${id}`);
    getMovies();
  };
  const createMovie = async () => {
    await axios.post("http://localhost:5000/movies", {
      title,
      genre,
      director,
      duration,
      rating,
      releaseDate,
      synopsis
    });
    getMovies();
  };
  const getMovieById = async (id) => {
    const response = await axios.get(`http://localhost:5000/movies/${id}`);
    setTitle(response.data.title);
    setGenre(response.data.genre);
    setDirector(response.data.director);
    setDuration(response.data.duration);
    setRating(response.data.rating);
    setReleaseDate(response.data.releaseDate);
    setSynopsis(response.data.synopsis);
  };
  //this function tells how the submit button works for the form
  // 0 means add therefore call createMovie
  // 1 means update therefore call updateMovie
  // after submitting form must be disabled so setIsFormActive(false) is used
  // default current action is 0 hence setCurrentAction(0) is used
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createMovie();
        break;
      case 1:
        updateMovie();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };

  //these functions tell the behaviour when u click update & delete buttons that pop up in the table
  const updateTableHandler = (id) => {
    setId(id);
    getMovieById(id);
    setIsFormActive(true);
  };
  const deleteTableHandler = (id) => {
    setId(id);
    setCurrentAction(0);
    deleteMovie(id);
  };

  //this is a component that represents the leftSideForm present in UI
  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter The Title of the movie"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Duration of the movie"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="rate the movie"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Release date of the movie"
              value={releaseDate}
              onChange={(event) => setReleaseDate(event.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Synopsis</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Synopsis of the movie"
              value={synopsis}
              onChange={(event) => setSynopsis(event.target.value)}
            />
            </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Director of the movie"
              value={director}
              onChange={(event) => setDirector(event.target.value)}
            />
          </Form.Group>
          <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
            Save
          </Button>
        </Form>
      </Card.Body>
    );
  };
  return (
    // layout is a general component used for all components since they all look the same
    <Layout
      isFormActive={isFormActive}
      addHandler={addHandler}
      updateHandler={updateHandler}
      deleteHandler={deleteHandler}
      data={movies}
      headers={["id","title",
        "genre",
        "director",
        "duration",
        "rating",
        "releaseDate",
        "synopsis"]}
      keys={["id", "title",
      "genre",
      "director",
      "duration",
      "rating",
      "releaseDate",
      "synopsis"]}
      leftForm={leftForm}
      currentAction={currentAction}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
    />
  );
}

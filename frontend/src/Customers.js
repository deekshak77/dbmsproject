import Layout from "./Layout";

export default function Customers() {
  const [isFormActive, setIsFormActive] = useState(false);
  const addHandler = () => {};
  const updateHandler = () => {};
  const deleteHandler = () => {};
  const leftForm = () => {
    return (
      <Card.Body>
        <Form>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Book Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Id"
              //   value={bookId}
              //   onChange={(event) => setBookId(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Name"
              //   value={bookName}
              //   onChange={(event) => setBookName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Published Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Published Year"
              //   value={publishedYear}
              //   onChange={(event) => setPublishedYear(event.target.value)}
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
    <Layout
      isFormActive={isFormActive}
      addHandler={addHandler}
      updateHandler={updateHandler}
      deleteHandler={deleteHandler}
      data={[{}]}
      headers={[]}
      keys={[]}
      leftForm={leftForm}
    />
  );
}

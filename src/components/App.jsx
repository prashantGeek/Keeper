import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setnoteArray] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function onChangeHandle(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function onClickHandle(event) {
    setnoteArray((prevValue) => {
      return [...prevValue, note];
    });
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function deleteNote(id) {
    setnoteArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        note={note}
        onChangeHandle={onChangeHandle}
        onClickHandle={onClickHandle}
      />
      {noteArray.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          key={index}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

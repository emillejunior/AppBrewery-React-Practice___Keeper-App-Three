import React, {useState} from "react";

function CreateArea(props) {

  const [newNote,setNewNote] = useState({})

  function handleChange(e) {
    // setText(e.target.value)
    const text = e.target.value
    if (e.target.name === "title") {
      console.log("Title is changing")
      setNewNote((prevState)=>{
          return {
          title: text, 
          content: prevState.content
          }
        }
      )
    } else if (e.target.name === "content") {
      console.log("Content is changing")
      setNewNote((prevState)=>{
          return {
          title: prevState.title, 
          content: text
          }
        }
      )
    }
  }

  function handleClick(e) {
    console.log(e.target.innerHTML)
    props.action(newNote)
    setNewNote({})
    e.preventDefault()
  }
  return (
    <div>
      <form>

        <input
         onChange={handleChange}
        //  value={newNote.title}
         name="title"
         placeholder="Title"
        />

        <textarea
         onChange={handleChange}
        //  value={newNote.content}
         name="content"
         placeholder="Take a note..."
         rows="3"
        />

        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

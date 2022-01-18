import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


function App() {
  const dummyNotes = [
    {
      id: 1,
      title: "Note 1",
      content: "Some basic content"
    },
    {
      id: 2,
      title: "Note 2",
      content: "Another basic content"
    },
    {
      id: 3,
      title: "Note 3",
      content: "More content"
    }
  ]
  const [notes,setNotes] = useState([])
  
  function deleteNote(x) {
    console.log("Deleting note #" + x)

    setNotes((prevNotes)=>{
      return prevNotes.filter( note => note.id !== x )
    })

    // setNotes(prevNotes=>{return prevNotes.map((note)=>{
    //   return {
    //         id: 1,
    //         title: "Note 1",
    //         content: "Some basic content"
    //       }
    // })})

    // setNotes(prevNotes=>{return prevNotes.filter((note)=>{
    //   return note.id != x
    // })})

  }

  function saveNote(newNote) {
    console.log("Saving.. ")
    console.log(newNote)
    console.log(notes.length)
    newNote.id = notes.length + 1
    setNotes((prevNotes)=>{      
      newNote.id = prevNotes.length + 1
      return [...prevNotes, newNote]
    })
  }
  
  return (
    <div>
      <Header />

      <CreateArea action={saveNote} />

      {notes.map((note)=>{
        return (
          <Note 
          key={note.id} 
          id={note.id} 
          title={note.title} 
          content={note.content}
          action={deleteNote} 
          />
        )
      })}

      <Footer />
    </div>
  );
}

export default App;

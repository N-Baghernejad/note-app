import { useState } from "react";

function AddNewNote() {
  const[title,setTitle]= useState("");
  const[description,setDescription]= useState("");
  const handleSubmit= (event)=>{
    event.preventDefault();
    };
  // const handleChange= (event)=>{
  //   setTitle(event.target.value);
  // };
  return (
    <div className="add-new-note">
      <h2>Add new note</h2>
      <form className="note form" onSubmit={handleSubmit}>
        <input 
          value={title} 
          onChange={(event)=> settitle(event.target.value)} 
          type="text" 
          className="text-field" 
          placeholder="Note title"/>
        <input 
        value={description}
        onChange={event =>setDescription(event.target.value)}
        type="text" 
        className="text-field" 
        placeholder="Note description"/>
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  )
}

export default AddNewNote;

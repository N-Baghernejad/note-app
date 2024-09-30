function AddNewNote() {
    const handleSubmit= (event)=>{
        event.preventDefault();
    };
  return (
    <div className="add-new-note">
      <h2>Add new note</h2>
      <form className="note form" onSubmit={handleSubmit}>
        <input type="text" className="text-field"/>
        <input type="text" className="text-field"/>
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  )
}

export default AddNewNote;

import Note from "./Note/Note"

const Notes = () => {
    const notesStore = [
        {
            title:"Note 1",
            text: "text 1"
        },
        {
            title:"Note 2",
            text: "text 2"
        }
    ]
    const NotesCollection = notesStore.map((note,index) =>{
        return (
            <Note key={index} title={note.title} text={note.text}/>
        )
    })
    return (
        <div>
            {NotesCollection}
        </div>
    )
}
export default Notes
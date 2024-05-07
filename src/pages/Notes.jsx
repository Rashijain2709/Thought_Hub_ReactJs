import { CiSearch } from "react-icons/ci"
const Notes = () => {
    return (
        <section>
            <header className='notes_header'>
                <h2>My Notes</h2>
                <input type="text" autoFocus placeholder='Search...' />
                <button className='btn'><CiSearch/></button>
            </header>            
        </section>

    )
}

export default Notes
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import AddNotes from './component/AddNotes/AddNotes';
import Header from './component/Header/Header';
import NoteList from './component/NoteList/NoteList';
import Products from './component/Products/Products';

export type Note = {
    id: string,
    title: string,
    text: string,
    date: string

}


function App() {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: (new Date()).toString(),
            title: "Meeting",
            text: "Ui UX meeting",
            date: (new Date()).toString()
        },
        {
            id: (new Date()).toString(),
            title: "Meeting",
            text: "Developer meeting",
            date: (new Date()).toString()
        },
    ])


    return (
        <div className="App">
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <NoteList notes={notes}></NoteList>
                    </Col>
                    <Col>
                        <AddNotes notes={notes} setNotes={setNotes}></AddNotes>
                    </Col>
                </Row>
            </Container>
            <Products></Products>
        </div>
    );
}

export default App;

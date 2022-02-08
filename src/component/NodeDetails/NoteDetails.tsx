import React from 'react';
import { Card } from 'react-bootstrap';
import { Note } from '../../App'

type Props = {
    note: Note
};

export default function NoteDetails({ note }: Props) {
    return <div className='mb-3'>
        <Card.Body style={{ background: '#ccc' }}>
            <Card.Title>{note.title}</Card.Title>
            <p>{note.text}</p>
            <br />
            <p>{note.date}</p>
        </Card.Body>

    </div>;
}

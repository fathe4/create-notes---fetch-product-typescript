import React from 'react';
import { Note } from '../../App'
import NoteDetails from '../NodeDetails/NoteDetails';

type Props = {
    notes: Note[]
};

export default function NoteList({ notes }: Props) {
    return <div>

        {notes.map(note => <NoteDetails note={note}></NoteDetails>)}
    </div>;
}

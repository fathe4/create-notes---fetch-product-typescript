import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Note } from '../../App'

type Props = {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
};

export default function AddNotes({ notes, setNotes }: Props) {
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setNotes([...notes, {
            id: (new Date()).toString(),
            title: title,
            text: text,
            date: (new Date()).toString()
        }])
    }

    return <div>
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onBlur={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" placeholder="Text" onBlur={(e) => setText(e.target.value)} />
            </Form.Group>
            <Button type='submit' variant='primary'>Submit</Button>
        </Form>
    </div>;
}

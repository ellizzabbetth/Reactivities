import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'


interface IProps {
    setEditMode: (editMode: boolean) => void; // set editMode returns boolean
}

// const ActivityForm = () => {
const ActivityForm : React.FC<IProps> = ({ setEditMode }) => {

    return (
        <Segment clearing>
            <Form>
                {/* duplicate line shift + alt + down */}
                <Form.Input placeholder='title'/>
                <Form.TextArea rows={2} placeholder='description'/>
                <Form.Input placeholder='category'/>
                <Form.Input type='date' placeholder='date'/>
                <Form.Input placeholder='city'/>
                <Form.Input placeholder='venue'/>
                
                <Button floated='right' positive type='submit' content='Submit' />
                {/* setEditMode === false */}
                <Button onClick= {() => setEditMode(false) } floated='right' type='button' content='Cancel' />
            </Form>        
        </Segment>
        )
    }

export default ActivityForm

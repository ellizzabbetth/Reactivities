import React, {useState} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'


interface IProps {
    setEditMode: (editMode: boolean) => void; // set editMode returns boolean
    activity: IActivity // respresents inital form state
    
}

// const ActivityForm = () => {
const ActivityForm : React.FC<IProps> = ({ setEditMode, activity: initialFormState }) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    return (
        <Segment clearing>
            <Form>
                {/* duplicate line shift + alt + down */}
                <Form.Input placeholder='title' value={activity.title}/>
                <Form.TextArea rows={2} placeholder='description' value={activity.description}/>
                <Form.Input placeholder='category' value={activity.category}/>
                <Form.Input type='date' placeholder='date' value={activity.date}/>
                <Form.Input placeholder='city' value={activity.city} />
                <Form.Input placeholder='venue' value={activity.venue} />
                
                <Button floated='right' positive type='submit' content='Submit' />
                {/* setEditMode === false */}
                <Button onClick= {() => setEditMode(false) } floated='right' type='button' content='Cancel' />
            </Form>        
        </Segment>
        )
    }

export default ActivityForm

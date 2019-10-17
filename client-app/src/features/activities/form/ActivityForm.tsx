import React, {useState, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void; // set editMode returns boolean
    activity: IActivity // respresents inital form state
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

// const ActivityForm = () => {
const ActivityForm : React.FC<IProps> = ({ 
    setEditMode, 
    activity: initialFormState,
    createActivity, 
    editActivity 
}) => {
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

    // edit has id
    // create has no id
    const handleSubmit = () => {
        console.log(activity);
        if (activity.id.length === 0){
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
     
        const {name, value} = event.currentTarget;
        // event.target can also access the name of the input so
        //   setActivity({...activity, [event.target.name]: event.target.value});
        
        // https://javascript.info/destructuring-assignment

        // set activity properties: only change the activity property for the input we are updating 
        // for this specific moment.
        // ({Spread the properties of the activity object, updating property})
        // bracket notation syntax for objects
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit = {handleSubmit}>
                {/* duplicate line shift + alt + down */}
                <Form.Input onChange={handleInputChange} name='title' placeholder='title' value={activity.title}/>
                <Form.TextArea onChange={handleInputChange} 
                    name='description' 
                    rows={2} 
                    placeholder='description' 
                    value={activity.description}
                />
                <Form.Input onChange={handleInputChange} name='category' placeholder='category' value={activity.category}/>
                <Form.Input onChange={handleInputChange} name='date' type='date' placeholder='date' value={activity.date}/>
                <Form.Input onChange={handleInputChange} name='city' placeholder='city' value={activity.city} />
                <Form.Input onChange={handleInputChange} name='venue' placeholder='venue' value={activity.venue} />
                
                <Button floated='right' positive type='submit' content='Submit' />
                {/* setEditMode === false */}
                <Button onClick= {() => setEditMode(false) } floated='right' type='button' content='Cancel' />
            </Form>        
        </Segment>
        )
    }

export default ActivityForm

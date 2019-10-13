//rafc
import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'


interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
// fucntion that returns void, pass null, call it 'activity', 
// set this to IActivity or null as the type of property that this
// is going to accept
    setSelectedActivity: (activity: IActivity | null) => void; 
}
const ActivityDashboard: React.FC<IProps> = ({
    activities, 
    selectActivity, 
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
         {/*   <List>
                {activities.map((activity) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))}
                </List> */}
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                <ActivityDetails activity={selectedActivity}     setEditMode={setEditMode}
                setSelectedActivity={setSelectedActivity} />
                )}
                {editMode && <ActivityForm 
                setEditMode={setEditMode}
           
                />}
            </Grid.Column>
        </Grid>
    );
};

export default ActivityDashboard

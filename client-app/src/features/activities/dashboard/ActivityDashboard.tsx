//rafc
import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

// property signatures
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
    // activity as a parameter of type IActivity. return void
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}
const ActivityDashboard: React.FC<IProps> = ({
    activities, 
    selectActivity, 
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
                />
            </Grid.Column>
         {/*   <List>
                {activities.map((activity) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))}
                </List> */}
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                <ActivityDetails 
                activity={selectedActivity}     
                setEditMode={setEditMode}
                setSelectedActivity={setSelectedActivity} />
                )}
                {editMode && 
                (
                <ActivityForm 
                key={selectedActivity && selectedActivity.id || 0}
                setEditMode={setEditMode}
                activity={selectedActivity!}
                createActivity={createActivity} 
                editActivity={editActivity}
                />
                )}
            </Grid.Column>
        </Grid>
    );
};

export default ActivityDashboard

import React, {Component} from 'react';

import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
 
  readonly state: IState = {
    activities: []
  }
  // set state triggering render of component
  componentDidMount(){
    // http request
    // axios get method returns promise
    axios.get<IActivity[]>('http://localhost:5000/api/activities')    
    .then((response) => {
      this.setState({
        activities: response.data
      })
    })

    // this.setState({
    //   values: [{id: 1, name: 'Value 101'},
    //            { id:2, name: 'Value 102'}]
    // })
  }

  render() {
    return (
      <div>
          <Header as='h2'>
            <Icon name='users' />
            <Header.Content>Reactivities</Header.Content>
          </Header>
          <List>
            <List.Item>Apples</List.Item>
            <List.Item>Pears</List.Item>
            <List.Item>Oranges</List.Item>
          </List>

             {/* javascript -- this bc referencing a class prop. 
                 'any' gives us no type safety. It just the same
                 as js with no typescript */}
             {this.state.activities.map((activity) => (
               <List.Item key={activity.id}>{activity.title}</List.Item>
             ))}


      </div>
    );
  }
  
}

export default App;

import React, {Component} from 'react';

import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component {
 
  state = {
    values: []
  }
  // set state triggering render of component
  componentDidMount(){
    // http request
    // axios get method returns promise
    axios.get('http://localhost:5000/api/values')    
    .then((response) => {
      this.setState({
        values: response.data
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
             {this.state.values.map((value: any) => (
               <List.Item key={value.id}>{value.name}</List.Item>
             ))}


      </div>
    );
  }
  
}

export default App;

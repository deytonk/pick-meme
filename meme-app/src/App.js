import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Start from './Start';
import Photo from './Photo';
import Judge from './Judge';
import Winner from './Winner';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  marginLeft: 100
};

class App extends Component {
  state = {
    open: false,
    // meme: null
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  // componentDidMount() {
  //   const.that = this;
  //   fetch('')
  //     .then((response) => response.json)
  //     .then((responseJson) => )
  // }

  // renderCharacters() {
  //   const { characters } = this.state; /*deconstruct this.state.characters*/
  //   if(characters && characters.length > 0) {
  //     return characters.map((obj, key) => {
  //       return <p key={key}>{obj.name}</p>
  //     })
  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <Link to="/"><RaisedButton onClick={this.handleTouchTap} label="Pick Meme!" fullWidth={true} primary={true} /></Link>
          <Popover
            style={style}
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem><Link to="/Start.js"><RaisedButton label="Who is playing?" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Photo.js"><RaisedButton label="Choose a caption!" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Judge.js"><RaisedButton label="Pick a winner!" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Winner.js"><RaisedButton label="Winner!" fullWidth={true} primary={true} /></Link></MenuItem>
            </Menu>
          </Popover>

          <hr/>
          <Route exact path="/" component={App}/>
          <Route exact path="/Start.js" component={Start}/>
          <Route path="/Photo.js" component={Photo}/>
          <Route path="/Judge.js" component={Judge}/>
          <Route path="/Winner.js" component={Winner}/>
        </div>
      </Router>
    );
  }
}

export default App;

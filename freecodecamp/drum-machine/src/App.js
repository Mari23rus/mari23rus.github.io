import React, { Component } from 'react';
import './App.css';
import DrumPad from './DrumPad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentSound: ''}

    this.displaySoundName = this.displaySoundName.bind(this);
  }

  displaySoundName(name) {
    this.setState({
      currentSound: name
    })
  }

  // renderDrumPad(id, key, code) {
  //   return <DrumPad id={id} triggerKey={key} triggerCode={code} displaySoundName={this.displaySoundName} />
  // }

  render() {    
    return (
      <div id="drum-machine">
        <div id="display">{this.state.currentSound}</div>

        <DrumPad id="clap" triggerKey="Q" triggerCode="81" displaySoundName={this.displaySoundName} />
        <DrumPad id="hihat" triggerKey="W" triggerCode="87" displaySoundName={this.displaySoundName} />
        <DrumPad id="kick" triggerKey="E" triggerCode="69" displaySoundName={this.displaySoundName} />
        <DrumPad id="openhat" triggerKey="A" triggerCode="65" displaySoundName={this.displaySoundName} />
        <DrumPad id="boom" triggerKey="S" triggerCode="83" displaySoundName={this.displaySoundName} />
        <DrumPad id="ride" triggerKey="D" triggerCode="68" displaySoundName={this.displaySoundName} />
        <DrumPad id="snare" triggerKey="Z" triggerCode="90" displaySoundName={this.displaySoundName} />
        <DrumPad id="tom" triggerKey="X" triggerCode="88" displaySoundName={this.displaySoundName} />
        <DrumPad id="tink" triggerKey="C" triggerCode="67" displaySoundName={this.displaySoundName} />

      </div>
    );
  }
}

export default App;

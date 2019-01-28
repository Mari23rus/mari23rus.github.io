import React, { Component } from 'react';

class DrumPad extends Component {
    constructor(props) {
      super(props)
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playSound = this.playSound.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    
    handleKeyPress(event){
        if(event.keyCode == this.props.triggerCode) this.playSound();
    }

    playSound(){
        this.props.displaySoundName(this.props.id);
        const sound = document.getElementById(this.props.triggerKey);
        sound.currentTime = 0;
        sound.play();
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.id} onClick={this.playSound}>
                {this.props.triggerKey}
                <audio id={this.props.triggerKey} className="clip" src={`sounds/${this.props.id}.wav`}></audio>
            </div>
        )
    }
}

export default DrumPad;
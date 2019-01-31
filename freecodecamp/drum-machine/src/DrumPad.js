import React, { Component } from 'react';

class DrumPad extends Component {
    constructor(props) {
      super(props);
      this.state = {playing: false}
      
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playSound = this.playSound.bind(this);
      this.stopPlaying = this.stopPlaying.bind(this);
      this.audio = document.createElement('audio');
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        this.audio.addEventListener('ended', this.stopPlaying);
    }
    
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress);
        this.audio.removeEventListener('ended', this.stopPlaying);
    }
    
    handleKeyPress(event){
        if (event.keyCode == this.props.triggerCode) {
            this.playSound();
            this.setState({playing: true})
        }
    }

    playSound(){
        this.props.displaySoundName(this.props.id);
        this.audio.src = `sounds/${this.props.id}.wav`;
        this.audio.play();
        this.setState({playing: true})
        //sound.currentTime = 0;
    }

    stopPlaying() {
        this.setState({playing:false})
    }

    render() {
        const playing = this.state.playing == true ? "drum-pad playing" : "drum-pad";
        return (
            <div className={playing} id={this.props.id} onClick={this.playSound}>
                {this.props.triggerKey}
                {/* <audio id={this.props.triggerKey} className="clip" src={`sounds/${this.props.id}.wav`}></audio> */}
            </div>
        )
    }
}

export default DrumPad;

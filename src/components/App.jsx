//import Search from 'Search.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      text: ''
    };
    this.searchYoutube = window.searchYouTube;
    this.handleClick = this.handleClick.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(...args) {
    this.setState({video: args[0]});
  }

  handleText(event) {
    this.setState({ text:event.target.value});
  }
  handleSubmit(event) {
    this.searchYoutube(this.state.text, this.receiveData.bind(this));
    
    //get data from above function 
    //set data.options to this.state.videos  
  }

  receiveData(data) {
    let firstVideo = data.shift();
    this.setState({videos: data});
    this.setState({video: firstVideo});
  }
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search myText = {this.handleText} mySubmit = {this.handleSubmit}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.video} title = {this.state.video.snippet.title} description = {this.state.video.snippet.description}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos = {this.state.videos} myClick = {this.handleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

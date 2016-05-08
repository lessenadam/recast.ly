class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
      query: 'cats'

    };
  }

  componentDidMount () {
    var options = {
      query: this.state.query,
      key: window.YOUTUBE_API_KEY,
      max: 5
    };

    window.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      }); 
    });
  }

  onListItemClick(video) {
    this.setState({
      currentVideo: video 
    });
  }

  onUserSearch(string) {
    this.setState({
      query: string
    });
    console.log(string);
  }

  render() {
    return (
      <div>
        <Nav onUserSearch={this.onUserSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onClickEvent={this.onListItemClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
class App extends React.Component {
  constructor (props) {
    super(props);



    this.state = {
      currentVideo: this.props.searchYouTube[0],
      videoList: this.props.searchYouTube

    };
  }
  onListItemClick(video) {
    this.setState({
      currentVideo: video 
    });
  }

  render() {
    return (
      <div>
        <Nav />
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


// var ProductCategoryRow = React.createClass({
//   render: function() {
//     return (<tr><th colSpan="2">{this.props.category}</th></tr>);
//   }
// });
import React from 'react';
import ChartList from '../components/ChartList.js'

class ChartContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chart: []

    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(allData => this.setState({chart: allData.feed.entry}));
  }


  render() {
    return (
      <div>
        <h1>Top 20 Chart</h1>
        <ChartList chart={this.state.chart}/>
      </div>
    )
  }

}

export default ChartContainer;
import React from 'react';

class ChartItem extends React.Component {

  render () {
    return (
        <div>
    
        <h1>{this.props.value + 1}</h1>
        {console.log(this.props.songRef)}

        <img src={this.props.song["im:image"][2]["label"]} alt="album artwork"></img>

        <a href={this.props.song["im:artist"]["attributes"]["href"]}><p className = "artist-name">{this.props.song["im:artist"]["label"]}</p></a>

        <a href={this.props.song["im:collection"]["link"]["attributes"]["href"]}><p>{this.props.song["im:name"]["label"]}</p></a>

        <p>Release Date: {this.props.song["im:releaseDate"]["attributes"]["label"]}</p>

        </div>
    )
  }


}

export default ChartItem;
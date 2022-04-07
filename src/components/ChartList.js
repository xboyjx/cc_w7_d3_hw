import React from 'react';
import ChartItem from "./ChartItem.js";


const ChartList = (props) => {

  const chartListItems = props.chart.map((song, index) => {
    return <ChartItem key={index} value={index} song={song} songRef={song["link"][1]["attributes"]["href"]}/>
  })

  return (
    <div>
      {chartListItems}
    </div>

  )
}

export default ChartList;
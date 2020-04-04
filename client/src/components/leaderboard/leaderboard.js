import React from "react";
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function Table({ playerData }) {
  console.log(playerData)
  return (

    <ReactTable
      data={playerData}
      columns={[
        {
          Header: "name",
          accessor: "name",
        },
        {
          Header: "Dodgeball",
          accessor: 'game1',
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Pong",
          accessor: 'game2',
          style: {
            textAlign: "center"
          }
        },
        
      ]}
      defaultSorted={[
        {
          id: "game1",
          desc: true
        }
      ]}
    />
  )
}

export default Table;
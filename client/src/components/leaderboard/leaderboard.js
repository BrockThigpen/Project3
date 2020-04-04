import React from "react";
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';



function Table({ playerData }) {
  console.log(playerData)
  return (

    <ReactTable

      columns={[{
        Header: "name",
        accessor: "name"
      },
      {
        Header: "Dodgeball",
        accesor: "game1"
      },
      {
        Header: "Pong",
        accesor: "game2"
      }
      ]}
      data={playerData}
    />
  )
}

export default Table;
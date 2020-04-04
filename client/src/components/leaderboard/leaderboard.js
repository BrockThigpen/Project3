import React from "react";
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Numeral from 'numeral';

function Table({ playerData }) {
  console.log(playerData)
  return (

    <ReactTable

      columns={[
        {
          Header: "name",
          accessor: "name"
        },
        {
          Header: "Dodgeball",
          id: 'game1',
          accessor: data => <span>{data.game1}</span>,
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Pong",
          id:'game2',
          accessor: data => <span>{data.game2}</span>,
          style: {
            textAlign: "center"
          }
        }
      ]}
      data={playerData}
    />
  )
}

export default Table;
import React from 'react'
import PropTypes from 'prop-types'

const Table = ({headers, data, columns, hasSerialNo}) => (
  <table border="1">
    <thead>
      <tr>
        {hasSerialNo && <th>No</th>}
        {headers.map((header, index) => (
          <th key={`${header}${index}`}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {
        data.map((row, index) => (
          <tr key={index}>
            {hasSerialNo && <td>{++index}</td>}
            {columns.map((column, i) => (
              <td key={i}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))
      }
    </tbody>
  </table>
)

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array,
  columns: PropTypes.array,
  hasSerialNo: PropTypes.bool
}

export default Table

import React from 'react';
import useRxStore from '../../hooks';
import markersStore from '../../store/markers';

const Table = () => {
  const data = useRxStore(markersStore, markersStore.INITIAL_STATE);

  return (
    <table>
      <tbody>
        <tr>
          <th>Область</th>
          <th>Виявлено</th>
          <th>Померло</th>
          <th>Одужало</th>
          <th>Хворіє</th>
          <th>Підозри</th>
        </tr>
        {
          data.markers.map(item => (
            <tr key={item.id}>
              <td>{item.label.uk}</td>
              <td>{item.confirmed}</td>
              <td>{item.deaths}</td>
              <td>{item.recovered}</td>
              <td>{item.existing}</td>
              <td>{item.suspicion}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

export default Table;

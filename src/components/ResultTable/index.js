import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

const ResultTable = ({ result }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Eye Color</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
        </tr>
      </thead>
      <tbody>
        {!result.length && (
          <tr>
            <td colSpan="8" className="text-center">
              No Result
            </td>
          </tr>
        )}
        {!!result.length &&
          result.map((people, idx) => (
            <tr key={people.url}>
              <td>{idx + 1}</td>
              <td>{people.name}</td>
              <td>{people.gender}</td>
              <td>{people.birth_year}</td>
              <td>{people.height}</td>
              <td>{people.eye_color}</td>
              <td>{people.hair_color}</td>
              <td>{people.skin_color}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

ResultTable.propTypes = {
  result: PropTypes.array,
};

ResultTable.defaultProps = {
  result: [],
};

export default ResultTable;

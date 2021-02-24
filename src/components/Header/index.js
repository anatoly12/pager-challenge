import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const Header = ({ onSearch, value, loading, setValue }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Pager Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="https://docs.google.com/document/d/1pCfxguF9fOA84yDlLGDevoRGHBQDB6pjylH85_MU2JQ"
            target="_blank"
          >
            Requirements
          </Nav.Link>
        </Nav>
        <div className="d-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
          />
          <Button
            className="d-flex align-items-center"
            onClick={onSearch}
            variant="outline-success"
            disabled={loading || !value}
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </>
            ) : (
              'Search'
            )}
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  value: PropTypes.string,
  loading: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

Header.defaultProps = {
  value: '',
  loading: false,
};

export default Header;

import React from "react";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import './search-bar.css'

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <Form className="d-flex flex-wrap gap-2 align-items-center justify-content-center">

        <Form.Control
          type="text"
          placeholder="Search Keyword"
          className="search-input w-50"
        />

        <DropdownButton
          id="dropdown-type"
          title="Property Type"
          variant="light"
          className="search-dropdown"
        >
          <Dropdown.Item>Property Type</Dropdown.Item>
          <Dropdown.Item>Property Type</Dropdown.Item>
          <Dropdown.Item>Property Type</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-location"
          title="Location"
          variant="light"
          className="search-dropdown"
        >
          <Dropdown.Item>Location</Dropdown.Item>
          <Dropdown.Item>Location</Dropdown.Item>
          <Dropdown.Item>Location</Dropdown.Item>
        </DropdownButton>

        <Button variant="success" className="search-button">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;

import React from "react";
import styles from "./TopBar.module.scss";
import { Autocomplete, TextField, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux'
import { selectEmployeeList } from '../../slices/emloyeesSlice'
import SearchIcon from '@mui/icons-material/Search';
import { Col, Row } from "react-bootstrap";

const TopBar = ({ className, list, search, setEmployeeName, setCompanySelect }) => {

  const employeeList = useSelector(selectEmployeeList())


  return (
    <div className={className}>
      <div className={styles.TopBarWrapper}>
        <div className={styles.TopBar}>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12}>
              <TextField fullWidth lg={{ m: 1 }} id="standard-basic" label="Name" variant="standard" onChange={(e) => setEmployeeName(e.target.value)} />
            </Col>
            <Col xl={5} lg={8} md={8} sm={12}>

              <Autocomplete
                className={styles.CompanyDropdown}
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => { if (value) { setCompanySelect(value) } else { setCompanySelect('') } }}
                options={list}
                renderInput={(params) => <TextField {...params} label="Company" />}
              />
            </Col>
            <Col xl={3} lg={12} md={12} sm={12} >
              <Stack spacing={2} direction="row" justifyContent="flex-end"
                alignItems="center" className={styles.SearchButton}>
                <Button variant="contained" endIcon={<SearchIcon />} onClick={() => search()}>
                  Search
                </Button>
              </Stack>
            </Col>
          </Row>


        </div>
      </div>
    </div >
  );
};

export default TopBar;

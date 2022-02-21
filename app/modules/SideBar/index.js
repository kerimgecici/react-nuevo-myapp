import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { TextField, FormControl, InputLabel, Select, MenuItem, Input, Button } from '@mui/material';

const SideBar = ({ className, uniqueAreaList, area, changeArea, filteredButton, setJobTitle }) => {




  return (
    <div className={className}>
      <div className={styles.SideBarWrapper}>
        <div className={styles.SideBar}>
          <TextField id="outlined-basic" label="Job Title" variant="outlined" onChange={(e) => setJobTitle(e.target.value)} className={styles.Input} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={styles.Label}>Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={area}
              label="Area"
              onChange={(e) => changeArea(e.target.value)}
              className={styles.SideBarDropdown}
            >
              {uniqueAreaList.map((item, i) => {
                return <MenuItem key={i} value={item}>{item}</MenuItem>
              })}

            </Select>
          </FormControl>

          <Button className={styles.Button} variant="contained" color="success" onClick={() => filteredButton()}>Filter</Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

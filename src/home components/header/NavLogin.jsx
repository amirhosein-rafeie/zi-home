import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
// import { person } from "../../assets/icons/theIcons/myIcons";

export default function BasicSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label"> sakmpd</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ width: "88px", height: "40px", borderRadius: "8px" }}
        >
          <MenuItem value={10}>ورود</MenuItem>
          <MenuItem value={20}>ثبت نام</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

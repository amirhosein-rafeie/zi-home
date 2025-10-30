import { Button, InputAdornment, TextField } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { Search } from "@mui/icons-material";

import { ReactSVG } from "react-svg";
import { Person, Shopping } from "@/assets/icons/theIcons/myIcons";

const SecondNav = () => {
  return (
    <div className="bg-white flex flex-row justify-between w-full h-[74px] border-b-gray-500 border-b-1">
      <div className=" flex flex-row gap-10 pr-[108px] mr-2 items-center">
        <img src="./zhomeLogo.png" className="w-[125px] h-14" />
        <div className="!rounded-b-xl ">
          <TextField
            placeholder="جستجو"
            variant="outlined"
            sx={{
              width: "665px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                height: "48px",
                padding: "0 12px",
                "& input": {
                  padding: 0,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 pl-[108px] ml-2 items-center">
        <div>
          <Button variant="outlined" color="grey">
            <Person className="fill-gray-800 stroke-gray-800" /> ثبت نام | ورود
          </Button>
        </div>
        <div>
          <Shopping />
        </div>
      </div>
    </div>
  );
};

export default SecondNav;

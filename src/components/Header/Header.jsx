import React from "react";
import { styled, alpha } from '@mui/material/styles';
import { Box, Toolbar, AppBar } from "@mui/material";

const HeaderBox = styled(Box)(() => ({
  width:"100vw",
  display:'flex',
  flexDirection:'row',
  alignContent:'space-between',
  justifyContent:'space-between',
  alignItems:'center'

}));
const HeaderLeftBox = styled(Box)(() => ({
  backgroundColor: "red",
}));
const HeaderRightBox = styled(Box)(() => ({
  backgroundColor: "red",
}));

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1A1A25",
          }}
        >
          <Toolbar>
            <HeaderBox>
              <HeaderLeftBox>

                Hey World, i am left
              </HeaderLeftBox>
              <HeaderRightBox>
              Hey World, i am right

              </HeaderRightBox>
            </HeaderBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

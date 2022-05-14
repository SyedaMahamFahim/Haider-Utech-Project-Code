import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  AppBar,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderBox = styled(Box)(() => ({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignContent: "space-between",
  justifyContent: "space-between",
  alignItems: "center",
}));
const HeaderLeftBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderRightBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderRightBoxList = styled(List)(({ theme }) => ({
  display: "flex",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#262633",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
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
                <Box
                  component="img"
                  sx={{
                    height: 50,
                  }}
                  alt="Logo"
                  src="/assests/images/logo.svg"
                />

                <Typography
                  variant="h6"
                  component="p"
                  mx={3}
                  fontSize="16px"
                  lineHeight="25px"
                  fontWeight={600}
                  color="white"
                  fontFamily={"Montserrat"}
                >
                  NFTNerds
                </Typography>

                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </HeaderLeftBox>

              <HeaderRightBox>
                <Box>
                  <HeaderRightBoxList>
                    <ListItem>
                      <ListItemText>hey</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>hey</ListItemText>
                    </ListItem>
                  </HeaderRightBoxList>
                </Box>
              </HeaderRightBox>
            </HeaderBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

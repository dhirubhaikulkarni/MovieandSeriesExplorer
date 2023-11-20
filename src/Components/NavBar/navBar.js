import React, { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData, setFilterData, setSearchData } from '../../Store/moviesSlice';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

let Category = [
    {
        "categoryKey": "all",
        "categoryLabel": "All"
    },
    {
        "categoryKey": "love",
        "categoryLabel": "Love"

    },
    {
        "categoryKey": "thriller",
        "categoryLabel": "Thriller"

    },
    {
        "categoryKey": "comedy",
        "categoryLabel": "Comedy"

    },
    {
        "categoryKey": "suspense",
        "categoryLabel": "Suspense"

    },
    {
        "categoryKey": "action",
        "categoryLabel": "Action"

    },
]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = React.useState('');
    const [categoryValue, setCategoryValue] = React.useState('all');
    useEffect(() => {
        dispatch(setSearchData(searchText));
    }, [searchText]);

    useEffect(() => {
        dispatch(getData());
    }, []);

    useEffect(() => {
        dispatch(setFilterData(categoryValue));
    }, [categoryValue]);

    const handleCategoryChange = (event) => {
        setCategoryValue(event.target.value)

    };

    return (
        <Box sx={{ flexGrow: 1 }} md={{ flexGrow: 1 }} lg={{ flexGrow: 1 }} xl={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                        <Link to={`/`}>MUI </Link>
                    </Typography>
                    <Typography
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Link to={`/MovieandSeriesExplorer`}>Home </Link>

                    </Typography>

                    <Typography
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Link to={`/moviespage`}>Movies </Link>

                    </Typography>
                    <Typography
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        <Link to={`/seriespage`}>Series </Link>
                    </Typography>
                    <Search sx={{ mr: 4 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Search>
                    <div style={{ display: 'flex',width:'15%' }}>
                        
                        <FormControl style={{width:'100%'}} sx={{ display: { sm: 'block' } }}>
                            <InputLabel required id="demo-simple-select-label"> Filter</InputLabel>
                            <Select
                                name="Category"
                                label="Filter"
                                value={categoryValue}
                                onChange={handleCategoryChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{width:'100%'}}
                            >
                                {Category.map((element) => (
                                    <MenuItem key={element.categoryKey} value={element.categoryKey}>{element.categoryLabel}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

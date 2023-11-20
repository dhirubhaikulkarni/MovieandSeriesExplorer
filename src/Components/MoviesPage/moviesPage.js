import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import MoviesDetails from '../../SharedComponent/moviesDetails';
import TablePagination from "@mui/material/TablePagination";
import { getData } from '../../Store/moviesSlice';

export default function Movies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie.data);
  const totalCount = useSelector((state) => state.movie.totalCount);
  const searchText = useSelector((state) => state.movie.searchText);
  console.log(searchText)
  const [pageIndex, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }
  useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

  return (
    <Grid item sx={12} sm={2} md={2} lg={2} xl={2}>
      <Divider> <Chip label="Movies" /></Divider>
      <Grid className='items-center justify-center' style={{ display: 'flex' }} item sx={6}>
        <Box
          container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 5,
              width: 220,
            },
          }}
        >
          {
            data.map(x =>
              x.type == 'Movie' && <MoviesDetails data={x} />
            )
          }
        </Box>

      </Grid>
      <TablePagination
        className="tablePaging"
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={pageIndex}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Grid>
  );
};



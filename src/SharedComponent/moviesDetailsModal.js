import { useDispatch, useSelector } from "react-redux";
import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect,
} from "react";
import {
    Tooltip, IconButton, Button, DialogContent, DialogTitle, Dialog, Icon, Switch, DialogActions, useMediaQuery,
    useTheme,
} from '@mui/material';
import Typography from '@mui/material/Typography';

const MoviesDetails = forwardRef((props, ref) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [opens, setOpens] = React.useState(false);
    const [data, setData] = React.useState([]);


    const handleClickOpen1 = () => {
        setOpens(true);
    };

    const handleClickClose = () => {
        setOpens(false);
    };

    useImperativeHandle(ref, () => ({
        handleClickOpen(data) {
            setData(data)
            handleClickOpen1();
        },
    }));

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='md'
                open={opens}
                onClose={handleClickClose}
                aria-labelledby="responsive-dialog-title"
                fullScreen={fullScreen}
                style={{ overflowY: 'auto' }}
            >

                <DialogTitle id="responsive-dialog-title">Movie Details</DialogTitle>
                <DialogContent dividers >
                    {data.type == "Movie" ?
                        <Typography gutterBottom variant="h5" component="div">
                            Movie Name: {data.MovieName}
                        </Typography>
                        :
                        <Typography gutterBottom variant="h5" component="div">
                            Series Name: {data.MovieName}
                        </Typography>
                    }
                    <Typography gutterBottom variant="h5" component="div">
                        Directed By: {data.Director}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Released On: {data.ReleaseDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {data.Details}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClickClose}
                        variant="contained"
                        color="primary"
                    >
                        Save
                    </Button>
                    <Button onClick={handleClickClose} variant="contained" color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
});

export default MoviesDetails;





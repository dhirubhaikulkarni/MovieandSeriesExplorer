import React, { useEffect, useRef } from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoviesDetailsModal from "./moviesDetailsModal";

const MoviesDetails = (props) => {
    let { data } = props
    const noteRef = useRef(null);
    const getIcon = (type) => {
        let url = "";
        switch (type) {
            case 'Race':
                url = require('../Asset/image/Race3.jpg');
                break;
            case 'Razi':
                url = require('../Asset/image/Raazi.jpg');
                break;
            case 'RRR':
                url = require('../Asset/image/RRR.jpg');
                break;
            case 'KGF':
                url = require('../Asset/image/KGF.jpg');
                break;
            case 'Tiger3':
                url = require('../Asset/image/Tiger3.jpg');
                break;
            case 'HeraPheri':
                url = require('../Asset/image/HeraPheri.jpg');
                break;
            case 'SitaRamam':
                url = require('../Asset/image/SitaRamam.jpg');
                break;
            case 'Ashiqui':
                url = require('../Asset/image/Aashiqui 2.jpg');
                break;
            case 'Telgi':
                url = require('../Asset/image/Sacm2003.jpg');
                break;
            case 'Sacm1992':
                url = require('../Asset/image/sacm.jpg');
                break;
            case 'FamilyMan':
                url = require('../Asset/image/FamilyMan.jpg');
                break;
            case 'Aarya':
                url = require('../Asset/image/Aarya.jpg');
                break;
            case 'SacredGames':
                url = require('../Asset/image/SacredGames.jpg');
                break;
            case 'Railway':
                url = require('../Asset/image/railwayman.jpg');
                break;
            case 'Platform':
                url = require('../Asset/image/platform.jpg');
                break;
            case 'Hills':
                url = require('../Asset/image/1962.jpg');
                break;
            default:
                url = ""
        }

        return url;
    }

    return (
        <>
            <Card style={{ overflowY: 'auto' }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon onClick={() => noteRef.current.handleClickOpen(data)} />
                        </IconButton>
                    }
                    title={data.MovieName}
                />
                <CardMedia
                    style={{ height: '330px' }}
                    component="img"
                    // height="330"
                    image={getIcon(data.url)}
                    alt="Paella dish"

                />

                <MoviesDetailsModal ref={noteRef} />
            </Card>
        </>
    );
};

export default MoviesDetails;


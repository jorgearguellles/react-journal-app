import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

import {
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ id, body, title = "", date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ id, body, title, date }));
    };

    const handleLongTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + "..." : title;
    }, [title]);

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={handleLongTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};

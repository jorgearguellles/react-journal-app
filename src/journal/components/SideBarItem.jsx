import React, { useMemo } from "react";
import {
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBarItem = ({ id, body, title = "" }) => {
    const handleLongTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + "..." : title;
    }, [title]);

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton>
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

import React, {FC} from "react";
import {Box, Button} from "@mui/material";
import {controllerLayout} from "@/components/common/ListController/ListController.styles";

export interface ListControllerProps {
    pageCount: number,
    current: number,
    // @ts-ignore
    onChange: fn,
}

const ListController: FC<ListControllerProps> = ({pageCount, current, onChange}) => {
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
        if (i === current) {
            buttons.push(<Button variant={'contained'} key={i} onClick={() => onChange(i)}>{i}</Button>);
        } else {
            buttons.push(<Button key={i} onClick={() => onChange(i)}>{i}</Button>);
        }
    }
    return (
        <Box sx={controllerLayout}>
            {buttons}
        </Box>
    );
};

export default ListController;

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
        buttons.push(
            <Button variant={i === current ? 'contained' : 'text'}
                    key={i} onClick={() => onChange(i)}>{i}</Button>);
    }
    return (
        <Box sx={controllerLayout}>
            {buttons}
        </Box>
    );
};

export default ListController;

import React, {FC} from "react";
import {Button} from "@mui/material";

export interface ListControllerProps {
    pageCount: number,
    // @ts-ignore
    onChange: fn;
}

const ListController: FC<ListControllerProps> = ({pageCount, onChange}) => {
    const elements = [];
    for (let i = 1; i <= pageCount; i++) {
        elements.push(<Button onClick={() => onChange(i)}>{i}</Button>);
    }

    return (
        <>
            {elements}
        </>
    );
};

export default ListController;

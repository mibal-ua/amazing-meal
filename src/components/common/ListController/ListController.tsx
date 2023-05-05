import React, { FC } from "react";
import { Box, Button } from "@mui/material";

import * as styles from "@/components/common/ListController/ListController.styles";

interface ListControllerProps {
    pageCount: number,
    current: number,
    // @ts-ignore
    onChange: fn,
}

const ListController: FC<ListControllerProps> = ({ pageCount, current, onChange }) => (
    <Box sx={styles.controllerLayout}>
        {new Array<JSX.Element>(pageCount).fill(<></>)
            .map((el, i) =>
                <Button variant={i + 1 === current ? "contained" : "text"}
                    key={i} onClick={() => onChange(i + 1)}>{i + 1}</Button>)}
    </Box>
);

export default ListController;

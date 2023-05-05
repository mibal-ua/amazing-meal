import React, { ChangeEvent, FC, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";

import * as styles from "@/components/common/MealCardList/MealCardList.styles";
import usePageNumber from "@/hooks/usePageNumber/usePageNumber";
import { Meal } from "@/types/services";

interface MealCardListProps {
    list: Meal[] | undefined;
}

const MealCardList: FC<MealCardListProps> = ({ list }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, pageCount} = usePageNumber(list, currentPage);

    return (<>
        <Box sx={styles.upperLayout}>
            <Typography sx={styles.typography} variant="h2">Страви</Typography>
            <Pagination sx={styles.pagination}
                color="primary"
                count={pageCount}
                page={currentPage}
                onChange={(event: ChangeEvent<unknown>, number: number) =>
                    setCurrentPage(number)}
                hidePrevButton hideNextButton />
        </Box>
        <Box sx={styles.listLayout}>
            {data}
        </Box>
    </>);
};

export default MealCardList;

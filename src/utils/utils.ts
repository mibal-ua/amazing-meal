export const Utils = {

    sliceObjIntoArrays: (srcObj: object, length: number) => {
        const src: string[] = Object.values(srcObj);
        return {
            ingredients: src.slice(0, length),
            measures: src.slice(length, length * 2)
        };
    }
};

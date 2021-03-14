export type TAction = {
    type: string;
    // update to be more specific if possible
    // could be string | number ?
    payload: any;
}
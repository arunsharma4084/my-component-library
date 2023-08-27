export type TableType = {
    title: string,
    key: string,
};

export interface TableProps {
    columns?: Array<TableType>,
    data?: any,
}
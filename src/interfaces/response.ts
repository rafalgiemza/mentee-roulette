export interface ApiResponse<TData> {
    readonly statusCode: number;
    readonly data?: TData;
    readonly type?: string;
    readonly error?: string;
    readonly payload?: object;
}
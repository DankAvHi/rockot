export const fetcher = async <JSON = unknown>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
    const res = await fetch(input, init);

    if (!res.ok) {
        const error: Error & { info: unknown; status: number } = {
            ...new Error("An error occurred while fetching the data."),
            info: await res.json(),
            status: res.status,
        };

        throw error;
    }

    return res.json();
};

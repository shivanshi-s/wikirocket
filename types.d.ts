type Result = {
    pageid : string,
    title : string,
    extract : string,
    //thumbnail optional, pages also
    thumbnail?: {
        source : string,
        width : number,
        height : number,
    }
}

type SearchResult  = {
    query?: {
        pages?: Result[],
    },
}
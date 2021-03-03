export interface OpenAISearch {
    /**
     * Up to 200 documents to search over, provided as a list of strings.
     * The maximum document length (in tokens) is 2034 minus the number of tokens in the query.
     */
    documents: Array<string>,
    /**
     * Query to search against the documents.
     */
    query: string

}
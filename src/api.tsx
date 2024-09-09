import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<CompanySearch[] | undefined> => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message); 
        } else {
            console.log('unexpected error: ', error);
        }
        return undefined;
    }
};

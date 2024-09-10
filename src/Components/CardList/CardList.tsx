import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card.tsx";
import { SyntheticEvent } from "react";
import React from "react";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <Card
                        id={result.symbol} 
                        key={result.symbol} 
                        searchResult={result}
                        onPortfolioCreate={onPortfolioCreate}
                    />
                ))
            ) : (
                <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                    No results!
                </p>
            )}
        </>
    );
};

export default CardList;

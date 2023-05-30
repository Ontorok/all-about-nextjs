import React from "react";
import { getWikiResult } from "@/lib/wiki";
import { Metadata } from "next";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props): Promise<Metadata> {
  const wikiData = await getWikiResult(searchTerm);
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!wikiData?.query?.pages) {
    return {
      title: `${displayTerm} Not found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search Result Found for ${displayTerm}`,
  };
}

const SearchResult = async ({ params: { searchTerm } }: Props) => {
  const wikiData = await getWikiResult(searchTerm);
  const results: Result[] | undefined = wikiData.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result, index) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>{`${searchTerm} Not found`}</h2>
      )}
    </main>
  );
  return content;
};

export default SearchResult;

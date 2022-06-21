import React, { useEffect, useState } from 'react';
const axios = require("axios");
import Header from "../components/Header";
import Meta from "../components/Meta";
import Spacing from "../components/Spacing";
import Article from "../components/Article";

type indexProps = {
  articles: [];
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Cryptocurrencies = ({}) => {
  const [crypto, setCrypto] = useState<any[]>([]);
  let [offset, useOffset] = useState<number>(0);

   const loadMore = () => {
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com//coins?limit=10&offset=${offset}`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
      },
      headers: {
        'X-RapidAPI-Key': '513f9ea9b5msh732f1b2de01ec17p178fafjsnc885704e41be',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
      axios.request(options).then(function (response: any) {
        //console.log(response.data.data.coins)
        const newCrypto: any[] = [];
        response.data.data.coins.forEach((c : any) => newCrypto.push(c));
        setCrypto((oldCrypto) => [...oldCrypto, ...newCrypto]);
      });
      offset += 10;
  }
  const handleScroll = (e : any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight)
    {
      loadMore();
    }
  };

    useEffect(() => {
      loadMore();
      
    window.addEventListener('scroll', handleScroll)
  }, [])

  

  

  if (!crypto.length) return <h3>Loading...</h3>;

  
    return (
      <>
        <Meta />
        <Header
          title={`Experience. Shared.`}
          subtitle={`Welcome to the Modern Group Travel Company !`}
          hScreen={true}
        />
        <div className="bg-white">
          <Spacing>
            <h2 className="text-center text-2xl xl:text-3xl font-medium italic mx-auto drop-shadow-md xl:w-[50rem] ">
              Find the people you&apos;ll climb mountains with. Find the friends
              to trek through jungles with. Find your beach party entourage & find
              it all with Sash Travel.
            </h2>
  
            <div className='flex flex-wrap justify-center gap-2 '>
            
              {crypto.map((article: indexProps) => (
                <Article article={article} key={article.id} className="max-w-[200px]"/>
              ))}
            </div>
          </Spacing>
        </div>
      </>
    );
  };

  export default Cryptocurrencies;





 
  








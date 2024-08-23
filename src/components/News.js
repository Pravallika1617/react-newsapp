import React, { useEffect, useState } from 'react';
import Newscontent from "./Newscontent";
import spinner from './images/spinner.gif'
import InfiniteScroll from 'react-infinite-scroll-component';

function News({ category, setProgress }) {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setCurrentPage(1);
        setLoading(true);
        setNewsData([]);
        fetchNewsData();
    }, [category]);

    // async function fetchNewsData() {
    //     try {
    //         let url;
    //         if (category === 'home') {
    //             url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${currentPage}&pageSize=8`;
    //         } else {
    //             url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${currentPage}&pageSize=8`;
    //         }
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch news data');
    //         }
    //         const data = await response.json();
    //         setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
    //         setHasMore(data.articles.length > 0);
    //     } catch (error) {
    //         console.error('Error fetching news data:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    async function fetchNewsData() {
        try {
            let url;
            if (!category || category === '') {
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${currentPage}&pageSize=8`;
            } else {
                url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${currentPage}&pageSize=8`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch news data');
            }
            const data = await response.json();
            setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
            setHasMore(data.articles.length > 0);
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        setProgress(20);
        setTimeout(() => {
            setProgress(100);
        }, 2000);
    }, [setProgress]);

    async function fetchData() {
        try {
            const nextPage = currentPage + 1;
            let url;
            if (category === 'home') {
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${nextPage}&pagesize=8`;
            } else {
                url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ab296085cc141859d0ba2f5f08c0574&page=${nextPage}&pagesize=8`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch next page');
            }
            const data = await response.json();
            setNewsData(prevNewsData => [...prevNewsData, ...data.articles]);
            setHasMore(data.articles.length > 0);
            setCurrentPage(nextPage);
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    };


    return (
        <div className='container-fluid'>
            <marquee behavior="scroll" direction="left" scrollamount="15">
                <h1 className='heading text-center p-4 mt-2 w-50'>
                    {category === 'home' || !category ? 'NewsWeb-Main headlines' : `NewsWeb-${category} Main Headlines`}
                </h1>

            </marquee>
            {loading ? (
                <div className="text-center image">
                    <img src={spinner} alt='Loading...' />
                </div>
            ) : (
                <InfiniteScroll
                    dataLength={newsData.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<div className='text-center image'>
                        <img src={spinner} alt='Loading...' />
                    </div>}
                >
                    <div className="row">
                        {newsData.map((newsItem, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mt-2">
                                <Newscontent
                                    author={!newsItem.author ? 'Unknown' : newsItem.author}
                                    title={newsItem.title.slice(0, 38)}
                                    description={!newsItem.description ? 'Click the button to read more' : newsItem.description.slice(0, 50)}
                                    image={!newsItem.urlToImage ? 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg' : newsItem.urlToImage}
                                    url={newsItem.url}
                                    date={newsItem.publishedAt}
                                    source={newsItem.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </div>
    );
}

export default News;


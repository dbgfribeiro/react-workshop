import { NewsCard } from './Components/NewsCard'
import { useState, useEffect } from 'react'
import { NewsType } from './types/news'

export default function App() {
  const [availableNews, setAvailableNews] = useState<NewsType[]>([])

  const url =
    'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json'

  // Posts fetching
  useEffect(() => {
    fetch(url).then((responseNews) => {
      responseNews.json().then((news) => {
        setAvailableNews(news.articles)
      })
    })
  }, [])

  // See what is being returned from the API
  console.log(availableNews)

  return (
    <div className='App'>
      <h1>My News Website</h1>
      <div className='news-grid'>
        {availableNews.map((news, index) => {
          return (
            <NewsCard
              key={index}
              urlToImage={news.urlToImage}
              title={news.title}
              description={news.description}
            />
          )
        })}
      </div>
    </div>
  )
}

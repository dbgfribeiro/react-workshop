import { useState } from 'react'
import { Button } from '../Button'

import { NewsType } from '../../types/news'

type NewsCardProps = Omit<NewsType, 'author' | 'publishedAt'>

export const NewsCard = ({ urlToImage, title, description }: NewsCardProps) => {
  const [showMore, setShowMore] = useState(false)

  const getDescription = () => {
    if (showMore) {
      return description
    } else {
      return description.slice(0, 100) + '...'
    }
  }

  return (
    <div className='news-card'>
      <img src={urlToImage} alt='article illustration' />
      <div className='news-card-info'>
        <h2>{title}</h2>
        <p>{getDescription()}</p>
        {description.length >= 100 && (
          <Button
            text={showMore ? 'See less...' : 'See more...'}
            onClick={() => setShowMore(!showMore)}
            variant='secondary'
          />
        )}
      </div>
    </div>
  )
}

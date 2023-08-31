import activeStar from '../../images/ActiveStar.png'
import mutedStar from '../../images/Star.png'
import { RatingProps } from '../../interfaces/RatingProps'

export function Rating({ rating }: RatingProps) {
  const activeStars = parseInt(rating)
  const inactiveStars = 5 - activeStars

  const renderStars = () => {
    const stars = []

    for (let i = 0; i < activeStars; i++) {
      stars.push(<img className='star-active' key={i} src={activeStar} alt="Active Star" />)
    }

    for (let i = 0; i < inactiveStars; i++) {
      stars.push(<img className='star-muted' key={activeStars + i} src={mutedStar} alt="Muted Star" />)
    }

    return stars
  }

  return renderStars()
}


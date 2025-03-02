import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

// unix
function Timeago({date}: {date: number}) {
  const [timeDiff, setTimeDiff] = useState<number>(0)

  useEffect(() => {
    const interVal = setInterval(() => {
      const newDate = new Date().getTime()
      setTimeDiff(newDate - date < 50 ? 0 : newDate - date)
      console.log('Timeago Component rendered', newDate - date)
    }, 1000)
    return () => {
      clearInterval(interVal)
    }
  }, [date])

  const diffSeconds: number = parseInt((timeDiff / 1000).toFixed(0))
  const diffMinutes: number = parseInt((timeDiff / (1000 * 60)).toFixed(0))
  const diffHours: number = parseInt((timeDiff / (1000 * 60 * 60)).toFixed(0))
  const diffDays: number = parseInt((timeDiff / (1000 * 60 * 60 * 24)).toFixed(0))

  const {t} = useTranslation()

  return (
    <div>
      {diffSeconds < 60 && (
        <p>
          {diffSeconds} {t('seconds_ago')}
        </p>
      )}

      {diffMinutes >= 1 && (
        <p>
          {diffMinutes} {t('minutes_ago')}
        </p>
      )}

      {diffHours >= 1 && (
        <p>
          {diffHours} {t('hours_ago')}
        </p>
      )}

      {diffDays >= 1 && (
        <p>
          {diffDays} {t('days_ago')}
        </p>
      )}
    </div>
  )
}

export default Timeago

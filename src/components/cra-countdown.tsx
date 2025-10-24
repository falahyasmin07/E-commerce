"use client"

import { useEffect, useState } from "react"

export function CRACountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2027-12-11T00:00:00Z")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-cra-accent">{timeLeft.days}</div>
        <div className="text-xs md:text-sm text-muted-foreground">Days</div>
      </div>
      <div className="text-2xl md:text-3xl text-muted-foreground">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-cra-accent">{timeLeft.hours}</div>
        <div className="text-xs md:text-sm text-muted-foreground">Hours</div>
      </div>
      <div className="text-2xl md:text-3xl text-muted-foreground">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-cra-accent">{timeLeft.minutes}</div>
        <div className="text-xs md:text-sm text-muted-foreground">Minutes</div>
      </div>
      <div className="text-2xl md:text-3xl text-muted-foreground">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-cra-accent">{timeLeft.seconds}</div>
        <div className="text-xs md:text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}

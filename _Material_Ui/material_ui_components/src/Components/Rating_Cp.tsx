import React, { useState } from 'react'
import { Stack, Rating } from "@mui/material"

export const Rating_Cp = () => {
  const [rating, setRating] = useState<number | null>()
  console.log({ rating })
  const handleRating = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue)
  }
  return (
    <Stack direction="row">
      <Rating value={rating} onChange={handleRating} precision={.5} />
    </Stack>
  )
}

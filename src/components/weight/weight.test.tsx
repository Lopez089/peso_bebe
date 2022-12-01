import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Weight } from '../index'
import { weightNewUser } from '../../helper/test'
import '@testing-library/jest-dom'


describe('component weight', () => {
    it('should show a weight and date if use weight to  weight', () => {
        render(<Weight weight={weightNewUser.weight} date={weightNewUser.date} />)
        expect(screen.getByText(weightNewUser.weight)).toBeInTheDocument()
        expect(screen.getByText(weightNewUser.dataFormat)).toBeInTheDocument()
    })
    it('should show a weight, date and growth Interval if it is from the second weight', () => {
        render(<Weight weight={weightNewUser.weight} date={weightNewUser.date} growthInterval={weightNewUser.growthInterval} />)
        expect(screen.getByText(weightNewUser.weight)).toBeInTheDocument()
        expect(screen.getByText(weightNewUser.dataFormat)).toBeInTheDocument()
        expect(screen.getByText('interval')).toBeInTheDocument()
        expect(screen.getByText(weightNewUser.growthInterval)).toBeInTheDocument()
    })
    it('if the interval is positive it appears in green', () => {
        render(<Weight weight={weightNewUser.weight} date={weightNewUser.date} growthInterval={0.500} />)
        expect(screen.getByText(0.500)).toHaveClass('text-green-500')
    })
    it('if the weight interval is negative it appears in red', () => {
        render(<Weight weight={weightNewUser.weight} date={weightNewUser.date} growthInterval={weightNewUser.growthInterval} />)
        expect(screen.getByText(weightNewUser.growthInterval)).toHaveClass('text-red-500')
    })
})
import React, { Component } from 'react'
import './Trophy.sass'

const RANKS = ['gold', 'silver', 'bronze']

class Trophy extends Component {
  rankName() {
    const { rank } = this.props
    return RANKS[rank]
  }

  render() {
    const { points, rank } = this.props

    if (points >= 10 && rank < 3) {
      return <span className={ `trophy ${this.rankName()}` }>♚</span>
    }
    return <span></span>
  }
}

export default Trophy

import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { Player } from './Player'

chai.use(spies)
chai.use(chaiEnzyme())

const playerProps = {
  playerId: 99,
  name: 'Miriam',
  avatar: 'http://cd.sseu.re/miriam-3409830948.png',
  points: 6
}

describe('<Player />', () => {
  const plusOne = chai.spy()
  const player = shallow(<Player { ...playerProps } plusOne={ plusOne }/>)

  it('has a tag name li', () => {
    expect(player).to.have.tagName('li')
  })

  it('has a class "player"', () => {
    expect(player).to.have.className('player')
  })

  it('has a avatar', () => {
    expect(player.find('.avatar img')).to.have.attr('src', playerProps.avatar)
  })

  it('renders the name of the player', () => {
    const player = mount(<Player { ...playerProps } plusOne={ plusOne }/>)
    const { name } = playerProps
    expect(player.find('.name')).to.have.text('Miriam')
  })

  describe('+1 Button', () => {
    it('shows it', () => {
      expect(player.find('.plus-one')).to.have.text('+1')
    })

    it('changes the score when we click it', () => {
      const { playerId } = playerProps
      player.find('.plus-one').simulate('click')
      expect(plusOne).to.have.been.called.with(playerId)
    })
  })
})

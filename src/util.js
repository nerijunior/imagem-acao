import _empty from 'lodash/isEmpty'
import store from './store'

export const readyToPlay = () => {
  const firstTeamHasAName = !_empty(store.state.teams[0].name)
  const firstTeamHasPlayers = !_empty(store.state.teams[0].players) && store.state.teams[0].players.length >= 2

  const secondTeamHasAName = !_empty(store.state.teams[1].name)
  const secondTeamHasPlayers = !_empty(store.state.teams[1].players) && store.state.teams[1].players.length >= 2

  return firstTeamHasAName && firstTeamHasPlayers && secondTeamHasAName && secondTeamHasPlayers
}

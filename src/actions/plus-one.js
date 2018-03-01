export const PLUS_ONE = 'PLUS_ONE'

export default (playerId) => {
  return {
    type: PLUS_ONE,
    payload: playerId
  }
}

export const state = () => ({
  competitions: [
    {
      id: 1,
      type: 'premier-league',
      title: "Premier League Pick'em",
      description: 'Matchweek 27'
    },
    {
      id: 2,
      type: 'premier-league',
      title: "Premier League Pick'em",
      description: 'Matchweek 28'
    },
    {
      id: 3,
      type: 'golf',
      title: "Golf Pick'em",
      description: 'The PLAYERS Championship'
    }
  ],
  selectedCompetition: null,
  selectedCompetitionType: 'all'
})

export const mutations = {
  SET_SELECTED_COMPETITION (state, selectedCompetition) {
    state.selectedCompetition = selectedCompetition
  },
  SET_SELECTED_COMPETITION_TYPE (state, selectedCompetitionType) {
    state.selectedCompetitionType = selectedCompetitionType
  }
}

export const actions = {}

export const getters = {}

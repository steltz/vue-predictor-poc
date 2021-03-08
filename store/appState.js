import { find } from 'lodash'

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
      type: 'golf',
      title: "Golf Pick'em",
      description: 'The PLAYERS Championship'
    }
  ],
  golfPlayerMatchupsSelected: false,
  golfPlayerMatchups: [
    {
      id: 1,
      player1: {
        firstName: 'Dustin',
        lastName: 'Johnson'
      },
      player2: {
        firstName: 'Rory',
        lastName: 'McILroy'
      },
      selected: null
    },
    {
      id: 2,
      player1: {
        firstName: 'Collin',
        lastName: 'Morikawa'
      },
      player2: {
        firstName: 'Victor',
        lastName: 'Hovland'
      },
      selected: null
    },
    {
      id: 3,
      player1: {
        firstName: 'Jon',
        lastName: 'Rahm'
      },
      player2: {
        firstName: 'Bryson',
        lastName: 'DeChambeau'
      },
      selected: null
    }
  ],
  premierMatchups: [
    {
      id: 1,
      team1: {
        name: 'Fulham',
        score: 0
      },
      team2: {
        name: 'Man City',
        score: 0
      }
    },
    {
      id: 2,
      team1: {
        name: 'Leichester',
        score: 0
      },
      team2: {
        name: 'Sheffield Utd',
        score: 0
      }
    },
    {
      id: 3,
      team1: {
        name: 'Arsenal',
        score: 0
      },
      team2: {
        name: 'Tottenham',
        score: 0
      }
    }
  ],
  showLoadingSpinner: false,
  selectedCompetition: null,
  selectedCompetitionType: 'all',
  snackbar: {
    color: '',
    message: ''
  }
})

export const mutations = {
  DECREMENT_SCORE (state, config) {
    const matchup = find(state.premierMatchups, matchup => matchup.id === config.matchupId)
    matchup[config.selection].score = matchup[config.selection].score - 1
  },
  GOLF_SET_SELECTED_PLAYER (state, selection) {
    const matchup = find(state.golfPlayerMatchups, matchup => matchup.id === selection.matchupId)
    matchup.selected = selection.player
  },
  INCREMENT_SCORE (state, config) {
    const matchup = find(state.premierMatchups, matchup => matchup.id === config.matchupId)
    matchup[config.selection].score = matchup[config.selection].score + 1
  },
  SET_SELECTED_COMPETITION (state, selectedCompetition) {
    state.selectedCompetition = selectedCompetition
  },
  SET_SELECTED_COMPETITION_TYPE (state, selectedCompetitionType) {
    state.selectedCompetitionType = selectedCompetitionType
  },
  TOGGLE_SNACKBAR (state, snackbar) {
    state.snackbar = snackbar
  },
  TOGGLE_LOADING_SPINNER (state) {
    state.showLoadingSpinner = !state.showLoadingSpinner
  }
}

export const actions = {
  async toggleLoadingSpinner ({ commit }) {
    commit('TOGGLE_LOADING_SPINNER')
    await sleep(2000)
    commit('TOGGLE_LOADING_SPINNER')
  }
}

export const getters = {}

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

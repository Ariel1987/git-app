import React from "react"

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR' 

const GithubContext = React.createContext()

const initState = {
  error: false,
  data: null
}

function githubReducer (state = initState, action) {
  switch (action.type) {
    case FETCHING_DATA: {
      return
    }
    case FETCHING_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      }
    }
    case FETCHING_DATA_ERROR: {
      return {
        ...state,
        data: null,
        error: true,
        errorData: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function GithubDataProvider({ children }) {
  const [state, dispatch] = React.useReducer(githubReducer, { data: null, error: false })
  const value = { state, dispatch }
  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  )
}

function useGithubData() {
  const context = React.useContext(GithubContext)

  if (context === undefined) {
    throw new Error('useGithubData must be used within a GithubDataProvider')
  }
  return context
}

export { GithubDataProvider, useGithubData }
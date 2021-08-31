import axios, { AxiosPromise } from 'axios'

import { apiRoutes } from '../settings'

import * as types from './types'

const api = axios.create({
  baseURL: apiRoutes.openDota.baseUrl
})

export const getHeroStats = (): AxiosPromise<types.IGetHeroesResponse> => {
  return api.get(apiRoutes.openDota.heroStats)
}


import HttpError from './http-error'

export const API_BAN_URL = process.env.NEXT_PUBLIC_API_BAN_URL || 'https://plateforme.adresse.data.gouv.fr'

export async function _fetch(url) {
  const options = {
    mode: 'cors',
    method: 'GET'
  }

  const response = await fetch(url, options)
  const contentType = response.headers.get('content-type')

  if (!response.ok) {
    throw new HttpError(response)
  }

  if (response.ok && contentType && contentType.includes('application/json')) {
    return response.json()
  }

  throw new Error('Une erreur est survenue')
}

export function getAddress(idAddress) {
  return _fetch(`${API_BAN_URL}/lookup/${idAddress}`)
}

export function getStats() {
  return _fetch(`${API_BAN_URL}/ban/stats`)
}

export function getFantoir(departementCode) {
  return _fetch(`${API_BAN_URL}/api-fantoir/departements/${departementCode}/communes`)
}

export function getVoiesFantoir(communeCode) {
  return _fetch(`${API_BAN_URL}/api-fantoir/communes/${communeCode}/voies`)
}

export function getVoieFantoir(voieCode) {
  return _fetch(`${API_BAN_URL}/api-fantoir/voies/${voieCode}`)
}

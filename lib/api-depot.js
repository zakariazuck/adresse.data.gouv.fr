const API_DEPOT_URL = process.env.NEXT_PUBLIC_API_DEPOT_URL || 'https://plateforme.adresse.data.gouv.fr/api-depot'

async function _fetch(url, method, body) {
  const options = {
    method,
    mode: 'cors'
  }

  if (method === 'POST') {
    options.headers = {'Content-Type': 'application/json'}
    if (body) {
      options.body = JSON.stringify(body)
    }
  }

  const response = await fetch(API_DEPOT_URL + url, options)
  const contentType = response.headers.get('content-type')

  if (!response.ok) {
    const error = new Error(response.message)
    error.code = 404
    throw error
  }

  if (response.ok && contentType && contentType.includes('application/json')) {
    return response.json()
  }

  throw new Error('Une erreur est survenue')
}

export async function getRevision(revisionId) {
  return _fetch(`/revisions/${revisionId}`)
}

export async function getCurrentRevision(codeCommune) {
  try {
    const currentRevision = _fetch(`/communes/${codeCommune}/current-revision`)
    return currentRevision
  } catch (error) {
    if (error.code === 404) {
      return
    }

    throw error
  }
}

export async function getRevisions(codeCommune) {
  return _fetch(`/communes/${codeCommune}/revisions`)
}
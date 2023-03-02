const findId = (url, keyWord) => {
	const startIndex = url.search(keyWord) + keyWord.length

	return url.slice(startIndex, url.length - 1)
}

export const getPlanets = async () => {
	const response = await fetch(`https://swapi.dev/api/planets`)
	const data = await response.json()
	let transformData = []

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch quotes.');
	}

	console.log(data.results)
	if (data.results) {
		transformData = data.results.map(item => {
			return {
				id: findId(item.url, 'planets/'),
				name: item.name,
				url: item.url
			}
		})
	}
	console.log(transformData)

	return transformData
}

export const getStarships = async () => {
	const response = await fetch(`https://swapi.dev/api/starships`)
	const data = await response.json()
	let transformData = []

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch quotes.');
	}

	console.log(data)
	if (data.results) {
		transformData = data.results.map(item => {
			return {
				id: findId(item.url, 'starships/'),
				name: item.name,
				url: item.url
			}
		})
	}
	console.log(transformData)

	return transformData
}

export const searchStarship = async (searchQuery) => {
	const response = await fetch(`https://swapi.dev/api/starships/?search=${searchQuery}`)
	const data = await response.json()
	let transformData = []

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch quotes.');
	}

	console.log('here')
	if (data.results) {
		transformData = data.results.map(item => {
			return {
				id: findId(item.url, 'starships/'),
				label: `${item.name} (${item.model})`,
				url: item.url
			}
		})
	}
	console.log(transformData)

	return transformData
}

export const searchPlanet = async (searchQuery) => {
	const response = await fetch(`https://swapi.dev/api/planets/?search=${searchQuery}`)
	const data = await response.json()
	let transformData = []

	if (data.results) {
		transformData = data.results.map(item => {
			return {
				id: findId(item.url, 'planets/'),
				label: item.name,
				url: item.url
			}
		})
	}
	console.log(transformData)

	return transformData
}
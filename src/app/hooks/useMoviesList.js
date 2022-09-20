import { useQuery } from 'react-query'
import { MoviesService } from '../../app/services/movies.services'

export const useMoviesList = () => {
	const {isLoading, data: movies} = useQuery(
		'movies list',
		() => MoviesService.getAll(),
		{
			onError: (error) => console.log(error),
			select: ({ data }) => data?.results.map((movie) => ({
				...movie
			}))
		}
	)

	return { isLoading, movies }
}

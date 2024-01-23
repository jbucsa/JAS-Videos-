import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useCurrentBillboard = () => {
    const {data, error, isLoading} = useSWR('/api/casualMovie', fetcher );

    return {
        data,
        error,
        isLoading
    }
}

export default useCurrentBillboard;
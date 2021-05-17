import QueryDetailUI from './QueryDetail.presenter'
import {aaa} from './QueryDetail.queries'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

const QueryDetail = () => {
    const router = useRouter()

    const { data } = useQuery(aaa, {
        variables: { aaa: router.query.name}
    })

    return <QueryDetailUI data={data} />
}

export default QueryDetail
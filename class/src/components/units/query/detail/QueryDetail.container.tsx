import QueryDetailUI from './QueryDetail.presenter'
import {aaa} from './QueryDetail.queries'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import { IQuery, IQueryFetchProfileArgs } from '../../../commons/types/generated/types'

// interface IFetchProfile {
//     data: {
//         fetchProfile: {
//             number: number
//             name: string
//             age: number
//             school: string
//         }
//     }
    
// }

const QueryDetail = () => {
    const router = useRouter()

    const { data } = useQuery<IQuery, IQueryFetchProfileArgs>(aaa, {
        variables: { name: String(router.query.name) }
    })
    data.fetchProfile.age

    // data.fetchProfile.age
    // data.fetchProfile.number
    // data.fetchProfile.school



    return <QueryDetailUI data={data} />
}

export default QueryDetail
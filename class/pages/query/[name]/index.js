import { useRouter } from "next/router"
import {useQuery, gql} from '@apollo/client'


export default function QueryDetailPage(){
    const router = useRouter()

    const aaa = gql`
        query zzzzzzzzzzz($aaa: String) {
            fetchProfile(name: $aaa){
                number
                name
                age
                school
            }
        }
    `

    const { data } = useQuery(aaa, {
        variables: {
            aaa: router.query.name
        }
    })

    return (
        <div>
            <div>
                이름: {data?.fetchProfile.name} 
            </div>
            <div>
                나이: {data?.fetchProfile.age}
            </div>
            <div>
                학교: {data?.fetchProfile.school}
            </div>
        </div>
    )
}
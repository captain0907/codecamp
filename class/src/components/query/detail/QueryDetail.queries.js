import {gql} from '@apollo/client'

export const aaa = gql`
    query zzzzzzzzzzz($aaa: String) {
        fetchProfile(name: $aaa){
            number
            name
            age
            school
        }
    }
`
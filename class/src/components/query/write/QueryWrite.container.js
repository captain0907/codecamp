import { useMutation } from "@apollo/client"
import { useState } from "react"
import QueryWriteUI from './QueryWrite.presenter'
import {useRouter} from 'next/router'
import { CREATE_PROFILE, BBB } from './QueryWrite.queries'

// function Query() {
const QueryWrite = () => {
    const router = useRouter()
    const [createProfile] = useMutation(CREATE_PROFILE)
    const [profile, setProfile] = useState({
        name: "",
        age: "",
        school: ""
    })

    const onChangeInput = (event) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        })

        // profile.aaa.bbb.ccc => "철수"

        // const profile = {
        //     aaa: {
        //         bbb: {
        //             ccc: "철수"
        //         }
        //     }
        // }


    }

    // async function aaa(){

    // }

    const onClickSubmit = async () => {
        try {
            const result = await createProfile({
                variables: {
                    ...profile,
                    age: Number(profile.age)
                }
            })
            alert(result.data.createProfile.message)
            router.push(`/query/${profile.name}`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <QueryWriteUI 
            onClickSubmit={onClickSubmit}
            onChangeInput={onChangeInput}
        />
    )
}

export default QueryWrite
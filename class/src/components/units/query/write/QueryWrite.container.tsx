import { useMutation } from "@apollo/client"
import { useEffect, useState, useRef } from "react"
import QueryWriteUI from './QueryWrite.presenter'
import {useRouter} from 'next/router'
import { CREATE_PROFILE } from './QueryWrite.queries'
// import { IMutation, IMutationCreateProfileArgs } from '../../../commons/types/generated/types'
// import Modal from "../../../commons/modal/Modal.container"

interface IProfile {
    [key: string]: string
}

// function Query() {
const QueryWrite = () => {
    const router = useRouter()
    const [createProfile, {data}] = useMutation(CREATE_PROFILE)
    const [profile, setProfile] = useState<IProfile>({
        name: "",
        age: "",
        school: ""
    })

    const [aaa, setAaa] = useState(false)
    const [open, setOpen] = useState(false)

    const onChangeInput = (event) => {
        const newProfile: IProfile = { ...profile, [event.target.name]: event.target.value }
        if(newProfile.name && newProfile.age && newProfile.school) setAaa(true)
        setProfile(newProfile)

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
            setOpen(true)

            // alert(result.data.createProfile.message)
            // router.push(`/query/${profile.name}`)
        } catch(error){
            alert(error.message)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    const [testState, setTestState] = useState(1)
    const [ccc, setCcc] = useState(123)

    const handleChangeCcc = () => {
        setCcc(456)
    }

    // useEffect(() => {
    //     inputRef.current.focus()
    //     if(testState < 10 ) setTestState(prev => prev + 1)
    //     console.log(testState)
    //     console.log('aaaa')
    //     if(testState === 10) return () => {}
    //     console.log('useEffect가 실행되었습니다.')
    // })



    console.log('11111111111111111111111')

    return (
        <QueryWriteUI
            handleChangeCcc={handleChangeCcc}
            inputRef={inputRef}
            onClickSubmit={onClickSubmit}
            onChangeInput={onChangeInput}
            handleClose={handleClose}
            open={open}
            aaa={aaa}
        />
    )
}

export default QueryWrite
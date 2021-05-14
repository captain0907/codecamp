import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

export default function ProfilePage(){

    const CREATE_PROFILE = gql`
        mutation createProfile($name: String, $age: Int, $school: String) {
            createProfile(name: $name, age: $age, school: $school){
                message
            }
        }
    `

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
            
            profile.name

        } catch(error){
            alert(error.message)
        }
    }

    return (
        <div>
            <span>이름: </span><input type="text" name="name" onChange={onChangeInput}></input><br />
            <span>나이: </span><input type="text" name="age" onChange={onChangeInput}></input><br />
            <span>학교: </span><input type="text" name="school" onChange={onChangeInput}></input><br />
            <button onClick={onClickSubmit}>프로필 등록하기</button>
        </div>
    )

}
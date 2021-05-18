import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, FETCH_BOARD} from './BoardWrite.queries'
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import {useLazyQuery, useMutation} from '@apollo/client'
import Router from 'next/router'

const inputsInit = {
    writer: "",
    password: "",
    title: "",
    contents: "",
    zipcode: "",
    youtube: ""
}

export default function BoardWrite({defaultValues}) {
    const router = useRouter()
    const [inputs, setInputs] = useState(inputsInit)
    const [isActive, setIsActive] = useState(false)
	const [createBoard] = useMutation(CREATE_BOARD)

	const onChangeInput = (event) => {
        const newInputs = { ...inputs, [event.target.name]: event.target.value }
		setInputs(newInputs)

        const isFullInputs = newInputs.writer && newInputs.password && newInputs.title && newInputs.contents
        isFullInputs ? setIsActive(true) : setIsActive(false)
	}

	const onClickRegister = async () => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: inputs.writer,
                        password: inputs.password,
                        title: inputs.title,
                        contents: inputs.contents
                    }
                }
            })
            const id = result.data.createBoard._id
            alert('게시물이 성공적으로 등록되었습니다.')
            router.push(`/board/${id}`)
        } catch(error) {
            alert(error.message)
        }
	};

    return (
        <BoardWriteUI 
            isActive={isActive}
            onChangeInput={onChangeInput}
            onClickRegister={onClickRegister}
            defaultValues={defaultValues}
        />
    )
}


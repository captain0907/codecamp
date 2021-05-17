import BoardWriteUI from "./BoardWrite.presenter"

export default function BoardWrite() {
    const [writer, setWriter] = useState()

    const handleChanceWriter = (event) => {
        const writer = event.target.value
        setWriter(writer)
    }

    return (
        <BoardWriteUI handleChanceWriter={handleChanceWriter} />
    )
}


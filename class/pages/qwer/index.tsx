import { useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const QwerPage = () => {
    const client = useApolloClient()
    const {data} = useQuery(댓글) // data: [{_id: 'aa', title: '댓글1', contents:'댓글내용1'}, {_id: 'bb'}, {_id: 'bb'}] : 댓글
    // const [fetchCoComments1, {data}] = useLazyQuery(대댓글1)
    // const [fetchCoComments2, {data}] = useLazyQuery(대댓글2)
    // const [fetchCoComments3, {data}] = useLazyQuery(대댓글3)

    useEffect(() => {

        const result = [{_id: 'aa', title: '댓글1', contents:'댓글내용1'}, {_id: 'bb'}, {_id: 'bb'}].map((comment) => {
            // fetchCoComments({ variables: data?._id })
            const cocoments = client.query({
                query: 대댓글,
                variables: { _id: data?._id }
            })

            comment // 댓글 {_id: 'aa', title: '댓글1', contents:'댓글내용1'}
            comment.cocomments = cocoments
        })

        result = 
    //     //[
    //     //   {_id: 'aa', title: '댓글1', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: 'bb', title: '댓글2', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: 'aa', title: '댓글3', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]}
    //     //]


    }, [data])




    // useEffect(() => {
        
    //     const comments = await client.query({ // [{_id: 'aa', title: '댓글1', contents:'댓글내용1'}, {_id: 'bb'}, {_id: 'bb'}] : 댓글
    //         query: '댓글불러오기',
    //         variables: { _id: '글아이디' }
    //     })

    //     const result = comments.map((댓글) => {
    //         const cocoments = await client.query({ // [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}] : 대댓글
    //             query: '대댓글불러오기',
    //             variables: {_id: '댓글아이디'}
    //         })

    //         댓글 // {_id: 'aa', title: '댓글1', contents:'댓글내용1'}
    //         위 댓글에 대한 대댓글 // [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]

    //         댓글.cocoments = cocoments // {_id: 'aa', title: '댓글1', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]}
    //     })

    //     result = 
    //     //[
    //     //   {_id: 'aa', title: '댓글1', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: 'bb', title: '댓글2', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: 'aa', title: '댓글3', contents:'댓글내용1', cocoments: [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]}
    //     //]


    //     result = 

    //     //[
    //     //   {_id: '댓글키', [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: '댓글키', [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]},
    //     //   {_id: '댓글키', [{_id: 'aa', ...}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}, {_id: 'bb'}]}
    //     //]


    // }, [])

  return <div></div>;
};

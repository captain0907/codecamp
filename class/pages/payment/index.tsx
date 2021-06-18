import { useState } from "react";
import Head from "next/head";
import { Router } from "next/router";
import { gql, useMutation } from "@apollo/client";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      status
    }
  }
`;

const PaymentPage = () => {
  const [amount, setAmount] = useState(200);

  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onClickPayment = () => {
    // @ts-ignore
    const IMP = window.IMP;
    IMP.init("imp89386405");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "코카콜라",
        amount,
        buyer_email: "nwd0907@newbizstart.com",
        buyer_name: "철수222",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "/paymentok",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await createPoint({
            variables: {
              impUid: rsp.imp_uid,
            },
            context: {
              headers: {
                authorization:
                  "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkMDUwYTBlODE2ODAwMmFiMjhhOGUiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MjE4OTcsImV4cCI6MTYyMzkwODI5Nywic3ViIjoiYWNjZXNzVG9rZW4ifQ.thGqR1kpAN2MeVWd3e7oYBbQTbWFJm6I1PlBPbFzWfifZ6fL9fdR3bLCkNUdNNmq4stFFZXrw6WWDBCzKp8ZNg",
              },
            },
          });
          alert("결제에 성공했습니다.");
        } else {
          alert("결제에 실패했습니다.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <div>결제금액: {amount}</div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default PaymentPage;

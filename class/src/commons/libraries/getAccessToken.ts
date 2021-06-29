import axios from "axios";

const getAccessToken = async ({ setAccessToken }) => {
  try {
    const response = await axios.post(
      "https://backend.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation restoreAccessToken {
                  restoreAccessToken {
                    accessToken
                  }
                }
              `,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const newAccessToken = response.data.data.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAccessToken;

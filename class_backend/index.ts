import { createConnection } from "typeorm";
import { ApolloServer, gql, IResolvers, ApolloError } from "apollo-server";
import Board2 from "./Board.postgres";

// Backend API 서버 셋팅
const typeDefs = gql`
  scalar Date

  # 안녕하세요
  # 이것은 주석입니다
  # 주석입니다

  type Apple {
    message: String
  }

  type Board {
    writer: String
    age: Int
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(writer: String!, age: Int!): [Apple]
    deleteBoard(number: Int!): Apple
  }
`;
const resolvers: IResolvers = {
  Query: {
    fetchBoards: () => {
      try {
        Board2.findOne({ number: 1 }); // 객체 { writer: "철수", age: 13}
        return Board2.find({ where: { deletedAt: null } }); // 배열
        // [ { writer: "철수", age: 13},
        //   {writer: "영희", age: 7},
        //   {writer: "훈이", age: 12},
        //   {writer: "철수", age: 13} ]
      } catch (error) {
        throw new ApolloError("게시물 목록 받기 실패!!");
      }
    },
  },
  Mutation: {
    createBoard: async (_, args) => {
      try {
        await Board2.insert({ ...args });
        //   writer: args.writer,
        //   age: args.age
        //  });
        return {
          message: "게시물 등록 완료!",
        };
      } catch (error) {
        throw new ApolloError("게시판에 글 등록하는데 에러났어요");
      }
    },

    deleteBoard: (_, args) => {
      try {
        Board2.update({ number: args.number }, { deletedAt: new Date() });
        return {
          message: "게시물 삭제 완료!",
        };
      } catch (error) {
        throw new ApolloError("게시물 삭제에 실패했습니다.");
      }
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// 데이터베이스 연결 및 셋팅
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  port: 5001,
  host: "34.64.71.71",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  console.log("접속완료!!");
  server.listen({ port: 4001 });
});

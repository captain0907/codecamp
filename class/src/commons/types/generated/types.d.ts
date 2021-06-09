export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl?: Maybe<Scalars['String']>;
  likeCount: Scalars['Int'];
  dislikeCount: Scalars['Int'];
  images?: Maybe<Array<Scalars['String']>>;
  boardAddress?: Maybe<IBoardAddress>;
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID'];
  zipcode: Scalars['String'];
  address: Scalars['String'];
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IBoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ICreateBoardCommentInput = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
};

export type ICreateBoardInput = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
};

export type ICreateUseditemInput = {
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ICreateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type ICreateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};


export type IFileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID'];
  url: Scalars['String'];
  size?: Maybe<Scalars['Float']>;
  isUsed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  deleteBoard: Scalars['ID'];
  deleteBoards: Array<Scalars['ID']>;
  dislikeBoard: Scalars['Int'];
  likeBoard: Scalars['Int'];
  updateBoard: IBoard;
  createBoardComment: IBoardComment;
  deleteBoardComment: Scalars['ID'];
  updateBoardComment: IBoardComment;
  uploadFile: IFileManager;
  createPointTransactionOfBuyingAndSelling: IUseditem;
  createPointTransactionOfLoading: IPointTransaction;
  createUseditem: IUseditem;
  updateUseditem: IUseditem;
  toggleUseditemPick: Scalars['Int'];
  createUseditemQuestion: IUseditemQuestion;
  deleteUseditemQuestion: Scalars['ID'];
  updateUseditemQuestion: IUseditemQuestion;
  createUseditemQuestionAnswer: IUseditemQuestionAnswer;
  deleteUseditemQuestionAnswer: Scalars['String'];
  updateUseditemQuestionAnswer: IUseditemQuestionAnswer;
  createUser: IUser;
  resetUserPassword: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']>;
};


export type IMutationDislikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationLikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationUpdateBoardArgs = {
  updateBoardInput: IUpdateBoardInput;
  password?: Maybe<Scalars['String']>;
  boardId: Scalars['ID'];
};


export type IMutationCreateBoardCommentArgs = {
  createBoardCommentInput: ICreateBoardCommentInput;
  boardId: Scalars['ID'];
};


export type IMutationDeleteBoardCommentArgs = {
  password?: Maybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};


export type IMutationUpdateBoardCommentArgs = {
  updateBoardCommentInput: IUpdateBoardCommentInput;
  password?: Maybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID'];
};


export type IMutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID'];
};


export type IMutationCreateUseditemArgs = {
  createUseditemInput: ICreateUseditemInput;
};


export type IMutationUpdateUseditemArgs = {
  updateUseditemInput: IUpdateUseditemInput;
  useditemId: Scalars['ID'];
};


export type IMutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID'];
};


export type IMutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: ICreateUseditemQuestionInput;
  useditemId: Scalars['ID'];
};


export type IMutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID'];
};


export type IMutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: IUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID'];
};


export type IMutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: ICreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID'];
};


export type IMutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IMutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID'];
  impUid: Scalars['ID'];
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsCountOfMine: Scalars['Int'];
  fetchBoardsOfMine: Array<IBoard>;
  fetchBoardsOfTheBest: Array<IBoard>;
  fetchBoardComments: Array<IBoardComment>;
  fetchPointTransactions: IPointTransaction;
  fetchPointTransactionsCountOfBuying: IPointTransaction;
  fetchPointTransactionsCountOfLoading: IPointTransaction;
  fetchPointTransactionsCountOfSelling: IPointTransaction;
  fetchPointTransactionsOfBuying: IPointTransaction;
  fetchPointTransactionsOfLoading: IPointTransaction;
  fetchPointTransactionsOfSelling: IPointTransaction;
  fetchUseditem: IUseditem;
  fetchUseditems: Array<IUseditem>;
  fetchUseditemsCountIBought: Scalars['Int'];
  fetchUseditemsCountIPicked: Scalars['Int'];
  fetchUseditemsCountISold: Scalars['Int'];
  fetchUseditemsIBought: Array<IUseditem>;
  fetchUseditemsIPicked: Array<IUseditem>;
  fetchUseditemsISold: Array<IUseditem>;
  fetchUseditemsOfTheBest: Array<IUseditem>;
  fetchUseditemQuestions: Array<IUseditemQuestion>;
  fetchUseditemQuestionAnswers: Array<IUseditemQuestionAnswer>;
  fetchUserLoggedIn: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['ID'];
};


export type IQueryFetchBoardsArgs = {
  search?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};


export type IQueryFetchBoardsCountArgs = {
  search?: Maybe<Scalars['String']>;
};


export type IQueryFetchBoardCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  boardId: Scalars['ID'];
};


export type IQueryFetchUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type IQueryFetchUseditemQuestionsArgs = {
  useditemId: Scalars['ID'];
};


export type IQueryFetchUseditemQuestionAnswersArgs = {
  useditemQuestionId: Scalars['ID'];
};

export type IUpdateBoardCommentInput = {
  contents?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type IUpdateBoardInput = {
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
};

export type IUpdateUseditemInput = {
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type IUpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type IUpdateUseditemQuestionInput = {
  contents: Scalars['String'];
};


export type IUseditem = {
  __typename?: 'Useditem';
  _id: Scalars['ID'];
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags: Array<Scalars['String']>;
  useditemAddress?: Maybe<IUseditemAddress>;
  buyer: IUser;
  seller: IUser;
  soldAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUseditemAddress = {
  __typename?: 'UseditemAddress';
  id: Scalars['ID'];
  zipcode: Scalars['String'];
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  lat: Scalars['Int'];
  lng: Scalars['Int'];
};

export type IUseditemQuestion = {
  __typename?: 'UseditemQuestion';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditem: IUseditem;
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditemQuestion: IUseditemQuestion;
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  userPoint?: Maybe<IUserPoint>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

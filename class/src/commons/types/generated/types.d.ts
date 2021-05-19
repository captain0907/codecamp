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
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type IBoardReturn = {
  __typename?: 'BoardReturn';
  number?: Maybe<Scalars['Int']>;
  writer?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type IMutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<IReturn>;
  updateBoard?: Maybe<IReturn>;
  deleteBoard?: Maybe<IReturn>;
  createProfile?: Maybe<IReturn>;
  updateProfile?: Maybe<IReturn>;
  deleteProfile?: Maybe<IReturn>;
};


export type IMutationCreateBoardArgs = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
};


export type IMutationUpdateBoardArgs = {
  number?: Maybe<Scalars['Int']>;
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
};


export type IMutationDeleteBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type IMutationCreateProfileArgs = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};


export type IMutationUpdateProfileArgs = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};


export type IMutationDeleteProfileArgs = {
  name?: Maybe<Scalars['String']>;
};

export type IProfileReturn = {
  __typename?: 'ProfileReturn';
  number?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard?: Maybe<IBoardReturn>;
  fetchBoards?: Maybe<Array<IBoardReturn>>;
  fetchProfile?: Maybe<IProfileReturn>;
  fetchProfiles?: Maybe<Array<IProfileReturn>>;
};


export type IQueryFetchBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type IQueryFetchProfileArgs = {
  name?: Maybe<Scalars['String']>;
};

export type IReturn = {
  __typename?: 'Return';
  message?: Maybe<Scalars['String']>;
};


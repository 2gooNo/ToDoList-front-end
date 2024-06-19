// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  status?: InputMaybe<Scalars['Boolean']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTeam?: Maybe<Array<Maybe<Team>>>;
  addTodo?: Maybe<Array<Maybe<Todo>>>;
  createUser?: Maybe<Array<Maybe<User>>>;
  deleteTodo?: Maybe<Array<Maybe<Todo>>>;
  markAsDone?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationAddTeamArgs = {
  input?: InputMaybe<AddTeamInput>;
};


export type MutationAddTodoArgs = {
  input?: InputMaybe<CreateTodoInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<AddUserInput>;
};


export type MutationDeleteTodoArgs = {
  input?: InputMaybe<DeleteTodoInput>;
};


export type MutationMarkAsDoneArgs = {
  input?: InputMaybe<MarkAsDoneInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllTeam?: Maybe<Array<Maybe<Team>>>;
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
  getAllUser?: Maybe<Array<Maybe<User>>>;
};

export type Team = {
  __typename?: 'Team';
  teamName?: Maybe<Scalars['String']['output']>;
};

export type Todo = {
  __typename?: 'Todo';
  _id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type AddTeamInput = {
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type AddUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTodoInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MarkAsDoneInput = {
  todoId?: InputMaybe<Scalars['String']['input']>;
};

export type AddTeamMutationVariables = Exact<{
  input?: InputMaybe<AddTeamInput>;
}>;


export type AddTeamMutation = { __typename?: 'Mutation', addTeam?: Array<{ __typename?: 'Team', teamName?: string | null } | null> | null };

export type AddTodoMutationVariables = Exact<{
  input?: InputMaybe<CreateTodoInput>;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: Array<{ __typename?: 'Todo', status?: boolean | null, team?: string | null, title?: string | null } | null> | null };

export type DeleteTodoMutationVariables = Exact<{
  input?: InputMaybe<DeleteTodoInput>;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: Array<{ __typename?: 'Todo', _id?: string | null, status?: boolean | null, team?: string | null, title?: string | null } | null> | null };

export type GetAllTeamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamQuery = { __typename?: 'Query', getAllTeam?: Array<{ __typename?: 'Team', teamName?: string | null } | null> | null };

export type GetAllTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodoQuery = { __typename?: 'Query', getAllTodo?: Array<{ __typename?: 'Todo', status?: boolean | null, team?: string | null, title?: string | null, _id?: string | null } | null> | null };

export type MarkAsDoneMutationVariables = Exact<{
  input?: InputMaybe<MarkAsDoneInput>;
}>;


export type MarkAsDoneMutation = { __typename?: 'Mutation', markAsDone?: Array<{ __typename?: 'Todo', _id?: string | null, status?: boolean | null, team?: string | null, title?: string | null } | null> | null };


export const AddTeamDocument = gql`
    mutation AddTeam($input: addTeamInput) {
  addTeam(input: $input) {
    teamName
  }
}
    `;
export type AddTeamMutationFn = Apollo.MutationFunction<AddTeamMutation, AddTeamMutationVariables>;
export type AddTeamProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddTeamMutation, AddTeamMutationVariables>
    } & TChildProps;
export function withAddTeam<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTeamMutation,
  AddTeamMutationVariables,
  AddTeamProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddTeamMutation, AddTeamMutationVariables, AddTeamProps<TChildProps, TDataName>>(AddTeamDocument, {
      alias: 'addTeam',
      ...operationOptions
    });
};

/**
 * __useAddTeamMutation__
 *
 * To run a mutation, you first call `useAddTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTeamMutation, { data, loading, error }] = useAddTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTeamMutation(baseOptions?: Apollo.MutationHookOptions<AddTeamMutation, AddTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTeamMutation, AddTeamMutationVariables>(AddTeamDocument, options);
      }
export type AddTeamMutationHookResult = ReturnType<typeof useAddTeamMutation>;
export type AddTeamMutationResult = Apollo.MutationResult<AddTeamMutation>;
export type AddTeamMutationOptions = Apollo.BaseMutationOptions<AddTeamMutation, AddTeamMutationVariables>;
export const AddTodoDocument = gql`
    mutation AddTodo($input: CreateTodoInput) {
  addTodo(input: $input) {
    status
    team
    title
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;
export type AddTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>
    } & TChildProps;
export function withAddTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTodoMutation,
  AddTodoMutationVariables,
  AddTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddTodoMutation, AddTodoMutationVariables, AddTodoProps<TChildProps, TDataName>>(AddTodoDocument, {
      alias: 'addTodo',
      ...operationOptions
    });
};

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($input: deleteTodoInput) {
  deleteTodo(input: $input) {
    _id
    status
    team
    title
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>
    } & TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoMutation, DeleteTodoMutationVariables, DeleteTodoProps<TChildProps, TDataName>>(DeleteTodoDocument, {
      alias: 'deleteTodo',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetAllTeamDocument = gql`
    query GetAllTeam {
  getAllTeam {
    teamName
  }
}
    `;
export type GetAllTeamProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTeamQuery, GetAllTeamQueryVariables>
    } & TChildProps;
export function withGetAllTeam<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTeamQuery,
  GetAllTeamQueryVariables,
  GetAllTeamProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTeamQuery, GetAllTeamQueryVariables, GetAllTeamProps<TChildProps, TDataName>>(GetAllTeamDocument, {
      alias: 'getAllTeam',
      ...operationOptions
    });
};

/**
 * __useGetAllTeamQuery__
 *
 * To run a query within a React component, call `useGetAllTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTeamQuery, GetAllTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTeamQuery, GetAllTeamQueryVariables>(GetAllTeamDocument, options);
      }
export function useGetAllTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTeamQuery, GetAllTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTeamQuery, GetAllTeamQueryVariables>(GetAllTeamDocument, options);
        }
export function useGetAllTeamSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTeamQuery, GetAllTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTeamQuery, GetAllTeamQueryVariables>(GetAllTeamDocument, options);
        }
export type GetAllTeamQueryHookResult = ReturnType<typeof useGetAllTeamQuery>;
export type GetAllTeamLazyQueryHookResult = ReturnType<typeof useGetAllTeamLazyQuery>;
export type GetAllTeamSuspenseQueryHookResult = ReturnType<typeof useGetAllTeamSuspenseQuery>;
export type GetAllTeamQueryResult = Apollo.QueryResult<GetAllTeamQuery, GetAllTeamQueryVariables>;
export const GetAllTodoDocument = gql`
    query GetAllTodo {
  getAllTodo {
    status
    team
    title
    _id
  }
}
    `;
export type GetAllTodoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTodoQuery, GetAllTodoQueryVariables>
    } & TChildProps;
export function withGetAllTodo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTodoQuery,
  GetAllTodoQueryVariables,
  GetAllTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTodoQuery, GetAllTodoQueryVariables, GetAllTodoProps<TChildProps, TDataName>>(GetAllTodoDocument, {
      alias: 'getAllTodo',
      ...operationOptions
    });
};

/**
 * __useGetAllTodoQuery__
 *
 * To run a query within a React component, call `useGetAllTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
      }
export function useGetAllTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export function useGetAllTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export type GetAllTodoQueryHookResult = ReturnType<typeof useGetAllTodoQuery>;
export type GetAllTodoLazyQueryHookResult = ReturnType<typeof useGetAllTodoLazyQuery>;
export type GetAllTodoSuspenseQueryHookResult = ReturnType<typeof useGetAllTodoSuspenseQuery>;
export type GetAllTodoQueryResult = Apollo.QueryResult<GetAllTodoQuery, GetAllTodoQueryVariables>;
export const MarkAsDoneDocument = gql`
    mutation MarkAsDone($input: markAsDoneInput) {
  markAsDone(input: $input) {
    _id
    status
    team
    title
  }
}
    `;
export type MarkAsDoneMutationFn = Apollo.MutationFunction<MarkAsDoneMutation, MarkAsDoneMutationVariables>;
export type MarkAsDoneProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<MarkAsDoneMutation, MarkAsDoneMutationVariables>
    } & TChildProps;
export function withMarkAsDone<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MarkAsDoneMutation,
  MarkAsDoneMutationVariables,
  MarkAsDoneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, MarkAsDoneMutation, MarkAsDoneMutationVariables, MarkAsDoneProps<TChildProps, TDataName>>(MarkAsDoneDocument, {
      alias: 'markAsDone',
      ...operationOptions
    });
};

/**
 * __useMarkAsDoneMutation__
 *
 * To run a mutation, you first call `useMarkAsDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsDoneMutation, { data, loading, error }] = useMarkAsDoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMarkAsDoneMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsDoneMutation, MarkAsDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAsDoneMutation, MarkAsDoneMutationVariables>(MarkAsDoneDocument, options);
      }
export type MarkAsDoneMutationHookResult = ReturnType<typeof useMarkAsDoneMutation>;
export type MarkAsDoneMutationResult = Apollo.MutationResult<MarkAsDoneMutation>;
export type MarkAsDoneMutationOptions = Apollo.BaseMutationOptions<MarkAsDoneMutation, MarkAsDoneMutationVariables>;
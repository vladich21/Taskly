// entities/group/api/groupApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Group } from "../model/types";

export const groupApi = createApi({
  reducerPath: "groupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["Group"],
  endpoints: (builder) => ({
    getGroups: builder.query<Group[], void>({
      query: () => "groups",
      providesTags: ["Group"],
    }),
    createGroup: builder.mutation<void, { name: string }>({
      query: (body) => ({
        url: "groups",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Group"],
    }),
    deleteGroup: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `groups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Group"],
    }),
    updateGroup: builder.mutation<void, { id: string; name: string }>({
      query: ({ id, name }) => ({
        url: `groups/${id}`,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: ["Group"],
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useCreateGroupMutation,
  useDeleteGroupMutation,
  useUpdateGroupMutation,
} = groupApi;

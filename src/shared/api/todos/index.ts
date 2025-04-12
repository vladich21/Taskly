import { httpClient } from "../http-client";
import { QueryParams, Todo } from "./model";
const SLUG = "todos";

export const getTodo = (params: QueryParams) =>
  httpClient.get<Todo[]>(SLUG, { params });

export const getTodoById = (id: string) => httpClient.get(`${SLUG}/${id}`);

export const updateTodo = (todo: Todo) =>
  httpClient.put(`${SLUG}/${todo.id}`, { json: todo });

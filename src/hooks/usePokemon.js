import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { api } from "../utils/api";

export const usePokemon = (id) => {
  const { data, error } = useSWR(`${api}/pokemon/${id}`, fetcher);

  return { pokemon: data, loading: !data && !error, error };
};

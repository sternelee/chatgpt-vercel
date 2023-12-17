import type { APIEvent } from "solid-start/api"
import { baseURL } from "./index"

export async function GET({ request }: APIEvent) {
  const res = await fetch(baseURL + "/v1/models")
  return new Response(await res.json())
}

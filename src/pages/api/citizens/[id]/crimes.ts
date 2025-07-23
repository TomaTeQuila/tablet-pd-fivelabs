export const prerender = false;
import type { APIRoute } from "astro";
import { CrimeSchema } from "../../../../lib/schemas";
import { getCrimesOf, addCrimeTo, deleteCrime } from "../../../../lib/db";

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const crimes = await getCrimesOf(id!);
  return new Response(JSON.stringify(crimes), { status: 200 });
};

export const POST: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const parsed = CrimeSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify(parsed.error.format()), { status: 400 });
  }
  const created = await addCrimeTo(id!, parsed.data);
  return new Response(JSON.stringify(created), { status: 201 });
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const { index } = await request.json(); // índice del array
  if (typeof index !== "number") return new Response("index requerido", { status: 400 });
  await deleteCrime(id!, index);
  return new Response(null, { status: 204 });
};

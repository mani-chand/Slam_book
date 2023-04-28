export async function POST(request) {
  const res = await request.json();
  console.log(res);
  return new Response(res);
}

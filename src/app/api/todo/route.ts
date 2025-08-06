import todoService from '@/app/services/todo';

export async function GET() {
  const todos = await todoService.getAll();

  return Response.json({ data: todos });
}

export async function POST(request: Request) {
  const todoToCreate = await request.json();
  const result = await todoService.create(todoToCreate);

  return Response.json({ data: result });
}

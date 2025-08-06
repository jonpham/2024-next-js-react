import todoService from '@/app/services/todo';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const todoId = (await params).id;
  const todo = await todoService.getById(todoId);

  return Response.json({ data: todo });
}

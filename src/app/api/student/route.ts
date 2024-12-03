import studentService from '@/app/services/student';

export async function GET() {
  const students = await studentService.getAll();

  return Response.json({ data: students });
}

export async function POST(request: Request) {
  const studentToCreate = await request.json();
  const result = await studentService.create(studentToCreate);

  return Response.json({ data: result });
}

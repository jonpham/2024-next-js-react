import prisma from '@/app/lib/prisma';
import type { PrismaClient, Todo } from '@prisma/client';

/** Server Data Service Abstraction */
type FetchArgs = Parameters<typeof fetch>;

class ToDoDataService {
  public client?: PrismaClient;
  private directCall: boolean = true;
  private apiBaseUrl: string | undefined;

  constructor(apiBaseUrl?: string) {
    this.client = prisma;
    if (apiBaseUrl !== undefined) {
      this.apiBaseUrl = apiBaseUrl;
      this.directCall = false;
    }
  }

  isReady(): boolean {
    return !!this.client;
  }

  async fetch(...args: FetchArgs) {
    if (!this.isReady) {
      return Promise.reject('client not ready');
    }
    let response;
    try {
      response = await fetch(...args);
    } catch (e) {
      console.error(e, response);
    } finally {
      return response;
    }
  }

  /** ToDo */
  async getAll(): Promise<Todo[] | undefined | null> {
    if (!this.directCall) {
      const todoResponse = await this.fetch(`${this.apiBaseUrl}/api/todo`);

      return todoResponse?.json();
    }

    return (await this.client?.todo.findMany()) || [];
  }

  async getById(id: string): Promise<Todo | string> {
    if (!this.directCall) {
      const todoResponse = await this.fetch(
        `${this.apiBaseUrl}/api/todo/${encodeURIComponent(id)}`
      );
      const todoJson = await todoResponse?.json();

      return !todoResponse?.ok ? 'not ok' : todoJson.data;
    }

    const todo = await this.client?.todo.findUnique({
      where: { id },
    });

    return !todo ? 'not ok' : todo;
  }

  async create(
    todo: Omit<Todo, 'id' | 'created'>
  ): Promise<Todo | undefined | null> {
    const todoToCreate = {
      ...todo,
      created: new Date(),
    };

    if (!this.directCall) {
      const creationResponse = await this.fetch('/api/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoToCreate),
      });
      const createdToDo = await creationResponse?.json();

      return createdToDo['data'];
    }

    return this.client?.todo.create({
      data: todoToCreate,
    });
  }

  async update(todo: Omit<Todo, 'check_in_time'>) {
    if (!this.directCall) {
      return await this.fetch(`/api/todo/${encodeURIComponent(todo.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
    }

    return this.client?.todo.upsert({
      where: {
        id: todo.id,
      },
      create: {
        task: todo.task,
        created: new Date(),
        completed: false,
      },
      update: {
        task: todo.task,
      },
    });
  }

  async delete(id: string) {
    if (!this.directCall) {
      return await this.fetch(`/api/todo/${id}`, {
        method: 'DELETE',
      });
    }

    console.log(`Deleting todo ${id} using PRISMA`);
    let deletedToDo;
    try {
      deletedToDo = await this.client?.todo.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      console.error('ERROR:', e);
    } finally {
      console.log('DELETED:', deletedToDo);
    }

    return deletedToDo;
  }
}

// Instantiate singletons
const todoservice = new ToDoDataService();
const todoserviceClient = new ToDoDataService('http://localhost:3000');

export {
  ToDoDataService,
  todoserviceClient as apiClient,
  todoservice as default,
};

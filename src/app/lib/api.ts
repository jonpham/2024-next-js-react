import type { Invoice } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

class ApiService {
  public client?: PrismaClient;

  constructor(prismaClient?: PrismaClient) {
    this.client = prismaClient;
  }

  isReady(): boolean {
    return !!this.client;
  }

  async publish(id: number) {
    return await fetch(`/api/publish/${id}`, {
      method: 'PUT',
    });
  }

  async destroy(id: number) {
    return await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });
  }
  /** Revenue */
  async getRevenue() {
    return await fetch('/api/revenue');
  }
  /** Invoices */
  async createInvoice(invoice: Invoice) {
    return await fetch('/api/invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invoice),
    });
  }

  async updateInvoice(invoice: Invoice) {
    return await fetch(`/api/invoice/${invoice.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invoice),
    });
  }

  async deleteInvoice(invoiceId: string) {
    return await fetch(`/api/invoice/${invoiceId}`, {
      method: 'DELETE',
    });
  }

  async getLatestInvoices() {
    return await fetch('/api/invoice?sort=latest&count=6');
  }

  async getInvoiceCount() {
    return await fetch('/api/invoice/count');
  }

  async getInvoices() {
    return await fetch('/api/invoice');
  }

  async getInvoiceCountyByStatus() {
    return await fetch('/api/invoice/status');
  }

  async getInvoice(id: string) {
    return await fetch(`/api/invoice/${id}`);
  }
  /** Customers */
  async getCustomer(id: string) {
    return await fetch(`/api/customer/${id}`);
  }

  async getCustomerCount() {
    return await fetch('/api/customer/count');
  }
}

export { ApiService };

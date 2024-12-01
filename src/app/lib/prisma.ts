import { PrismaClient } from '@prisma/client';

class PrismaService {
    public client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    getClient() {
        return this.client;
    }

    getRevenue() {}

    getLatestInvoices() {}
    getInvoiceCount() {}
    getInvoices() {}
    getInvoiceCountyByStatus() {}
    getInvoice() {}
    
    getCustomer() {}
    getCustomerCount() {}
}

const prisma = new PrismaService();

export { PrismaService, prisma }
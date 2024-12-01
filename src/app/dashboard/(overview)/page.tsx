import { lusitana } from '@/app/fonts';
import { Suspense } from 'react';
import InvoiceCards from '../components/InvoiceCards';
import LatestInvoices from '../components/LatestInvoices';
import RevenueChart from '../components/RevenueChart';
import LatestInvoicesSkeleton from '../components/InvoiceSkeleton';
import RevenueChartSkeleton from '../components/RevenueChartSkeleton';
import { CardsSkeleton } from '../components/CardSkeleton';

async function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <InvoiceCards />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />} >
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

export { DashboardPage as default };

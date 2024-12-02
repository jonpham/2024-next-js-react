import { createContext, PropsWithChildren, useContext } from 'react';
import type { PrismaService } from '../lib/prisma';
import { PrismaClient } from '@prisma/client';

type PrismaServices = {
  client?: PrismaClient;
  service?: PrismaService;
};

const PrismaContext = createContext({} as PrismaServices);

function PrismaProvider({
  services,
  children,
}: PropsWithChildren<{ services: PrismaServices }>) {
  return (
    <PrismaContext.Provider value={services}>
        {children}
    </PrismaContext.Provider>
  );
}

function usePrisma(): PrismaServices {
  return useContext(PrismaContext);
}

export { PrismaContext, PrismaProvider, usePrisma };

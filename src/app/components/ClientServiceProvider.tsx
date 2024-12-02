import { createContext, PropsWithChildren, useContext } from 'react';

type ClientServices = {
  id: string;
}

const INITIAL_VALUE: ClientServices = { id: 'uninitiated' };
const ClientServicesContext = createContext(INITIAL_VALUE);


function ClientServicesProvider({
  services,
  children,
}: PropsWithChildren<{ services? : ClientServices }>) {
  return (
    <ClientServicesContext.Provider value={services || INITIAL_VALUE}>
        {children}
    </ClientServicesContext.Provider>
  );
}

function useClientServices(): ClientServices {
  return useContext(ClientServicesContext);
}

export { ClientServicesContext, ClientServicesProvider, useClientServices };

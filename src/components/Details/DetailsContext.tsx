import React, {PropsWithChildren, createContext} from 'react';
import type {EventDetails} from '../../eventTypes/events.types';

type DetailsContextProps = {
  details: EventDetails;
};

type DetailsProviderProps = PropsWithChildren<{
  details: EventDetails;
}>;

export const DetailsContext = createContext<DetailsContextProps>(
  {} as DetailsContextProps,
);

const DetailsProvider = ({children, details}: DetailsProviderProps) => {
  return (
    <DetailsContext.Provider value={{details}}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;

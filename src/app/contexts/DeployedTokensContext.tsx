import { createContext, useContext, useState, ReactNode } from 'react';

export interface DeployedToken {
  id: string;
  projectName: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  website: string;
  twitter: string;
  telegram: string;
  mintAddress: string;
  solscanLink: string;
  dexscreenerLink: string;
  marketCap: string;
  liquidity: string;
  deployedAt: Date;
  raised: number;
  goal: number;
  participants: number;
}

interface DeployedTokensContextType {
  deployedTokens: DeployedToken[];
  addDeployedToken: (token: DeployedToken) => void;
}

const DeployedTokensContext = createContext<DeployedTokensContextType | undefined>(undefined);

export function DeployedTokensProvider({ children }: { children: ReactNode }) {
  const [deployedTokens, setDeployedTokens] = useState<DeployedToken[]>([]);

  const addDeployedToken = (token: DeployedToken) => {
    setDeployedTokens(prev => [token, ...prev]);
  };

  return (
    <DeployedTokensContext.Provider value={{ deployedTokens, addDeployedToken }}>
      {children}
    </DeployedTokensContext.Provider>
  );
}

export function useDeployedTokens() {
  const context = useContext(DeployedTokensContext);
  if (context === undefined) {
    throw new Error('useDeployedTokens must be used within a DeployedTokensProvider');
  }
  return context;
}

import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { WalletProvider } from './WalletProvider';
import { Footer } from './Footer';
import { DeployedTokensProvider } from '../contexts/DeployedTokensContext';

export function RootLayout() {
  return (
    <WalletProvider>
      <DeployedTokensProvider>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <main className="relative z-10 pt-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      </DeployedTokensProvider>
    </WalletProvider>
  );
}
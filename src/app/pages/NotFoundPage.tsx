import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <GlassCard className="p-12" glow="purple">
          <div className="mb-8">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-400">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105 flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
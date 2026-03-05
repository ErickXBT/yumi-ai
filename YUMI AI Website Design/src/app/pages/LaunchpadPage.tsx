import { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router';
import { useDeployedTokens } from '../contexts/DeployedTokensContext';
import {
  Rocket,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Wallet,
  DollarSign,
  Users,
  BarChart3,
  Activity,
  Plus,
  ExternalLink,
  Zap,
  Globe,
  Twitter,
  Send,
} from 'lucide-react';

export function LaunchpadPage() {
  const { connected, publicKey } = useWallet();
  const navigate = useNavigate();
  const { deployedTokens } = useDeployedTokens();
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'completed'>('live');

  const projects = {
    live: [
      {
        name: 'QuantumAI',
        description: 'Advanced quantum computing AI for blockchain optimization',
        raised: 450000,
        goal: 500000,
        participants: 1234,
        endsIn: '2 days',
        image: '🔮',
        allocation: '100 SOL',
      },
      {
        name: 'NeuroSwap',
        description: 'AI-powered decentralized exchange with predictive trading',
        raised: 320000,
        goal: 750000,
        participants: 892,
        endsIn: '5 days',
        image: '🧠',
        allocation: '250 SOL',
      },
    ],
    upcoming: [
      {
        name: 'SynthAI',
        description: 'Synthetic asset generation using advanced AI models',
        goal: 600000,
        startsIn: '3 days',
        image: '⚡',
      },
      {
        name: 'ChainGuard',
        description: 'AI-powered security and auditing platform',
        goal: 400000,
        startsIn: '7 days',
        image: '🛡️',
      },
    ],
    completed: [
      {
        name: 'DeepPool',
        description: 'Deep learning liquidity pool optimization',
        raised: 1200000,
        goal: 1000000,
        participants: 3421,
        image: '💎',
      },
      {
        name: 'AITrader Pro',
        description: 'Professional-grade AI trading infrastructure',
        raised: 850000,
        goal: 800000,
        participants: 2156,
        image: '📈',
      },
    ],
  };

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, label: 'Total Projects', value: '42' },
    { icon: <DollarSign className="w-6 h-6" />, label: 'Total Raised', value: '$12.5M' },
    { icon: <Users className="w-6 h-6" />, label: 'Participants', value: '18.2K' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Success Rate', value: '94%' },
  ];

  const userStats = [
    { label: 'Your Investments', value: '3', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Total Invested', value: '125 SOL', icon: <DollarSign className="w-5 h-5" /> },
    { label: 'Active Projects', value: '2', icon: <Activity className="w-5 h-5" /> },
    { label: 'Claimed Tokens', value: '5', icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Solana Launchpad</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Project Launchpad
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover and invest in cutting-edge AI projects on Solana
          </p>
        </motion.div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 text-center" hover={false}>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Wallet Connection / User Dashboard */}
        {connected && publicKey ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-8" glow="purple">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Dashboard</h2>
                  <p className="text-gray-400">
                    {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
                  </p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Connected
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {userStats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      {stat.icon}
                      <span className="text-xs text-gray-400">{stat.label}</span>
                    </div>
                    <div className="text-xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-12 text-center" glow="purple">
              <Wallet className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Connect Your Wallet</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Connect your Phantom wallet to participate in launches and manage your investments
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">Connect wallet to access launchpad features</span>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {(['live', 'upcoming', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {tab === 'live' ? deployedTokens.length + projects[tab].length : projects[tab].length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Deployed Tokens First */}
          {activeTab === 'live' && deployedTokens.map((token, i) => (
            <motion.div
              key={token.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl border border-purple-500/30 overflow-hidden flex-shrink-0">
                      {token.logoUrl ? (
                        <img src={token.logoUrl} alt={token.projectName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
                          {token.tickerSymbol.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{token.projectName}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-purple-400 font-semibold">${token.tickerSymbol}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    LIVE
                  </span>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">{token.description}</p>

                {/* Social Links */}
                <div className="flex gap-2 mb-6">
                  <a 
                    href={token.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Website
                  </a>
                  <a 
                    href={token.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                    Twitter
                  </a>
                  <a 
                    href={token.telegram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Telegram
                  </a>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-purple-400 font-semibold">
                        ${token.raised.toLocaleString()} / ${token.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${(token.raised / token.goal) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{token.participants.toLocaleString()} participants</span>
                    </div>
                    <div className="text-purple-400 font-semibold text-xs">
                      Just Launched
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!connected}
                  >
                    Participate
                  </button>
                  <a 
                    href={token.solscanLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {activeTab === 'live' &&
            projects.live.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-3xl">
                        {project.image}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>Ends in {project.endsIn}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      LIVE
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-purple-400 font-semibold">
                          ${project.raised.toLocaleString()} / ${project.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: `${(project.raised / project.goal) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{project.participants.toLocaleString()} participants</span>
                      </div>
                      <div className="text-purple-400 font-semibold">
                        Max: {project.allocation}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!connected}
                    >
                      Participate
                    </button>
                    <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

          {activeTab === 'upcoming' &&
            projects.upcoming.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full" glow="blue">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-3xl">
                        {project.image}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>Starts in {project.startsIn}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
                      UPCOMING
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Goal</span>
                      <span className="font-bold text-blue-400">
                        ${project.goal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Set Reminder
                  </button>
                </GlassCard>
              </motion.div>
            ))}

          {activeTab === 'completed' &&
            projects.completed.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center text-3xl">
                        {project.image}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Completed</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/30 text-xs font-semibold">
                      ENDED
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-xs text-gray-400 mb-1">Raised</div>
                      <div className="font-bold text-green-400">
                        ${(project.raised / 1000).toFixed(0)}K
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-xs text-gray-400 mb-1">Goal</div>
                      <div className="font-bold">${(project.goal / 1000).toFixed(0)}K</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-xs text-gray-400 mb-1">Users</div>
                      <div className="font-bold">{(project.participants / 1000).toFixed(1)}K</div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Details
                  </button>
                </GlassCard>
              </motion.div>
            ))}
        </div>

        {/* Create Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlassCard className="p-12 text-center" glow="purple">
            <Plus className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h3 className="text-3xl font-bold mb-4">Launch Your AI Project</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to raise funds for your AI project? Apply to launch on our platform
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!connected}
              onClick={() => navigate('/launchpad/create')}
            >
              {connected ? 'Submit Project' : 'Connect Wallet to Apply'}
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
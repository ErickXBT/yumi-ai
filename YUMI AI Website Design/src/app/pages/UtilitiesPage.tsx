import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import {
  Bot,
  Brain,
  MessageSquare,
  Image,
  Code,
  TrendingUp,
  Users,
  FileText,
  Database,
  Settings,
  Zap,
  Shield,
} from 'lucide-react';

export function UtilitiesPage() {
  const aiAgentTools = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Trading Bot',
      description: 'Automated trading strategies with AI-powered market analysis',
      status: 'Active',
      users: '2.5K',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Smart Contract Analyzer',
      description: 'AI-powered smart contract auditing and vulnerability detection',
      status: 'Active',
      users: '1.8K',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Community Manager',
      description: 'Automated community engagement and moderation bot',
      status: 'Active',
      users: '3.2K',
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'NFT Generator',
      description: 'AI-powered NFT artwork generation and metadata creation',
      status: 'Beta',
      users: '956',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Code Assistant',
      description: 'AI coding companion for Solana smart contract development',
      status: 'Active',
      users: '1.4K',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Market Predictor',
      description: 'Advanced AI models for crypto market trend prediction',
      status: 'Active',
      users: '4.1K',
    },
  ];

  const humanTools = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Dashboard',
      description: 'Real-time analytics and insights for your AI agents',
      category: 'Analytics',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Agent Configuration',
      description: 'Customize and fine-tune your AI agent parameters',
      category: 'Management',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Report Generator',
      description: 'Automated report creation from AI agent activities',
      category: 'Reporting',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Monitor',
      description: 'Monitor and manage security across all your deployments',
      category: 'Security',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Collaborative workspace for managing AI projects',
      category: 'Collaboration',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation Hub',
      description: 'Create custom workflows and automation sequences',
      category: 'Automation',
    },
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
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Utilities
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful AI agents and tools to supercharge your Web3 experience
          </p>
        </motion.div>

        {/* AI Agent Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold">AI Agent Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgentTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      {tool.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tool.status === 'Active'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{tool.users} users</span>
                    </div>
                    <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-sm font-semibold transition-colors">
                      Launch
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Human Tools */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold">Human Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full hover:scale-105 transition-transform cursor-pointer" glow="blue">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                    {tool.icon}
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-semibold text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                  <button className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-sm font-semibold transition-colors">
                    Open Tool
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <GlassCard className="p-12 text-center" glow="purple">
            <Bot className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h3 className="text-3xl font-bold mb-4">Need a Custom AI Agent?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team can build tailored AI solutions for your specific needs
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105">
              Request Custom Agent
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import {
  Coins,
  TrendingUp,
  Users,
  Lock,
  Zap,
  Trophy,
  Gift,
  Star,
  BarChart3,
  Shield,
  Wallet,
  Sparkles,
} from 'lucide-react';

export function TokenPage() {
  const tokenomics = [
    { label: 'Total Supply', value: '1,000,000,000', icon: <Coins className="w-6 h-6" /> },
    { label: 'Circulating', value: '650,000,000', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Holders', value: '15,234', icon: <Users className="w-6 h-6" /> },
    { label: 'Locked Liquidity', value: '$1.2M', icon: <Lock className="w-6 h-6" /> },
  ];

  const distribution = [
    { category: 'Community & Rewards', percentage: 40, color: 'from-purple-500 to-purple-600' },
    { category: 'Liquidity Pool', percentage: 25, color: 'from-blue-500 to-blue-600' },
    { category: 'Development', percentage: 15, color: 'from-cyan-500 to-cyan-600' },
    { category: 'Team (Vested)', percentage: 10, color: 'from-pink-500 to-pink-600' },
    { category: 'Marketing', percentage: 10, color: 'from-indigo-500 to-indigo-600' },
  ];

  const holderBenefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Reduced Fees',
      description: 'Get up to 50% discount on all platform fees based on your holdings',
      tier: 'All Holders',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Exclusive Access',
      description: 'Early access to new AI agents and beta features',
      tier: 'Gold Tier+',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Staking Rewards',
      description: 'Earn passive income by staking your $YUMI tokens',
      tier: 'All Holders',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Governance Rights',
      description: 'Vote on protocol upgrades and new feature proposals',
      tier: 'Platinum Tier+',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Premium Analytics',
      description: 'Access advanced analytics and AI-powered insights',
      tier: 'Silver Tier+',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'NFT Airdrops',
      description: 'Exclusive NFT drops for long-term token holders',
      tier: 'Gold Tier+',
    },
  ];

  const tiers = [
    {
      name: 'Bronze',
      amount: '10,000 $YUMI',
      color: 'from-amber-700 to-amber-600',
      benefits: ['5% Fee Discount', 'Basic Support'],
    },
    {
      name: 'Silver',
      amount: '50,000 $YUMI',
      color: 'from-gray-400 to-gray-500',
      benefits: ['15% Fee Discount', 'Priority Support', 'Premium Analytics'],
    },
    {
      name: 'Gold',
      amount: '100,000 $YUMI',
      color: 'from-yellow-400 to-yellow-500',
      benefits: ['30% Fee Discount', '24/7 Support', 'Exclusive Access', 'NFT Airdrops'],
    },
    {
      name: 'Platinum',
      amount: '500,000 $YUMI',
      color: 'from-purple-400 to-purple-500',
      benefits: ['50% Fee Discount', 'Dedicated Manager', 'All Benefits', 'Governance Rights'],
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Coins className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Native Token</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            $YUMI Token
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The fuel that powers the YUMI AI ecosystem
          </p>
        </motion.div>

        {/* Token Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenomics.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-4">
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

        {/* Token Distribution */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Token Distribution</h2>
          <GlassCard className="p-8">
            <div className="space-y-6">
              {distribution.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{item.category}</span>
                    <span className="text-purple-400 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Holder Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Holder Utility</h2>
            <p className="text-xl text-gray-400">
              Unlock exclusive benefits and rewards by holding $YUMI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {holderBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    {benefit.icon}
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      {benefit.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Holder Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Holder Tiers</h2>
            <p className="text-xl text-gray-400">
              The more you hold, the more you earn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className={`h-2 w-full bg-gradient-to-r ${tier.color} rounded-full mb-6`} />
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-purple-400 font-semibold mb-6">{tier.amount}</p>
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlassCard className="p-12 text-center" glow="purple">
            <Wallet className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h3 className="text-3xl font-bold mb-4">Ready to Get $YUMI?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Purchase $YUMI tokens on your favorite DEX and start earning benefits today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105">
                Buy on Raydium
              </button>
              <button className="px-10 py-4 bg-white/5 border border-purple-500/30 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-purple-500/50 transition-all">
                View Chart
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

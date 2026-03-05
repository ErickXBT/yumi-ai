import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Bot, Target, Users, ChevronRight, Zap, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Next-Gen AI on Solana</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              YUMI AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The Future of Decentralized Artificial Intelligence
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Harness the power of AI agents and cutting-edge Web3 technology to revolutionize how we interact with blockchain ecosystems
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/launchpad">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105 flex items-center gap-2">
                  Launch App
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link to="/token">
                <button className="px-8 py-4 bg-white/5 border border-purple-500/30 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-purple-500/50 transition-all">
                  Learn About $YUMI
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { label: 'AI Agents', value: '12+' },
              { label: 'Total Users', value: '50K+' },
              { label: 'Transactions', value: '$2M+' },
              { label: 'Holders', value: '15K+' },
            ].map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center" hover={false}>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About YUMI AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pioneering the convergence of artificial intelligence and blockchain technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-10 h-10" />,
                title: 'AI-Powered',
                description: 'Advanced machine learning algorithms drive intelligent decision-making and automated workflows',
                glow: 'purple' as const,
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Secure & Decentralized',
                description: 'Built on Solana blockchain ensuring transparency, security, and true ownership of your data',
                glow: 'blue' as const,
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Lightning Fast',
                description: 'Experience instant transactions and real-time AI processing with Solana\'s high-speed infrastructure',
                glow: 'cyan' as const,
              },
            ].map((item, i) => (
              <GlassCard key={i} className="p-8" glow={item.glow}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Creating a world where AI and blockchain work seamlessly together to empower individuals and businesses
              </p>
              <div className="space-y-4">
                {[
                  'Democratize access to advanced AI technology',
                  'Build transparent and trustless AI systems',
                  'Enable community-driven development',
                  'Create sustainable economic models',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8" glow="blue">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Mission</h3>
                      <p className="text-gray-400">Empower through innovation</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    To revolutionize the AI landscape by combining decentralized technology with intelligent automation, making advanced AI tools accessible to everyone while maintaining privacy, security, and user control.
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-lg font-bold mb-3">Core Values</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Innovation', 'Transparency', 'Community', 'Security'].map((value, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get Involved
            </h2>
            <p className="text-xl text-gray-400">
              Join our growing community and shape the future of AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Join Community',
                description: 'Connect with like-minded innovators on Discord and Telegram',
                link: '#',
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Start Building',
                description: 'Access our API and start creating AI-powered dApps',
                link: '/utilities',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Hold $YUMI',
                description: 'Become a token holder and unlock exclusive benefits',
                link: '/token',
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: 'Launch Projects',
                description: 'Use our launchpad to deploy your AI-powered projects',
                link: '/launchpad',
              },
            ].map((item, i) => (
              <Link key={i} to={item.link}>
                <GlassCard className="p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </GlassCard>
              </Link>
            ))}
          </div>

          <GlassCard className="p-12 text-center" glow="purple">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect your wallet and explore the world of decentralized AI
            </p>
            <Link to="/launchpad">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105">
                Connect Wallet & Launch
              </button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

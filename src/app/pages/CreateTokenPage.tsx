import { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDeployedTokens } from '../contexts/DeployedTokensContext';
import {
  Rocket,
  Upload,
  Globe,
  Twitter,
  Send,
  AlertCircle,
  CheckCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';

interface TokenFormData {
  projectName: string;
  tickerSymbol: string;
  description: string;
  logo: File | null;
  website: string;
  twitter: string;
  telegram: string;
}

export function CreateTokenPage() {
  const { connected } = useWallet();
  const { addDeployedToken } = useDeployedTokens();
  const [formData, setFormData] = useState<TokenFormData>({
    projectName: '',
    tickerSymbol: '',
    description: '',
    logo: null,
    website: '',
    twitter: '',
    telegram: '',
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentSuccess, setDeploymentSuccess] = useState(false);
  const [deploymentData, setDeploymentData] = useState({
    mintAddress: '',
    solscanLink: '',
    dexscreenerLink: '',
    marketCap: '',
    liquidity: '',
  });

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeploy = async () => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }

    setIsDeploying(true);
    
    // Simulate deployment
    setTimeout(() => {
      const mockMintAddress = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
      const deployData = {
        mintAddress: mockMintAddress,
        solscanLink: `https://solscan.io/token/${mockMintAddress}?cluster=devnet`,
        dexscreenerLink: `https://dexscreener.com/solana/${mockMintAddress}`,
        marketCap: '$0',
        liquidity: '$0',
      };
      
      setDeploymentData(deployData);
      
      // Add to deployed tokens context
      addDeployedToken({
        id: mockMintAddress,
        projectName: formData.projectName,
        tickerSymbol: formData.tickerSymbol,
        description: formData.description,
        logoUrl: logoPreview || '',
        website: formData.website,
        twitter: formData.twitter,
        telegram: formData.telegram,
        mintAddress: mockMintAddress,
        solscanLink: deployData.solscanLink,
        dexscreenerLink: deployData.dexscreenerLink,
        marketCap: deployData.marketCap,
        liquidity: deployData.liquidity,
        deployedAt: new Date(),
        raised: 0,
        goal: 50000,
        participants: 0,
      });
      
      setIsDeploying(false);
      setDeploymentSuccess(true);
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const closeModal = () => {
    setDeploymentSuccess(false);
    // Reset form
    setFormData({
      projectName: '',
      tickerSymbol: '',
      description: '',
      logo: null,
      website: '',
      twitter: '',
      telegram: '',
    });
    setLogoPreview(null);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">YUMI AI Launchpad</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Launch Your Agent
          </h1>
          <p className="text-xl text-gray-400">
            Deploy your Solana token in seconds. No coding required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Token Details</h2>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Project Name & Ticker Symbol */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Project Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Yumi Ai"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Ticker Symbol <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="YUMI"
                        value={formData.tickerSymbol}
                        onChange={(e) => setFormData({ ...formData, tickerSymbol: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      placeholder="Tell the world about your coin..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors resize-none"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      {formData.description.length} / 500 characters
                    </div>
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Logo <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleLogoUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="block p-12 border-2 border-dashed border-purple-500/30 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 transition-colors cursor-pointer"
                      >
                        {logoPreview ? (
                          <div className="flex flex-col items-center">
                            <img src={logoPreview} alt="Logo preview" className="w-24 h-24 rounded-xl mb-4 object-cover" />
                            <p className="text-sm text-purple-400">Click to change logo</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="w-12 h-12 text-purple-400 mb-4" />
                            <p className="text-lg font-semibold text-purple-400 mb-1">Upload Logo</p>
                            <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold">Social Links</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Website</label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            placeholder="https://yourproject.com"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Twitter / X</label>
                        <div className="relative">
                          <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            placeholder="https://twitter.com/yourproject"
                            value={formData.twitter}
                            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Telegram</label>
                        <div className="relative">
                          <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            placeholder="https://t.me/yourproject"
                            value={formData.telegram}
                            onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Warning */}
                  {!connected && (
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-300">
                        Please connect your wallet to deploy your token
                      </p>
                    </div>
                  )}

                  {/* Deploy Button */}
                  <button
                    onClick={handleDeploy}
                    disabled={!connected || isDeploying || !formData.projectName || !formData.tickerSymbol || !formData.description || !formData.logo}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    {isDeploying ? 'Deploying...' : 'Deploy to Solana'}
                  </button>

                  {/* Default Configuration */}
                  <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold mb-4">Default Token Configuration:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Total Supply:</div>
                        <div className="font-semibold">1,000,000,000</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Decimals:</div>
                        <div className="font-semibold">9</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Network:</div>
                        <div className="font-semibold text-purple-400">Solana Devnet</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Fee:</div>
                        <div className="font-semibold">~0.002 SOL</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-300">
                        Development Mode: Using Devnet. Get free SOL from Solana Faucet
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Sidebar - Recent Launches */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <h3 className="text-lg font-bold">Recent Launches</h3>
                </div>
                
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-gray-500 text-sm">
                    No launches yet. Be the first!
                  </p>
                </div>

                {/* Stats placeholders */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">0</div>
                      <div className="text-xs text-gray-400">Total Launches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">0h</div>
                      <div className="text-xs text-gray-400">Last Launch</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {deploymentSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-lg w-full"
          >
            <GlassCard className="p-8" glow="purple">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Token Deployed Successfully!</h3>
                <p className="text-gray-400">Your token is now live on Solana Devnet</p>
              </div>

              <div className="space-y-4">
                {/* Mint Address */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Mint Address</div>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm font-mono text-purple-400 break-all">
                      {deploymentData.mintAddress}
                    </code>
                    <button
                      onClick={() => copyToClipboard(deploymentData.mintAddress)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Market Cap</div>
                    <div className="text-lg font-bold">{deploymentData.marketCap}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Liquidity</div>
                    <div className="text-lg font-bold">{deploymentData.liquidity}</div>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  <a
                    href={deploymentData.solscanLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                  >
                    <span className="font-semibold">View on Solscan</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={deploymentData.dexscreenerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                  >
                    <span className="font-semibold">View on Dexscreener</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Create Another Token
              </button>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </div>
  );
}
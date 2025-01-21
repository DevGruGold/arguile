import React from 'react';
import { Hexagon, Shield, Zap, Code2, Building2, ArrowRight, Database, Lock, ArrowDownUp, Wallet, CreditCard, Banknote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm13.314 0L47.143 11.485 45.728 12.9l-7.9-7.9h-2.17zm-6.657 0L40.485 11.485 39.07 12.9l-7.9-7.9h-2.17zm-6.657 0L33.828 11.485 32.414 12.9l-7.9-7.9h-2.17zm-6.657 0L27.172 11.485 25.757 12.9l-7.9-7.9h-2.17zM8.372 0L0 8.372l1.414 1.415 7.9-7.9h-.942zm48.256 0L64 7.372l-1.414 1.415-7.9-7.9h1.942zM0 14.1l1.414 1.414L8.9 7.928 7.485 6.514 0 14zm64 0L62.586 15.514 55.1 7.928l1.415-1.414L64 14zM0 20.757l1.414 1.415L8.9 14.585 7.485 13.17 0 20.756zm64 0L62.586 22.172 55.1 14.586l1.415-1.415L64 20.757zM0 27.414l1.414 1.414L8.9 21.242l-1.415-1.414L0 27.413zm64 0L62.586 28.828 55.1 21.242l1.415-1.414L64 27.413zM0 34.07l1.414 1.415L8.9 27.9l-1.415-1.415L0 34.07zm64 0L62.586 35.485 55.1 27.9l1.415-1.415L64 34.07zM0 40.728l1.414 1.414L8.9 34.556 7.485 33.14 0 40.727zm64 0L62.586 42.142 55.1 34.556l1.415-1.415L64 40.727zM0 47.385l1.414 1.414L8.9 41.213 7.485 39.8 0 47.384zm64 0L62.586 48.8 55.1 41.213l1.415-1.414L64 47.384zM0 54.042l1.414 1.414L8.9 47.87 7.485 46.456 0 54.042zm64 0L62.586 55.456 55.1 47.87l1.415-1.414L64 54.042zM0 60.7l1.414 1.413L8.9 54.528 7.485 53.114 0 60.7zm64 0L62.586 62.113 55.1 54.528l1.415-1.414L64 60.7z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 relative">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Hexagon className="w-10 h-10 text-indigo-500" />
              <Hexagon className="w-10 h-10 text-indigo-300 absolute top-0 left-0 transform rotate-45 opacity-50" />
            </div>
            <span className="text-2xl font-bold text-white">Arguile</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Products</a>
            <a href="#" className="text-gray-300 hover:text-white">Documentation</a>
            <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-indigo-500/10 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full">
              Next Generation Financial Data Platform
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Connect Global Finance<br />with a Single API
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unify 10,000+ financial institutions across 100+ countries through our powerful, developer-first platform
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors flex items-center group">
              Start Building 
              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border border-indigo-500/30 text-white px-8 py-3 rounded-lg hover:bg-indigo-500/10 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Everything You Need for Global Financial Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building2 className="w-8 h-8 text-indigo-400" />}
              title="Global Coverage"
              description="Access financial institutions across North America, Europe, Asia, and beyond"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-400" />}
              title="Bank-Level Security"
              description="Enterprise-grade security with end-to-end encryption and compliance"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-indigo-400" />}
              title="Real-Time Data"
              description="Instant access to transactions, balances, and account information"
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-indigo-400" />}
              title="Developer-First"
              description="Comprehensive SDKs and detailed documentation for quick integration"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-indigo-400" />}
              title="Data Enrichment"
              description="Enhanced transaction data with merchant details and categorization"
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-indigo-400" />}
              title="Compliance Ready"
              description="Built-in compliance with GDPR, PSD2, and international regulations"
            />
          </div>
        </div>
      </section>

      {/* Ramp Solutions Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Seamless Fiat-to-Digital Currency Solutions
          </h2>
          
          {/* On-ramp Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <CreditCard className="w-10 h-10 text-indigo-400" />
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">On-Ramp Solution</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Enable your users to purchase digital currencies directly with their local fiat currency. Support for 170+ countries and 100+ payment methods.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Credit/Debit Cards
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Bank Transfers
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Mobile Payments
                </li>
              </ul>
            </div>

            {/* Off-ramp Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Banknote className="w-10 h-10 text-indigo-400" />
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Off-Ramp Solution</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Allow users to convert digital currencies back to their preferred fiat currency with instant local bank deposits in 80+ countries.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Instant Bank Deposits
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Multiple Currency Support
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
                  Competitive Exchange Rates
                </li>
              </ul>
            </div>
          </div>

          {/* Integration Code Preview */}
          <div className="max-w-3xl mx-auto">
            <pre className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg text-gray-300 overflow-x-auto border border-indigo-500/10">
              <code>{`// Initialize Arguile service
const arguile = new Arguile({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Configure on-ramp transaction
const onRamp = await arguile.createOnRamp({
  fiatCurrency: 'USD',
  digitalCurrency: 'ETH',
  amount: 1000,
  paymentMethod: 'card',
  userData: {
    email: 'user@example.com',
    country: 'US'
  }
});

// Handle successful transaction
onRamp.on('success', (transaction) => {
  console.log('Transaction completed:', transaction.id);
  // Digital currency will be sent to user's wallet
});

// Configure off-ramp transaction
const offRamp = await arguile.createOffRamp({
  digitalCurrency: 'ETH',
  fiatCurrency: 'EUR',
  amount: '1.5',
  bankDetails: {
    iban: 'DE89370400440532013000',
    accountHolder: 'John Doe'
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-indigo-500/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Authentication</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transactions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Balance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Identity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">On-Ramp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Off-Ramp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-indigo-500/10 text-center text-gray-400">
            © 2024 Arguile. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/10 hover:border-indigo-500/30 transition-colors group">
      <div className="mb-4 relative">
        {icon}
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl"></div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
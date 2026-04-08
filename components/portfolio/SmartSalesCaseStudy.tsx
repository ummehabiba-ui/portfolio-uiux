import { X, ArrowUpRight, Figma, BarChart2, Users, Lightbulb } from 'lucide-react';

import imgDashboard from '/images/smartsales-dashboard-overview.png';
import imgOrders from '/images/smartsales-orders.png';
import imgCustomers from '/images/smartsales-customers.png';
import imgProducts from '/images/smartsales-products.png';
import imgAnalytics from '/images/smartsales-analytics.png';

interface Props {
  onClose: () => void;
}

const SmartSalesCaseStudy = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0A100C]/98 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2A24] bg-[#0A100C]/90 backdrop-blur-xl sticky top-0 z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.2em]">Case Study</span>
            <span className="font-mono text-xs text-[#1F2A24]">·</span>
            <span className="font-mono text-xs text-[#8FA39B]/60">Web App · Analytics Dashboard</span>
          </div>
          <h3 className="font-display text-xl font-bold text-[#F1F5F3]">SmartSales – Sales Analytics Dashboard</h3>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-[#1F2A24] flex items-center justify-center text-[#8FA39B] hover:text-neon hover:border-neon/30 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
            <img
              src={imgDashboard}
              alt="SmartSales Dashboard"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A100C]/70 via-transparent to-transparent" />
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Role', value: 'UI/UX Designer' },
              { label: 'Tools', value: 'Figma' },
              { label: 'Type', value: 'Web Dashboard' },
              { label: 'Year', value: '2025' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4 border border-[#1F2A24]">
                <p className="font-mono text-xs text-[#8FA39B]/70 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-[#F1F5F3] font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Lightbulb size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Project Overview</h4>
            </div>
            <p className="text-[#8FA39B] leading-relaxed text-[15px]">
              SmartSales is a modern sales analytics dashboard designed to help businesses monitor revenue,
              track performance, and analyze sales data in a simple and visual way. The interface focuses
              on clarity, real-time insights, and an intuitive layout so teams can make quick data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['UI Design', 'Dashboard', 'Analytics', 'Web App', 'Data Visualization'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-[#1F2A24] text-[#8FA39B] text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-[#1F2A24] space-y-3">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <h5 className="font-display font-bold text-[#F1F5F3]">Problem</h5>
              </div>
              <p className="text-[#8FA39B] text-sm leading-relaxed">
                Businesses struggle to track sales performance across multiple metrics and tools.
                Fragmented data sources lead to slow decision-making and missed revenue opportunities.
                Existing solutions are cluttered, unintuitive, and hard to navigate quickly.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-[#1F2A24] space-y-3">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-neon" />
                <h5 className="font-display font-bold text-[#F1F5F3]">Solution</h5>
              </div>
              <p className="text-[#8FA39B] text-sm leading-relaxed">
                Design a clear, visual dashboard interface where users can instantly understand sales,
                profit, and performance insights at a glance. Consolidate all key metrics into one
                clean screen with minimal cognitive load and smooth navigation.
              </p>
            </div>
          </div>

          {/* Tools & Process */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Figma size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Tools & Process</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'User Research', desc: 'Identified pain points in data visualization' },
                { step: '02', label: 'Wireframing', desc: 'Low-fi layout explorations and hierarchy' },
                { step: '03', label: 'UI Design', desc: 'High-fidelity screens in Figma' },
                { step: '04', label: 'Prototyping', desc: 'Interactive flows and micro-interactions' },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-xl p-5 border border-[#1F2A24] space-y-2">
                  <span className="font-mono text-xs text-neon/60">{item.step}</span>
                  <p className="font-semibold text-[#F1F5F3] text-sm">{item.label}</p>
                  <p className="text-[#8FA39B] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Screens */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <BarChart2 size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Key Screens</h4>
            </div>

            {/* Screen 1: Dashboard Overview */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                  </div>
                  <span className="font-mono text-xs text-neon/70">Dashboard Overview</span>
                </div>
              </div>
              <div className="w-full bg-[#0d1410]">
                <img
                  src={imgDashboard}
                  alt="SmartSales Dashboard Overview"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#1F2A24]">
                <p className="font-semibold text-[#F1F5F3] text-sm mb-1">Dashboard Overview</p>
                <p className="text-[#8FA39B] text-xs leading-relaxed">Main dashboard view with total sales, orders, revenue, and growth KPIs. Includes an overall sales trend chart and top products panel.</p>
              </div>
            </div>

            {/* Screen 2: Orders */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                </div>
                <span className="font-mono text-xs text-neon/70">Orders</span>
              </div>
              <div className="w-full bg-[#0d1410]">
                <img
                  src={imgOrders}
                  alt="SmartSales Orders"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#1F2A24]">
                <p className="font-semibold text-[#F1F5F3] text-sm mb-1">Orders</p>
                <p className="text-[#8FA39B] text-xs leading-relaxed">Order management screen with status filters (Pending, Completed, Cancelled), quick stats, and a detailed order table with export functionality.</p>
              </div>
            </div>

            {/* Screen 3: Customers */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                </div>
                <span className="font-mono text-xs text-neon/70">Customers</span>
              </div>
              <div className="w-full bg-[#0d1410]">
                <img
                  src={imgCustomers}
                  alt="SmartSales Customers"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#1F2A24]">
                <p className="font-semibold text-[#F1F5F3] text-sm mb-1">Customers</p>
                <p className="text-[#8FA39B] text-xs leading-relaxed">Customer management page with total, active, new and returning user counts, plus a searchable table with customer details, status, and last active timestamps.</p>
              </div>
            </div>

            {/* Screen 4: Products */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                </div>
                <span className="font-mono text-xs text-neon/70">Products</span>
              </div>
              <div className="w-full bg-[#0d1410]">
                <img
                  src={imgProducts}
                  alt="SmartSales Products"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#1F2A24]">
                <p className="font-semibold text-[#F1F5F3] text-sm mb-1">Products</p>
                <p className="text-[#8FA39B] text-xs leading-relaxed">Products page showing total product count, sales by category donut chart, product management line graph, and a filterable product table with stock status indicators.</p>
              </div>
            </div>

            {/* Screen 5: Analytics */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                </div>
                <span className="font-mono text-xs text-neon/70">Analytics</span>
              </div>
              <div className="w-full bg-[#0d1410]">
                <img
                  src={imgAnalytics}
                  alt="SmartSales Analytics"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 border-t border-[#1F2A24]">
                <p className="font-semibold text-[#F1F5F3] text-sm mb-1">Analytics</p>
                <p className="text-[#8FA39B] text-xs leading-relaxed">Full analytics view with profit and revenue trends, traffic source breakdown, daily customer graph, buyer distribution chart, and most sales locations bar chart.</p>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="glass-card rounded-2xl p-8 border border-neon/10 bg-neon/[0.03] space-y-4">
            <h4 className="font-display text-xl font-bold text-[#F1F5F3]">Key Outcomes</h4>
            <ul className="space-y-3">
              {[
                'Consolidated 5+ data sources into a single, unified view',
                'Reduced time-to-insight for sales managers by ~60%',
                'Clean sidebar navigation with role-based access design',
                'Real-time chart visualizations for revenue and profit tracking',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#8FA39B] text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pb-4">
            <a
              href="https://www.behance.net/ummehabhabeeba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[#0A100C] bg-gradient-to-r from-[#39FF14] to-[#28EF14] hover:shadow-[0_0_40px_rgba(57,255,20,0.35)] hover:scale-[1.02] transition-all duration-300"
            >
              View Full Project on Behance
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartSalesCaseStudy;

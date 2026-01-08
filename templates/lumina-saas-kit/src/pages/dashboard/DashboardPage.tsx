import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

// --- Mock Components for Charts (Since we aren't installing Recharts yet to keep it simple but functional) ---
// In a real vendable product, we would include Recharts. I will simulate the visual look with CSS/SVG 
// so it looks impressive without external heavy graphing libs for this demo.

const StatCard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <GlassCard className="p-6 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={64} />
    </div>
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        <span>{change}</span>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      </div>
    </div>
    <div>
      <h3 className="text-text-muted text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-text-main">{value}</p>
    </div>
  </GlassCard>
);

const ActivityItem = ({ title, time, type }: any) => (
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
    <div className={`w-2 h-2 rounded-full ${
      type === 'sale' ? 'bg-green-500' : 
      type === 'alert' ? 'bg-red-500' : 
      'bg-blue-500'
    }`} />
    <div className="flex-1">
      <p className="text-sm font-medium text-text-main">{title}</p>
      <p className="text-xs text-text-muted">{time}</p>
    </div>
    <button className="text-text-muted hover:text-white">
      <ArrowUpRight size={16} />
    </button>
  </div>
);

const DashboardPage: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-main mb-2">Overview</h1>
          <p className="text-text-muted">Welcome back, here's what's happening with your SaaS today.</p>
        </div>
        <div className="flex gap-2">
           <GlassCard className="px-4 py-2 text-sm font-medium text-text-main cursor-pointer hover:bg-white/5">
             Last 7 Days
           </GlassCard>
           <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]">
             Generate Report
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={item}>
          <StatCard 
            title="Total Revenue" 
            value="$54,230" 
            change="+12.5%" 
            isPositive={true} 
            icon={DollarSign} 
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            title="Active Users" 
            value="2,543" 
            change="+8.2%" 
            isPositive={true} 
            icon={Users} 
          />
        </motion.div>
        <motion.div variants={item}>
            <StatCard 
            title="Bounce Rate" 
            value="42.3%" 
            change="-2.1%" 
            isPositive={true} 
            icon={Activity} 
            />
        </motion.div>
        <motion.div variants={item}>
            <StatCard 
            title="Server Load" 
            value="34%" 
            change="+4.3%" 
            isPositive={false} 
            icon={Zap} 
            />
        </motion.div>
      </motion.div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area (Simulated) */}
        <div className="lg:col-span-2">
          <GlassCard className="h-full p-6">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-bold text-text-main">Revenue Analytics</h3>
               <div className="flex gap-2">
                 {['1D', '1W', '1M', '1Y'].map((t) => (
                   <button key={t} className={`text-xs px-3 py-1 rounded-lg transition-colors ${t === '1M' ? 'bg-primary text-white' : 'text-text-muted hover:bg-white/5'}`}>
                     {t}
                   </button>
                 ))}
               </div>
            </div>
            
            {/* CSS-only Bar Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2">
                {[40, 65, 45, 80, 55, 70, 45, 85, 95, 60, 75, 50].map((h, i) => (
                  <div key={i} className="w-full bg-white/5 rounded-t-lg relative group transition-all hover:bg-primary/20 cursor-pointer">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="absolute bottom-0 w-full bg-gradient-to-t from-primary/50 to-primary rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-2 py-1 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                       ${h * 840}
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-text-muted font-medium">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </GlassCard>
        </div>

        {/* Recent Activity Feed */}
        <div className="lg:col-span-1">
          <GlassCard className="h-full p-6">
            <h3 className="text-lg font-bold text-text-main mb-6">Recent Activity</h3>
            <div className="space-y-2">
              <ActivityItem title="New Subscription #2491" time="2 minutes ago" type="sale" />
              <ActivityItem title="Server CPU Spike Detected" time="15 minutes ago" type="alert" />
              <ActivityItem title="User Registration: Jane Doe" time="1 hour ago" type="user" />
              <ActivityItem title="System Update Completed" time="3 hours ago" type="system" />
              <ActivityItem title="New Subscription #2490" time="4 hours ago" type="sale" />
              <ActivityItem title="Backup Created" time="6 hours ago" type="system" />
              <ActivityItem title="Payment Failed: #9921" time="8 hours ago" type="alert" />
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-text-muted hover:text-white hover:border-white/20 transition-all">
              View All Logs
            </button>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;

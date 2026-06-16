/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Layers, FileSpreadsheet, ClipboardList, ShieldAlert,
  ArrowRight, ShieldCheck, HelpCircle, CheckCircle2, Sun, Moon
} from 'lucide-react';
import { AuditFile, INITIAL_ENTRIES } from './types';

// Component Imports
import LogInPage from './components/LogInPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OrPage from './components/OrPage';
import SaafPage from './components/SaafPage';
import Report74aPage from './components/Report74aPage';

export default function App() {
  // Authentication status gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const saved = localStorage.getItem('aft_saas_auth');
    return saved === 'true';
  });
  
  const [currentUserEmail, setCurrentUserEmail] = useState<string>(() => {
    return localStorage.getItem('aft_saas_user') || 'nythanjanbagasani@gmail.com';
  });

  // Navigation tab route state matching the flowchart
  const [activeTab, setActiveTab] = useState<'home' | 'or' | 'saaf' | '74a'>(() => {
    return (localStorage.getItem('aft_saas_tab') as 'home' | 'or' | 'saaf' | '74a') || 'home';
  });

  // Dark or Light mode state settings
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('aft_saas_theme') as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('aft_saas_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  // Accountable Form logs registry database
  const [entries, setEntries] = useState<AuditFile[]>(() => {
    const saved = localStorage.getItem('aft_saas_registers');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Map and validate each entry to guarantee it complies with AuditFile schema
          return parsed.map((item: any) => {
            // Check if it's an old legacy LogEntry structure or a partial object
            const isLegacy = !item.balanceRanges || !item.receivedRanges || !item.issuedRanges;
            if (isLegacy) {
              const balanceRanges: any[] = [];
              const receivedRanges: any[] = [];
              const issuedRanges: any[] = [];
              
              if (item.category === 'Balance') {
                balanceRanges.push({
                  id: 'bal-migrated-' + item.id,
                  serialStart: item.serialStart || '',
                  serialEnd: item.serialEnd || '',
                  quantity: item.quantity || 0
                });
              } else if (item.category === 'Received') {
                receivedRanges.push({
                  id: 'rec-migrated-' + item.id,
                  serialStart: item.serialStart || '',
                  serialEnd: item.serialEnd || '',
                  quantity: item.quantity || 0
                });
              } else if (item.category === 'Issued') {
                issuedRanges.push({
                  id: 'iss-migrated-' + item.id,
                  serialStart: item.serialStart || '',
                  serialEnd: item.serialEnd || '',
                  quantity: item.quantity || 0
                });
              }
              
              return {
                id: item.id || ('file-' + Math.random().toString(36).substring(2, 9)),
                formType: item.formType || '51',
                title: item.remarks || item.title || `Migrated Ledger File (${item.formType || '51'})`,
                date: item.date || '2026-06-02',
                amount: item.amount || 0,
                withValues: item.withValues !== undefined ? item.withValues : true,
                balanceRanges,
                receivedRanges,
                issuedRanges
              };
            }
            return item;
          });
        }
        return INITIAL_ENTRIES;
      } catch (e) {
        return INITIAL_ENTRIES;
      }
    }
    return INITIAL_ENTRIES;
  });

  // Synchronize state values with local browser cache
  useEffect(() => {
    localStorage.setItem('aft_saas_registers', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('aft_saas_tab', activeTab);
  }, [activeTab]);

  const handleLogin = (email: string) => {
    setIsAuthenticated(true);
    setCurrentUserEmail(email);
    localStorage.setItem('aft_saas_auth', 'true');
    localStorage.setItem('aft_saas_user', email);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('aft_saas_auth');
    localStorage.removeItem('aft_saas_user');
  };

  const handleResetData = () => {
    setEntries(INITIAL_ENTRIES);
  };

  const handleAddEntry = (newEntry: Omit<AuditFile, 'id'>) => {
    const logId = 'file-' + Math.random().toString(36).substring(2, 9);
    setEntries(prev => [...prev, { ...newEntry, id: logId, updatedAt: Date.now() }]);
  };

  const handleUpdateEntry = (id: string, updated: Omit<AuditFile, 'id'>) => {
    setEntries(prev => prev.map(entry => entry.id === id ? { ...updated, id, updatedAt: Date.now() } : entry));
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  // State to transition edited files across the application views
  const [initialEditFileId, setInitialEditFileId] = useState<string | null>(null);

  // Guard: Not authenticated -> display login screen
  if (!isAuthenticated) {
    return (
      <LogInPage 
        onLoginSuccess={handleLogin} 
        initialEmail={currentUserEmail}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Platform Header */}
      <Header 
        email={currentUserEmail} 
        onLogout={handleLogout} 
        activeTab={activeTab}
        onNavigate={setActiveTab}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      />

      {/* Main Workspace with adaptive side Navigation Bar context */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
        
        {/* Left Side Quick Menu Panel (Desk Layout helper) */}
        <aside className="w-full md:w-56 shrink-0 flex flex-col gap-6" id="navigation-sidebar">
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-row md:flex-col gap-1 sm:gap-2">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider px-2 py-1 mb-1 hidden md:block">
              Task Workspace
            </span>
            
            <button
              id="sidebar-nav-home"
              onClick={() => setActiveTab('home')}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                activeTab === 'home'
                  ? 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Home className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Portal Hub</span>
            </button>

            <button
              id="sidebar-nav-or"
              onClick={() => setActiveTab('or')}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                activeTab === 'or'
                  ? 'bg-blue-600/10 border border-blue-500/20 text-blue-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">OR (Forms Log)</span>
            </button>

            <button
              id="sidebar-nav-saaf"
              onClick={() => setActiveTab('saaf')}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                activeTab === 'saaf'
                  ? 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-450'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">SAAF Page</span>
            </button>

            <button
              id="sidebar-nav-74a"
              onClick={() => setActiveTab('74a')}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                activeTab === '74a'
                  ? 'bg-amber-600/10 border border-amber-500/20 text-amber-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <ClipboardList className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">74A Page</span>
            </button>

            <div className="w-full h-px bg-slate-800/80 my-1 hidden md:block" />

            <button
              id="sidebar-theme-toggle"
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              className="flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all text-slate-450 hover:text-white hover:bg-slate-800/40"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 shrink-0 text-indigo-400" />
                  <span className="hidden sm:inline">Use Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 shrink-0 text-amber-500" />
                  <span className="hidden sm:inline">Use Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Tip Alert box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hidden md:block">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Auditing Seal
            </h4>
            <p className="text-[11px] text-slate-450 leading-relaxed">
              All entered ranges are validated sequentially. Deleting or modifying a log line automatically updates the Statement of Accountability (SAAF & 74A) in real-time.
            </p>
          </div>
        </aside>

        {/* Dynamic Route Content Viewer */}
        <main className="flex-1 min-w-0" id="route-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {activeTab === 'home' && (
                <HomePage 
                  onNavigate={setActiveTab} 
                  entries={entries}
                  onResetData={handleResetData}
                />
              )}
              {activeTab === 'or' && (
                <OrPage 
                  entries={entries} 
                  onAddEntry={handleAddEntry} 
                  onUpdateEntry={handleUpdateEntry}
                  onDeleteEntry={handleDeleteEntry}
                  initialEditFileId={initialEditFileId}
                  onClearInitialEditFileId={() => setInitialEditFileId(null)}
                />
              )}
              {activeTab === 'saaf' && (
                <SaafPage 
                  entries={entries} 
                  onNavigate={setActiveTab}
                  currentUserEmail={currentUserEmail}
                  onEditFile={(fileId) => {
                    setInitialEditFileId(fileId);
                    setActiveTab('or');
                  }}
                  onDeleteEntry={handleDeleteEntry}
                />
              )}
              {activeTab === '74a' && (
                <Report74aPage 
                  entries={entries} 
                  onNavigate={setActiveTab}
                  onEditFile={(fileId) => {
                    setInitialEditFileId(fileId);
                    setActiveTab('or');
                  }}
                  onDeleteEntry={handleDeleteEntry}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>

      {/* Humble literal footer centered beautifully */}
      <footer id="app-footer" className="bg-slate-950 border-t border-slate-900/60 py-6 text-center text-slate-500 text-[10px]">
        <div className="max-w-7xl mx-auto px-4 gap-2 flex flex-col sm:flex-row items-center justify-between">
          <p>Accountable Forms Tracker &copy; 2026. Designed for Auditor-Ready Compliance.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Security Standards</span>
            <span>&middot;</span>
            <span className="hover:text-slate-300 cursor-pointer">COA Regulations</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

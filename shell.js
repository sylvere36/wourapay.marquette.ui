/* WouraPay shared shell — renders sidebar + topbar from data attrs */
(function () {
  const I = {
    // Lucide outline, stroke 1.5
    home:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    chart:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    bank:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 18 0"/><path d="M5 21V10"/><path d="M19 21V10"/><path d="M9 21v-7"/><path d="M15 21v-7"/><path d="m12 3-9 6h18z"/></svg>',
    wallet:      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
    users:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    globe:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>',
    settings:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    trend:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    report:      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
    bell:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    terminal:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    user:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    link:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    send:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    key:         '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
    book:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    plug:        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/></svg>',
    search:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    notif:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    chevronDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    chevronRight:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    refund:      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    scale:       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
    shieldCheck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    webhook:     '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>',
    reconcile:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>',
    percent:     '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    contact:     '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>',
  };
  window.KP_ICONS = I;

  const ADMIN_NAV = [
    { type: 'item', id: 'dashboard', label: 'Dashboard', icon: 'home', href: 'admin-dashboard.html' },
    { type: 'section', label: 'Opérations' },
    { type: 'item', id: 'transactions', label: 'Transactions', icon: 'chart', href: 'admin-transactions.html' },
    { type: 'item', id: 'reversements', label: 'Reversements', icon: 'bank', href: 'admin-reversements.html', badge: '12' },
    { type: 'item', id: 'remboursements', label: 'Remboursements', icon: 'refund', href: 'admin-remboursements.html' },
    { type: 'item', id: 'litiges', label: 'Litiges', icon: 'scale', href: 'admin-litiges.html', badge: '3' },
    { type: 'item', id: 'wallets', label: 'Wallets', icon: 'wallet', href: 'admin-wallets.html' },
    { type: 'section', label: 'Marchands' },
    { type: 'item', id: 'marchands', label: 'Marchands', icon: 'users', href: 'admin-marchands.html' },
    { type: 'item', id: 'kyc', label: 'Vérifications KYC', icon: 'shieldCheck', href: 'admin-kyc.html', badge: '8' },
    { type: 'section', label: 'Réseaux' },
    { type: 'item', id: 'reseaux', label: 'Pays & Réseaux', icon: 'globe', href: 'admin-reseaux.html' },
    { type: 'item', id: 'agregateurs', label: 'Agrégateurs', icon: 'plug', href: 'admin-agregateurs.html' },
    { type: 'item', id: 'webhooks', label: 'Webhooks', icon: 'webhook', href: 'admin-webhooks.html' },
    { type: 'section', label: 'Finance' },
    { type: 'item', id: 'revenus', label: 'Revenus', icon: 'trend', href: 'admin-revenus.html' },
    { type: 'item', id: 'reconciliation', label: 'Réconciliation', icon: 'reconcile', href: 'admin-reconciliation.html' },
    { type: 'item', id: 'tarification', label: 'Tarification', icon: 'percent', href: 'admin-tarification.html' },
    { type: 'item', id: 'fx', label: 'Taux de change', icon: 'exchange', href: 'admin-fx.html' },
    { type: 'item', id: 'rapports', label: 'Rapports', icon: 'report', href: 'admin-rapports.html' },
    { type: 'section', label: 'Système' },
    { type: 'item', id: 'alertes', label: 'Alertes', icon: 'bell', href: 'admin-alertes.html', badge: '4' },
    { type: 'item', id: 'logs', label: 'Logs', icon: 'terminal', href: 'admin-logs.html' },
    { type: 'item', id: 'equipe', label: 'Équipe', icon: 'user', href: 'admin-equipe.html' },
    { type: 'item', id: 'parametres', label: 'Paramètres', icon: 'settings', href: 'admin-parametres.html' },
  ];

  const MERCHANT_NAV = [
    { type: 'item', id: 'home', label: 'Accueil', icon: 'home', href: 'merchant-home.html' },
    { type: 'section', label: 'Paiements' },
    { type: 'item', id: 'liens', label: 'Liens de paiement', icon: 'link', href: 'merchant-liens.html' },
    { type: 'item', id: 'transactions', label: 'Transactions', icon: 'chart', href: 'merchant-transactions.html' },
    { type: 'item', id: 'remboursements', label: 'Remboursements', icon: 'refund', href: 'merchant-remboursements.html' },
    { type: 'item', id: 'litiges', label: 'Litiges', icon: 'scale', href: 'merchant-litiges.html', badge: '2' },
    { type: 'section', label: 'Finances' },
    { type: 'item', id: 'wallets', label: 'Wallets', icon: 'wallet', href: 'merchant-wallets.html' },
    { type: 'item', id: 'reversements', label: 'Reversements', icon: 'send', href: 'merchant-reversements.html' },
    { type: 'section', label: 'Relation client' },
    { type: 'item', id: 'clients', label: 'Clients', icon: 'contact', href: 'merchant-clients.html' },
    { type: 'section', label: 'Développeur' },
    { type: 'item', id: 'api', label: 'Clés API', icon: 'key', href: 'merchant-api.html' },
    { type: 'item', id: 'webhooks', label: 'Webhooks', icon: 'webhook', href: 'merchant-webhooks.html' },
    { type: 'item', id: 'documentation', label: 'Documentation', icon: 'book', href: 'merchant-documentation.html' },
    { type: 'section', label: 'Compte' },
    { type: 'item', id: 'equipe', label: 'Équipe', icon: 'user', href: 'merchant-equipe.html' },
    { type: 'item', id: 'parametres', label: 'Paramètres', icon: 'settings', href: 'merchant-parametres.html' },
  ];

  function navHTML(items, active) {
    return items.map(it => {
      if (it.type === 'section') {
        return `<div class="sidebar__section">${it.label}</div>`;
      }
      const cls = 'sidebar__link' + (it.id === active ? ' sidebar__link--active' : '');
      const badge = it.badge ? `<span class="badge">${it.badge}</span>` : '';
      return `<a class="${cls}" href="${it.href}">${I[it.icon] || ''}<span>${it.label}</span>${badge}</a>`;
    }).join('');
  }

  function renderShell(root) {
    const app = root.dataset.app || 'admin';
    const active = root.dataset.nav || '';
    const breadcrumb = root.dataset.breadcrumb || '';
    const isAdmin = app === 'admin';

    // Preserve existing page content
    const existing = Array.from(root.children);

    const navItems = isAdmin ? ADMIN_NAV : MERCHANT_NAV;
    const notifHref = isAdmin ? 'admin-notifications.html' : 'merchant-notifications.html';
    const profilHref = isAdmin ? 'admin-profil.html' : 'merchant-profil.html';
    const brandSub = isAdmin ? 'Admin' : 'Marchand';
    const userName = isAdmin ? 'Sylvère T.' : 'Ma Boutique CI';
    const userRole = isAdmin ? 'Super Admin' : 'Compte vérifié';
    const userAv = isAdmin ? 'av-1' : 'av-3';
    const userInit = isAdmin ? 'ST' : 'MB';

    const bcrumb = breadcrumb.split('/').map(s => s.trim()).filter(Boolean);
    const crumbHTML = bcrumb.map((c, i) => {
      const isLast = i === bcrumb.length - 1;
      const cls = isLast ? 'breadcrumb__current' : '';
      const sep = i > 0 ? `<span class="breadcrumb__sep">${I.chevronRight}</span>` : '';
      return `${sep}<span class="${cls}">${c}</span>`;
    }).join('');

    root.innerHTML = `
      <aside class="sidebar" data-screen-label="sidebar">
        <div class="sidebar__brand">
          <div class="sidebar__brand-mark">W</div>
          <div class="sidebar__brand-name">WouraPay<small>${brandSub}</small></div>
        </div>
        <nav class="sidebar__nav">${navHTML(navItems, active)}</nav>
        <div class="sidebar__user">
          <div class="avatar ${userAv}">${userInit}</div>
          <div class="sidebar__user-info">
            <div class="sidebar__user-name">${userName}</div>
            <div class="sidebar__user-role">${userRole}</div>
          </div>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          <div class="breadcrumb">${crumbHTML}</div>
          <div class="topbar__spacer"></div>
          <div class="topbar__search">
            ${I.search}<span>Rechercher</span><kbd>⌘K</kbd>
          </div>
          <a class="icon-btn" href="${notifHref}" aria-label="Notifications">${I.notif}<span class="icon-btn__dot"></span></a>
          <a class="topbar__avatar" href="${profilHref}">
            <span class="text-secondary fs-13">${userName.split(' ')[0]}</span>
            <div class="avatar ${userAv}" style="width:28px;height:28px;font-size:11px">${userInit}</div>
          </a>
        </header>
        <div class="content-slot"></div>
      </div>
    `;

    // Move existing children of root (.app) that were not the original innerHTML — content placed under #page
    const slot = root.querySelector('.content-slot');
    if (slot) {
      existing.forEach(el => slot.appendChild(el));
      slot.classList.remove('content-slot');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.app[data-app]').forEach(renderShell);
  });
})();

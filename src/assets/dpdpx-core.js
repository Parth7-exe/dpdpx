
    /* ===================== ICONS ===================== */
    const I = {
      grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
      building: '<path d="M3 21h18"/><path d="M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16"/><path d="M14 9h4a1 1 0 0 1 1 1v11"/><path d="M8 8h.01M8 12h.01M8 16h.01"/>',
      server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
      list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6l1 1 2-2M3 12l1 1 2-2M3 18l1 1 2-2"/>',
      flag: '<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>',
      bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
      share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
      cookie: '<path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-4-4 .8.8 0 0 0-1-1z"/><path d="M9 11h.01M13 15h.01M16 12h.01"/>',
      clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="M9 13l2 2 4-4"/>',
      cloudoff: '<path d="M3 3l18 18"/><path d="M18 13a4 4 0 0 0-2-7.5A6 6 0 0 0 6.5 7"/><path d="M5 9a4 4 0 0 0 1 7h10"/>',
      db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      sparkles: '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/>',
      usercheck: '<circle cx="9" cy="8" r="4"/><path d="M3 21c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 11l2 2 4-4"/>',
      layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
      shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
      alert: '<path d="M12 2l9 4.5v6C21 18 17 21.5 12 23 7 21.5 3 18 3 12.5v-6z" opacity="0"/><polygon points="7.5 3 16.5 3 21 7.5 21 16.5 16.5 21 7.5 21 3 16.5 3 7.5"/><path d="M12 8v5M12 16h.01"/>',
      eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
      check: '<path d="M5 12l4 4 10-10"/>',
      x: '<path d="M6 6l12 12M18 6L6 18"/>',
      edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
      trash: '<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
      chevd: '<path d="M6 9l6 6 6-6"/>',
      chevr: '<path d="M9 6l6 6-6 6"/>',
      chevu: '<path d="M6 15l6-6 6 6"/>',
      copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
      refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      people: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.1 2.9-5.5 6.5-5.5S15.5 16.9 15.5 20"/><circle cx="17" cy="8" r="2.6"/><path d="M16 14.6c2.8.2 5 2.3 5 5.4"/>',
      trend: '<path d="M3 17l6-6 4 4 7-7"/><path d="M17 8h4v4"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
      bars: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      branch: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M8.4 7.2C13 7.5 15.5 8 15.5 12v0"/>',
      content_filtering: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="15"/>',
      globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>',
      map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
      user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
      lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      android: '<path d="M4 14h16M12 5a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6zM9 2L8 4M15 2l1 2M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6M9 20v3M15 20v3M3 12v4M21 12v4"/>',
      apple: '<path d="M12 20.39c-.45.08-.94.13-1.47.13-2.11 0-3.77-1.12-4.57-3.21-1-2.58-.33-6 1.81-7.23a4 4 0 0 1 3-.72c.42.1.84.21 1.23.21.36 0 .75-.11 1.14-.21a4.23 4.23 0 0 1 3.13.72c1.76 1 2.39 3.86 1.76 6.32-.71 2.12-2.16 4.12-4.48 4.12-.51 0-.96-.05-1.55-.13zM12 6.5C13.5 5 13.5 3 13.5 3s-2 0-3.5 1.5c-1.5 1.5-1.5 3.5-1.5 3.5s2 0 3.5-1.5z"/>',
      windows: '<path d="M3 5l9-1.5v7.5H3zm0 14l9 1.5V13H3zm18-16.5L13 4v7h8zm0 16.5L13 13v7l8-1.5z"/>',
      key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5M14 9l2.5 2.5M16.5 6.5L19 9"/>',
      pulse: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
      palette: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5"/><circle cx="16" cy="11" r="1.5"/><circle cx="12" cy="16" r="1.5"/><circle cx="8" cy="11" r="1.5"/>',
      login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
      channels: '<path d="M4.9 19.1C1.9 16.2 1.9 11.8 4.9 8.9M19.1 8.9c3 3 3 7.4 0 10.3M8.5 15.5c-1.2-1.2-1.2-3.1 0-4.3M15.5 11.2c1.2 1.2 1.2 3.1 0 4.3M12 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>',
      fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
      chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
      mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
      message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
      whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
    };
    function ic(n, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' + (extra || '') + '>' + (I[n] || '') + '</svg>'; }

    /* ===================== NAV CONFIG ===================== */
    const NAV = [
      { t: 'item', id: 'dashboard', label: 'Dashboard', icon: 'grid' },
      { t: 'group', label: 'Consent Management' },
      { t: 'item', id: 'fiduciaries', label: 'Fiduciaries', icon: 'building' },
      { t: 'item', id: 'processors', label: 'Processors', icon: 'server' },
      { t: 'item', id: 'activities', label: 'Activities', icon: 'list' },
      { t: 'item', id: 'purposes', label: 'Purposes', icon: 'flag' },
      { t: 'item', id: 'notices', label: 'Notices', icon: 'bell' },
      { t: 'item', id: 'dataflow', label: 'Data Flow', icon: 'share' },
      { t: 'item', id: 'cookies', label: 'Cookies', icon: 'cookie' },
      { t: 'item', id: 'assessments', label: 'Assessments', icon: 'clip' },
      { t: 'item', id: 'offline', label: 'Offline Consents', icon: 'cloudoff' },
      { t: 'group', label: 'Data Governance' },
      { t: 'item', id: 'discovery', label: 'Data Discovery', icon: 'db' },
      { t: 'item', id: 'content_filtering', label: 'Content Filtering', icon: 'content_filtering' },
      { t: 'item', id: 'ropa', label: 'ROPA Recommendations', icon: 'sparkles' },
      { t: 'item', id: 'dsr', label: 'DSR', icon: 'usercheck' },
      { t: 'item', id: 'inventory', label: 'Data Field Inventory', icon: 'layers' },
      { t: 'item', id: 'protection', label: 'Data Protection', icon: 'shield' },
      { t: 'item', id: 'policy', label: 'Policy Violation', icon: 'alert' },
      { t: 'item', id: 'userdir', label: 'User Directory', icon: 'usercheck' },
      { t: 'group', label: 'Device Policies' },
      { t: 'item', id: 'policy_android', label: 'Android', icon: 'android', hasSub: true },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_policies', label: 'Policies' },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_geofencing', label: 'Geo-Fencing' },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_message', label: 'Message Broadcasting' },
      { t: 'item', id: 'policy_apple', label: 'Apple', icon: 'apple' },
      { t: 'item', id: 'policy_windows', label: 'Windows', icon: 'windows' }
    ];
    const TITLES = { dashboard: 'Dashboard', fiduciaries: 'Data Fiduciaries', processors: 'Data Processors', activities: 'Processing Activities', purposes: 'Purposes', notices: 'Notices', dataflow: 'Data Flow', cookies: 'Cookie Consent', assessments: 'Assessments', offline: 'Offline Consents', discovery: 'Data Discovery', content_filtering: 'Content Filtering', ropa: 'ROPA Recommendations', dsr: 'Data Subject Requests', inventory: 'Data Field Inventory', protection: 'Data Protection', policy: 'Policy Violations', userdir: 'User Directory', policy_android: 'Android Device Policies', policy_android_policies: 'Android Policies', policy_android_geofencing: 'Geo-Fencing', policy_android_message: 'Message Broadcasting', policy_apple: 'Apple Device Policies', policy_windows: 'Windows Device Policies' };

    function buildNav() {
      const nav = document.getElementById('nav');
      var html = '';
      var currentGroupItemsHtml = '';
      var currentGroupLabel = '';
      var currentGroupCollapsed = true;

      function flushGroup() {
        if (currentGroupLabel) {
          var collapsedClass = currentGroupCollapsed ? ' collapsed' : '';
          var maxHStyle = currentGroupCollapsed ? 'style="max-height: 0px;"' : '';
          var rotationStyle = currentGroupCollapsed ? 'style="transform: rotate(0deg);"' : 'style="transform: rotate(180deg);"';

          html += '<div class="nav-group' + collapsedClass + '">' +
            '<div class="grp" style="display:flex; align-items:center; justify-content:space-between; cursor:pointer; user-select:none;">' +
            '<span>' + currentGroupLabel.toUpperCase() + '</span>' +
            '<span class="chevron" style="display:inline-flex; align-items:center; transition: transform 0.2s;" ' + rotationStyle + '>' + ic('chevd', 'width="13" height="13"') + '</span>' +
            '</div>' +
            '<div class="grp-items" style="overflow:hidden; transition: max-height 0.25s ease-out;" ' + maxHStyle + '>' +
            currentGroupItemsHtml +
            '</div>' +
            '</div>';
          currentGroupItemsHtml = '';
          currentGroupLabel = '';
        }
      }

      NAV.forEach(function (n) {
        if (n.t === 'group') {
          flushGroup();
          currentGroupLabel = n.label;
          currentGroupCollapsed = n.collapsed === true;
        } else if (n.t === 'item') {
          var itemHtml = '';
          if (n.hasSub) {
            // Render parent item with a chevron
            var active = (current === n.id || current.indexOf(n.id + '_') === 0);
            var chevIcon = active ? 'chevu' : 'chevr';

            // Find subitems
            var subItems = NAV.filter(function (sub) { return sub.t === 'subitem' && sub.parentId === n.id; });
            var subItemsHtml = subItems.map(function (sub) {
              var subActive = current === sub.id;
              var subBg = subActive ? '#e9f5fc' : 'transparent';
              var subColor = subActive ? 'var(--orange-d)' : '#4b5160';
              var subFw = subActive ? '600' : '500';
              return '<a data-route="' + sub.id + '" style="padding-left: 36px; font-size: 12.5px; background: ' + subBg + '; color: ' + subColor + '; font-weight: ' + subFw + '; display: flex; align-items: center; border-left: 3px solid transparent; ' + (subActive ? 'border-left-color: var(--orange);' : '') + '">' +
                '<span>' + sub.label + '</span>' +
                '</a>';
            }).join('');

            var collapsedStyle = active ? '' : 'style="max-height: 0px; overflow: hidden; transition: max-height 0.25s;"';
            var activeClass = active ? 'class="active-parent"' : '';

            itemHtml = '<div class="nav-item-with-sub" data-parent-id="' + n.id + '">' +
              '<a data-route="' + n.id + '" ' + activeClass + ' style="display:flex; align-items:center; width:100%; justify-content:space-between;">' +
              '<div style="display:flex; align-items:center; gap:10px;">' + ic(n.icon) + '<span>' + n.label + '</span></div>' +
              '<span class="sub-chevron" style="display:inline-flex; align-items:center; color:var(--ink-3);">' + ic(chevIcon, 'width="12" height="12"') + '</span>' +
              '</a>' +
              '<div class="sub-items-container" ' + collapsedStyle + '>' +
              subItemsHtml +
              '</div>' +
              '</div>';
          } else {
            var hasChevron = (currentGroupLabel === 'Device Policies');
            var chevronHtml = '';
            if (hasChevron) {
              var active = n.id === current;
              var chevIcon = active ? 'chevu' : 'chevr';
              var chevColor = active ? 'var(--orange-d)' : 'var(--ink-3)';
              chevronHtml = '<span class="sub-chevron" style="margin-left:auto; display:inline-flex; align-items:center; color:' + chevColor + ';">' + ic(chevIcon, 'width="12" height="12"') + '</span>';
            }
            itemHtml = '<a data-route="' + n.id + '" style="display:flex; align-items:center; width:100%;">' +
              ic(n.icon) +
              '<span>' + n.label + '</span>' +
              chevronHtml +
              '</a>';
          }

          if (currentGroupLabel) {
            currentGroupItemsHtml += itemHtml;
          } else {
            html += '<a data-route="' + n.id + '" class="nav-item-standalone">' + ic(n.icon) + '<span>' + n.label + '</span></a>';
          }
        }
      });
      flushGroup();

      nav.innerHTML = html;

      nav.querySelectorAll('a').forEach(function (a) {
        a.onclick = function (e) {
          var route = a.dataset.route;
          var parentDiv = a.closest('.nav-item-with-sub');

          if (parentDiv && parentDiv.querySelector('a') === a) {
            // It is a parent dropdown link
            var parentId = parentDiv.dataset.parentId;
            var isCurrentlyActive = (current === parentId || current.indexOf(parentId + '_') === 0);
            if (isCurrentlyActive) {
              parentDiv.classList.toggle('collapsed-sub');
              go(current);
            } else {
              parentDiv.classList.remove('collapsed-sub');
              if (parentId === 'policy_android') {
                go('policy_android_policies');
              } else if (parentId === 'email_dlp') {
                go('email_dlp_policies');
              } else {
                go(parentId);
              }
            }
            return;
          }

          if (route === 'email_dlp') {
            go('email_dlp_policies');
            return;
          }
          if (route === 'policy_android') {
            go('policy_android_policies');
            return;
          }
          if (route === 'dataflow') flowTab = 'ov';
          go(route);
        };
      });

      nav.querySelectorAll('.nav-group').forEach(function (group) {
        var header = group.querySelector('.grp');
        var items = group.querySelector('.grp-items');

        header.onclick = function (e) {
          e.stopPropagation();
          var isCollapsed = group.classList.toggle('collapsed');
          if (isCollapsed) {
            items.style.maxHeight = '0px';
            header.querySelector('.chevron').style.transform = 'rotate(0deg)';
          } else {
            items.style.maxHeight = items.scrollHeight + 'px';
            header.querySelector('.chevron').style.transform = 'rotate(180deg)';
          }
        };
      });
    }
    let current = 'dashboard';
    var originalTopbarTitleHtml = '';
    var originalTopbarRightHtml = '';

    function go(route) {
      current = route;

      // Capture original topbar if not already done
      var t = document.querySelector('.topbar .title');
      var r = document.querySelector('.topbar .right');
      if (t && !originalTopbarTitleHtml) originalTopbarTitleHtml = t.innerHTML;
      if (r && !originalTopbarRightHtml) originalTopbarRightHtml = r.innerHTML;

      // Restore topbar if navigating away from policy_windows or email_dlp
      if (route !== 'policy_windows' && route.indexOf('email_dlp') !== 0) {
        if (t && originalTopbarTitleHtml) t.innerHTML = originalTopbarTitleHtml;
        if (r && originalTopbarRightHtml) r.innerHTML = originalTopbarRightHtml;
      }

      // Update topbar dynamically for email_dlp or policy_windows
      if (route === 'policy_windows' || route.indexOf('email_dlp') === 0) {
        setTimeout(function () {
          var topbarTitle = document.querySelector('.topbar .title');
          if (topbarTitle) {
            topbarTitle.innerHTML = '<span style="font-weight: 600; color: var(--navy); font-size: 16px;">Welcome, navneet</span>';
          }
          var topbarRight = document.querySelector('.topbar .right');
          if (topbarRight) {
            topbarRight.innerHTML = '<button class="btn btn-ghost" style="border-color: #1f8fd4; color: #1f8fd4; background: #fff; padding: 6px 12px; font-size: 13px; display: flex; align-items: center; gap: 6px; border-radius: 8px; font-weight: 600;">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' +
              'Reporting' +
              '</button>' +
              '<div style="width: 32px; height: 32px; border-radius: 50%; background: #db81b4; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 12px;">MC</div>';
          }
        }, 0);
      }

      document.querySelectorAll('#nav a').forEach(function (a) {
        var active = a.dataset.route === route;
        a.classList.toggle('active', active);

        // Update sub-chevrons for Device Policies
        var subChevron = a.querySelector('.sub-chevron');
        if (subChevron) {
          if (active) {
            subChevron.innerHTML = ic('chevu', 'width="12" height="12"');
            subChevron.style.color = 'var(--orange-d)';
          } else {
            subChevron.innerHTML = ic('chevr', 'width="12" height="12"');
            subChevron.style.color = 'var(--ink-3)';
          }
        }

        if (active) {
          var group = a.closest('.nav-group');
          if (group && group.classList.contains('collapsed')) {
            group.classList.remove('collapsed');
            var items = group.querySelector('.grp-items');
            if (items) items.style.maxHeight = items.scrollHeight + 'px';
            var chevron = group.querySelector('.chevron');
            if (chevron) chevron.style.transform = 'rotate(180deg)';
          }
        }
      });

      // Update sub-items containers
      document.querySelectorAll('.nav-item-with-sub').forEach(function (parentDiv) {
        var parentId = parentDiv.dataset.parentId;
        var isSubActive = (route === parentId || route.indexOf(parentId + '_') === 0);

        if (route.indexOf(parentId) === -1) {
          parentDiv.classList.remove('collapsed-sub');
        }

        var isCollapsed = parentDiv.classList.contains('collapsed-sub');
        var container = parentDiv.querySelector('.sub-items-container');
        var chevron = parentDiv.querySelector('.sub-chevron');

        if (container) {
          if (isSubActive && !isCollapsed) {
            container.style.maxHeight = container.scrollHeight + 'px';
            if (chevron) {
              chevron.innerHTML = ic('chevu', 'width="12" height="12"');
              chevron.style.color = 'var(--orange-d)';
            }
          } else {
            container.style.maxHeight = '0px';
            if (chevron) {
              chevron.innerHTML = ic('chevr', 'width="12" height="12"');
              chevron.style.color = 'var(--ink-3)';
            }
          }
        }

        var parentLink = parentDiv.querySelector('a[data-route="' + parentId + '"]');
        if (parentLink) {
          parentLink.classList.toggle('active-parent', isSubActive);
        }
      });

      const v = document.getElementById('view');
      if (route === 'discovery' || route === 'content_filtering' || route === 'policy_windows' || route.indexOf('policy_android') === 0 || route === 'policy_apple' || route.indexOf('email_dlp') === 0) {
        v.style.padding = '0';
      } else {
        v.style.padding = '22px 26px';
      }
      v.innerHTML = (RENDER[route] || RENDER.dashboard)();
      if (AFTER[route]) AFTER[route]();
      v.scrollTo && v.scrollTo(0, 0); window.scrollTo(0, 0);
    }

    /* ===================== HELPERS ===================== */
    function kpi(num, lab, meta, icname, col, bg) { return '<div class="card kpi"><div class="kic" style="background:' + bg + ';color:' + col + '">' + ic(icname) + '</div><div class="num">' + num + '</div><div class="lab">' + lab + '</div><div class="meta">' + meta + '</div></div>'; }
    function confbar(p) { return '<div class="confcell"><span class="pbar"><i style="width:' + p + '%"></i></span><b style="font-size:12px">' + p + '%</b></div>'; }
    function avatar(initials, color) { return '<span class="who" style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:7px;color:#fff;font-weight:700;font-size:11px;background:' + color + '">' + initials + '</span>'; }

    const RENDER = {}; const AFTER = {};

    var ENDPOINT_POLICIES = [];
    try {
      var stored = localStorage.getItem('dpdpx_endpoint_policies');
      if (stored) {
        ENDPOINT_POLICIES = JSON.parse(stored);
      } else {
        ENDPOINT_POLICIES = [
          { name: 'PII Scanning', status: true },
          { name: 'PCI Scanning', status: true }
        ];
      }
    } catch (e) {
      ENDPOINT_POLICIES = [
        { name: 'PII Scanning', status: true },
        { name: 'PCI Scanning', status: true }
      ];
    }

    var CUSTOM_APP_CONFIGS = [];
    try {
      var stored = localStorage.getItem('dpdpx_custom_app_configs');
      if (stored) {
        CUSTOM_APP_CONFIGS = JSON.parse(stored);
      } else {
        CUSTOM_APP_CONFIGS = [
          { name: 'dpdpax app', appName: 'dpdpax', url: 'https://jodetx.com/fetch-customer', auth: 'BEARER' }
        ];
      }
    } catch (e) {
      CUSTOM_APP_CONFIGS = [
        { name: 'dpdpax app', appName: 'dpdpax', url: 'https://jodetx.com/fetch-customer', auth: 'BEARER' }
      ];
    }

    function saveEndpointPolicies() {
      try {
        localStorage.setItem('dpdpx_endpoint_policies', JSON.stringify(ENDPOINT_POLICIES));
      } catch (e) { }
    }

    function saveCustomAppConfigs() {
      try {
        localStorage.setItem('dpdpx_custom_app_configs', JSON.stringify(CUSTOM_APP_CONFIGS));
      } catch (e) { }
    }

    function openEndpointPolicyModal(idx) {
      var editing = idx !== null;
      var policy = editing ? ENDPOINT_POLICIES[idx] : { name: '', status: true };

      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<h3>' + (editing ? 'Edit Discovery Policy' : 'Configure Discovery Policy') + '</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="display:flex; flex-direction:column; gap:16px;">' +
        '<div class="field outlined">' +
        '<label>Policy Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="ep-policy-name" value="' + policy.name + '" placeholder="e.g. PII Scanning"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>Status</label>' +
        '<select id="ep-policy-status" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        '<option value="true" ' + (policy.status ? 'selected' : '') + '>Active</option>' +
        '<option value="false" ' + (!policy.status ? 'selected' : '') + '>Inactive</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button id="ep-policy-save" class="btn btn-blue">' + (editing ? 'Save Changes' : 'Configure Policy') + '</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('ep-policy-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var nameVal = document.getElementById('ep-policy-name').value.trim();
          var statusVal = document.getElementById('ep-policy-status').value === 'true';

          if (!nameVal) {
            toast('Error', 'Policy Name is required', 'err');
            return;
          }

          if (editing) {
            ENDPOINT_POLICIES[idx].name = nameVal;
            ENDPOINT_POLICIES[idx].status = statusVal;
            toast('Success', 'Policy updated successfully', 'ok');
          } else {
            ENDPOINT_POLICIES.push({ name: nameVal, status: statusVal });
            toast('Success', 'Policy added successfully', 'ok');
          }

          saveEndpointPolicies();
          closeModal();
          go('discovery');
        };
      }
    }

    function openCustomAppConfigModal(idx) {
      var editing = idx !== null;
      var config = editing ? CUSTOM_APP_CONFIGS[idx] : { name: '', appName: '', url: '', auth: 'BEARER' };

      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<h3>' + (editing ? 'Edit Custom App' : 'Add Custom App Configuration') + '</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="display:flex; flex-direction:column; gap:16px;">' +
        '<div class="field outlined">' +
        '<label>Configuration Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="ca-config-name" value="' + config.name + '" placeholder="e.g. dpdpax app"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>App Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="ca-app-name" value="' + config.appName + '" placeholder="e.g. dpdpax"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>API Endpoint URL <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="ca-endpoint-url" value="' + config.url + '" placeholder="https://example.com/api"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>Auth Method <span style="color:#dc2626;">*</span></label>' +
        '<select id="ca-auth-method" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        '<option value="BEARER" ' + (config.auth === 'BEARER' ? 'selected' : '') + '>BEARER</option>' +
        '<option value="API_KEY" ' + (config.auth === 'API_KEY' ? 'selected' : '') + '>API KEY</option>' +
        '<option value="BASIC" ' + (config.auth === 'BASIC' ? 'selected' : '') + '>BASIC AUTH</option>' +
        '<option value="NONE" ' + (config.auth === 'NONE' ? 'selected' : '') + '>NONE</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button id="ca-config-save" class="btn btn-blue">' + (editing ? 'Save Changes' : 'Add Configuration') + '</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('ca-config-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var nameVal = document.getElementById('ca-config-name').value.trim();
          var appVal = document.getElementById('ca-app-name').value.trim();
          var urlVal = document.getElementById('ca-endpoint-url').value.trim();
          var authVal = document.getElementById('ca-auth-method').value;

          if (!nameVal || !appVal || !urlVal) {
            toast('Error', 'Please fill in all required fields', 'err');
            return;
          }

          if (editing) {
            CUSTOM_APP_CONFIGS[idx].name = nameVal;
            CUSTOM_APP_CONFIGS[idx].appName = appVal;
            CUSTOM_APP_CONFIGS[idx].url = urlVal;
            CUSTOM_APP_CONFIGS[idx].auth = authVal;
            toast('Success', 'Configuration updated successfully', 'ok');
          } else {
            CUSTOM_APP_CONFIGS.push({ name: nameVal, appName: appVal, url: urlVal, auth: authVal });
            toast('Success', 'Configuration added successfully', 'ok');
          }

          saveCustomAppConfigs();
          closeModal();
          go('discovery');
        };
      }
    }

    function showEndpointActionsMenu(trigger, idx) {
      var existing = document.querySelector('.ep-actions-menu');
      if (existing) {
        existing.remove();
        return;
      }

      var rect = trigger.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'dropdown ep-actions-menu';
      d.style.position = 'absolute';
      d.style.left = (rect.left - 100) + 'px';
      d.style.top = (rect.bottom + window.scrollY) + 'px';
      d.style.minWidth = '120px';
      d.style.zIndex = '99999';
      d.style.background = '#fff';
      d.style.border = '1px solid #e2e8f0';
      d.style.borderRadius = '6px';
      d.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

      d.innerHTML =
        '<div class="opt" data-act="edit" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
        ic('edit', 'width="14" height="14"') + ' <span>Edit</span>' +
        '</div>' +
        '<div class="opt" data-act="delete" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer; color: #dc2626;">' +
        ic('trash', 'width="14" height="14" style="color:#dc2626;"') + ' <span>Delete</span>' +
        '</div>';

      document.body.appendChild(d);

      d.querySelectorAll('.opt').forEach(function (opt) {
        opt.onclick = function (ev) {
          ev.stopPropagation();
          var act = opt.dataset.act;
          d.remove();
          if (act === 'edit') {
            openEndpointPolicyModal(idx);
          } else if (act === 'delete') {
            if (confirm('Remove this policy?')) {
              ENDPOINT_POLICIES.splice(idx, 1);
              saveEndpointPolicies();
              go('discovery');
              toast('Success', 'Policy deleted', 'ok');
            }
          }
        };
      });

      var close = function (ev) {
        if (!d.contains(ev.target) && ev.target !== trigger) {
          d.remove();
          document.removeEventListener('click', close);
        }
      };
      setTimeout(function () {
        document.addEventListener('click', close);
      }, 0);
    }

    function showCustomAppActionsMenu(trigger, idx) {
      var existing = document.querySelector('.ca-actions-menu');
      if (existing) {
        existing.remove();
        return;
      }

      var rect = trigger.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'dropdown ca-actions-menu';
      d.style.position = 'absolute';
      d.style.left = (rect.left - 100) + 'px';
      d.style.top = (rect.bottom + window.scrollY) + 'px';
      d.style.minWidth = '120px';
      d.style.zIndex = '99999';
      d.style.background = '#fff';
      d.style.border = '1px solid #e2e8f0';
      d.style.borderRadius = '6px';
      d.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

      d.innerHTML =
        '<div class="opt" data-act="edit" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
        ic('edit', 'width="14" height="14"') + ' <span>Edit</span>' +
        '</div>' +
        '<div class="opt" data-act="delete" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer; color: #dc2626;">' +
        ic('trash', 'width="14" height="14" style="color:#dc2626;"') + ' <span>Delete</span>' +
        '</div>';

      document.body.appendChild(d);

      d.querySelectorAll('.opt').forEach(function (opt) {
        opt.onclick = function (ev) {
          ev.stopPropagation();
          var act = opt.dataset.act;
          d.remove();
          if (act === 'edit') {
            openCustomAppConfigModal(idx);
          } else if (act === 'delete') {
            if (confirm('Remove this configuration?')) {
              CUSTOM_APP_CONFIGS.splice(idx, 1);
              saveCustomAppConfigs();
              go('discovery');
              toast('Success', 'Configuration deleted', 'ok');
            }
          }
        };
      });

      setTimeout(function () {
        document.addEventListener('click', close);
      }, 0);
    }

    /* ===================== CONTENT FILTERING ===================== */
    var contentFilteringActiveItem = 'classification';

    var CLASSIFICATIONS = [];
    try {
      var stored = localStorage.getItem('dpdpx_classifications');
      if (stored) {
        CLASSIFICATIONS = JSON.parse(stored);
      } else {
        CLASSIFICATIONS = [
          { name: 'Custom', desc: 'Indian', updated: 'Apr 10, 2026 at 5:47:32 AM', labels: '--' },
          { name: 'PCI', desc: 'Detects Financial Information', updated: 'Apr 9, 2026 at 12:29:51 PM', labels: '--' },
          { name: 'PHI', desc: 'Detects Health Information', updated: 'Apr 17, 2026 at 9:52:12 AM', labels: '--' },
          { name: 'PII', desc: 'Detects Personal Identity Information', updated: 'Apr 9, 2026 at 12:29:34 PM', labels: '--' }
        ];
      }
    } catch (e) {
      CLASSIFICATIONS = [
        { name: 'Custom', desc: 'Indian', updated: 'Apr 10, 2026 at 5:47:32 AM', labels: '--' },
        { name: 'PCI', desc: 'Detects Financial Information', updated: 'Apr 9, 2026 at 12:29:51 PM', labels: '--' },
        { name: 'PHI', desc: 'Detects Health Information', updated: 'Apr 17, 2026 at 9:52:12 AM', labels: '--' },
        { name: 'PII', desc: 'Detects Personal Identity Information', updated: 'Apr 9, 2026 at 12:29:34 PM', labels: '--' }
      ];
    }

    var RULE_DICTIONARY = [];
    try {
      var stored = localStorage.getItem('dpdpx_rules');
      if (stored) {
        RULE_DICTIONARY = JSON.parse(stored);
      } else {
        RULE_DICTIONARY = [
          { name: 'Bank Account Number' },
          { name: 'Blood Test Report' },
          { name: 'Blood Weight & BMI Record' },
          { name: 'Credit Card' },
          { name: 'Date of Birth' },
          { name: 'Driving License' },
          { name: 'Email' },
          { name: 'Home Address' },
          { name: 'IFSC Code' },
          { name: 'Indian Aadhaar Card Number' },
          { name: 'PAN Card Number' },
          { name: 'Passport Number' },
          { name: 'Phone Number' },
          { name: 'Social Security Number' },
          { name: 'Vehicle Registration Number' },
          { name: 'Voter ID Card Number' },
          { name: 'IP Address' },
          { name: 'MAC Address' },
          { name: 'Medical Prescription Number' }
        ];
      }
    } catch (e) {
      RULE_DICTIONARY = [
        { name: 'Bank Account Number' },
        { name: 'Blood Test Report' },
        { name: 'Blood Weight & BMI Record' },
        { name: 'Credit Card' },
        { name: 'Date of Birth' },
        { name: 'Driving License' },
        { name: 'Email' },
        { name: 'Home Address' },
        { name: 'IFSC Code' },
        { name: 'Indian Aadhaar Card Number' },
        { name: 'PAN Card Number' },
        { name: 'Passport Number' },
        { name: 'Phone Number' },
        { name: 'Social Security Number' },
        { name: 'Vehicle Registration Number' },
        { name: 'Voter ID Card Number' },
        { name: 'IP Address' },
        { name: 'MAC Address' },
        { name: 'Medical Prescription Number' }
      ];
    }

    function saveClassifications() {
      try {
        localStorage.setItem('dpdpx_classifications', JSON.stringify(CLASSIFICATIONS));
      } catch (e) { }
    }

    function saveRuleDictionary() {
      try {
        localStorage.setItem('dpdpx_rules', JSON.stringify(RULE_DICTIONARY));
      } catch (e) { }
    }

    function openClassificationModal(idx) {
      var editing = idx !== null;
      var item = editing ? CLASSIFICATIONS[idx] : { name: '', desc: '', labels: '--' };

      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<h3>' + (editing ? 'Edit Classification' : 'Add Classification') + '</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="display:flex; flex-direction:column; gap:16px;">' +
        '<div class="field outlined">' +
        '<label>Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="cf-class-name" value="' + item.name + '" placeholder="e.g. Custom"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>Description <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="cf-class-desc" value="' + item.desc + '" placeholder="e.g. Indian"/>' +
        '</div>' +
        '<div class="field outlined">' +
        '<label>Labels</label>' +
        '<input type="text" id="cf-class-labels" value="' + item.labels + '" placeholder="--"/>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button id="cf-class-save" class="btn btn-blue">' + (editing ? 'Save Changes' : 'Add Classification') + '</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('cf-class-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var nameVal = document.getElementById('cf-class-name').value.trim();
          var descVal = document.getElementById('cf-class-desc').value.trim();
          var labelsVal = document.getElementById('cf-class-labels').value.trim() || '--';

          if (!nameVal || !descVal) {
            toast('Error', 'Please fill in all required fields', 'err');
            return;
          }

          var dateStr = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
          dateStr = dateStr.replace(',', ' at');

          if (editing) {
            CLASSIFICATIONS[idx].name = nameVal;
            CLASSIFICATIONS[idx].desc = descVal;
            CLASSIFICATIONS[idx].labels = labelsVal;
            CLASSIFICATIONS[idx].updated = dateStr;
            toast('Success', 'Classification updated successfully', 'ok');
          } else {
            CLASSIFICATIONS.push({ name: nameVal, desc: descVal, labels: labelsVal, updated: dateStr });
            toast('Success', 'Classification added successfully', 'ok');
          }

          saveClassifications();
          closeModal();
          go('content_filtering');
        };
      }
    }

    function openRuleModal(idx) {
      var editing = idx !== null;
      var item = editing ? RULE_DICTIONARY[idx] : { name: '' };

      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<h3>' + (editing ? 'Edit Rule' : 'Add Custom Rule') + '</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="display:flex; flex-direction:column; gap:16px;">' +
        '<div class="field outlined">' +
        '<label>Rule Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="cf-rule-name" value="' + item.name + '" placeholder="e.g. Bank Account Number"/>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button id="cf-rule-save" class="btn btn-blue">' + (editing ? 'Save Changes' : 'Add Rule') + '</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('cf-rule-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var nameVal = document.getElementById('cf-rule-name').value.trim();

          if (!nameVal) {
            toast('Error', 'Rule Name is required', 'err');
            return;
          }

          if (editing) {
            RULE_DICTIONARY[idx].name = nameVal;
            toast('Success', 'Rule updated successfully', 'ok');
          } else {
            RULE_DICTIONARY.push({ name: nameVal });
            toast('Success', 'Rule added successfully', 'ok');
          }

          saveRuleDictionary();
          closeModal();
          go('content_filtering');
        };
      }
    }

    function showClassificationActionsMenu(trigger, idx) {
      var existing = document.querySelector('.class-actions-menu');
      if (existing) {
        existing.remove();
        return;
      }

      var rect = trigger.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'dropdown class-actions-menu';
      d.style.position = 'absolute';
      d.style.left = (rect.left - 100) + 'px';
      d.style.top = (rect.bottom + window.scrollY) + 'px';
      d.style.minWidth = '120px';
      d.style.zIndex = '99999';
      d.style.background = '#fff';
      d.style.border = '1px solid #e2e8f0';
      d.style.borderRadius = '6px';
      d.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

      d.innerHTML =
        '<div class="opt" data-act="edit" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
        ic('edit', 'width="14" height="14"') + ' <span>Edit</span>' +
        '</div>' +
        '<div class="opt" data-act="delete" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer; color: #dc2626;">' +
        ic('trash', 'width="14" height="14" style="color:#dc2626;"') + ' <span>Delete</span>' +
        '</div>';

      document.body.appendChild(d);

      d.querySelectorAll('.opt').forEach(function (opt) {
        opt.onclick = function (ev) {
          ev.stopPropagation();
          var act = opt.dataset.act;
          d.remove();
          if (act === 'edit') {
            openClassificationModal(idx);
          } else if (act === 'delete') {
            if (confirm('Remove this classification?')) {
              CLASSIFICATIONS.splice(idx, 1);
              saveClassifications();
              go('content_filtering');
              toast('Success', 'Classification deleted', 'ok');
            }
          }
        };
      });

      var close = function (ev) {
        if (!d.contains(ev.target) && ev.target !== trigger) {
          d.remove();
          document.removeEventListener('click', close);
        }
      };
      setTimeout(function () {
        document.addEventListener('click', close);
      }, 0);
    }

    function showRuleActionsMenu(trigger, idx) {
      var existing = document.querySelector('.rule-actions-menu');
      if (existing) {
        existing.remove();
        return;
      }

      var rect = trigger.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'dropdown rule-actions-menu';
      d.style.position = 'absolute';
      d.style.left = (rect.left - 100) + 'px';
      d.style.top = (rect.bottom + window.scrollY) + 'px';
      d.style.minWidth = '120px';
      d.style.zIndex = '99999';
      d.style.background = '#fff';
      d.style.border = '1px solid #e2e8f0';
      d.style.borderRadius = '6px';
      d.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

      d.innerHTML =
        '<div class="opt" data-act="edit" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
        ic('edit', 'width="14" height="14"') + ' <span>Edit</span>' +
        '</div>' +
        '<div class="opt" data-act="delete" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer; color: #dc2626;">' +
        ic('trash', 'width="14" height="14" style="color:#dc2626;"') + ' <span>Delete</span>' +
        '</div>';

      document.body.appendChild(d);

      d.querySelectorAll('.opt').forEach(function (opt) {
        opt.onclick = function (ev) {
          ev.stopPropagation();
          var act = opt.dataset.act;
          d.remove();
          if (act === 'edit') {
            openRuleModal(idx);
          } else if (act === 'delete') {
            if (confirm('Remove this rule?')) {
              RULE_DICTIONARY.splice(idx, 1);
              saveRuleDictionary();
              go('content_filtering');
              toast('Success', 'Rule deleted', 'ok');
            }
          }
        };
      });

      var close = function (ev) {
        if (!d.contains(ev.target) && ev.target !== trigger) {
          d.remove();
          document.removeEventListener('click', close);
        }
      };
      setTimeout(function () {
        document.addEventListener('click', close);
      }, 0);
    }

    function renderClassificationContent() {
      var rowsHtml = CLASSIFICATIONS.map(function (item, i) {
        return '<tr>' +
          '<td class="tname">' + item.name + '</td>' +
          '<td style="color:#4b5160;">' + item.desc + '</td>' +
          '<td style="color:#4b5160;">' + item.updated + '</td>' +
          '<td>' + item.labels + '</td>' +
          '<td style="text-align: right; padding-right: 24px; position: relative;">' +
          '<span class="class-actions-trigger" data-i="' + i + '" style="cursor: pointer; font-weight: bold; font-size: 16px; padding: 4px 8px;">⋮</span>' +
          '</td>' +
          '</tr>';
      }).join('');

      if (CLASSIFICATIONS.length === 0) {
        rowsHtml = '<tr><td colspan="5" style="text-align:center; color:#6b7280; padding:24px;">No classifications configured. Click "+ Add Classification" to add one.</td></tr>';
      }

      return '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">' +
        '<h2 style="font-size:20px; font-weight:700; color:#1f2430; margin:0;">Classification</h2>' +
        '<button id="cf-btn-add-class" class="btn btn-blue" style="background: #1f8fd4; color: #fff; height: 38px; border: none; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">' +
        ic('plus') + ' Add Classification' +
        '</button>' +
        '</div>' +
        '<div class="subtitle" style="margin-bottom:20px;">Establish classifications to categorize sensitive data</div>' +
        '<div class="discovery-tabs">' +
        '<button class="active">Custom</button>' +
        '<button>Default</button>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0;">' +
        '<div class="search" style="position: relative;">' +
        ic('search') +
        '<input id="cf-class-search" placeholder="Search by Name" style="padding-left: 32px; height: 38px; border-radius: 6px; border: 1px solid #c4c8d1; width: 260px; outline: none; background: #fff;"/>' +
        '</div>' +
        '</div>' +
        '<div class="card" style="overflow: visible;">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Name</th>' +
        '<th>Description</th>' +
        '<th>Last Updated</th>' +
        '<th>Labels</th>' +
        '<th style="text-align: right; padding-right: 24px;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="cf-class-table-body">' +
        rowsHtml +
        '</tbody>' +
        '</table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
        'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
        ' 1–' + CLASSIFICATIONS.length + ' of ' + CLASSIFICATIONS.length + ' ' +
        '<span style="display:flex;gap:8px;align-items:center;">' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>';
    }

    function renderRuleDictionaryContent() {
      var rowsHtml = RULE_DICTIONARY.map(function (item, i) {
        return '<tr>' +
          '<td class="tname">' + item.name + '</td>' +
          '<td style="text-align: right; padding-right: 24px; position: relative;">' +
          '<span class="rule-actions-trigger" data-i="' + i + '" style="cursor: pointer; font-weight: bold; font-size: 16px; padding: 4px 8px;">⋮</span>' +
          '</td>' +
          '</tr>';
      }).join('');

      if (RULE_DICTIONARY.length === 0) {
        rowsHtml = '<tr><td colspan="2" style="text-align:center; color:#6b7280; padding:24px;">No rules configured. Click "+ Add Rule" to add one.</td></tr>';
      }

      return '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">' +
        '<h2 style="font-size:20px; font-weight:700; color:#1f2430; margin:0;">Rule Dictionary</h2>' +
        '<button id="cf-btn-add-rule" class="btn btn-blue" style="background: #1f8fd4; color: #fff; height: 38px; border: none; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">' +
        ic('plus') + ' Add Rule' +
        '</button>' +
        '</div>' +
        '<div class="subtitle" style="margin-bottom:20px;">Define custom rules to detect sensitive information in your data.</div>' +
        '<div class="discovery-tabs">' +
        '<button class="active">Custom</button>' +
        '<button>Default</button>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0;">' +
        '<div class="search" style="position: relative;">' +
        ic('search') +
        '<input id="cf-rule-search" placeholder="Search by Rule Name" style="padding-left: 32px; height: 38px; border-radius: 6px; border: 1px solid #c4c8d1; width: 260px; outline: none; background: #fff;"/>' +
        '</div>' +
        '</div>' +
        '<div class="card" style="overflow: visible;">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Rule Name</th>' +
        '<th style="text-align: right; padding-right: 24px;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="cf-rule-table-body">' +
        rowsHtml +
        '</tbody>' +
        '</table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
        'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
        ' 1–' + Math.min(10, RULE_DICTIONARY.length) + ' of ' + RULE_DICTIONARY.length + ' ' +
        '<span style="display:flex;gap:8px;align-items:center;">' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>';
    }

    function renderContentFilteringContent() {
      if (contentFilteringActiveItem === 'classification') {
        return renderClassificationContent();
      } else if (contentFilteringActiveItem === 'rule-dictionary') {
        return renderRuleDictionaryContent();
      }
      return '';
    }

    RENDER.content_filtering = function () {
      var sidebarHtml = '<div class="discovery-sidebar">' +
        '<div class="sidebar-h">Content Filtering</div>' +
        '<div class="nav-item ' + (contentFilteringActiveItem === 'classification' ? 'active' : '') + '" data-cfitem="classification">' +
        ic('layers') + ' <span>Classification</span>' +
        '</div>' +
        '<div class="nav-item ' + (contentFilteringActiveItem === 'rule-dictionary' ? 'active' : '') + '" data-cfitem="rule-dictionary">' +
        ic('list') + ' <span>Rule Dictionary</span>' +
        '</div>' +
        '</div>';

      var contentHtml = '<div class="discovery-content" id="cf-content-area">' +
        renderContentFilteringContent() +
        '</div>';

      return '<div class="discovery-layout">' + sidebarHtml + contentHtml + '</div>';
    };

    // Delegated listeners for Content Filtering
    document.addEventListener('click', function (e) {
      var cfItem = e.target.closest('[data-cfitem]');
      if (cfItem) {
        e.stopPropagation();
        contentFilteringActiveItem = cfItem.dataset.cfitem;
        go('content_filtering');
        return;
      }

      var cfAddClass = e.target.closest('#cf-btn-add-class');
      if (cfAddClass) {
        e.stopImmediatePropagation();
        openClassificationModal(null);
        return;
      }

      var cfAddRule = e.target.closest('#cf-btn-add-rule');
      if (cfAddRule) {
        e.stopImmediatePropagation();
        openRuleModal(null);
        return;
      }

      var classTrigger = e.target.closest('.class-actions-trigger');
      if (classTrigger) {
        e.stopPropagation();
        var idx = parseInt(classTrigger.dataset.i);
        showClassificationActionsMenu(classTrigger, idx);
        return;
      }

      var ruleTrigger = e.target.closest('.rule-actions-trigger');
      if (ruleTrigger) {
        e.stopPropagation();
        var idx = parseInt(ruleTrigger.dataset.i);
        showRuleActionsMenu(ruleTrigger, idx);
        return;
      }
    });

    document.addEventListener('input', function (e) {
      if (e.target.id === 'cf-class-search') {
        var q = e.target.value.toLowerCase().trim();
        var rows = document.querySelectorAll('#cf-class-table-body tr');
        rows.forEach(function (row) {
          var nameCell = row.querySelector('.tname');
          if (!nameCell) return;
          var name = nameCell.textContent.toLowerCase();
          row.style.display = name.indexOf(q) > -1 ? '' : 'none';
        });
      }
      if (e.target.id === 'cf-rule-search') {
        var q = e.target.value.toLowerCase().trim();
        var rows = document.querySelectorAll('#cf-rule-table-body tr');
        rows.forEach(function (row) {
          var nameCell = row.querySelector('.tname');
          if (!nameCell) return;
          var name = nameCell.textContent.toLowerCase();
          row.style.display = name.indexOf(q) > -1 ? '' : 'none';
        });
      }
    });

    /* ===================== DASHBOARD ===================== */
    RENDER.dashboard = function () {
      const qa = [
        ['Data Fiduciaries', 'Manage fiduciaries', 'building', '#1f8fd4', '#e6f4fc'],
        ['Processing Activities', 'DPDP activities', 'list', '#16a34a', '#e7f7ee'],
        ['Notices', 'Privacy notices', 'bell', '#2ba6e0', '#e6f4fc'],
        ['Purposes', 'Data purposes', 'flag', '#7c3aed', '#f1eafe'],
        ['Consent Removal', 'Manage requests', 'people', '#1f8fd4', '#eaf5fc'],
        ['Data Deletion', 'Manage requests', 'trash', '#dc2626', '#fdeaea'],
        ['Risk Analytics', 'Risk insights', 'bars', '#d4860b', '#fdf3da'],
        ['Data Discovery', 'PII discovery', 'db', '#0d9488', '#e0f5f2'],
        ['Data Flow', 'Data flow visualization', 'share', '#1f8fd4', '#e6f4fc'],
        ['Cookie Consent', 'Cookie management', 'cookie', '#0ea5b7', '#e0f5f8'],
        ['Data Protection', 'Protection rules', 'shield', '#16a34a', '#e7f7ee'],
        ['Audit Logs', 'Audit trail', 'clip', '#7c3aed', '#f1eafe']
      ];
      const feed = ['radhesham.joshi+admin@xecurify.com', 'radhesham.joshi+admin@xecurify.com', 'navneet@xecurify.com', 'radhesham.joshi+admin@xecurify.com'].map(function (u, i) {
        var acts = ['EMAIL_PROVIDER_TEST', 'CONSENT_PURPOSE_UPDATE', 'NOTICE_PUBLISH', 'DATA_DELETION_APPROVE'];
        return '<div class="it"><div class="dot"></div><div style="flex:1"><div class="who">' + u + ' <span class="tag gray">activity</span></div><div class="act">Action: ' + acts[i] + ' by ' + u + '</div><div class="ago">' + ic('clock', 'width="12" height="12"') + ' ' + (10 + i) + ' hours ago</div></div></div>';
      }).join('');
      return '<div class="page-title">Dashboard</div>' +
        '<div class="page-sub">Welcome to the Privacy Dashboard. Get a consolidated view of consent requests, data deletion activity, compliance health, and key metrics across your organization\u2019s privacy operations.</div>' +
        '<div class="kpis k4">' +
        kpi('14', 'Consent Removals', '1 pending', 'people', '#1f8fd4', '#eaf5fc') +
        kpi('7', 'Data Deletion Requests', '0 pending', 'trash', '#dc2626', '#fdeaea') +
        kpi('292', 'PII Records', 'Across 25 data sources', 'db', '#1f8fd4', '#e6f4fc') +
        kpi('41', 'High Sensitivity Fields', 'of 135 total fields', 'alert', '#dc2626', '#fdeaea') +
        '</div>' +
        '<div class="card" style="margin-bottom:16px"><div class="card-h"><h3>Quick Actions</h3>' + ic('chevu', 'width="16" height="16" style="color:#9aa0ab"') + '</div><div class="qa-grid">' +
        qa.map(function (q) { return '<div class="qa"><div class="ic" style="background:' + q[4] + ';color:' + q[3] + '">' + ic(q[2]) + '</div><div><b>' + q[0] + '</b><p>' + q[1] + '</p></div><span class="chev">' + ic('chevr', 'width="16" height="16"') + '</span></div>'; }).join('') +
        '</div></div>' +
        '<div class="row" style="grid-template-columns:1fr 1fr">' +
        '<div class="card"><div class="card-h"><div><h3>Critical Alerts &amp; Notifications</h3><div class="sub">Items requiring immediate attention</div></div></div><div style="padding:16px 18px">' +
        '<div class="alert r"><div class="bar" style="background:#dc2626"></div><div style="flex:1"><b>1 Requests Pending Approval</b><p>1 consent removals and 0 data deletion requests require attention</p><span class="link">Review Requests ' + ic('chevr', 'width="13" height="13"') + '</span></div></div>' +
        '<div class="alert a"><div class="bar" style="background:#f59e0b"></div><div style="flex:1"><b>2 Compliance Gaps Detected</b><p>1 high-severity and 1 medium-severity gaps require action</p><span class="link">View Gaps ' + ic('chevr', 'width="13" height="13"') + '</span></div></div>' +
        '</div></div>' +
        '<div class="card"><div class="card-h"><div><h3>Recent Activity</h3><div class="sub">Latest audit events and actions</div></div></div><div style="padding:4px 18px 12px"><div class="feed">' + feed + '</div></div></div>' +
        '</div>';
    };
    /* ===================== ROPA RECOMMENDATIONS ===================== */
    let ropaTab = 'rec';
    const ROPA_ROWS = [
      ['Indian Customer Verification \u2013 Aadhaar Processing', 'KYC_VERIFICATION', 'NEW', 'med', '70', '1', 'Storage Cloud', 'Pending Review'],
      ['Aadhaar Processing for Identity Verification', 'KYC_VERIFICATION', 'NEW', 'med', '80', '1', 'Untitled spreadsheet Sheet', 'Pending Review'],
      ['Aadhaar Data Processing for Indian Citizens', 'KYC_VERIFICATION', 'NEW', 'med', '80', '1', 'Untitled document.pdf', 'Pending Review'],
      ['Customer Financial Verification and Fraud Prevention', 'FRAUD_DETECTION', 'NEW', 'high', '95', '2', 'sample-data-excel.xlsx', 'Pending Review'],
      ['Customer Identity Verification through Aadhaar Processing', 'KYC_VERIFICATION', 'NEW', 'med', '72', '1', 'Demo Database(H2)', 'Pending Review'],
      ['SharePoint Healthcare Records Management System', 'HEALTH_RECORDS', 'NEW', 'med', '76', '4', 'Storage Cloud', 'Materialized'],
      ['CUSTOM_APP \u2013 Multi-Purpose Data Processing with Payment Information', 'PAYMENT_PROCESSING', 'NEW', 'med', '70', '8', 'DLP', 'Materialized']
    ];
    function statusBadge(s) { var m = { 'Pending Review': 'sb-amber', 'Materialized': 'sb-gray', 'Approved': 'sb-green' }; return '<span class="statusbadge ' + (m[s] || 'sb-gray') + '">' + s + '</span>'; }
    RENDER.ropa = function () {
      return '<div class="page-title">' + ic('sparkles', 'width="22" height="22" style="color:#2ba6e0"') + ' ROPA Recommendations</div>' +
        '<div class="tabs">' +
        '<button data-rt="rec" class="' + (ropaTab === 'rec' ? 'on' : '') + '">Recommendations</button>' +
        '<button data-rt="cov" class="' + (ropaTab === 'cov' ? 'on' : '') + '">Coverage Analysis</button>' +
        '<button data-rt="map" class="' + (ropaTab === 'map' ? 'on' : '') + '">Mapping Configuration</button>' +
        '</div><div id="ropa-body">' + ropaBody() + '</div>';
    };
    function ropaBody() {
      if (ropaTab === 'cov') return ropaCoverage();
      if (ropaTab === 'map') return ropaMapping();
      return ropaRecs();
    }
    function ropaRecs() {
      var merge = '<div class="card" style="margin-bottom:16px"><div style="padding:14px 18px;display:flex;align-items:center;gap:10px"><b style="font-size:14px">' + ic('branch', 'width="16" height="16" style="display:inline;vertical-align:-3px;color:#5b6270"') + ' Merge candidates</b><span class="muted" style="font-size:12px">1 group \u00b7 6 recommendations</span><span style="margin-left:auto;color:#1f8fd4;font-size:12px;font-weight:600;cursor:pointer">' + ic('refresh', 'width="13" height="13" style="display:inline;vertical-align:-2px"') + ' Refresh</span></div>' +
        '<div style="padding:0 18px 6px" class="muted" style="font-size:12px">Groups of pending recommendations sharing the same activity type and data principal category with high field overlap. Merging consolidates them into a single primary.</div>' +
        '<div style="margin:8px 18px 16px;border:1px solid var(--line);border-radius:9px;padding:11px 14px;display:flex;align-items:center;gap:10px;cursor:pointer" id="mergerow"><b style="font-size:13px">KYC_VERIFICATION \u2192 CUSTOMER</b><span class="tag gray">6 candidates</span><span class="tag blue">\u226580% field overlap</span><span style="margin-left:auto;color:#9aa0ab">' + ic('chevd', 'width="16" height="16"') + '</span></div></div>';
      var kpis = '<div class="kpis k4">' +
        kpi('25', 'Total Recommendations', '', 'doc', '#1f8fd4', '#e6f4fc') +
        kpi('8', 'Pending Review', '', 'clock', '#1483c4', '#e6f4fc') +
        kpi('3', 'High Confidence', '', 'trend', '#16a34a', '#e7f7ee') +
        kpi('15', 'Approved', '', 'check', '#7c3aed', '#f1eafe') +
        '</div>';
      var toolbar = '<div class="toolbar"><button class="btn btn-blue">' + ic('refresh') + ' Generate Recommendations</button><button class="btn btn-ghost" disabled style="opacity:.6">' + ic('check') + ' Bulk Approve (0)</button><button class="btn btn-red">' + ic('x') + ' Clear Pending</button><div class="spacer"></div>' +
        '<div class="search">' + ic('search') + '<input placeholder="Search..."/></div>' +
        '<div class="select">Status ' + ic('chevd', 'width="13" height="13"') + '</div>' +
        '<div class="select">Confidence ' + ic('chevd', 'width="13" height="13"') + '</div>' +
        '<label class="chk" style="font-weight:500;color:#6b7280"><span class="box"></span> Show merged</label></div>';
      var rows = ROPA_ROWS.map(function (r, i) {
        return '<tr><td><span class="checkbox"></span></td>' +
          '<td><div class="tname">' + r[0] + '</div><div class="tsub">' + r[1] + '</div><div class="ai">' + ic('sparkles', 'width="12" height="12"') + ' AI Enhanced</div></td>' +
          '<td><span class="tag new">' + r[2] + '</span></td>' +
          '<td><span class="tag ' + r[3] + '">' + (r[3] === 'high' ? 'High' : 'Medium') + '</span> ' + r[4] + '%</td>' +
          '<td>' + r[5] + '</td><td>' + r[6] + '</td><td>' + statusBadge(r[7]) + '</td>' +
          '<td><div class="acts"><span class="e" data-detail="' + i + '">' + ic('eye') + '</span>' + (r[7] === 'Pending Review' ? '<span class="ok">' + ic('check') + '</span><span class="no">' + ic('x') + '</span>' : '') + '</div></td></tr>';
      }).join('');
      var table = '<div class="card"><table><thead><tr><th style="width:38px"><span class="checkbox"></span></th><th>Activity Name</th><th>Type</th><th>Confidence</th><th>PII Count</th><th>Systems</th><th>Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
      return merge + kpis + toolbar + table;
    }
    function ropaCoverage() {
      var gaps = [
        ['UNMAPPED SOURCE', 'Discovery source \'https://dlpdemoaccount.blob.core.windows.net/important-files/piidata/sample-data-csv - Copy.csv\' is not mapped to a processing system', 'MEDIUM', 'sample-data-csv - Copy.csv'],
        ['UNMAPPED SOURCE', 'Discovery source \'s3://mo-privacy-s3/presentation.pptx\' is not mapped to a processing system', 'MEDIUM', 's3://mo-privacy-s3/presentation.pptx'],
        ['UNMAPPED SOURCE', 'Discovery source \'CUSTOM_APP\' is not mapped to a processing system', 'MEDIUM', 'CUSTOM_APP'],
        ['UNMAPPED SOURCE', 'Discovery source \'SharePoint_Sites\' is not mapped to a processing system', 'MEDIUM', 'SharePoint_Sites'],
        ['UNMAPPED SOURCE', 'Discovery source \'s3://mo-privacy-s3/sample-data-csv.txt\' is not mapped to a processing system', 'MEDIUM', 's3://mo-privacy-s3/sample-data-csv.txt'],
        ['UNCOVERED PII', 'PII type \'aadhar\' in important-files has no ROPA coverage', 'HIGH', 'important-files']
      ];
      var rows = gaps.map(function (g) { return '<tr><td><span class="tag ' + (g[0] === 'UNCOVERED PII' ? 'amber' : 'gray') + '">' + g[0] + '</span></td><td style="max-width:380px;color:#4b5160">' + g[1] + '</td><td><span class="tag ' + (g[2] === 'HIGH' ? 'med' : 'low') + '" style="' + (g[2] === 'HIGH' ? 'background:#fdeaea;color:#dc2626' : '') + '">' + g[2] + '</span></td><td style="color:#1f8fd4;max-width:220px;word-break:break-all">' + g[3] + '</td><td style="color:#4b5160;max-width:200px">' + (g[0] === 'UNCOVERED PII' ? 'Create or update a processing activity to cover this PII type' : 'Map this source to an existing processing system in Mapping Configuration') + '</td></tr>'; }).join('');
      return '<div class="kpis k3">' +
        kpi('80.0%', 'Coverage', '', 'shield', '#16a34a', '#e7f7ee') +
        kpi('28/35', 'PII Types', '7 uncovered', 'doc', '#1f8fd4', '#e6f4fc') +
        kpi('20/25', 'Mapped Sources', '', 'db', '#1483c4', '#e6f4fc') +
        '</div><h3 style="font-size:16px;margin:6px 0 12px">Coverage Gaps</h3>' +
        '<div class="card"><table><thead><tr><th>Gap Type</th><th>Description</th><th>Severity</th><th>Related Entity</th><th>Recommendation</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    }
    function ropaMapping() {
      var rows = [['sample-data-csv.csv', 'S3 Bucket', 'Core Banking System (CBS)', 'Mapped'], ['Untitled document.pdf', 'Azure Blob', '\u2014', 'Unmapped'], ['CUSTOM_APP', 'Application', '\u2014', 'Unmapped'], ['SharePoint_Sites', 'SharePoint', 'Hospital Information System', 'Mapped'], ['Demo Database(H2)', 'Database', 'Salesforce CRM', 'Mapped']].map(function (r) { return '<tr><td class="tname">' + r[0] + '</td><td>' + r[1] + '</td><td>' + (r[2] === '\u2014' ? '<span class="muted">\u2014</span>' : r[2]) + '</td><td>' + (r[3] === 'Mapped' ? '<span class="statusbadge sb-green">Mapped</span>' : '<span class="statusbadge sb-amber">Unmapped</span>') + '</td><td><div class="acts"><span class="e">' + ic('edit') + '</span></div></td></tr>'; }).join('');
      return '<div class="page-sub" style="margin-top:4px">Map discovered data sources to processing systems so they are counted in ROPA coverage.</div>' +
        '<div class="card"><div class="card-h"><h3>Source \u2192 System Mapping</h3><button class="btn btn-blue">' + ic('plus') + ' Add Mapping</button></div>' +
        '<table><thead><tr><th>Discovery Source</th><th>Source Type</th><th>Mapped System</th><th>Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    }
    AFTER.ropa = function () {
      document.querySelectorAll('.tabs button[data-rt]').forEach(function (b) { b.onclick = function () { ropaTab = b.dataset.rt; go('ropa'); }; });
      var mr = document.getElementById('mergerow'); if (mr) mr.onclick = openMergeModal;
      document.querySelectorAll('[data-detail]').forEach(function (el) { el.onclick = function () { openRecDetail(parseInt(el.dataset.detail)); }; });
    };
    /* ---- edit SLA modal ---- */
    /* ---- edit SLA modal ---- */
    function showSlaDropdown(el, type) {
      document.querySelectorAll('.local-dropdown').forEach(function (d) { d.remove(); });

      var options = [];
      var currentValue = el.querySelector('span').textContent.trim();
      
      if (type === 'fiduciary') {
        options = ['DPDPAX by Jodetx Stock Exchange', 'Bharat FinServ Ltd.', 'MediCare Health Pvt. Ltd.', 'EduTech Bharat Pvt. Ltd.'];
      } else if (type === 'request_type') {
        options = [
          'Data Access',
          'Data Correction',
          'Data Erasure',
          'Account Deletion',
          'Consent Withdrawal',
          'Data Portability',
          'Grievance',
          'Nominee Request',
          'Breach Inquiry'
        ];
      } else if (type === 'priority') {
        options = ['Normal', 'High', 'Critical', 'Regulatory'];
      }

      var dropdown = document.createElement('div');
      dropdown.className = 'local-dropdown';
      dropdown.style.position = 'absolute';
      dropdown.style.left = el.offsetLeft + 'px';
      dropdown.style.top = (el.offsetTop + el.offsetHeight + 2) + 'px';
      dropdown.style.width = el.offsetWidth + 'px';
      dropdown.style.background = '#fff';
      dropdown.style.border = '1px solid #cbd5e1';
      dropdown.style.borderRadius = '8px';
      dropdown.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      dropdown.style.zIndex = '9999';
      dropdown.style.maxHeight = '240px';
      dropdown.style.overflowY = 'auto';
      dropdown.style.boxSizing = 'border-box';
      
      dropdown.innerHTML = options.map(function (opt) {
        var isSelected = opt === currentValue;
        var bg = isSelected ? '#f1f5f9' : 'transparent';
        var fw = isSelected ? '600' : 'normal';
        return '<div class="dropdown-item" style="padding: 10px 14px; font-size: 13.5px; color: #1e293b; cursor: pointer; background: ' + bg + '; font-weight: ' + fw + '; transition: background 0.1s;" onmouseover="this.style.background=\'#f8fafc\'" onmouseout="this.style.background=\'' + bg + '\'">' + opt + '</div>';
      }).join('');
      
      el.parentNode.appendChild(dropdown);
      
      dropdown.querySelectorAll('.dropdown-item').forEach(function (item, idx) {
        item.onclick = function (e) {
          e.stopPropagation();
          el.querySelector('span').textContent = options[idx];
          dropdown.remove();
        };
      });
      
      var closeFn = function () {
        dropdown.remove();
        document.removeEventListener('click', closeFn);
      };
      setTimeout(function () {
        document.addEventListener('click', closeFn);
      }, 0);
    }

    function openEditSlaModal() {
      var modalHtml = '<div class="modal" style="width:620px; max-width:95%;">' +
        '  <div class="modal-h">' +
        '    <h3>Edit SLA Definition</h3>' +
        '    <button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '  </div>' +
        '  <div class="modal-b" style="padding:20px 24px; position:relative;">' +
        '    <!-- Fiduciary -->' +
        '    <div class="field outlined" style="margin-top:8px;">' +
        '      <label>Fiduciary</label>' +
        '      <div class="selbox" style="display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="showSlaDropdown(this, \'fiduciary\')">' +
        '        <span>DPDPAX by Jodetx Stock Exchange</span>' +
        '        <span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '      </div>' +
        '    </div>' +
        '    ' +
        '    <!-- Row with Request Type and Priority -->' +
        '    <div style="display:flex; gap:16px;">' +
        '      <div class="field outlined" style="flex:1; position:relative;">' +
        '        <label>Request Type</label>' +
        '        <div class="selbox" style="display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="showSlaDropdown(this, \'request_type\')">' +
        '          <span>Data Access</span>' +
        '          <span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '        </div>' +
        '      </div>' +
        '      <div class="field outlined" style="flex:1; position:relative;">' +
        '        <label>Priority</label>' +
        '        <div class="selbox" style="display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="showSlaDropdown(this, \'priority\')">' +
        '          <span>High</span>' +
        '          <span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    ' +
        '    <!-- Row with Response Time, Resolution Time, Warning Threshold -->' +
        '    <div style="display:flex; gap:16px;">' +
        '      <div class="field outlined" style="flex:1;">' +
        '        <label>Response Time (hours)</label>' +
        '        <input type="number" value="5" style="box-sizing:border-box;"/>' +
        '      </div>' +
        '      <div class="field outlined" style="flex:1;">' +
        '        <label>Resolution Time (hours)</label>' +
        '        <input type="number" value="2" style="box-sizing:border-box;"/>' +
        '      </div>' +
        '      <div class="field outlined" style="flex:1; position:relative; margin-bottom: 0;">' +
        '        <label>Warning Threshold (%)</label>' +
        '        <input type="number" value="80" style="box-sizing:border-box;"/>' +
        '        <div style="font-size:10.5px; color:#8a909c; position:absolute; top:44px; left:0; width:220px; line-height:1.2; margin-top:2px;">At-risk warning triggers at this % of elapsed time</div>' +
        '      </div>' +
        '    </div>' +
        '    ' +
        '    <!-- Grievance Officers -->' +
        '    <div class="field outlined" style="margin-top:28px;">' +
        '      <label>Grievance Officers</label>' +
        '      <div class="selbox chips-select-box" style="display:flex; align-items:center; gap:6px;" onclick="toast(\'Select\',\'Select Grievance Officers\',\'info\')">' +
        '        <span class="form-chip" style="margin: 0;">Manish Chhabra <span class="x" onclick="event.stopPropagation(); toast(\'Remove\',\'Removed Manish Chhabra\',\'info\')">×</span></span>' +
        '        <span style="color:#9aa0ab; font-size:13px; margin-left:4px;">Select grievance officers...</span>' +
        '        <span class="arrow-icon" style="margin-left:auto;">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '      </div>' +
        '    </div>' +
        '    ' +
        '    <!-- Data Protection Officers (optional) -->' +
        '    <div class="field outlined">' +
        '      <label>Data Protection Officers (optional)</label>' +
        '      <div class="selbox chips-select-box" style="display:flex; align-items:center; gap:6px;" onclick="toast(\'Select\',\'Select DPOs\',\'info\')">' +
        '        <span class="form-chip" style="margin: 0;">Manish DPO <span class="x" onclick="event.stopPropagation(); toast(\'Remove\',\'Removed Manish DPO\',\'info\')">×</span></span>' +
        '        <span style="color:#9aa0ab; font-size:13px; margin-left:4px;">Select DPOs...</span>' +
        '        <span class="arrow-icon" style="margin-left:auto;">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '      </div>' +
        '    </div>' +
        '    ' +
        '    <!-- Active Toggle -->' +
        '    <div style="display:flex; align-items:center; gap:10px; margin-top:12px; margin-bottom: 8px;">' +
        '      <span class="toggle on" onclick="this.classList.toggle(\'on\')"></span>' +
        '      <span style="font-size:13.5px; font-weight:600; color:#374151;">Active</span>' +
        '    </div>' +
        '  </div>' +
        '  <div class="modal-f">' +
        '    <button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '    <button class="btn btn-blue" onclick="closeModal(); toast(\'Success\',\'SLA definition updated successfully\',\'success\')">Save</button>' +
        '  </div>' +
        '</div>';
      openModal(modalHtml);
    }

    /* ---- merge modal ---- */
    function openMergeModal() {
      var rows = [
        ['Aadhaar-Based Customer Identity Verification', '2 / 2', '\u2014', '70', 'temp-bucket-chai', true, true],
        ['Aadhaar Data Processing for Indian Citizens', '1 / 1', '100', '80', 'https://dlpdemoaccount.blob.core.windows.net/important-files/images/Untitled document.pdf', false, true],
        ['Aadhaar Identity Verification for Customer KYC', '1 / 1', '100', '80', 's3://mo-privacy-s3/aadhar.csv', false, true],
        ['Aadhaar Processing for Identity Verification', '1 / 1', '100', '80', 'https://dlpdemoaccount.blob.core.windows.net/important-files/images/Untitled spreadsheet - Sheet(N).csv', false, true],
        ['Customer Identity Verification using Aadhaar', '1 / 1', '100', '70', 'important-files', false, true],
        ['Indian Customer Verification \u2013 Aadhaar Processing', '1 / 1', '100', '70', 'imp-folder-2', false, true]
      ];
      var tr = rows.map(function (r) {
        return '<tr><td style="text-align:center"><span style="display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid ' + (r[5] ? '#1f8fd4' : '#c4c8d1') + ';position:relative">' + (r[5] ? '<span style="position:absolute;inset:3px;border-radius:50%;background:#1f8fd4"></span>' : '') + '</span></td>' +
          '<td style="text-align:center"><span class="checkbox" style="' + (r[6] ? 'background:#1f8fd4;border-color:#1f8fd4' : '') + ';position:relative">' + (r[6] ? '<svg viewBox="0 0 24 24" width="12" height="12" style="position:absolute;inset:1px" fill="none" stroke="#fff" stroke-width="3"><path d="M5 12l4 4 10-10"/></svg>' : '') + '</span></td>' +
          '<td><b style="font-size:12.5px">' + r[0] + '</b>' + (r[5] ? ' <span class="tag blue" style="margin-left:4px">Primary</span>' : '') + '</td><td style="text-align:center">' + r[1] + '</td><td style="text-align:center">' + (r[2] === '\u2014' ? '\u2014' : r[2] + '%') + '</td><td style="text-align:center">' + r[3] + '%</td><td style="max-width:220px;word-break:break-all;color:#6b7280;font-size:11.5px">' + r[4] + '</td></tr>';
      }).join('');
      openModal('<div class="modal"><div class="modal-h"><h3>' + ic('branch', 'width="17" height="17" style="display:inline;vertical-align:-3px"') + ' Merge candidates \u2014 KYC_VERIFICATION \u2192 CUSTOMER</h3><button class="x" onclick="closeModal()">' + ic('x') + '</button></div><div class="modal-b"><table><thead><tr><th style="text-align:center">Primary</th><th style="text-align:center">Include</th><th>Activity name</th><th style="text-align:center">Fields<br>(included)</th><th style="text-align:center">Overlap vs<br>primary</th><th style="text-align:center">Confidence</th><th>Source</th></tr></thead><tbody>' + tr + '</tbody></table></div><div class="modal-f"><button class="btn btn-blue">' + ic('branch') + ' Merge (5)</button></div></div>');
    }
    /* ---- recommendation detail modal ---- */
    let recTab = 'ov';
    function openRecDetail(i) { recTab = 'ov'; renderRecDetail(i); }
    function renderRecDetail(i) {
      var r = ROPA_ROWS[i] || ROPA_ROWS[0];
      var head = '<div class="modal-h"><div><h3>Recommendation Detail</h3><div style="display:flex;gap:6px;margin-top:8px"><span class="statusbadge sb-amber">Pending Review</span><span class="tag med">Medium</span><span class="tag purple">' + ic('sparkles', 'width="11" height="11" style="display:inline;vertical-align:-1px"') + ' AI Enhanced</span></div></div><button class="x" onclick="closeModal()">' + ic('x') + '</button></div>';
      var tabs = '<div class="tabs" style="margin:8px 22px 0;padding:0"><button data-dt="ov" class="' + (recTab === 'ov' ? 'on' : '') + '">Overview</button><button data-dt="fl" class="' + (recTab === 'fl' ? 'on' : '') + '">Fields (1)</button><button data-dt="sy" class="' + (recTab === 'sy' ? 'on' : '') + '">Systems (1)</button><button data-dt="pu" class="' + (recTab === 'pu' ? 'on' : '') + '">Purposes (1)</button></div>';
      var body = '';
      if (recTab === 'ov') {
        body = '<div class="modal-b" style="display:grid;grid-template-columns:1.4fr 1fr;gap:22px;padding-top:14px">' +
          '<div><div class="field"><label>Activity Name</label><input value="Indian Customer Verification \u2013 Aadhaar Processing"/></div>' +
          '<div class="field"><label>Legal Basis</label><div class="selbox">EXPLICIT CONSENT ' + ic('chevd', 'width="14" height="14"') + '</div></div>' +
          '<div class="field"><label>Activity Type</label><input value="KYC_VERIFICATION"/></div>' +
          '<div class="field"><label>Description</label><textarea rows="4">Processing of Indian Aadhaar numbers for customer identity verification. Aadhaar is a sensitive Indian national ID requiring strict data protection under India\u2019s Digital Personal Data Protection Act 2023.</textarea></div></div>' +
          '<div style="font-size:12.5px;color:#4b5160"><div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-weight:700;color:#1f2430"><span>Confidence</span><span>70%</span></div><span class="pbar" style="width:100%;margin-top:5px"><i style="width:70%"></i></span></div>' +
          '<div style="margin-bottom:10px"><b style="color:#1f2430">Principal Category</b><div>CUSTOMER</div></div>' +
          '<div style="margin-bottom:10px"><b style="color:#1f2430">Reasoning</b><div>New: I PII types detected in source \'imp-folder-2\' with no existing processing activity coverage</div></div>' +
          '<div style="margin-bottom:10px"><b style="color:#1f2430">AI Analysis</b><div>Legal basis: Aadhaar numbers are sensitive personal data requiring explicit consent for processing under Indian law. Risk assessment: Storing Aadhaar numbers creates significant compliance risk under Indian regulations, including mandatory registration with UIDAI and implementing strict security measures.</div></div>' +
          '<div style="background:#f7f8fa;border-radius:8px;padding:10px"><b style="color:#1f2430">Discovery Info</b><div>Batch: f1d3b556...</div><div>Created: 12/5/2026, 5:56:46 PM</div></div></div></div>';
      } else if (recTab === 'fl') {
        body = '<div class="modal-b"><table><thead><tr><th>Include</th><th>Field Name</th><th>PII Type</th><th>Category</th><th>Risk Level</th><th>Retention</th><th>Source</th><th>Confidence</th></tr></thead><tbody><tr><td><span class="toggle on"></span></td><td class="tname">aadhar</td><td>Aadhaar</td><td><span class="tag blue">IDENTITY_VERIFICATION</span> ' + ic('sparkles', 'width="12" height="12" style="display:inline;color:#7c3aed"') + '</td><td><div class="selbox" style="width:110px">High ' + ic('chevd', 'width="13" height="13"') + '</div></td><td>Till deletion</td><td>imp-folder-2</td><td>' + confbar(55) + '</td></tr></tbody></table></div>';
      } else if (recTab === 'sy') {
        body = '<div class="modal-b"><table><thead><tr><th>System Name</th><th>Source Identifier</th><th>System Type</th><th>Matched System</th><th>Confidence</th></tr></thead><tbody><tr><td class="tname">Storage Cloud</td><td>imp-folder-2</td><td>INTERNAL</td><td><span class="tag med">Unmatched</span></td><td>' + confbar(60) + '</td></tr></tbody></table></div>';
      } else {
        body = '<div class="modal-b"><table><thead><tr><th>Purpose</th><th>Legal Basis</th><th>Retention</th><th>Status</th></tr></thead><tbody><tr><td class="tname">Customer Identity Verification</td><td>Explicit Consent</td><td>Till deletion</td><td><span class="statusbadge sb-green">Active</span></td></tr></tbody></table></div>';
      }
      var foot = '<div class="modal-f"><button class="btn-text" onclick="closeModal()">Cancel</button><button class="btn btn-red">Reject</button><button class="btn btn-blue">Approve &amp; Create ROPA</button></div>';
      openModal('<div class="modal">' + head + tabs + body + foot + '</div>');
      document.querySelectorAll('[data-dt]').forEach(function (b) { b.onclick = function () { recTab = b.dataset.dt; renderRecDetail(i); }; });
    }
    /* ===================== ACTIVITIES ===================== */
    const ACT_ROWS = [
      ['Customer Identity Verification and Communication Database', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Customer Financial Verification and Identity Processing', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Customer Information Database \u2013 Including Financial and Sensitive Data', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Indian Identity Verification for Customer Processing', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Customer Financial and Personal Information Management \u2013 Fraud Detection', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Loan EMI Payment Processing', ['Loan Processing'], 'Bharat FinServ Ltd.', 'Customer', 'Approved'],
      ['Aadhaar Identity Verification Processing', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Aadhaar Card Storage and Processing for Identity Verification', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Aadhaar Data Processing in Presentation Documentation', ['Securities Trading'], 'Sula Vineyards', 'Customer', 'Pending DPO Review'],
      ['Employee Background Verification', ['Employment Administr...', 'Background Verificat...'], 'Bharat FinServ Ltd.', 'Employee', 'Approved'],
      ['Liquor License Registration', ['Vendor Management'], 'Sula Vineyards', 'Vendor', 'Pending DPO Review'],
      ['Swag Store Registration', ['Member Registration'], 'EduTech Bharat Pvt. Ltd.', 'Customer', 'Pending DPO Review'],
      ['Marketing Consent for consumers', ['Marketing Communicat...'], 'DPDPAX by Jodetx Stock Exchange', 'Customer', 'Approved'],
      ['Securities Trading &amp; Settlement', ['KYC Verification', 'Securities Trading'], 'DPDPAX by Jodetx Stock Exchange', 'Customer', 'Approved'],
      ['IT Vendor Access Management', ['Vendor Management', 'Background Verificat...'], 'MediCare Health Pvt. Ltd.', 'Vendor', 'Approved'],
      ['Vendor Payment Processing', ['Vendor Management'], 'Bharat FinServ Ltd.', 'Vendor', 'Approved'],
      ['Vendor Onboarding &amp; Due Diligence', ['Vendor Management', 'KYC Verification'], 'Bharat FinServ Ltd.', 'Vendor', 'Approved'],
      ['Employee Health Insurance', ['Health &amp; Safety'], 'MediCare Health Pvt. Ltd.', 'Employee', 'Pending DPO Review'],
      ['Website Analytics &amp; Tracking', ['Visitor Management'], 'EduTech Bharat Pvt. Ltd.', 'Visitor', 'Approved']
    ];
    RENDER.activities = function () {
      var rows = ACT_ROWS.map(function (r, i) {
        return '<tr><td class="act-title act-name" onclick="event.stopPropagation(); go(\'inventory\')" style="cursor:pointer;color:#1f8fd4;font-weight:600">' + r[0] + '</td>' +
          '<td>' + r[1].map(function (t) { return '<span class="tag low" style="background:#eef0fb;color:#5566a8;margin-right:4px">' + t + '</span>'; }).join('') + '</td>' +
          '<td onclick="event.stopPropagation(); go(\'inventory\')" style="cursor:pointer;color:#1f8fd4;font-weight:600">' + r[2] + '</td><td>' + r[3] + '</td>' +
          '<td>' + (r[4] === 'Approved' ? '<span class="dotpill d-green">Approved</span>' : '<span class="dotpill d-amber">Pending DPO Review</span>') + '</td>' +
          '<td style="text-align:right;color:#9aa0ab"><span class="act-edit-trigger" style="cursor:pointer;letter-spacing:1px;font-weight:700;padding:4px 8px" data-i="' + i + '">\u22ee</span></td></tr>';
      }).join('');
      return '<div class="page-title">' + ic('list', 'width="20" height="20" style="color:#16a34a"') + ' Processing Activities</div>' +
        '<div class="toolbar" style="margin-top:14px"><div class="search">' + ic('search') + '<input placeholder="Search activities..."/></div><div class="select">All Categories ' + ic('chevd', 'width="13" height="13"') + '</div><div class="select">All Status ' + ic('chevd', 'width="13" height="13"') + '</div><div class="spacer"></div><button class="btn btn-blue">' + ic('plus') + ' Add Activity</button></div>' +
        '<div class="card"><table><thead><tr><th>Activity Name</th><th>Type</th><th>Fiduciary</th><th>Data Principal</th><th>Status</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    };
    AFTER.activities = function () {
      document.querySelectorAll('.act-name').forEach(function (el) {
        el.onclick = function () {
          go('inventory');
        };
      });
      document.querySelectorAll('.act-edit-trigger').forEach(function (el) {
        el.onclick = function () {
          openEditActivity(parseInt(el.dataset.i));
        };
      });
    };
    function updateChipsSelect(id, selectedList, allOptions, placeholderText) {
      var container = document.getElementById(id);
      if (!container) return;
      var chipsList = container.querySelector('.chips-list');
      var placeholder = container.querySelector('.placeholder');

      if (selectedList.length > 0) {
        placeholder.style.display = 'none';
        chipsList.innerHTML = selectedList.map(function (val) {
          return '<span class="form-chip">' + val + ' <span class="x" data-val="' + val + '">&times;</span></span>';
        }).join('');

        chipsList.querySelectorAll('.x').forEach(function (xBtn) {
          xBtn.onclick = function (e) {
            e.stopPropagation();
            var valToRemove = xBtn.dataset.val;
            var idx = selectedList.indexOf(valToRemove);
            if (idx > -1) {
              selectedList.splice(idx, 1);
              updateChipsSelect(id, selectedList, allOptions, placeholderText);
            }
          };
        });
      } else {
        placeholder.style.display = 'inline';
        chipsList.innerHTML = '';
      }
    }

    function showSelectDropdown(triggerEl, opts, selectedVals, isMulti, cb) {
      var existing = document.querySelector('.custom-select-dropdown');
      if (existing) {
        var wasThis = (existing.dataset.triggerId === triggerEl.id);
        existing.remove();
        if (wasThis) return;
      }

      var rect = triggerEl.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'dropdown custom-select-dropdown';
      d.dataset.triggerId = triggerEl.id;
      d.style.left = rect.left + 'px';
      d.style.top = (rect.bottom + window.scrollY) + 'px';
      d.style.width = rect.width + 'px';
      d.style.maxHeight = '240px';
      d.style.overflowY = 'auto';
      d.style.zIndex = '99999';

      d.innerHTML = opts.map(function (o) {
        var isSel = isMulti ? (selectedVals.indexOf(o) > -1) : (selectedVals === o);
        return '<div class="opt ' + (isSel ? 'sel' : '') + '" style="display:flex; justify-content:space-between; align-items:center;">' +
          '<span>' + o + '</span>' +
          (isSel && isMulti ? ic('check', 'width="14" height="14" style="color:var(--blue)"') : '') +
          '</div>';
      }).join('');

      document.body.appendChild(d);

      d.querySelectorAll('.opt').forEach(function (el, i) {
        el.onclick = function (ev) {
          ev.stopPropagation();
          cb(opts[i]);
          if (!isMulti) {
            d.remove();
          } else {
            var o = opts[i];
            var idx = selectedVals.indexOf(o);
            if (idx > -1) {
              selectedVals.splice(idx, 1);
            } else {
              selectedVals.push(o);
            }
            d.querySelectorAll('.opt').forEach(function (optEl, optIdx) {
              var optVal = opts[optIdx];
              var nowSel = selectedVals.indexOf(optVal) > -1;
              optEl.classList.toggle('sel', nowSel);
              var check = optEl.querySelector('svg');
              if (nowSel) {
                if (!check) {
                  optEl.insertAdjacentHTML('beforeend', ic('check', 'width="14" height="14" style="color:var(--blue)"'));
                }
              } else {
                if (check) check.remove();
              }
            });
          }
        };
      });

      var close = function (e) {
        if (!d.contains(e.target) && e.target !== triggerEl && !triggerEl.contains(e.target)) {
          d.remove();
          document.removeEventListener('click', close);
        }
      };
      setTimeout(function () {
        document.addEventListener('click', close);
      }, 0);
    }

    function openEditActivity(i) {
      var isNew = (i === null || i === undefined);
      var r = isNew ? [] : (ACT_ROWS[i] || []);

      var name = r[0] || '';
      var types = Array.isArray(r[1]) ? r[1].slice() : [];
      var fiduciary = r[2] || '';
      var principalCat = r[3] || '';
      var status = r[4] || 'Pending DPO Review';

      var description = r[5] || '';
      var approxPrincipals = r[6] || '';
      var involvesProfiling = r[7] !== undefined ? r[7] : false;
      var involvesADM = r[8] !== undefined ? r[8] : false;
      var admDescription = r[9] || '';
      var involvesChildren = r[10] !== undefined ? r[10] : false;
      var selectedProcessors = Array.isArray(r[11]) ? r[11].slice() : [];
      var selectedPurposes = Array.isArray(r[12]) ? r[12].slice() : [];
      var legalBasis = r[13] || 'CONSENT';
      var notice = r[14] || '';

      if (name === 'Swag Store Registration' && !description) {
        description = 'User registration for ecommerce website';
        approxPrincipals = 1000000;
        involvesProfiling = true;
        involvesADM = true;
        admDescription = 'Variable discount offers';
        involvesChildren = false;
        selectedProcessors = ['Hubspot'];
        selectedPurposes = ['Member Registration'];
        legalBasis = 'CONSENT';
        notice = 'Swag Store Registration';
      }

      function esc2(s) {
        return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      openModal('<div class="modal" style="max-width: 840px;">' +
        '<div class="modal-h"><h3>Edit Activity</h3></div>' +
        '<div class="modal-b" style="padding-top:15px">' +
        '<div class="field outlined"><label>Activity Name</label><input id="edit-act-name" value="' + esc2(name) + '"/></div>' +
        '<div class="field outlined"><label>Description</label><textarea id="edit-act-desc">' + esc2(description) + '</textarea></div>' +
        '<div class="grid2">' +
        '<div class="field outlined"><label>Activity Type</label>' +
        '<div class="selbox" id="edit-act-type" data-value="' + esc2(types.join(', ')) + '">' +
        '<span class="selected-value">' + esc2(types.join(', ') || 'Select type...') + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="field outlined"><label>Approx. Data Principals</label><input id="edit-act-principals" type="number" value="' + approxPrincipals + '"/></div>' +
        '</div>' +
        '<div style="display:flex;gap:22px;margin:4px 0 12px">' +
        '<label class="chk ' + (involvesProfiling ? 'on' : '') + '" id="chk-profiling"><span class="box">' + (involvesProfiling ? ic('check', 'width="12" height="12"') : '') + '</span> Involves Profiling</label>' +
        '<label class="chk ' + (involvesADM ? 'on' : '') + '" id="chk-adm"><span class="box">' + (involvesADM ? ic('check', 'width="12" height="12"') : '') + '</span> Involves ADM</label>' +
        '</div>' +
        '<div class="field outlined" id="field-adm-desc" style="display: ' + (involvesADM ? 'block' : 'none') + ';"><label>ADM Description</label><textarea id="edit-act-adm-desc">' + esc2(admDescription) + '</textarea></div>' +
        '<div style="margin:4px 0 14px">' +
        '<label class="chk ' + (involvesChildren ? 'on' : '') + '" id="chk-children"><span class="box">' + (involvesChildren ? ic('check', 'width="12" height="12"') : '') + '</span> Involves children\u2019s data</label>' +
        '</div>' +
        '<div class="field outlined"><label>Fiduciary</label>' +
        '<div class="selbox" id="edit-act-fiduciary" data-value="' + esc2(fiduciary) + '">' +
        '<span class="selected-value">' + esc2(fiduciary || 'Select fiduciary...') + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="field outlined"><label>Data Principal Category</label>' +
        '<div class="selbox" id="edit-act-principal-cat" data-value="' + esc2(principalCat) + '">' +
        '<span class="selected-value">' + esc2(principalCat || 'Select category...') + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#6b7280;margin-top:4px;">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#e5e7eb;color:#4b5160;font-size:9px;font-weight:bold;">i</span>' +
        ' The category of individual whose data is processed in this activity' +
        '</div>' +
        '</div>' +
        '<div class="field outlined"><label>Processors (optional)</label>' +
        '<div class="selbox chips-select-box" id="edit-act-processors">' +
        '<div class="chips-list"></div>' +
        '<span class="placeholder">Select processors...</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="field outlined"><label>Purposes</label>' +
        '<div class="selbox chips-select-box" id="edit-act-purposes">' +
        '<div class="chips-list"></div>' +
        '<span class="placeholder">Select purposes...</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="grid2">' +
        '<div class="field outlined"><label>Legal Basis</label>' +
        '<div class="selbox" id="edit-act-legal" data-value="' + esc2(legalBasis) + '">' +
        '<span class="selected-value">' + esc2(legalBasis) + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#6b7280;margin-top:4px;">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#e5e7eb;color:#4b5160;font-size:9px;font-weight:bold;">i</span>' +
        ' Select a predefined basis or add a custom one' +
        '</div>' +
        '</div>' +
        '<div class="field outlined"><label>Notice (optional)</label>' +
        '<div class="selbox" id="edit-act-notice" data-value="' + esc2(notice) + '">' +
        '<span class="selected-value">' + esc2(notice || 'Select notice...') + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f" style="border-top:1px solid #e9eaef; padding:14px 22px; display:flex; justify-content:flex-end; gap:12px; background:#fff;">' +
        '<button class="btn-text" onclick="closeModal()" style="color:#6b7280;background:none;border:none;font-weight:600;font-size:13px;padding:8px 16px;">Cancel</button>' +
        '<button class="btn btn-blue" id="edit-activity-save-btn" style="background:#1f8fd4;color:#fff;padding:8px 20px;border-radius:6px;font-weight:600;border:none;font-size:13px;">Save</button>' +
        '</div>' +
        '</div>');

      updateChipsSelect('edit-act-processors', selectedProcessors, [
        'Salesforce CRM', 'Razorpay Payment Gateway', 'AWS Cloud Infrastructure', 'CIBIL Credit Bureau',
        'Hubspot', 'GlobalTech Solutions GmbH', 'Acme Logistics Pvt Ltd', 'Zoho', 'BSE Investor Portal',
        'Learning Management System', 'Hospital Information System'
      ], 'Select processors...');

      updateChipsSelect('edit-act-purposes', selectedPurposes, [
        'Member Registration', 'Customer Identity Verification', 'Marketing Communication', 'Loan Processing', 'Health & Safety'
      ], 'Select purposes...');

      setupDropdown('edit-act-type', [
        'Registration', 'KYC Verification', 'Fraud Detection', 'Payment Processing', 'Marketing'
      ], false);

      setupDropdown('edit-act-fiduciary', [
        'DPDPAX by Jodetx Stock Exchange', 'Sula Vineyards', 'MediCare Health Pvt. Ltd.', 'EduTech Bharat Pvt. Ltd.', 'Bharat FinServ Ltd.'
      ], false);

      setupDropdown('edit-act-principal-cat', [
        'Customer', 'Employee', 'Vendor', 'Visitor'
      ], false);

      setupDropdown('edit-act-legal', [
        'CONSENT', 'CONTRACT', 'LEGITIMATE_INTEREST', 'LEGAL_OBLIGATION', 'PUBLIC_INTEREST'
      ], false);

      setupDropdown('edit-act-notice', [
        'Swag Store Registration', 'Privacy Policy', 'KYC Notice', 'Marketing Consent Notice'
      ], false);

      setupDropdown('edit-act-processors', [
        'Salesforce CRM', 'Razorpay Payment Gateway', 'AWS Cloud Infrastructure', 'CIBIL Credit Bureau',
        'Hubspot', 'GlobalTech Solutions GmbH', 'Acme Logistics Pvt Ltd', 'Zoho', 'BSE Investor Portal',
        'Learning Management System', 'Hospital Information System'
      ], true, selectedProcessors, 'Select processors...');

      setupDropdown('edit-act-purposes', [
        'Member Registration', 'Customer Identity Verification', 'Marketing Communication', 'Loan Processing', 'Health & Safety'
      ], true, selectedPurposes, 'Select purposes...');

      function setupDropdown(id, options, isMulti, selectedList, placeholderText) {
        var trigger = document.getElementById(id);
        if (!trigger) return;
        trigger.onclick = function (e) {
          e.stopPropagation();
          var currentVal = isMulti ? selectedList : trigger.getAttribute('data-value');
          showSelectDropdown(trigger, options, currentVal, isMulti, function (choice) {
            if (!isMulti) {
              trigger.setAttribute('data-value', choice);
              var labelEl = trigger.querySelector('.selected-value');
              if (labelEl) labelEl.textContent = choice;
            } else {
              updateChipsSelect(id, selectedList, options, placeholderText);
            }
          });
        };
      }

      var chkProfiling = document.getElementById('chk-profiling');
      if (chkProfiling) {
        chkProfiling.onclick = function () {
          chkProfiling.classList.toggle('on');
          var box = chkProfiling.querySelector('.box');
          box.innerHTML = chkProfiling.classList.contains('on') ? ic('check', 'width="12" height="12"') : '';
        };
      }

      var chkAdm = document.getElementById('chk-adm');
      if (chkAdm) {
        chkAdm.onclick = function () {
          chkAdm.classList.toggle('on');
          var box = chkAdm.querySelector('.box');
          var on = chkAdm.classList.contains('on');
          box.innerHTML = on ? ic('check', 'width="12" height="12"') : '';
          document.getElementById('field-adm-desc').style.display = on ? 'block' : 'none';
        };
      }

      var chkChildren = document.getElementById('chk-children');
      if (chkChildren) {
        chkChildren.onclick = function () {
          chkChildren.classList.toggle('on');
          var box = chkChildren.querySelector('.box');
          box.innerHTML = chkChildren.classList.contains('on') ? ic('check', 'width="12" height="12"') : '';
        };
      }

      var saveBtn = document.getElementById('edit-activity-save-btn');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var newName = document.getElementById('edit-act-name').value.trim();
          var newDesc = document.getElementById('edit-act-desc').value.trim();
          var newTypeStr = document.getElementById('edit-act-type').getAttribute('data-value') || '';
          var newPrincipals = document.getElementById('edit-act-principals').value;
          var newFiduciary = document.getElementById('edit-act-fiduciary').getAttribute('data-value') || '';
          var newPrincipalCat = document.getElementById('edit-act-principal-cat').getAttribute('data-value') || '';
          var newLegal = document.getElementById('edit-act-legal').getAttribute('data-value') || '';
          var newNotice = document.getElementById('edit-act-notice').getAttribute('data-value') || '';

          var isProfiling = document.getElementById('chk-profiling').classList.contains('on');
          var isAdm = document.getElementById('chk-adm').classList.contains('on');
          var newAdmDesc = document.getElementById('edit-act-adm-desc').value.trim();
          var isChildren = document.getElementById('chk-children').classList.contains('on');

          if (!newName) {
            toast('Activity Name is required', null, 'err');
            return;
          }

          var targetRow = [
            newName,
            newTypeStr ? newTypeStr.split(',').map(function (s) { return s.trim(); }).filter(Boolean) : [],
            newFiduciary,
            newPrincipalCat,
            status,
            newDesc,
            newPrincipals,
            isProfiling,
            isAdm,
            newAdmDesc,
            isChildren,
            selectedProcessors,
            selectedPurposes,
            newLegal,
            newNotice
          ];

          if (isNew) {
            ACT_ROWS.unshift(targetRow);
          } else {
            ACT_ROWS[i] = targetRow;
          }

          try {
            localStorage.setItem('dpdpx_t2_act', JSON.stringify(ACT_ROWS));
          } catch (e) { }

          closeModal();
          go('activities');
          toast('Changes saved', 'Activity updated successfully', 'ok');
        };
      }
    }

    /* ===================== DATA FIELD INVENTORY ===================== */
    var INV_ROWS = [];
    try {
      var stored = localStorage.getItem('dpdpx_t2_inv');
      if (stored) {
        INV_ROWS = JSON.parse(stored);
      } else {
        INV_ROWS = [
          ['Address', 'Personal Information', '\u2014', 'Till Account Deletion', 'Low', 'Optional'],
          ['Phone Number', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Medium', 'Required'],
          ['Email', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Medium', 'Required'],
          ['Address', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Low', 'Required'],
          ['state', 'Location Data', '\u2014', 'Till Account Deletion', 'Low', 'Optional']
        ];
      }
    } catch (e) {
      INV_ROWS = [
        ['Address', 'Personal Information', '\u2014', 'Till Account Deletion', 'Low', 'Optional'],
        ['Phone Number', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Medium', 'Required'],
        ['Email', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Medium', 'Required'],
        ['Address', 'Personal Information', 'Member Registration', 'Till Account Deletion', 'Low', 'Required'],
        ['state', 'Location Data', '\u2014', 'Till Account Deletion', 'Low', 'Optional']
      ];
    }

    function openInventoryFieldModal(idx) {
      var editing = idx !== null;
      var row = editing ? INV_ROWS[idx] : ['', '', '', '', 'Low', 'Optional'];

      var fieldName = row[0];
      var dataCategory = row[1] || 'Personal Information';
      var purpose = row[2] === '\u2014' ? 'None' : row[2];
      var retention = row[3] || 'Till Account Deletion';
      var sensitivity = row[4] || 'Low';
      var isRequired = row[5] === 'Required';
      var isActive = true;

      var categories = ['Personal Information', 'Location Data', 'Financial Information', 'Health Information'];
      var fields = ['Address', 'Phone Number', 'Email', 'state', 'First Name', 'Last Name', 'Aadhaar', 'PAN', 'Bank Account', 'Income', 'Medical History', 'Biometric', 'Prescriptions'];
      var purposes = ['Member Registration', 'Customer Identity Verification', 'Marketing Communication', 'Loan Processing', 'Health & Safety', 'None'];
      var retentions = ['Till Account Deletion', 'Till deletion', '2 years', '7 years', '10 years'];
      var sensitivities = ['Low', 'Medium', 'High'];
      var sources = ['s3://mo-privacy-s3', 'important-files', 'Demo Database(H2)', 'Salesforce CRM', 'testmdm-rds (MySQL)'];

      var html = '<div class="modal" style="max-width: 600px; width:100%">' +
        '<div class="modal-h">' +
        '<h3>' + (editing ? 'Edit Consent Field' : 'Add Consent Field') + '</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; max-height: 480px; overflow-y: auto; padding: 20px 24px;">' +

        '<div class="field outlined" style="grid-column: span 2;">' +
        '<label>Data Category</label>' +
        '<select id="inv-category" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        categories.map(function (c) { return '<option ' + (c === dataCategory ? 'selected' : '') + '>' + c + '</option>'; }).join('') +
        '</select>' +
        '<div style="font-size: 11px; color: #8a909c; margin-top: 4px;">ⓘ Filter catalog fields by data category, then select a field below</div>' +
        '</div>' +

        '<div class="field outlined" style="grid-column: span 2;">' +
        '<label>Data Field (from Catalog) *</label>' +
        '<select id="inv-field" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        fields.map(function (f) { return '<option ' + (f === fieldName ? 'selected' : '') + '>' + f + '</option>'; }).join('') +
        '</select>' +
        '</div>' +

        '<div class="field outlined" style="grid-column: span 2;">' +
        '<label>Purpose</label>' +
        '<select id="inv-purpose" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        purposes.map(function (p) { return '<option ' + (p === purpose ? 'selected' : '') + '>' + p + '</option>'; }).join('') +
        '</select>' +
        '<div style="font-size: 11px; color: #8a909c; margin-top: 4px;">ⓘ Why is this data field needed? Select from the activity\'s linked purposes</div>' +
        '</div>' +

        '<div class="field outlined" style="grid-column: span 2;">' +
        '<label>Justification</label>' +
        '<textarea id="inv-justification" placeholder="Enter justification..." style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430; resize: vertical; min-height: 60px; box-sizing: border-box;"></textarea>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Retention Type</label>' +
        '<select id="inv-retention" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        retentions.map(function (r) { return '<option ' + (r === retention ? 'selected' : '') + '>' + r + '</option>'; }).join('') +
        '</select>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Display Order</label>' +
        '<input type="number" id="inv-order" value="0" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430; box-sizing: border-box; height: 38px;"/>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Sensitivity Level</label>' +
        '<select id="inv-sensitivity" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        sensitivities.map(function (s) { return '<option ' + (s === sensitivity ? 'selected' : '') + '>' + s + '</option>'; }).join('') +
        '</select>' +
        '<div style="font-size: 11px; color: #8a909c; margin-top: 4px;">● Low: Public info, generic demographics</div>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Data Source</label>' +
        '<select id="inv-source" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; font-size:13px; background:#fff; color:#1f2430;">' +
        sources.map(function (s) { return '<option>' + s + '</option>'; }).join('') +
        '</select>' +
        '</div>' +

        '<div style="grid-column: span 2; display: flex; gap: 24px; margin-top: 8px;">' +
        '<label style="display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 600; color: #374151; cursor: pointer;">' +
        '<input type="checkbox" id="inv-required" ' + (isRequired ? 'checked' : '') + ' style="width: 16px; height: 16px; cursor: pointer;"/> Required' +
        '</label>' +
        '<label style="display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 600; color: #374151; cursor: pointer;">' +
        '<input type="checkbox" id="inv-active" ' + (isActive ? 'checked' : '') + ' style="width: 16px; height: 16px; cursor: pointer;"/> Active' +
        '</label>' +
        '</div>' +

        '</div>' +
        '<div class="modal-f" style="padding: 16px 24px; display: flex; justify-content: flex-end; gap: 12px; border-top: 1px solid var(--line-2); background: #fff;">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button id="inv-field-save" class="btn btn-blue" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; padding:0 20px; font-weight:600; cursor:pointer; height:38px;">Save</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('inv-field-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var fieldVal = document.getElementById('inv-field').value;
          var catVal = document.getElementById('inv-category').value;
          var purpVal = document.getElementById('inv-purpose').value;
          var retVal = document.getElementById('inv-retention').value;
          var sensVal = document.getElementById('inv-sensitivity').value;
          var reqVal = document.getElementById('inv-required').checked ? 'Required' : 'Optional';

          if (purpVal === 'None') purpVal = '\u2014';

          if (editing) {
            INV_ROWS[idx][0] = fieldVal;
            INV_ROWS[idx][1] = catVal;
            INV_ROWS[idx][2] = purpVal;
            INV_ROWS[idx][3] = retVal;
            INV_ROWS[idx][4] = sensVal;
            INV_ROWS[idx][5] = reqVal;
            toast('Success', 'Consent field updated successfully', 'ok');
          } else {
            INV_ROWS.unshift([fieldVal, catVal, purpVal, retVal, sensVal, reqVal]);
            toast('Success', 'Consent field added successfully', 'ok');
          }

          try {
            localStorage.setItem('dpdpx_t2_inv', JSON.stringify(INV_ROWS));
          } catch (e) { }

          closeModal();
          go('inventory');
        };
      }
    }

    function openSdkModal() {
      var html = '<div class="modal" style="max-width: 720px; width: 100%;">' +
        '<div class="modal-h">' +
        '<h3>Integrate Consent SDK</h3>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="padding: 20px 24px; display: flex; flex-direction: column; gap: 16px; max-height: 520px; overflow-y: auto;">' +

        '<div style="font-size: 13px; color: #4b5160; line-height: 1.5;">' +
        'Add this script to your website to start collecting consent for <b>Swag Store Registration</b>. The processor and activity IDs are pre-filled for this activity.' +
        '</div>' +

        '<div class="codebox" style="position: relative; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; padding: 16px; font-family: Courier New, Courier, monospace; font-size: 12.5px; line-height: 1.5; overflow-x: auto;">' +
        '<button class="copy" style="position: absolute; top: 12px; right: 12px; background: #333; color: #fff; border: 1px solid #444; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; display: flex; align-items: center; gap: 6px;">' +
        ic('copy', 'width="12" height="12"') + ' Copy' +
        '</button>' +
        '<pre style="margin: 0;">' +
        '&lt;script src="https://your-domain.com/consent/sdk-assets/mo-consent-sdk.js"&gt;&lt;/script&gt;\n' +
        '&lt;script&gt;\n' +
        '  MoConsent.init({\n' +
        '    sdkKey: \'pk_live_xxxxxxxx\',\n' +
        '    mode: \'consent\',\n' +
        '    processorId: \'851c8ddb-d23c-422e-a643-21aaa0111394\',\n' +
        '    activityId: \'2d117531-8a38-4922-8ca7-ba1adc518437\',\n' +
        '    userId: \'&lt;USER_ID&gt;\',\n' +
        '    displayMode: \'popup\',\n' +
        '    baseUrl: \'https://your-domain.com\',\n' +
        '    onConsentGranted: function(result) {\n' +
        '      console.log(\'Consent granted, result\');\n' +
        '    }\n' +
        '  });\n' +
        '&lt;/script&gt;' +
        '</pre>' +
        '</div>' +

        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px;">' +
        '<div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; background: #fff;">' +
        '<b style="font-size: 13.5px; color: #1f2430; display: block; margin-bottom: 6px;">DPDP Consent Popup</b>' +
        '<p style="font-size: 12px; color: #6b7280; margin: 0 0 12px; line-height: 1.5;">' +
        'Embed a consent collection popup on your website. Users see ROPA-driven consent fields with categories, purposes, and retention info.' +
        '</p>' +
        '<code style="font-size: 11px; color: #1f8fd4; background: #f0f7ff; padding: 2px 6px; border-radius: 4px; display: block; word-break: break-all;">' +
        'Set mode: \'consent\' and displayMode: \'popup\' or \'inline\'' +
        '</code>' +
        '</div>' +
        '<div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; background: #fff;">' +
        '<b style="font-size: 13.5px; color: #1f2430; display: block; margin-bottom: 6px;">Cookie Consent Banner</b>' +
        '<p style="font-size: 12px; color: #6b7280; margin: 0 0 12px; line-height: 1.5;">' +
        'Add a GDPR/DPDP cookie consent banner. Categories are auto-configured from the admin panel\'s cookie settings.' +
        '</p>' +
        '<code style="font-size: 11px; color: #1f8fd4; background: #f0f7ff; padding: 2px 6px; border-radius: 4px; display: block; word-break: break-all;">' +
        'Set mode: \'cookie\' and displayMode: \'banner\'' +
        '</code>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '<div class="modal-f" style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-2); background: #fff;">' +
        '<button class="btn btn-ghost" style="border: 1px solid #c4c8d1; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; height: 38px; color: #1f8fd4;">' +
        ic('refresh', 'width="14" height="14" style="transform: rotate(90deg);"') + ' Download JS SDK' +
        '</button>' +
        '<div style="display: flex; gap: 12px;">' +
        '<button class="btn-text" onclick="closeModal()">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>';

      openModal(html);

      // Copy button logic
      var copyBtn = document.querySelector('.codebox .copy');
      if (copyBtn) {
        copyBtn.onclick = function () {
          var codeText = document.querySelector('.codebox pre').textContent;
          navigator.clipboard.writeText(codeText).then(function () {
            toast('Success', 'SDK code copied to clipboard', 'ok');
          });
        };
      }
    }

    RENDER.inventory = function () {
      var rows = INV_ROWS.map(function (r, i) {
        var sensDot = r[4] === 'Low' ? '<span style="color:#3b82f6; margin-right:4px;">●</span>' : r[4] === 'Medium' ? '<span style="color:#f97316; margin-right:4px;">●</span>' : '<span style="color:#ef4444; margin-right:4px;">●</span>';
        var reqDot = r[5] === 'Required' ? '<span style="color:#f97316; margin-right:4px;">●</span>' : '<span style="color:#6b7280; margin-right:4px;">●</span>';

        var editBtn = '<button class="inv-edit-btn" data-i="' + i + '" style="background:#eff6ff; border:none; border-radius:4px; padding:6px; margin-right:6px; cursor:pointer; color:#1d4ed8; display:inline-flex; align-items:center; justify-content:center;">' + ic('edit', 'width="14" height="14"') + '</button>';
        var delBtn = '<button class="inv-del-btn" data-i="' + i + '" style="background:#fef2f2; border:none; border-radius:4px; padding:6px; cursor:pointer; color:#b91c1c; display:inline-flex; align-items:center; justify-content:center;">' + ic('trash', 'width="14" height="14"') + '</button>';

        return '<tr>' +
          '<td class="tname inv-field-name" data-i="' + i + '" style="cursor:pointer; color:#1f8fd4; font-weight:600;">' + r[0] + '</td>' +
          '<td style="color:#4b5160;">' + r[1] + '</td>' +
          '<td style="color:#4b5160;">' + (r[2] === '\u2014' ? '<span class="muted">\u2014</span>' : r[2]) + '</td>' +
          '<td>' +
          '<span style="background:#f1f5f9; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500;">' + r[3] + '</span>' +
          '</td>' +
          '<td>' +
          '<span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;">' + sensDot + r[4] + '</span>' +
          '</td>' +
          '<td>' +
          '<span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;">' + reqDot + r[5] + '</span>' +
          '</td>' +
          '<td>' +
          '<span style="background:#f0fdf4; border:1px solid #dcfce7; color:#16a34a; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;"><span style="color:#16a34a; margin-right:4px;">●</span> Active</span>' +
          '</td>' +
          '<td>' + editBtn + delBtn + '</td>' +
          '</tr>';
      }).join('');

      return '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">' +
        '<button class="btn-text" onclick="go(\'activities\')" style="background:none; border:none; cursor:pointer; display:flex; align-items:center; font-size:20px; font-weight:700; color:#1f2430; gap:8px;">' +
        '<span style="font-size:22px;">←</span> Swag Store Registration' +
        '</button>' +
        '<div class="spacer" style="flex:1"></div>' +
        '<button id="inv-btn-sdk" class="btn" style="background:#15803d; color:#fff; border:none; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
        ic('copy', 'width="14" height="14" style="stroke:#fff;"') + ' Get SDK' +
        '</button>' +
        '<button class="btn" style="background:#fff; border:1px solid #cbd5e1; color:#374151; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
        ic('refresh', 'width="14" height="14"') + ' Customize Consent Page' +
        '</button>' +
        '<button class="btn" style="background:#fff; border:1px solid #cbd5e1; color:#374151; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
        ic('shield', 'width="14" height="14"') + ' Age Verification' +
        '</button>' +
        '<button id="inv-btn-add" class="btn btn-blue" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
        ic('plus', 'width="14" height="14" style="stroke:#fff;"') + ' Add Field' +
        '</button>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom:16px; background:none; border:none; padding:0;">' +
        '<div class="search" style="position:relative;">' +
        ic('search') +
        '<input id="inv-search" placeholder="Search fields..." style="padding-left:32px; height:38px; border-radius:6px; border:1px solid #cbd5e1; width:260px; outline:none; background:#fff;"/>' +
        '</div>' +
        '</div>' +
        '<div class="card">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Field Name</th>' +
        '<th>Data Category</th>' +
        '<th>Purpose</th>' +
        '<th>Retention</th>' +
        '<th>Sensitivity Level</th>' +
        '<th>Required</th>' +
        '<th>Active</th>' +
        '<th>Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="inv-table-body">' +
        rows +
        '</tbody>' +
        '</table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
        'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
        ' 1–' + INV_ROWS.length + ' of ' + INV_ROWS.length + ' ' +
        '<span style="display:flex;gap:8px;align-items:center;">' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>';
    };

    AFTER.inventory = function () { };

    // Delegated listeners for Inventory (Swag Store Fields)
    document.addEventListener('click', function (e) {
      var btnSdk = e.target.closest('#inv-btn-sdk');
      if (btnSdk) {
        e.stopImmediatePropagation();
        openSdkModal();
        return;
      }

      var btnAdd = e.target.closest('#inv-btn-add');
      if (btnAdd) {
        e.stopImmediatePropagation();
        openInventoryFieldModal(null);
        return;
      }

      var invFieldName = e.target.closest('.inv-field-name');
      if (invFieldName) {
        e.stopPropagation();
        var idx = parseInt(invFieldName.dataset.i);
        openInventoryFieldModal(idx);
        return;
      }

      var btnEdit = e.target.closest('.inv-edit-btn');
      if (btnEdit) {
        e.stopPropagation();
        var idx = parseInt(btnEdit.dataset.i);
        openInventoryFieldModal(idx);
        return;
      }

      var btnDel = e.target.closest('.inv-del-btn');
      if (btnDel) {
        e.stopPropagation();
        var idx = parseInt(btnDel.dataset.i);
        if (confirm('Remove this field?')) {
          INV_ROWS.splice(idx, 1);
          try {
            localStorage.setItem('dpdpx_t2_inv', JSON.stringify(INV_ROWS));
          } catch (ex) { }
          go('inventory');
          toast('Success', 'Field deleted', 'ok');
        }
        return;
      }
    });

    document.addEventListener('input', function (e) {
      if (e.target.id === 'inv-search') {
        var q = e.target.value.toLowerCase().trim();
        var rows = document.querySelectorAll('#inv-table-body tr');
        rows.forEach(function (row) {
          var nameCell = row.querySelector('.tname');
          if (!nameCell) return;
          var name = nameCell.textContent.toLowerCase();
          row.style.display = name.indexOf(q) > -1 ? '' : 'none';
        });
      }
    });

    /* ===================== DATA FLOW ===================== */
    let flowTab = 'flow';
    RENDER.dataflow = function () {
      var filters = '<div class="flowfilters"><div class="select" style="min-width:150px">Data Principal: CUSTOMER ' + ic('chevd', 'width="13" height="13"') + '</div><span class="muted" style="font-size:12.5px">102 fields, 21 activities, 8 processors</span></div>' +
        '<div class="flowfilters"><div class="select">All Fiduciaries ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All Legal Bases ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All Processor Types ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All Levels ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All PII Fields ' + ic('chevd', 'width="12" height="12"') + '</div><button class="btn btn-blue" style="padding:7px 12px">' + ic('share') + ' Hide Data Flow</button><div class="spacer" style="flex:1"></div><span class="muted" style="font-size:12px">100%</span></div>';
      var pii = ['First Name', 'Last Name', 'Medical History', 'Biometric Identification', 'Aadhaar Number', 'PAN Card Number', 'Residential Address', 'Income Details', 'Bank Account Number', 'Employment Certificate', 'Academic Transcripts', 'Parent Contact Details', 'Email &amp; Phone for Offers', 'aadhar', 'Payment Method', 'Identity Proof Type'];
      var lay1 = '<div class="lay"><div class="lay-h">Layer 1: Data Principal</div><div class="lay-b"><div class="node"><div class="nt"><span style="width:22px;height:22px;border-radius:6px;background:#e6f4fc;color:#1f8fd4;display:grid;place-items:center;font-weight:700;font-size:11px">C</span> CUSTOMER</div><div class="ns">Data Principal Category</div><div class="acc">Personal Data (102)</div>' + pii.map(function (p) { return '<span class="pchip">' + p + '</span>'; }).join('') + '</div></div></div>';
      var fids = [['DPDPAX by Jodetx Stock Exchange', 'CIN-U65100MH2023PLC123456'], ['Bharat FinServ Ltd.', 'CIN-U65100MH2023PLC123456'], ['EduTech Bharat Pvt. Ltd.', 'CIN-U80900KA2019PTC112233'], ['MediCare Health Pvt. Ltd.', 'CIN-U85100HR2020PTC098765'], ['Sula Vineyards', 'L15549MH2003PLC139352']];
      var lay2 = '<div class="lay"><div class="lay-h">Layer 2: Data Fiduciary</div><div class="lay-b">' + fids.map(function (f) { return '<div class="node"><div class="nt">' + f[0] + '</div><div class="ns">' + f[1] + '</div></div>'; }).join('') + '</div></div>';
      var lay3 = '<div class="lay"><div class="lay-h">Layer 3: Data Processors</div><div class="lay-b">' +
        '<div class="node"><div class="nt">' + ic('server', 'width="14" height="14" style="display:inline"') + ' Hospital Information System</div><div style="margin-top:5px"><span class="badgemini bm-int">INTERNAL</span> <span class="badgemini bm-nodpa">No DPA</span></div><div class="acc">Data Accessed</div>' + ['First Name', 'Last Name', 'Medical History', 'Prescription Records', 'Biometric Identification'].map(function (p) { return '<span class="pchip">' + p + '</span>'; }).join('') + '<div class="ns" style="margin-top:8px">Activities: Patient Registration &amp; Treatment</div></div>' +
        '<div class="node"><div class="nt">' + ic('server', 'width="14" height="14" style="display:inline"') + ' Core Banking System (CBS)</div><div style="margin-top:5px"><span class="badgemini bm-int">INTERNAL</span> <span class="badgemini bm-nodpa">No DPA</span></div><div class="acc">Data Accessed</div>' + ['Aadhaar Number', 'PAN Card Number', 'Residential Address', 'Income Details', 'Bank Account Number', 'Employment Certificate'].map(function (p) { return '<span class="pchip">' + p + '</span>'; }).join('') + '<div class="ns" style="margin-top:8px">Activities: Customer KYC Onboarding, Personal Loan Processing</div></div>' +
        '<div class="node"><div class="nt">' + ic('server', 'width="14" height="14" style="display:inline"') + ' Salesforce CRM</div><div style="margin-top:5px"><span class="badgemini bm-saas">SAAS</span> <span class="badgemini bm-dpa">DPA Signed</span></div><div class="acc">Data Accessed</div>' + ['First Name', 'Email', 'Phone Number'].map(function (p) { return '<span class="pchip">' + p + '</span>'; }).join('') + '</div></div></div>';
      var lay4 = '<div class="lay"><div class="lay-h">Layer 4: PII Data Store</div><div class="lay-b">' +
        '<div class="node"><div class="nt">PERSONAL_INFORMATION <span class="badgemini bm-std">STANDARD</span></div><div style="margin-top:6px">' + ['First Name', 'Last Name', 'Email', 'Phone Number', 'Address', 'gender'].map(function (p) { return '<div class="ns" style="padding:1px 0">' + p + '</div>'; }).join('') + '</div></div>' +
        '<div class="node"><div class="nt">HEALTH_DATA <span class="badgemini bm-std">STANDARD</span></div><div style="margin-top:6px">' + ['Medical History', 'Prescription Records', 'patient diagnosis notes', 'prescription &amp; medications'].map(function (p) { return '<div class="ns" style="padding:1px 0">' + p + '</div>'; }).join('') + '</div></div>' +
        '<div class="node"><div class="nt">FINANCIAL_DATA <span class="badgemini bm-std">STANDARD</span></div><div style="margin-top:6px">' + ['Aadhaar Number', 'PAN Card Number', 'Bank Account Number', 'Income Details'].map(function (p) { return '<div class="ns" style="padding:1px 0">' + p + '</div>'; }).join('') + '</div></div></div></div>';
      return '<div class="page-title">' + ic('share', 'width="19" height="19" style="color:#1f8fd4"') + ' Data Flow</div><div class="page-sub">DPDP Act 2023 \u2014 4-Layer Data Processing Architecture</div>' +
        '<div class="tabs"><button class="' + (flowTab === 'ov' ? 'on' : '') + '" data-ft="ov">' + ic('grid', 'width="14" height="14" style="display:inline;vertical-align:-2px"') + ' Overview</button><button class="' + (flowTab === 'flow' ? 'on' : '') + '" data-ft="flow">' + ic('share', 'width="14" height="14" style="display:inline;vertical-align:-2px"') + ' Data Flow</button></div>' +
        filters + '<div class="layers">' + lay1 + lay2 + lay3 + lay4 + '</div>';
    };
    AFTER.dataflow = function () { document.querySelectorAll('[data-ft]').forEach(function (b) { b.onclick = function () { flowTab = b.dataset.ft; go('dataflow'); }; }); };
    /* ===================== MODAL + DROPDOWN HELPERS ===================== */
    function openModal(html) { var r = document.getElementById('modal-root'); r.innerHTML = '<div class="overlay" id="ovl">' + html + '</div>'; document.getElementById('ovl').onclick = function (e) { if (e.target.id === 'ovl') closeModal(); }; }
    function closeModal() { document.getElementById('modal-root').innerHTML = ''; }
    function showDropdown(x, y, opts, sel, cb) { var d = document.createElement('div'); d.className = 'dropdown'; d.style.left = x + 'px'; d.style.top = y + 'px'; d.innerHTML = opts.map(function (o) { return '<div class="opt ' + (o === sel ? 'sel' : '') + '">' + o + '</div>'; }).join(''); document.body.appendChild(d); d.querySelectorAll('.opt').forEach(function (el, i) { el.onclick = function (ev) { ev.stopPropagation(); cb(opts[i]); d.remove(); }; }); var close = function () { d.remove(); document.removeEventListener('click', close); }; setTimeout(function () { document.addEventListener('click', close); }, 0); }
    function dsrStatus(s) { var m = { 'Approved': 'sb-green', 'Denied': 'sb-red', 'Partial Success': 'sb-blue', 'Denied by DPO': 'sb-red', 'Pending': 'sb-amber', 'Pending DPO Approval': 'sb-amber' }; return '<span class="statusbadge ' + (m[s] || 'sb-gray') + '">' + s + '</span>'; }

    /* ===================== DSR / EXERCISE RIGHTS ===================== */
    const DSR_ROWS = [
      ['AR-027', 'Access', 'radhesham.joshi+admin@xecurify.com', '11/5/2026, 12:39:33 PM', 'Approved'],
      ['WR-001', 'Withdraw', 'radhesham.joshi+admin@xecurify.com', '5/5/2026, 10:55:29 AM', 'Approved'],
      ['ER-003', 'Erasure', 'radhesham.joshi+admin@xecurify.com', '5/5/2026, 10:55:12 AM', 'Approved'],
      ['AR-026', 'Access', 'radhesham.joshi+admin@xecurify.com', '5/5/2026, 10:54:10 AM', 'Denied'],
      ['CR-013', 'Correction', 'shubhanshu.sharma+enduser@xecurify.com', '22/4/2026, 11:49:54 PM', 'Partial Success'],
      ['CR-012', 'Correction', 'shubhanshu.sharma+enduser@xecurify.com', '22/4/2026, 7:12:55 PM', 'Partial Success'],
      ['CR-011', 'Correction', 'shubhanshu.sharma+enduser@xecurify.com', '22/4/2026, 5:55:49 PM', 'Partial Success'],
      ['AR-025', 'Access', 'shubhanshu.sharma+enduser@xecurify.com', '22/4/2026, 5:53:29 PM', 'Denied by DPO'],
      ['AR-024', 'Access', 'navneet+1@xecurify.com', '22/4/2026, 5:51:21 PM', 'Pending'],
      ['AR-023', 'Access', 'navneet+1@xecurify.com', '22/4/2026, 4:47:49 PM', 'Pending DPO Approval']
    ];
    RENDER.dsr = function () {
      var rows = DSR_ROWS.map(function (r) {
        var act = '';
        if (r[4] === 'Pending') act = '<div class="acts"><span class="ok">' + ic('check') + '</span><span class="no">' + ic('x') + '</span></div>';
        else if (r[4] === 'Partial Success' || r[4] === 'Pending DPO Approval') act = '<span style="color:#c2870c">' + ic('clock', 'width="15" height="15"') + '</span>';
        return '<tr data-dsr="' + r[0] + '" data-rt="' + r[1] + '" style="cursor:pointer"><td class="tname">' + r[0] + '</td><td>' + r[1] + '</td><td style="color:#3a6fd1">' + r[2] + '</td><td class="muted">' + r[3] + '</td><td>' + dsrStatus(r[4]) + '</td><td style="text-align:center">' + act + '</td></tr>';
      }).join('');
      return '<div class="page-title">Exercise Rights Requests <span class="tag blue">Admin</span></div>' +
        '<div class="page-sub">Review data principal rights requests (access, correction, erasure, etc.). Approve to forward to DPO, then complete or deny after DPO sign-off.</div>' +
        '<div class="kpis k4">' +
        kpi('13', 'Action Required', '', 'alert', '#1483c4', '#e6f4fc') +
        kpi('11', 'With DPO', '', 'clock', '#1f8fd4', '#e6f4fc') +
        kpi('6', 'Approved', '', 'check', '#16a34a', '#e7f7ee') +
        kpi('2', 'Denied', '', 'x', '#dc2626', '#fdeaea') +
        '</div>' +
        '<div class="toolbar"><div class="search" style="flex:1">' + ic('search') + '<input style="width:100%" placeholder="Search by email or reference"/></div></div>' +
        '<div class="card"><table><thead><tr><th>Reference</th><th>Right Type</th><th>User Email</th><th>Submitted ' + ic('chevd', 'width="12" height="12" style="display:inline;vertical-align:-2px"') + '</th><th>Current Status</th><th style="text-align:center">Actions</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px">Rows per page: <span class="select" style="padding:4px 8px">10 ' + ic('chevd', 'width="12" height="12"') + '</span> 1\u201310 of 36 <span style="display:flex;gap:8px"><span style="cursor:pointer">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span><span style="cursor:pointer">' + ic('chevr', 'width="16" height="16"') + '</span></span></div></div>';
    };
    AFTER.dsr = function () { document.querySelectorAll('[data-dsr]').forEach(function (el) { el.onclick = function () { var t = el.dataset.rt; if (t === 'Correction') openCorrectionModal(el.dataset.dsr, el.querySelector('td:nth-child(3)').textContent); else openAccessModal(el.dataset.dsr, el.querySelector('td:nth-child(3)').textContent); }; }); };
    function stepper(active) {
      var steps = ['Review request', 'Execute updates', 'Finalize'];
      return '<div style="display:flex;align-items:center;gap:8px;margin:6px 0 18px">' +
        steps.map(function (s, i) {
          var done = i + 1 < active;
          var on = i + 1 <= active;
          var numContent = done ? ic('check', 'width="12" height="12"') : (i + 1);
          return '<div style="display:flex;align-items:center;gap:8px;flex:' + (i < 2 ? '1' : '0') + '">' +
            '<span style="width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:700;background:' + (on ? '#1f8fd4' : '#e7e9ee') + ';color:#fff">' + numContent + '</span>' +
            '<span style="font-size:12.5px;font-weight:600;color:' + (on ? '#1f2430' : '#9aa0ab') + '">' + s + '</span>' +
            (i < 2 ? '<span style="flex:1;height:2px;background:' + (i + 2 <= active ? '#1f8fd4' : '#e7e9ee') + '"></span>' : '') +
            '</div>';
        }).join('') +
        '</div>';
    }

    var DSR_MODAL_STATE = {
      ref: '',
      email: '',
      type: '', // 'Correction', 'Access', 'Erasure', 'Withdraw'
      step: 1,
      activeTab: '',
      mainChecked: false,
      groups: [],
      remarks: '',
      notes: ''
    };

    function openDsrModal(ref, email, type) {
      var status = 'Pending';
      var rowData = DSR_ROWS.find(function (r) { return r[0] === ref; });
      if (rowData) status = rowData[4];

      DSR_MODAL_STATE.ref = ref;
      DSR_MODAL_STATE.email = email;
      DSR_MODAL_STATE.type = type;
      DSR_MODAL_STATE.step = 1;
      DSR_MODAL_STATE.status = status;
      DSR_MODAL_STATE.mainChecked = false;
      DSR_MODAL_STATE.notes = '';

      if (type === 'Correction') {
        DSR_MODAL_STATE.activeTab = 'correction';
        DSR_MODAL_STATE.groups = [
          {
            name: 'Aadhaar Number',
            subtitle: 'AWS S3 + 2 more',
            count: 4,
            checked: false,
            status: 'Pending approval',
            detailsVisible: true,
            paths: [
              's3://mo-privacy-s3/aadhar.csv',
              'azure://important-files/piidata/aadhar.csv',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhaar_number',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/description'
            ]
          }
        ];
        DSR_MODAL_STATE.remarks = 'Aadhaar number updated successfully in all matching records.';
      } else if (type === 'Access') {
        DSR_MODAL_STATE.activeTab = 'matches';
        DSR_MODAL_STATE.groups = [
          {
            name: 'Aadhaar',
            subtitle: 'AWS S3 + 2 more',
            count: 4,
            checked: false,
            status: 'Pending approval',
            detailsVisible: true,
            paths: [
              's3://mo-privacy-s3/aadhar.csv',
              'azure://important-files/piidata/aadhar.csv',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhaar_number',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/description'
            ]
          },
          {
            name: 'Driver License',
            subtitle: 'User PII Database',
            count: 1,
            checked: false,
            status: 'Pending approval',
            detailsVisible: false,
            paths: [
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_user_identity_documents/driving_license_number'
            ]
          },
          {
            name: 'Pan Card',
            subtitle: 'User PII Database',
            count: 1,
            checked: false,
            status: 'Pending approval',
            detailsVisible: false,
            paths: [
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_user_identity_documents/pan_number'
            ]
          }
        ];
        DSR_MODAL_STATE.remarks = 'All requested personal data compiled and sent to the data principal.';
      } else if (type === 'Erasure') {
        DSR_MODAL_STATE.activeTab = 'erasure';
        DSR_MODAL_STATE.groups = [
          {
            name: 'Aadhaar',
            subtitle: 'AWS S3 + 2 more',
            count: 4,
            checked: false,
            status: 'Pending approval',
            detailsVisible: true,
            paths: [
              's3://mo-privacy-s3/aadhar.csv',
              'azure://important-files/piidata/aadhar.csv',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhaar_number',
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/description'
            ]
          },
          {
            name: 'Driver License',
            subtitle: 'User PII Database',
            count: 1,
            checked: false,
            status: 'Pending approval',
            detailsVisible: false,
            paths: [
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_user_identity_documents/driving_license_number'
            ]
          },
          {
            name: 'Pan Card',
            subtitle: 'User PII Database',
            count: 1,
            checked: false,
            status: 'Pending approval',
            detailsVisible: false,
            paths: [
              'testmdm-rds.cvpa8lte3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_user_identity_documents/pan_number'
            ]
          }
        ];
        DSR_MODAL_STATE.remarks = 'All requested records erased and confirmed with DPO.';
      } else {
        DSR_MODAL_STATE.activeTab = 'withdraw';
        DSR_MODAL_STATE.groups = [
          {
            name: 'Marketing & Promotions Consent',
            subtitle: 'Consent Database & CRM',
            count: 2,
            checked: false,
            status: 'Pending approval',
            detailsVisible: true,
            paths: [
              'consent_registry_db/marketing_consent_status',
              'hubspot_integration/contacts/opt_in_status'
            ]
          }
        ];
        DSR_MODAL_STATE.remarks = 'Consent revoked and marketing opt-out applied in Hubspot.';
      }

      drawDsrModal();
    }

    function drawDsrModal() {
      var s = DSR_MODAL_STATE;

      var titleMap = {
        'Correction': 'Correction Request',
        'Access': 'Access Request',
        'Erasure': 'Erasure Request',
        'Withdraw': 'Withdraw Consent Request'
      };

      var html = '<div class="modal" style="max-width:760px;">' +
        '<div class="modal-h">' +
        '<div>' +
        '<h3>' + titleMap[s.type] + '</h3>' +
        '<div class="muted" style="font-size:12px;margin-top:3px">' + s.email + ' &middot; ' + s.ref + '</div>' +
        '</div>' +
        '<div>' + dsrStatus(s.status) + '</div>' +
        '</div>' +
        '<div class="modal-b" style="padding: 0 22px 18px;">' +
        stepper(s.step) +
        (s.step === 1 ? drawDsrStep1() : s.step === 2 ? drawDsrStep2() : drawDsrStep3()) +
        '</div>' +
        '<div class="modal-f">' +
        (s.step > 1 ? '<button class="btn btn-ghost" id="dsr-btn-back">' + ic('chevr', 'width="14" height="14" style="transform:rotate(180deg);display:inline;vertical-align:-2px;"') + ' Back</button>' : '') +
        '<div style="margin-left:auto; display:flex; gap:8px; align-items:center;">' +
        '<button class="btn-text" onclick="closeModal()">Close</button>' +
        (s.step < 3 ? '<button class="btn btn-blue" id="dsr-btn-next">Next</button>' : '<button class="btn btn-blue" id="dsr-btn-finish">Complete Request</button>') +
        '</div>' +
        '</div>' +
        '</div>';

      openModal(html);

      var nextBtn = document.getElementById('dsr-btn-next');
      if (nextBtn) {
        nextBtn.onclick = function () {
          s.step += 1;
          drawDsrModal();
        };
      }

      var backBtn = document.getElementById('dsr-btn-back');
      if (backBtn) {
        backBtn.onclick = function () {
          s.step -= 1;
          drawDsrModal();
        };
      }

      var finishBtn = document.getElementById('dsr-btn-finish');
      if (finishBtn) {
        finishBtn.onclick = function () {
          var rowData = DSR_ROWS.find(function (r) { return r[0] === s.ref; });
          if (rowData) {
            rowData[4] = 'Approved';
            try { localStorage.setItem('dpdpx_t2_dsr', JSON.stringify(DSR_ROWS)); } catch (e) { }
          }
          closeModal();
          go('dsr');
          if (window.toast) toast('Request Completed', 'The request has been successfully processed and finalized.', 'ok');
        };
      }

      if (s.step === 1) {
        wireDsrStep1();
      } else if (s.step === 2) {
        wireDsrStep2();
      }
    }

    function drawDsrStep1() {
      var s = DSR_MODAL_STATE;

      var catText = s.type === 'Correction' ? 'Sensitive Data' : s.type === 'Withdraw' ? 'Consent Revocation' : 'All Personal Data';
      var detailsText = s.type === 'Correction' ? 'update my aadhar number' : s.type === 'Withdraw' ? 'Withdraw consent for marketing communications' : 'Provide all PII linked to my email';
      var proofText = s.type === 'Withdraw' ? 'Verified (Email OTP)' : 'Verified (Govt ID)';

      var details =
        '<div style="font-weight:700;color:#1f8fd4;font-size:12px;margin-bottom:8px">Request details</div>' +
        '<div style="display:grid;grid-template-columns:auto 1fr;gap:6px 18px;font-size:12.5px;margin-bottom:16px">' +
        '<span class="muted">Data category:</span><span style="text-align:right">' + catText + '</span>' +
        '<span class="muted">Details:</span><span style="text-align:right">' + detailsText + '</span>' +
        '<span class="muted">Identity proof:</span><span style="text-align:right">' + proofText + '</span>' +
        '</div>' +
        '<div class="tabs" style="margin-bottom:12px">' +
        '<button class="' + (s.activeTab !== 'notes' ? 'on' : '') + '" id="dsr-tab-main">' + (s.type === 'Correction' ? 'Requested correction (1)' : s.type === 'Access' ? 'Matches found (' + s.groups.reduce(function (acc, g) { return acc + g.count; }, 0) + ')' : s.type === 'Erasure' ? 'Requested Erasure' : 'Requested Withdrawal') + '</button>' +
        '<button class="' + (s.activeTab === 'notes' ? 'on' : '') + '" id="dsr-tab-notes">Processing notes</button>' +
        '</div>';

      if (s.activeTab === 'notes') {
        return details +
          '<div class="card" style="padding:14px;box-shadow:none"><div style="font-weight:700;color:#1f8fd4;font-size:12px;margin-bottom:8px">Processing notes</div>' +
          '<textarea id="dsr-notes-input" placeholder="Add internal notes or remarks about this request..." style="width:100%;height:80px;border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-family:inherit;font-size:12.5px;resize:none;outline:none;">' + (s.notes || '') + '</textarea></div>';
      }

      if (s.type === 'Correction') {
        return details +
          '<div class="card" style="padding:14px;box-shadow:none"><div style="font-weight:700;color:#1f8fd4;font-size:12px">Requested correction</div><div class="muted" style="font-size:11.5px;margin:4px 0 12px">Review the current value and the user\u2019s requested replacement before executing updates.</div>' +
          '<div style="display:flex;align-items:center;gap:12px"><div style="flex:1"><b style="font-size:13px">Aadhaar</b><div class="muted" style="font-size:11.5px">Correction item 1</div></div><span class="tag low" style="background:#f1f5f9;color:#475569;border:1px solid #cbd5e1;padding:4px 8px;border-radius:6px;font-size:11.5px;">Current: ********4321</span><span class="tag blue" style="background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;padding:4px 8px;border-radius:6px;font-size:11.5px;font-weight:600;">Requested: 1234-1234-1234</span></div></div>';
      } else if (s.type === 'Access') {
        var rows = s.groups.map(function (g) {
          return g.paths.map(function (p) {
            return '<tr><td class="tname" style="white-space:nowrap">' + g.name + '</td><td><div>' + (g.name === 'Aadhaar' ? '9986-8228-9793' : g.name === 'Driver License' ? 'DL-WB-1000005' : 'FRMHT1005P') + '</div><div class="muted" style="font-size:11px;margin-top:2px">Source: Match found in: ' + p + '</div></td><td style="text-align:right"><span class="tag low" style="border:1px solid #e3c9c9;background:#fff;color:#a05757">Found</span></td></tr>';
          }).join('');
        }).join('');
        return details + '<div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--line); border-radius: 8px;"><table><tbody>' + rows + '</tbody></table></div>';
      } else if (s.type === 'Erasure') {
        return details +
          '<div class="card" style="padding:14px;box-shadow:none"><div style="font-weight:700;color:#dc2626;font-size:12px">Data Erasure Notice</div><div class="muted" style="font-size:11.5px;margin:4px 0 12px">All PII associated with this user will be permanently deleted or anonymized.</div>' +
          '<div style="display:flex;align-items:center;gap:12px"><div style="flex:1"><b style="font-size:13px">All Personal Identifiers</b><div class="muted" style="font-size:11.5px">Aadhaar, DL, PAN Card, and contact details</div></div><span class="tag high" style="background:#fdeaea;color:#dc2626;border:1px solid #f3c2c2;padding:4px 8px;border-radius:6px;font-size:11.5px;font-weight:600;">Action: Delete</span></div></div>';
      } else {
        return details +
          '<div class="card" style="padding:14px;box-shadow:none"><div style="font-weight:700;color:#b7791f;font-size:12px">Consent Revocation Notice</div><div class="muted" style="font-size:11.5px;margin:4px 0 12px">The user wants to withdraw their consent for the following purpose:</div>' +
          '<div style="display:flex;align-items:center;gap:12px"><div style="flex:1"><b style="font-size:13px">Marketing & Promotions</b><div class="muted" style="font-size:11.5px">Consent granted on 12/4/2026 via Notice v1.0</div></div><span class="tag med" style="background:#fef3cd;color:#b7791f;border:1px solid #fbd38d;padding:4px 8px;border-radius:6px;font-size:11.5px;font-weight:600;">Action: Revoke</span></div></div>';
      }
    }

    function wireDsrStep1() {
      var s = DSR_MODAL_STATE;
      var mainTab = document.getElementById('dsr-tab-main');
      var notesTab = document.getElementById('dsr-tab-notes');

      if (mainTab && notesTab) {
        mainTab.onclick = function () {
          var textarea = document.getElementById('dsr-notes-input');
          if (textarea) s.notes = textarea.value;
          s.activeTab = 'main';
          drawDsrModal();
        };
        notesTab.onclick = function () {
          s.activeTab = 'notes';
          drawDsrModal();
        };
      }
    }

    function drawDsrStep2() {
      var s = DSR_MODAL_STATE;

      var anyChecked = s.groups.some(function (g) { return g.checked; });
      var allApproved = s.groups.every(function (g) { return g.status === 'Approved' || g.status === 'Success'; });

      var bannerHtml = '';
      if (allApproved) {
        bannerHtml = '<div style="background:#e7f7ee;border:1px solid #d1fae5;border-radius:8px;padding:12px 16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;color:#065f46;">' +
          '<div style="width:24px;height:24px;border-radius:50%;background:#10b981;color:#fff;display:grid;place-items:center;flex:none;">' +
          ic('check', 'width="14" height="14"') +
          '</div>' +
          '<div style="font-size:13px;font-weight:500;">All source-system updates have been approved and are ready.</div>' +
          '</div>';
      } else if (anyChecked) {
        bannerHtml = '<div style="background:#e6f4fc;border:1px solid #cfe6f6;border-radius:8px;padding:12px 16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;color:#1f3b5c;">' +
          '<div style="width:24px;height:24px;border-radius:50%;background:#2ba6e0;color:#fff;display:grid;place-items:center;flex:none;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' +
          '</div>' +
          '<div style="font-size:13px;font-weight:500;">Review in progress. Click the checkmark button on the right to approve findings.</div>' +
          '</div>';
      } else {
        bannerHtml = '<div style="background:#e6f4fc;border:1px solid #cfe6f6;border-radius:8px;padding:12px 16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;color:#1f3b5c;">' +
          '<div style="width:24px;height:24px;border-radius:50%;background:#2ba6e0;color:#fff;display:grid;place-items:center;flex:none;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' +
          '</div>' +
          '<div style="font-size:13px;font-weight:500;">Start review first to enable source-system updates.</div>' +
          '</div>';
      }

      var cardsHtml = s.groups.map(function (g, idx) {
        var pathsList = g.detailsVisible
          ? '<div class="group-details" style="margin-top:12px; padding-top:12px; border-top:1px solid var(--line-2); font-size:12.5px; display: flex; flex-direction: column; gap: 8px;">' +
          g.paths.map(function (p) {
            return '<div class="muted" style="font-family: monospace; word-break: break-all;">' + p + '</div>';
          }).join('') +
          '</div>'
          : '';

        var statusBadgeClass = g.status === 'Approved' || g.status === 'Success' ? 'sb-green' : 'sb-amber';
        var checkBtnStyle = g.status === 'Approved' || g.status === 'Success'
          ? 'background:#10b981; border-color:#10b981; color:#fff;'
          : 'background:none; border-color:var(--line); color:var(--ink-3);';

        return '<div class="card" style="padding: 16px; margin-bottom: 12px; box-shadow: none;">' +
          '<div style="display: flex; align-items: flex-start; justify-content: space-between;">' +
          '<div>' +
          '<b style="font-size: 14px; color: var(--ink);">' + g.name + '</b>' +
          '<div class="muted" style="font-size: 12px; margin-top: 2px;">' + g.subtitle + '</div>' +
          '</div>' +
          '<div style="display: flex; align-items: center; gap: 12px;">' +
          '<span class="tag" style="background: #eef2ff; color: #4f46e5; border: 1px solid #e0e7ff; font-weight: 600; font-size: 11.5px; padding: 4px 8px; border-radius: 12px;">' + g.count + ' detections</span>' +
          '<input type="checkbox" class="group-chk" data-idx="' + idx + '" ' + (g.checked ? 'checked' : '') + ' style="width: 16px; height: 16px; cursor: pointer;" />' +
          '<span class="statusbadge ' + statusBadgeClass + '" style="font-size: 11.5px; padding: 4px 10px;">' + g.status + '</span>' +
          '<button class="btn-approve-group" data-idx="' + idx + '" style="border: 1px solid; border-radius: 6px; width: 28px; height: 28px; display: grid; place-items: center; cursor: pointer; transition: 0.15s; ' + checkBtnStyle + '">' +
          ic('check', 'width="14" height="14"') +
          '</button>' +
          '</div>' +
          '</div>' +
          pathsList +
          '<div style="margin-top: 10px;">' +
          '<a href="#" class="toggle-details-link" data-idx="' + idx + '" style="color: #1f8fd4; font-size: 12px; font-weight: 600; text-decoration: none;">' + (g.detailsVisible ? 'Hide details' : 'Show details') + '</a>' +
          '</div>' +
          '</div>';
      }).join('');

      return '<div style="font-weight:700;color:var(--navy);font-size:15px;margin-bottom:4px">Source systems</div>' +
        '<div class="muted" style="font-size:12.5px;margin-bottom:16px">Select detections, preview impact, and submit source updates without leaving this workflow.</div>' +
        bannerHtml +
        '<div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">' +
        '<input type="checkbox" id="chk-stage-all" ' + (s.mainChecked ? 'checked' : '') + ' style="width:16px; height:16px; cursor:pointer;" />' +
        '<label for="chk-stage-all" style="font-weight:600; font-size:13px; cursor:pointer; color:var(--ink);">Select source findings to stage an update request</label>' +
        '</div>' +
        '<div style="max-height:300px; overflow-y:auto; padding-right:4px;">' +
        cardsHtml +
        '</div>';
    }

    function wireDsrStep2() {
      var s = DSR_MODAL_STATE;

      var mainChk = document.getElementById('chk-stage-all');
      if (mainChk) {
        mainChk.onchange = function () {
          s.mainChecked = mainChk.checked;
          s.groups.forEach(function (g) {
            g.checked = mainChk.checked;
          });
          drawDsrModal();
        };
      }

      document.querySelectorAll('.group-chk').forEach(function (chk) {
        chk.onchange = function () {
          var idx = parseInt(chk.dataset.idx);
          s.groups[idx].checked = chk.checked;
          s.mainChecked = s.groups.every(function (g) { return g.checked; });
          drawDsrModal();
        };
      });

      document.querySelectorAll('.toggle-details-link').forEach(function (lnk) {
        lnk.onclick = function (e) {
          e.preventDefault();
          var idx = parseInt(lnk.dataset.idx);
          s.groups[idx].detailsVisible = !s.groups[idx].detailsVisible;
          drawDsrModal();
        };
      });

      document.querySelectorAll('.btn-approve-group').forEach(function (btn) {
        btn.onclick = function () {
          var idx = parseInt(btn.dataset.idx);
          var g = s.groups[idx];
          if (g.status === 'Approved' || g.status === 'Success') {
            g.status = 'Pending approval';
          } else {
            g.status = 'Approved';
            g.checked = true;
            if (window.toast) toast('Approved', g.name + ' source update approved.', 'ok');
          }
          s.mainChecked = s.groups.every(function (g) { return g.checked; });
          drawDsrModal();
        };
      });
    }

    function drawDsrStep3() {
      var s = DSR_MODAL_STATE;

      var labelMap = {
        'Correction': 'Notify user via email',
        'Access': 'Send encrypted PDF report to ' + s.email,
        'Erasure': 'Send erasure certificate to ' + s.email,
        'Withdraw': 'Send confirmation email to ' + s.email
      };

      return '<div style="font-weight:700;color:#1f8fd4;font-size:12px;margin-bottom:8px">Finalize Request</div>' +
        '<div class="muted" style="font-size:11.5px;margin:4px 0 12px">Confirm DPO sign-off and complete the request workflow.</div>' +
        '<div class="card" style="padding:14px;box-shadow:none;display:flex;flex-direction:column;gap:14px;">' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
        '<input type="checkbox" id="chk-dpo" checked style="width:16px;height:16px;cursor:pointer;" />' +
        '<label for="chk-dpo" style="font-weight:600;font-size:12.5px;cursor:pointer;">DPO Sign-off Obtained</label>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
        '<input type="checkbox" id="chk-notify" checked style="width:16px;height:16px;cursor:pointer;" />' +
        '<label for="chk-notify" style="font-weight:600;font-size:12.5px;cursor:pointer;">' + labelMap[s.type] + '</label>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:6px;">' +
        '<span class="muted" style="font-size:12px;font-weight:600;">Resolution Remarks</span>' +
        '<textarea id="txt-remarks" style="width:100%;height:60px;border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-family:inherit;font-size:12.5px;resize:none;outline:none;">' + s.remarks + '</textarea>' +
        '</div>' +
        '</div>';
    }

    function openCorrectionModal(ref, email) { openDsrModal(ref, email, 'Correction'); }
    function openAccessModal(ref, email) { openDsrModal(ref, email, 'Access'); }
    function openErasureModal(ref, email) { openDsrModal(ref, email, 'Erasure'); }
    function openWithdrawModal(ref, email) { openDsrModal(ref, email, 'Withdraw'); }
    /* ===================== GENERIC (RECONSTRUCTED) PAGES ===================== */
    function sb(t, c) { return '<span class="statusbadge ' + c + '">' + t + '</span>'; }
    function tg(t, c) { return '<span class="tag ' + c + '">' + t + '</span>'; }
    function bm(t, c) { return '<span class="badgemini ' + c + '">' + t + '</span>'; }
    function genPage(c) {
      var kp = c.kpis ? '<div class="kpis k4">' + c.kpis.map(function (k) { return kpi(k[0], k[1], k[2] || '', k[3], k[4], k[5]); }).join('') + '</div>' : '';
      var th = c.cols.map(function (h) { return '<th>' + h + '</th>'; }).join('');
      var tr = c.rows.map(function (r) { return '<tr>' + r.map(function (cell, i) { return '<td' + (i === 0 ? ' class="tname"' : '') + '>' + cell + '</td>'; }).join('') + '<td><div class="acts"><span class="e">' + ic('eye') + '</span><span class="e">' + ic('edit') + '</span><span class="no" style="color:#dc2626">' + ic('trash') + '</span></div></td></tr>'; }).join('');
      return '<div class="page-title">' + ic(c.icon, 'width="20" height="20" style="color:' + c.color + '"') + ' ' + c.title + '</div>' + (c.sub ? '<div class="page-sub">' + c.sub + '</div>' : '<div style="height:14px"></div>') + kp + '<div class="toolbar"><div class="search">' + ic('search') + '<input placeholder="Search..."/></div>' + (c.filters || ['All Status']).map(function (f) { return '<div class="select">' + f + ' ' + ic('chevd', 'width="12" height="12"') + '</div>'; }).join('') + '<div class="spacer"></div>' + (c.add ? '<button class="btn btn-blue">' + ic('plus') + ' ' + c.add + '</button>' : '') + '</div><div class="card"><table><thead><tr>' + th + '<th>Actions</th></tr></thead><tbody>' + tr + '</tbody></table></div>';
    }
    RENDER.fiduciaries = function () { return genPage({ title: 'Data Fiduciaries', icon: 'building', color: '#1f8fd4', sub: 'Organizations that determine the purpose and means of processing personal data under the DPDP Act 2023.', add: 'Add Fiduciary', filters: ['All Industries'], kpis: [['5', 'Total Fiduciaries', '', 'building', '#1f8fd4', '#e6f4fc'], ['4', 'Active', '', 'check', '#16a34a', '#e7f7ee'], ['21', 'Linked Activities', '', 'list', '#1483c4', '#e6f4fc'], ['1', 'Pending Review', '', 'clock', '#b7791f', '#fef3cd']], cols: ['Fiduciary Name', 'CIN', 'Industry', 'Activities', 'Data Principals', 'Status'], rows: [['DPDPAX by Jodetx Stock Exchange', 'U65100MH2023PLC123456', 'Financial Services', '6', '12,40,000', sb('Active', 'sb-green')], ['Bharat FinServ Ltd.', 'U65923KA2018PLC104512', 'Banking &amp; Finance', '5', '8,75,000', sb('Active', 'sb-green')], ['EduTech Bharat Pvt. Ltd.', 'U80900KA2019PTC112233', 'Education', '4', '3,20,000', sb('Active', 'sb-green')], ['MediCare Health Pvt. Ltd.', 'U85100HR2020PTC098765', 'Healthcare', '4', '2,10,000', sb('Active', 'sb-green')], ['Sula Vineyards', 'L15549MH2003PLC139352', 'Manufacturing', '2', '95,000', sb('Pending Review', 'sb-amber')]] }); };
    RENDER.processors = function () { return genPage({ title: 'Data Processors', icon: 'server', color: '#7c3aed', sub: 'Third parties and internal systems that process personal data on behalf of a fiduciary.', add: 'Add Processor', filters: ['All Types', 'All DPA'], kpis: [['8', 'Total Processors', '', 'server', '#7c3aed', '#f1eafe'], ['3', 'DPA Signed', '', 'check', '#16a34a', '#e7f7ee'], ['4', 'Internal', '', 'db', '#5b6270', '#eef0f3'], ['5', 'Missing DPA', '', 'alert', '#dc2626', '#fdeaea']], cols: ['Processor Name', 'Type', 'DPA Status', 'Data Accessed', 'Activities', 'Risk'], rows: [['Hospital Information System', bm('INTERNAL', 'bm-int'), bm('No DPA', 'bm-nodpa'), '5 fields', '1', sb('High', 'sb-red')], ['Core Banking System (CBS)', bm('INTERNAL', 'bm-int'), bm('No DPA', 'bm-nodpa'), '6 fields', '2', sb('High', 'sb-red')], ['Salesforce CRM', bm('SAAS', 'bm-saas'), bm('DPA Signed', 'bm-dpa'), '3 fields', '4', sb('Low', 'sb-green')], ['Hubspot', bm('SAAS', 'bm-saas'), bm('DPA Signed', 'bm-dpa'), '2 fields', '3', sb('Low', 'sb-green')], ['AWS S3 Storage', bm('SAAS', 'bm-saas'), bm('DPA Signed', 'bm-dpa'), '12 fields', '7', sb('Medium', 'sb-amber')]] }); };
    RENDER.purposes = function () { return genPage({ title: 'Purposes', icon: 'flag', color: '#7c3aed', sub: 'Specified, lawful purposes for which personal data is collected and processed.', add: 'Add Purpose', cols: ['Purpose', 'Linked Activities', 'Legal Basis', 'Retention', 'Status'], rows: [['Member Registration', '4', tg('Consent', 'blue'), 'Till Account Deletion', sb('Active', 'sb-green')], ['Customer Identity Verification', '6', tg('Explicit Consent', 'blue'), 'Till deletion', sb('Active', 'sb-green')], ['Marketing Communication', '2', tg('Consent', 'blue'), '2 years', sb('Active', 'sb-green')], ['Loan Processing', '1', tg('Contract', 'purple'), '7 years', sb('Active', 'sb-green')], ['Health &amp; Safety', '3', tg('Legal Obligation', 'amber'), '10 years', sb('Active', 'sb-green')]] }); };
    RENDER.notices = function () { return genPage({ title: 'Notices', icon: 'bell', color: '#2ba6e0', sub: 'Privacy notices presented to data principals before or at the time of collecting consent.', add: 'Create Notice', filters: ['All Languages'], cols: ['Notice Name', 'Version', 'Language', 'Linked Activity', 'Published', 'Status'], rows: [['Swag Store Registration', 'v2.1', 'English', 'Swag Store Registration', '12/4/2026', sb('Published', 'sb-green')], ['Privacy Policy', 'v3.0', 'English', 'Multiple', '5/3/2026', sb('Published', 'sb-green')], ['KYC Notice', 'v1.4', 'English / Hindi', 'Securities Trading', '22/2/2026', sb('Published', 'sb-green')], ['Marketing Consent Notice', 'v1.0', 'English', 'Marketing Consent', '\u2014', sb('Draft', 'sb-gray')]] }); };
    RENDER.cookies = function () { return genPage({ title: 'Cookie Consent', icon: 'cookie', color: '#0ea5b7', sub: 'Manage cookie categories and the consent banner shown to website visitors.', add: 'Add Cookie', filters: ['All Categories'], kpis: [['24', 'Total Cookies', '', 'cookie', '#0ea5b7', '#e0f5f8'], ['6', 'Necessary', '', 'check', '#16a34a', '#e7f7ee'], ['9', 'Analytics', '', 'bars', '#1f8fd4', '#e6f4fc'], ['9', 'Marketing', '', 'trend', '#1483c4', '#e6f4fc']], cols: ['Cookie Name', 'Category', 'Provider', 'Duration', 'Consent Required'], rows: [['moconsent_id', tg('Necessary', 'high'), 'DPDPAX by Jodetx', '1 year', sb('No', 'sb-gray')], ['sessionid', tg('Necessary', 'high'), 'Self', 'Session', sb('No', 'sb-gray')], ['_ga', tg('Analytics', 'blue'), 'Google', '2 years', sb('Yes', 'sb-amber')], ['_gid', tg('Analytics', 'blue'), 'Google', '24 hours', sb('Yes', 'sb-amber')], ['_fbp', tg('Marketing', 'purple'), 'Meta', '3 months', sb('Yes', 'sb-amber')]] }); };
    RENDER.assessments = function () { return genPage({ title: 'Assessments', icon: 'clip', color: '#16a34a', sub: 'Data Protection Impact Assessments (DPIA) and Legitimate Interest Assessments for high-risk processing.', add: 'New Assessment', cols: ['Assessment', 'Type', 'Linked Activity', 'Risk Score', 'Status'], rows: [['Aadhaar Processing DPIA', tg('DPIA', 'purple'), 'KYC Verification', 'High', sb('In Review', 'sb-amber')], ['Health Records DPIA', tg('DPIA', 'purple'), 'Patient Treatment', 'High', sb('Approved', 'sb-green')], ['Marketing LIA', tg('LIA', 'blue'), 'Marketing Communication', 'Medium', sb('Approved', 'sb-green')], ['Cross-Border Transfer Assessment', tg('TIA', 'gray'), 'Salesforce CRM', 'Medium', sb('Draft', 'sb-gray')]] }); };
    var OFFLINE_STATE = {
      submissions: [
        { time: '12/5/2026, 4:28:17 PM', guid: '36d863ca-6763-4dea-b3cf-9d4f557ac3c4', email: '—', activity: '—', fields: 49 },
        { time: '11/5/2026, 5:45:36 PM', guid: '36d863ca-6763-4dea-b3cf-9d4f557ac3c4', email: '—', activity: '—', fields: 40 },
        { time: '5/5/2026, 5:18:48 PM', guid: '36d863ca-6763-4dea-b3cf-9d4f557ac3c4', email: '—', activity: '—', fields: 43 },
        { time: '5/5/2026, 5:14:21 PM', guid: '36d863ca-6763-4dea-b3cf-9d4f557ac3c4', email: '—', activity: '—', fields: 39 }
      ],
      selectedFile: null
    };

    RENDER.offline = function () {
      var s = OFFLINE_STATE;

      var pageHtml = '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; background: #f8fafc; height: 100%; display: flex; flex-direction: column;">' +
        '<div style="margin-bottom: 20px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Offline Consents</h2>' +
        '<div class="muted" style="font-size: 13.5px; margin-bottom: 12px;">Upload a physical consent form (image or PDF) to extract fields via OCR, review them, and record the consent digitally.</div>' +
        '</div>';

      // Stepper
      pageHtml += '<div style="display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--line); background: #fff; padding: 18px 24px; border-radius: var(--radius); margin-bottom: 20px; box-shadow: var(--shadow);">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<div style="width: 28px; height: 28px; border-radius: 50%; background: #1f8fd4; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 13px;">1</div>' +
        '<div>' +
        '<div style="font-weight: 700; color: var(--navy); font-size: 13px;">Upload Document</div>' +
        '<div class="muted" style="font-size: 11px;">Select PDF or image</div>' +
        '</div>' +
        '</div>' +
        '<div style="flex: 1; height: 1px; background: var(--line); margin: 0 20px;"></div>' +
        '<div style="display: flex; align-items: center; gap: 12px; opacity: 0.65;">' +
        '<div style="width: 28px; height: 28px; border-radius: 50%; background: #9aa0ab; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 13px;">2</div>' +
        '<div>' +
        '<div style="font-weight: 700; color: var(--navy); font-size: 13px;">Review & Submit</div>' +
        '<div class="muted" style="font-size: 11px;">Verify & record consent</div>' +
        '</div>' +
        '</div>' +
        '</div>';

      // Upload Box
      var dropzoneText = s.selectedFile ? s.selectedFile.name : 'Click to choose a file';
      var dropzoneBg = s.selectedFile ? '#f0fdf4' : '#f8fafc';
      var dropzoneBorder = s.selectedFile ? '2px dashed #16a34a' : '2px dashed #cbd5e1';
      var btnBg = s.selectedFile ? '#1f8fd4' : '#e2e8f0';
      var btnColor = s.selectedFile ? '#fff' : '#94a3b8';
      var btnCursor = s.selectedFile ? 'pointer' : 'not-allowed';
      var btnDisabled = s.selectedFile ? '' : 'disabled';

      pageHtml += '<div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); margin-bottom: 20px;">' +
        '<div id="offline-dropzone" style="border: ' + dropzoneBorder + '; border-radius: 8px; padding: 40px 20px; text-align: center; cursor: pointer; background: ' + dropzoneBg + '; transition: border-color 0.15s, background-color 0.15s; margin-bottom: 20px; position: relative;">' +
        '<input type="file" id="offline-file-input" style="display: none;" accept="image/*,application/pdf" />' +
        '<div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">' +
        '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="' + (s.selectedFile ? '#16a34a' : '#64748b') + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 4px;">' +
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
        '<polyline points="14 2 14 8 20 8"/>' +
        '<line x1="12" y1="18" x2="12" y2="12"/>' +
        '<polyline points="9 15 12 12 15 15"/>' +
        '</svg>' +
        '<span style="font-weight: 600; color: #475569; font-size: 13.5px;" id="dropzone-text">' + dropzoneText + '</span>' +
        '</div>' +
        '</div>' +

        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">' +
        '<div>' +
        '<select id="offline-activity" style="width: 100%; border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; font-size: 13px; color: #475569; background: #fff; outline: none; cursor: pointer; appearance: none; -webkit-appearance: none; background-image: url(\'data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%237a8190%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.4c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\'); background-repeat: no-repeat; background-position: right 14px top 50%; background-size: 10px auto; padding-right: 30px;">' +
        '<option value="">Processing Activity (Optional)</option>' +
        '<option value="KYC Verification">KYC Verification</option>' +
        '<option value="Marketing Communication">Marketing Communication</option>' +
        '<option value="Member Registration">Member Registration</option>' +
        '</select>' +
        '</div>' +
        '<div style="display: flex; align-items: center; gap: 8px;">' +
        '<select id="offline-template" style="flex: 1; border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; font-size: 13px; color: #475569; background: #fff; outline: none; cursor: pointer; appearance: none; -webkit-appearance: none; background-image: url(\'data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%237a8190%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.4c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\'); background-repeat: no-repeat; background-position: right 14px top 50%; background-size: 10px auto; padding-right: 30px;">' +
        '<option value="">Extraction Template (Optional)</option>' +
        '<option value="Standard Consent Form">Standard Consent Form</option>' +
        '<option value="Customer Registration Form">Customer Registration Form</option>' +
        '</select>' +
        '<button class="btn btn-ghost" style="border: 1px solid var(--line); border-radius: 8px; width: 38px; height: 38px; padding: 0; display: grid; place-items: center; flex-shrink: 0;" title="Template Settings">' +
        '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' +
        '</button>' +
        '</div>' +
        '</div>' +

        '<button class="btn" id="btn-offline-extract" ' + btnDisabled + ' style="margin-bottom: 20px; font-weight: 600; border-radius: 8px; padding: 10px 18px; background: ' + btnBg + '; color: ' + btnColor + '; border: none; cursor: ' + btnCursor + '; display: inline-flex; align-items: center; gap: 8px; transition: background-color 0.15s;">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' +
        'Extract Fields' +
        '</button>' +

        '<div style="display: flex; align-items: flex-start; gap: 12px; border: 1px solid #cfe6f6; background: var(--blue-soft); padding: 14px 18px; border-radius: 8px; color: var(--navy);">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
        '<div>' +
        '<div style="font-weight: 700; font-size: 13.5px; margin-bottom: 2px; color: var(--navy);">Documents are not stored</div>' +
        '<div style="font-size: 12px; color: var(--navy-d); opacity: 0.8;">Files are processed in real time and are not retained on the server.</div>' +
        '</div>' +
        '</div>' +
        '</div>';

      // Recent Submissions Section
      pageHtml += '<div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow);">' +
        '<div style="padding: 16px 20px; border-bottom: 1px solid var(--line);">' +
        '<h3 style="font-size: 14.5px; font-weight: 700; color: var(--navy);">Recent Submissions</h3>' +
        '</div>' +
        '<div style="overflow-x: auto;">' +
        '<table style="width: 100%; border-collapse: collapse; text-align: left;">' +
        '<thead>' +
        '<tr style="background: #f8fafc; border-bottom: 1px solid var(--line);">' +
        '<th style="padding: 12px 20px; font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em;">Date & Time</th>' +
        '<th style="padding: 12px 20px; font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em;">GUID</th>' +
        '<th style="padding: 12px 20px; font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em;">Email</th>' +
        '<th style="padding: 12px 20px; font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em;">Activity</th>' +
        '<th style="padding: 12px 20px; font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em; text-align: right;">Fields</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

      s.submissions.forEach(function (sub) {
        pageHtml += '<tr style="border-bottom: 1px solid var(--line-2);">' +
          '<td style="padding: 14px 20px; color: var(--ink);">' + sub.time + '</td>' +
          '<td style="padding: 14px 20px; font-family: monospace; color: var(--ink-2); font-size: 12px;">' + sub.guid + '</td>' +
          '<td style="padding: 14px 20px; color: var(--ink-2);">' + sub.email + '</td>' +
          '<td style="padding: 14px 20px; color: var(--ink-2);">' + sub.activity + '</td>' +
          '<td style="padding: 14px 20px; text-align: right;">' +
          '<span style="display: inline-block; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2px 10px; font-size: 12px; font-weight: 600; color: #475569;">' + sub.fields + '</span>' +
          '</td>' +
          '</tr>';
      });

      pageHtml += '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>';

      return pageHtml;
    };

    AFTER.offline = function () {
      var s = OFFLINE_STATE;

      var dropzone = document.getElementById('offline-dropzone');
      var fileInput = document.getElementById('offline-file-input');

      if (dropzone && fileInput) {
        dropzone.onclick = function () {
          fileInput.click();
        };

        fileInput.onchange = function (e) {
          if (e.target.files && e.target.files[0]) {
            s.selectedFile = e.target.files[0];

            // Re-render layout
            var view = document.getElementById('view');
            if (view) {
              view.innerHTML = RENDER.offline();
              AFTER.offline();
            }
          }
        };
      }

      var extractBtn = document.getElementById('btn-offline-extract');
      if (extractBtn) {
        extractBtn.onclick = function () {
          if (!s.selectedFile) return;

          var activityVal = document.getElementById('offline-activity').value || '—';

          // Disable button and change text to extracting...
          extractBtn.disabled = true;
          extractBtn.style.background = '#e2e8f0';
          extractBtn.style.color = '#94a3b8';
          extractBtn.style.cursor = 'not-allowed';
          extractBtn.innerHTML = '<span style="display:inline-block; width:12px; height:12px; border:2px solid #94a3b8; border-top-color:transparent; border-radius:50%; animation: spin 1s linear infinite; margin-right:8px;"></span>Extracting...';

          // Add spin keyframe dynamically if not present
          if (!document.getElementById('spin-style')) {
            var style = document.createElement('style');
            style.id = 'spin-style';
            style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
            document.head.appendChild(style);
          }

          setTimeout(function () {
            // Generate mock submission entry
            var now = new Date();
            var timeStr = now.toLocaleDateString() + ', ' + now.toLocaleTimeString();
            var guid = '36d863ca-6763-4dea-b3cf-' + Math.random().toString(16).substr(2, 12);
            var fieldsCount = Math.floor(Math.random() * 20) + 15; // Random fields between 15 and 35

            s.submissions.unshift({
              time: timeStr,
              guid: guid,
              email: '—',
              activity: activityVal,
              fields: fieldsCount
            });

            s.selectedFile = null;

            // Re-render
            var view = document.getElementById('view');
            if (view) {
              view.innerHTML = RENDER.offline();
              AFTER.offline();
            }

            toast('OCR Scan Completed', 'Extracted ' + fieldsCount + ' consent fields from document.', 'ok');
          }, 1500);
        };
      }
    };

    var discoveryActiveItem = 'sharepoint';

    function renderSharePointContent() {
      return '<div class="discovery-tabs">' +
        '<button class="active">' + ic('grid', 'width="14" height="14"') + ' API Configuration</button>' +
        '<button>' + ic('shield', 'width="14" height="14"') + ' Policy Configuration</button>' +
        '</div>' +
        '<div class="info-banner">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
        '<div>SharePoint API Configuration: Configure Azure AD application credentials to allow scanning of SharePoint and OneDrive. Use the Client ID, Tenant ID, and Client Secret from your Azure app registration.</div>' +
        '</div>' +
        '<div class="config-card configured">' +
        '<div class="config-card-header">' +
        '<div class="status-badge-green">' +
        ic('check', 'width="20" height="20" style="stroke: #16a34a; stroke-width: 3;"') +
        '<span>SharePoint API Configured</span>' +
        '</div>' +
        '<div style="display: flex; gap: 10px;">' +
        '<button class="btn-outline-blue" id="sp-btn-edit">' + ic('edit', 'width="14" height="14"') + ' Edit</button>' +
        '<button class="btn-outline-blue" id="sp-btn-scan" style="background: #1f8fd4; color: #fff; border-color: #1f8fd4;">' + ic('sparkles', 'width="14" height="14" style="stroke: #fff;"') + ' Start scan</button>' +
        '</div>' +
        '</div>' +
        '<div class="config-grid">' +
        '<div class="config-item"><label>Client ID</label><span>5bb5f419-3f65-4131-88fb-a5d28a8361d9</span></div>' +
        '<div class="config-item"><label>Tenant ID</label><span>07ad8cca-ce19-449f-81d8-08677065d1f0</span></div>' +
        '<div class="config-item"><label>Domain filter</label><span>@moxecurify.onmicrosoft.com</span></div>' +
        '<div class="config-item"><label>Created on</label><span>Feb 23, 2026 at 12:46:25 PM</span></div>' +
        '<div class="config-item"><label>Last updated</label><span>Feb 23, 2026 at 12:46:25 PM</span></div>' +
        '</div>' +
        '</div>';
    }

    function renderGmailContent() {
      return '<div class="discovery-tabs">' +
        '<button class="active">' + ic('usercheck', 'width="14" height="14"') + ' Service Account Configuration</button>' +
        '<button>' + ic('shield', 'width="14" height="14"') + ' Policy Configuration</button>' +
        '</div>' +
        '<div class="info-banner">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
        '<div>Service Account Configuration: A service account is required to access and scan files in your Google Drive. This should be configured by an administrator with appropriate permissions to create and manage service accounts in your Google Cloud Platform.</div>' +
        '</div>' +
        '<div class="config-card configured">' +
        '<div class="config-card-header">' +
        '<div class="status-badge-green">' +
        ic('check', 'width="20" height="20" style="stroke: #16a34a; stroke-width: 3;"') +
        '<span>Service Account Configured</span>' +
        '</div>' +
        '<div style="display: flex; gap: 10px;">' +
        '<button class="btn-outline-blue" id="gmail-btn-update">' + ic('edit', 'width="14" height="14"') + ' Update</button>' +
        '<button class="btn-outline-red" id="gmail-btn-delete">' + ic('trash', 'width="14" height="14"') + ' Delete</button>' +
        '</div>' +
        '</div>' +
        '<div class="config-grid">' +
        '<div class="config-item"><label>Service Account Type</label><span>service_account</span></div>' +
        '<div class="config-item"><label>Google Cloud Project ID</label><span>virtual-charger-468810-f7</span></div>' +
        '<div class="config-item"><label>Google Workspace Domain</label><span>prashant.email</span></div>' +
        '<div class="config-item"><label>Admin Email</label><span>admin@modemo.cloud</span></div>' +
        '<div class="config-item"><label>Created On</label><span>Feb 23, 2026 at 12:44:49 PM</span></div>' +
        '<div class="config-item"><label>Last Updated</label><span>Feb 23, 2026 at 12:44:49 PM</span></div>' +
        '</div>' +
        '<div style="margin-top: 16px; font-size: 12px; color: #6b7280; font-style: italic;">' +
        'Note: Sensitive information (Private Key, Client Email, Client ID) is not displayed for security reasons.' +
        '</div>' +
        '</div>';
    }

    function renderDatabaseContent() {
      return '<h2 style="font-size:20px; font-weight:700; color:#1f2430; margin-bottom:4px;">Database Discovery</h2>' +
        '<div class="subtitle">Configure database datasource connections for data discovery scans.</div>' +
        '<div class="discovery-tabs">' +
        '<button class="active">' + ic('gear', 'width="14" height="14"') + ' Configuration</button>' +
        '<button>' + ic('shield', 'width="14" height="14"') + ' Policy Settings</button>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0;">' +
        '<div class="search" style="position: relative;">' +
        ic('search') +
        '<input placeholder="Search by Name, Host or Type" style="padding-left: 32px; height: 38px; border-radius: 6px; border: 1px solid #c4c8d1; width: 260px; outline: none; background: #fff;"/>' +
        '</div>' +
        '<button class="btn btn-blue" id="db-btn-add" style="background: #1f8fd4; color: #fff; height: 38px; border: none; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">' +
        ic('plus') + ' Add Configuration' +
        '</button>' +
        '</div>' +
        '<div class="card" style="overflow: visible;">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Name</th>' +
        '<th>Type</th>' +
        '<th>Host</th>' +
        '<th>Port</th>' +
        '<th>Database</th>' +
        '<th style="text-align: right; padding-right: 24px;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td class="tname">MySQL</td>' +
        '<td><span class="tag gray" style="background: #eef0f3; color: #5b6270; border: 1px solid #cbd2dd; border-radius: 4px; padding: 2px 6px; font-weight: bold; font-size: 11px;">MYSQL</span></td>' +
        '<td style="color: #4b5160;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com</td>' +
        '<td>3306</td>' +
        '<td>user_pii_db</td>' +
        '<td style="text-align: right; padding-right: 24px; position: relative;">' +
        '<span style="cursor: pointer; font-weight: bold; font-size: 16px; padding: 4px 8px;" id="db-actions-trigger">⋮</span>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>';
    }

    function renderPlaceholderContent(title) {
      return '<h2>' + title + ' Discovery</h2>' +
        '<div class="subtitle">Configure ' + title + ' datasource connections for data discovery scans.</div>' +
        '<div class="discovery-tabs">' +
        '<button class="active">' + ic('gear', 'width="14" height="14"') + ' Configuration</button>' +
        '<button>' + ic('shield', 'width="14" height="14"') + ' Policy Settings</button>' +
        '</div>' +
        '<div class="config-card" style="text-align: center; padding: 40px; color: #8a909c; display: flex; flex-direction: column; align-items: center; justify-content: center;">' +
        ic('db', 'width="48" height="48" style="margin: 0 auto 16px; color: #cbd2dd;"') +
        '<div style="font-size: 16px; font-weight: 600; color: #4b5160; margin-bottom: 8px;">No Configuration Found</div>' +
        '<div style="font-size: 13px; margin-bottom: 20px;">Set up a new connection to start scanning ' + title + '.</div>' +
        '<button class="btn btn-blue" style="background: #1f8fd4; color: #fff; border: none; border-radius: 6px; padding: 8px 20px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; margin: 0 auto; cursor: pointer;">' +
        ic('plus') + ' Configure ' + title +
        '</button>' +
        '</div>';
    }

    function renderEndpointContent() {
      var rowsHtml = ENDPOINT_POLICIES.map(function (policy, i) {
        return '<tr>' +
          '<td class="tname">' + policy.name + '</td>' +
          '<td>' +
          '<span class="toggle ep-toggle ' + (policy.status ? 'on' : '') + '" data-i="' + i + '" style="cursor:pointer;"></span>' +
          '</td>' +
          '<td style="text-align: right; padding-right: 24px; position: relative;">' +
          '<span class="ep-actions-trigger" data-i="' + i + '" style="cursor: pointer; font-weight: bold; font-size: 16px; padding: 4px 8px;">⋮</span>' +
          '</td>' +
          '</tr>';
      }).join('');

      if (ENDPOINT_POLICIES.length === 0) {
        rowsHtml = '<tr><td colspan="3" style="text-align:center; color:#6b7280; padding:24px;">No policies configured. Click "+ Configure Data Discovery Policy" to add one.</td></tr>';
      }

      return '<div class="discovery-tabs">' +
        '<button>' + ic('bars', 'width="14" height="14"') + ' Dashboard</button>' +
        '<button class="active">' + ic('gear', 'width="14" height="14"') + ' Configuration</button>' +
        '</div>' +
        '<div class="info-banner" style="margin-bottom: 20px;">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
        '<div>Configure the Data Discovery policy to control whether scan results are saved as compact summaries or complete file-level records.</div>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0;">' +
        '<div class="search" style="position: relative;">' +
        ic('search') +
        '<input id="ep-search" placeholder="Search by Policy Name" style="padding-left: 32px; height: 38px; border-radius: 6px; border: 1px solid #c4c8d1; width: 260px; outline: none; background: #fff;"/>' +
        '</div>' +
        '<button id="ep-btn-configure" class="btn btn-blue" style="background: #1f8fd4; color: #fff; height: 38px; border: none; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">' +
        ic('plus') + ' Configure Data Discovery Policy' +
        '</button>' +
        '</div>' +
        '<div class="card" style="overflow: visible;">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Name</th>' +
        '<th>Status</th>' +
        '<th style="text-align: right; padding-right: 24px;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="ep-table-body">' +
        rowsHtml +
        '</tbody>' +
        '</table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
        'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
        ' 1–' + ENDPOINT_POLICIES.length + ' of ' + ENDPOINT_POLICIES.length + ' ' +
        '<span style="display:flex;gap:8px;align-items:center;">' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>';
    }

    function renderCustomAppContent() {
      var rowsHtml = CUSTOM_APP_CONFIGS.map(function (config, i) {
        return '<tr>' +
          '<td class="tname">' + config.name + '</td>' +
          '<td style="color:#4b5160;">' + config.appName + '</td>' +
          '<td style="color:#4b5160;">' + config.url + '</td>' +
          '<td>' + config.auth + '</td>' +
          '<td style="text-align: right; padding-right: 24px; position: relative;">' +
          '<span class="ca-actions-trigger" data-i="' + i + '" style="cursor: pointer; font-weight: bold; font-size: 16px; padding: 4px 8px;">⋮</span>' +
          '</td>' +
          '</tr>';
      }).join('');

      if (CUSTOM_APP_CONFIGS.length === 0) {
        rowsHtml = '<tr><td colspan="5" style="text-align:center; color:#6b7280; padding:24px;">No custom apps configured. Click "+ Add Configuration" to add one.</td></tr>';
      }

      return '<h2 style="font-size:20px; font-weight:700; color:#1f2430; margin-bottom:4px;">Custom App</h2>' +
        '<div class="subtitle">Configure Custom App data discovery. Add API connections and create policies to scan your custom app data.</div>' +
        '<div class="discovery-tabs">' +
        '<button class="active">' + ic('gear', 'width="14" height="14"') + ' Configuration</button>' +
        '<button>' + ic('shield', 'width="14" height="14"') + ' Policies</button>' +
        '</div>' +
        '<div class="toolbar" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0;">' +
        '<div class="search" style="position: relative;">' +
        ic('search') +
        '<input id="ca-search" placeholder="Search by Configuration Name" style="padding-left: 32px; height: 38px; border-radius: 6px; border: 1px solid #c4c8d1; width: 260px; outline: none; background: #fff;"/>' +
        '</div>' +
        '<button id="ca-btn-add" class="btn btn-blue" style="background: #1f8fd4; color: #fff; height: 38px; border: none; border-radius: 6px; padding: 0 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">' +
        ic('plus') + ' Add Configuration' +
        '</button>' +
        '</div>' +
        '<div class="card" style="overflow: visible;">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Configuration Name</th>' +
        '<th>App Name</th>' +
        '<th>API Endpoint URL</th>' +
        '<th>Auth Method</th>' +
        '<th style="text-align: right; padding-right: 24px;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="ca-table-body">' +
        rowsHtml +
        '</tbody>' +
        '</table>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
        'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
        ' 1–' + CUSTOM_APP_CONFIGS.length + ' of ' + CUSTOM_APP_CONFIGS.length + ' ' +
        '<span style="display:flex;gap:8px;align-items:center;">' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
        '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>';
    }

    function renderDiscoveryContent() {
      if (discoveryActiveItem === 'sharepoint') return renderSharePointContent();
      if (discoveryActiveItem === 'gmail') return renderGmailContent();
      if (discoveryActiveItem === 'database') return renderDatabaseContent();
      if (discoveryActiveItem === 'endpoint') return renderEndpointContent();
      if (discoveryActiveItem === 'custom-app') return renderCustomAppContent();

      var title = discoveryActiveItem.split('-').map(function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      }).join(' ');
      if (discoveryActiveItem === 'sharepoint') title = 'SharePoint and OneDrive';
      if (discoveryActiveItem === 'aws-s3') title = 'AWS S3';
      if (discoveryActiveItem === 'google-drive') title = 'Google Drive';
      if (discoveryActiveItem === 'scan-jobs') title = 'Scan Jobs';
      if (discoveryActiveItem === 'offline-consents') title = 'Offline Consents';

      return renderPlaceholderContent(title);
    }

    RENDER.discovery = function () {
      var sidebarHtml = '<div class="discovery-sidebar">' +
        '<div class="sidebar-h">Data Discovery</div>' +

        '<div class="section-title">Scan Jobs</div>' +
        '<div class="nav-item ' + (discoveryActiveItem === 'scan-jobs' ? 'active' : '') + '" data-item="scan-jobs">' +
        ic('clip') + ' <span>Scan Jobs</span>' +
        '</div>' +
        '<div class="nav-item ' + (discoveryActiveItem === 'offline-consents' ? 'active' : '') + '" data-item="offline-consents">' +
        ic('cloudoff') + ' <span>Offline Consents</span>' +
        '</div>' +

        '<div class="section-title">Data Sources</div>' +

        '<div class="nav-group-header" id="grp-ms">' +
        '<span class="grp-title">' + ic('building') + ' <span>Microsoft</span></span>' +
        '<span class="chevron">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '<div class="nav-group-items" id="items-ms">' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'azure-blob' ? 'active' : '') + '" data-item="azure-blob">Azure Blob</div>' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'sharepoint' ? 'active' : '') + '" data-item="sharepoint">SharePoint and OneDrive</div>' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'outlook' ? 'active' : '') + '" data-item="outlook">Outlook</div>' +
        '</div>' +

        '<div class="nav-group-header" id="grp-google">' +
        '<span class="grp-title">' + ic('share') + ' <span>Google</span></span>' +
        '<span class="chevron">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '<div class="nav-group-items" id="items-google">' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'google-drive' ? 'active' : '') + '" data-item="google-drive">Drive</div>' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'gmail' ? 'active' : '') + '" data-item="gmail">Gmail</div>' +
        '</div>' +

        '<div class="nav-group-header" id="grp-aws">' +
        '<span class="grp-title">' + ic('server') + ' <span>AWS</span></span>' +
        '<span class="chevron">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '<div class="nav-group-items" id="items-aws">' +
        '<div class="nav-sub-item ' + (discoveryActiveItem === 'aws-s3' ? 'active' : '') + '" data-item="aws-s3">S3</div>' +
        '</div>' +

        '<div class="nav-item ' + (discoveryActiveItem === 'endpoint' ? 'active' : '') + '" data-item="endpoint">' +
        ic('grid') + ' <span>Endpoint</span>' +
        '</div>' +
        '<div class="nav-item ' + (discoveryActiveItem === 'database' ? 'active' : '') + '" data-item="database">' +
        ic('db') + ' <span>Database</span>' +
        '</div>' +
        '<div class="nav-item ' + (discoveryActiveItem === 'nas' ? 'active' : '') + '" data-item="nas">' +
        ic('layers') + ' <span>NAS</span>' +
        '</div>' +
        '<div class="nav-item ' + (discoveryActiveItem === 'custom-app' ? 'active' : '') + '" data-item="custom-app">' +
        ic('sparkles') + ' <span>Custom App</span>' +
        '</div>' +
        '</div>';

      var contentHtml = '<div class="discovery-content" id="discovery-content-area">' +
        renderDiscoveryContent() +
        '</div>';

      return '<div class="discovery-layout">' + sidebarHtml + contentHtml + '</div>';
    };

    AFTER.discovery = function () {
      function setupCollapsible(headerId, itemsId) {
        var header = document.getElementById(headerId);
        var items = document.getElementById(itemsId);
        if (!header || !items) return;

        var isCollapsed = localStorage.getItem('grp_collapsed_' + headerId) === 'true';
        if (isCollapsed) {
          header.classList.add('collapsed');
          items.style.maxHeight = '0px';
        } else {
          header.classList.remove('collapsed');
          items.style.maxHeight = items.scrollHeight + 'px';
        }

        header.onclick = function (e) {
          e.stopPropagation();
          var collapsed = header.classList.toggle('collapsed');
          localStorage.setItem('grp_collapsed_' + headerId, collapsed ? 'true' : 'false');
          if (collapsed) {
            items.style.maxHeight = '0px';
          } else {
            items.style.maxHeight = items.scrollHeight + 'px';
          }
        };
      }

      setupCollapsible('grp-ms', 'items-ms');
      setupCollapsible('grp-google', 'items-google');
      setupCollapsible('grp-aws', 'items-aws');

      document.querySelectorAll('.discovery-sidebar [data-item]').forEach(function (item) {
        item.onclick = function (e) {
          e.stopPropagation();
          discoveryActiveItem = item.dataset.item;
          go('discovery');
        };
      });

      var spEdit = document.getElementById('sp-btn-edit');
      if (spEdit) {
        spEdit.onclick = function () {
          toast('Edit SharePoint API', 'Opening configuration...', 'info');
        };
      }
      var spScan = document.getElementById('sp-btn-scan');
      if (spScan) {
        spScan.onclick = function () {
          toast('Scan started', 'Scanning SharePoint and OneDrive...', 'ok');
        };
      }

      var gmailUpdate = document.getElementById('gmail-btn-update');
      if (gmailUpdate) {
        gmailUpdate.onclick = function () {
          toast('Update Service Account', 'Opening configuration...', 'info');
        };
      }
      var gmailDelete = document.getElementById('gmail-btn-delete');
      if (gmailDelete) {
        gmailDelete.onclick = function () {
          if (confirm('Delete Google Service Account configuration?')) {
            toast('Configuration deleted', null, 'ok');
          }
        };
      }

      var dbAdd = document.getElementById('db-btn-add');
      if (dbAdd) {
        dbAdd.onclick = function () {
          openDatabaseConfig(false);
        };
      }

      var dbTrigger = document.getElementById('db-actions-trigger');
      if (dbTrigger) {
        dbTrigger.onclick = function (e) {
          e.stopPropagation();
          var existing = document.querySelector('.db-actions-menu');
          if (existing) {
            existing.remove();
            return;
          }

          var rect = dbTrigger.getBoundingClientRect();
          var d = document.createElement('div');
          d.className = 'dropdown db-actions-menu';
          d.style.left = (rect.left - 130) + 'px';
          d.style.top = (rect.bottom + window.scrollY) + 'px';
          d.style.minWidth = '150px';
          d.style.zIndex = '99999';

          d.innerHTML =
            '<div class="opt" data-act="test" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
            ic('share', 'width="14" height="14"') + ' <span>Test connection</span>' +
            '</div>' +
            '<div class="opt" data-act="edit" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer;">' +
            ic('edit', 'width="14" height="14"') + ' <span>Edit</span>' +
            '</div>' +
            '<div class="opt" data-act="delete" style="display:flex; align-items:center; gap:8px; padding:8px 12px; cursor:pointer; color: #dc2626;">' +
            ic('trash', 'width="14" height="14" style="color:#dc2626;"') + ' <span>Delete</span>' +
            '</div>';

          document.body.appendChild(d);

          d.querySelectorAll('.opt').forEach(function (opt) {
            opt.onclick = function (ev) {
              ev.stopPropagation();
              var act = opt.dataset.act;
              d.remove();
              if (act === 'test') {
                toast('Testing connection...', 'Connecting to database...', 'info');
                setTimeout(function () {
                  toast('Connection successful', 'Connected to testmdm-rds...', 'ok');
                }, 1000);
              } else if (act === 'edit') {
                openDatabaseConfig(true);
              } else if (act === 'delete') {
                if (confirm('Remove database configuration?')) {
                  toast('Configuration deleted', null, 'ok');
                }
              }
            };
          });

          setTimeout(function () {
            document.addEventListener('click', close);
          }, 0);
        };
      }

      // --- Endpoint wiring ---
      var epToggleList = document.querySelectorAll('.ep-toggle');
      epToggleList.forEach(function (tog) {
        tog.onclick = function (e) {
          e.stopPropagation();
          var idx = parseInt(tog.dataset.i);
          ENDPOINT_POLICIES[idx].status = !ENDPOINT_POLICIES[idx].status;
          saveEndpointPolicies();
          tog.classList.toggle('on', ENDPOINT_POLICIES[idx].status);
          toast('Success', 'Policy status updated', 'ok');
        };
      });

      var epConfigure = document.getElementById('ep-btn-configure');
      if (epConfigure) {
        epConfigure.onclick = function () {
          openEndpointPolicyModal(null);
        };
      }

      document.querySelectorAll('.ep-actions-trigger').forEach(function (trigger) {
        trigger.onclick = function (e) {
          e.stopPropagation();
          var idx = parseInt(trigger.dataset.i);
          showEndpointActionsMenu(trigger, idx);
        };
      });

      var epSearch = document.getElementById('ep-search');
      if (epSearch) {
        epSearch.oninput = function () {
          var q = this.value.toLowerCase().trim();
          var rows = document.querySelectorAll('#ep-table-body tr');
          rows.forEach(function (row) {
            var nameCell = row.querySelector('.tname');
            if (!nameCell) return;
            var name = nameCell.textContent.toLowerCase();
            row.style.display = name.indexOf(q) > -1 ? '' : 'none';
          });
        };
      }

      // --- Custom App wiring ---
      var caAdd = document.getElementById('ca-btn-add');
      if (caAdd) {
        caAdd.onclick = function () {
          openCustomAppConfigModal(null);
        };
      }

      document.querySelectorAll('.ca-actions-trigger').forEach(function (trigger) {
        trigger.onclick = function (e) {
          e.stopPropagation();
          var idx = parseInt(trigger.dataset.i);
          showCustomAppActionsMenu(trigger, idx);
        };
      });

      var caSearch = document.getElementById('ca-search');
      if (caSearch) {
        caSearch.oninput = function () {
          var q = this.value.toLowerCase().trim();
          var rows = document.querySelectorAll('#ca-table-body tr');
          rows.forEach(function (row) {
            var nameCell = row.querySelector('.tname');
            if (!nameCell) return;
            var name = nameCell.textContent.toLowerCase();
            row.style.display = name.indexOf(q) > -1 ? '' : 'none';
          });
        };
      }
    };

    function openDatabaseConfig(isEdit) {
      var name = isEdit ? 'MySQL' : '';
      var type = isEdit ? 'MySQL' : '';
      var host = isEdit ? 'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com' : '';
      var port = isEdit ? '3306' : '';
      var dbName = isEdit ? 'user_pii_db' : '';
      var username = isEdit ? 'testmdm' : '';

      var drawerHtml =
        '<div class="drawer" style="display:flex; flex-direction:column; height:100%;">' +
        '<div class="drawer-h" style="display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #e2e8f0;">' +
        '<h3 style="font-size:18px; font-weight:700; color:#1f2430; margin:0;">Database Datasource Configuration</h3>' +
        '<button class="x" onclick="closeModal()" style="background:none; border:none; font-size:20px; cursor:pointer; color:#6b7280; display:flex; align-items:center; justify-content:center; padding:4px;">' + ic('x', 'width="18" height="18"') + '</button>' +
        '</div>' +
        '<div class="drawer-b" style="padding:24px; flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:20px;">' +

        '<div class="field outlined">' +
        '<label>Name <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="db-config-name" value="' + name + '" placeholder="Enter name"/>' +
        '</div>' +

        '<div class="field outlined" style="position:relative;">' +
        '<label>Type <span style="color:#dc2626;">*</span></label>' +
        '<div class="selbox" id="db-config-type-box" data-value="' + type + '" style="cursor:pointer;">' +
        '<span class="selected-value">' + (type || 'Select database type...') + '</span>' +
        '<span class="arrow-icon">' + ic('chevd', 'width="14" height="14"') + '</span>' +
        '</div>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Host <span style="color:#dc2626;">*</span></label>' +
        '<input type="text" id="db-config-host" value="' + host + '" placeholder="Enter host"/>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Port <span style="color:#dc2626;">*</span></label>' +
        '<input type="number" id="db-config-port" value="' + port + '" placeholder="Enter port" style="width:100%; box-sizing:border-box;"/>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Database Name</label>' +
        '<input type="text" id="db-config-database" value="' + dbName + '" placeholder="Enter database name"/>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Username</label>' +
        '<input type="text" id="db-config-username" value="' + username + '" placeholder="Enter username"/>' +
        '</div>' +

        '<div class="field outlined">' +
        '<label>Password</label>' +
        '<input type="password" id="db-config-password" value="" placeholder="Leave blank to keep current"/>' +
        '</div>' +
        '</div>' +
        '<div class="drawer-f" style="padding:16px 24px; border-top:1px solid #e2e8f0; display:flex; justify-content:flex-end; gap:12px; background:#fff;">' +
        '<button class="btn-outline-blue" onclick="closeModal()" style="padding:8px 16px; height:38px; border-radius:6px; display:flex; align-items:center; gap:8px;">' +
        ic('x', 'width="14" height="14"') + ' Cancel' +
        '</button>' +
        '<button class="btn-outline-blue" id="db-config-test" style="padding:8px 16px; height:38px; border-radius:6px; display:flex; align-items:center; gap:8px; border-color:#1f8fd4; color:#1f8fd4;">' +
        ic('share', 'width="14" height="14"') + ' Test Connection' +
        '</button>' +
        '<button class="btn btn-blue" id="db-config-save" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; padding:0 20px; font-weight:600; cursor:pointer; height:38px; display:flex; align-items:center; justify-content:center; gap:8px;">' +
        ic('check', 'width="14" height="14" style="stroke:#fff;"') + ' ' + (isEdit ? 'Update' : 'Save') +
        '</button>' +
        '</div>' +
        '</div>';

      var r = document.getElementById('modal-root');
      r.innerHTML = '<div class="overlay" id="ovl" style="justify-content:flex-end; padding:0;">' + drawerHtml + '</div>';
      document.getElementById('ovl').onclick = function (e) {
        if (e.target.id === 'ovl') closeModal();
      };

      var typeBox = document.getElementById('db-config-type-box');
      if (typeBox) {
        typeBox.onclick = function (e) {
          e.stopPropagation();
          var existing = document.querySelector('.db-type-dropdown');
          if (existing) {
            existing.remove();
            return;
          }

          var dbTypes = [
            'BigQuery', 'Cassandra', 'ClickHouse', 'Azure Cosmos DB', 'CouchDB',
            'DynamoDB', 'Elasticsearch', 'H2', 'MariaDB', 'MongoDB',
            'MySQL', 'Oracle', 'PostgreSQL', 'Redis', 'Amazon Redshift', 'Snowflake'
          ];

          var dropdown = document.createElement('div');
          dropdown.className = 'db-type-dropdown';

          var selectedVal = typeBox.getAttribute('data-value') || '';

          dropdown.innerHTML = dbTypes.map(function (t) {
            var isSelected = (t === selectedVal);
            return '<div class="db-type-option ' + (isSelected ? 'selected' : '') + '" data-val="' + t + '">' + t + '</div>';
          }).join('');

          typeBox.parentNode.appendChild(dropdown);

          if (selectedVal) {
            var selectedEl = dropdown.querySelector('.db-type-option.selected');
            if (selectedEl) {
              dropdown.scrollTop = selectedEl.offsetTop - 80;
            }
          }

          dropdown.querySelectorAll('.db-type-option').forEach(function (opt) {
            opt.onclick = function (ev) {
              ev.stopPropagation();
              var val = opt.dataset.val;
              typeBox.setAttribute('data-value', val);
              typeBox.querySelector('.selected-value').textContent = val;
              dropdown.remove();

              // Auto-set port and name based on type if name is empty
              var nameInput = document.getElementById('db-config-name');
              if (nameInput && !nameInput.value) {
                nameInput.value = val;
              }
              var portInput = document.getElementById('db-config-port');
              if (portInput) {
                if (val === 'MySQL') portInput.value = '3306';
                else if (val === 'PostgreSQL') portInput.value = '5432';
                else if (val === 'Oracle') portInput.value = '1521';
                else if (val === 'MongoDB') portInput.value = '27017';
                else if (val === 'Redis') portInput.value = '6379';
                else if (val === 'Cassandra') portInput.value = '9042';
              }
            };
          });

          var closeDropdown = function (ev) {
            if (!dropdown.contains(ev.target) && ev.target !== typeBox) {
              dropdown.remove();
              document.removeEventListener('click', closeDropdown);
            }
          };
          setTimeout(function () {
            document.addEventListener('click', closeDropdown);
          }, 0);
        };
      }

      var testBtn = document.getElementById('db-config-test');
      if (testBtn) {
        testBtn.onclick = function () {
          toast('Testing connection...', 'Connecting to database...', 'info');
          setTimeout(function () {
            toast('Connection successful', 'Connected to testmdm-rds...', 'ok');
          }, 1000);
        };
      }

      var saveBtn = document.getElementById('db-config-save');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var nameVal = document.getElementById('db-config-name').value.trim();
          var typeVal = typeBox.getAttribute('data-value');
          var hostVal = document.getElementById('db-config-host').value.trim();
          var portVal = document.getElementById('db-config-port').value.trim();

          if (!nameVal || !typeVal || !hostVal || !portVal) {
            toast('Error', 'Please fill in all required fields (*)', 'err');
            return;
          }

          closeModal();
          toast('Success', 'Database configuration saved successfully', 'ok');
        };
      }
    }
    RENDER.protection = function () { return genPage({ title: 'Data Protection', icon: 'shield', color: '#16a34a', sub: 'Protection rules that mask, encrypt, or restrict access to personal and sensitive data.', add: 'Add Rule', cols: ['Rule', 'Data Category', 'Action', 'Scope', 'Status'], rows: [['Mask Aadhaar at Rest', tg('Sensitive', 'amber'), tg('Masking', 'blue'), 'All Sources', sb('Active', 'sb-green')], ['Encrypt Financial Data', tg('Financial', 'amber'), tg('Encryption', 'purple'), 'Core Banking System', sb('Active', 'sb-green')], ['Restrict Health Data Access', tg('Health', 'amber'), tg('Access Control', 'blue'), 'Hospital System', sb('Active', 'sb-green')], ['Redact PAN in Logs', tg('Sensitive', 'amber'), tg('Redaction', 'blue'), 'All Logs', sb('Active', 'sb-green')]] }); };
    RENDER.policy = function () { return genPage({ title: 'Policy Violations', icon: 'alert', color: '#dc2626', sub: 'Detected violations of data protection policies that require investigation and remediation.', filters: ['All Severity', 'All Status'], kpis: [['7', 'Open Violations', '', 'alert', '#dc2626', '#fdeaea'], ['2', 'High Severity', '', 'alert', '#dc2626', '#fdeaea'], ['3', 'Medium', '', 'alert', '#b7791f', '#fef3cd'], ['12', 'Resolved', '', 'check', '#16a34a', '#e7f7ee']], cols: ['Violation', 'Severity', 'Source', 'Detected', 'Status'], rows: [['Unmasked Aadhaar in export file', sb('HIGH', 'sb-red'), 'important-files', '24/4/2026', sb('Open', 'sb-red')], ['PII shared with processor lacking DPA', sb('HIGH', 'sb-red'), 'Core Banking System', '22/4/2026', sb('Investigating', 'sb-amber')], ['Retention period exceeded', sb('MEDIUM', 'sb-amber'), 'Demo Database(H2)', '20/4/2026', sb('Open', 'sb-red')], ['Consent not recorded for marketing', sb('MEDIUM', 'sb-amber'), 'Hubspot', '18/4/2026', sb('Resolved', 'sb-green')]] }); };
    RENDER.consentrm = function () { return genPage({ title: 'Consent Removal', icon: 'people', color: '#1f8fd4', sub: 'Requests from data principals to withdraw previously granted consent.', filters: ['All Status'], kpis: [['14', 'Total Requests', '', 'people', '#1f8fd4', '#eaf5fc'], ['1', 'Pending', '', 'clock', '#b7791f', '#fef3cd'], ['11', 'Processed', '', 'check', '#16a34a', '#e7f7ee'], ['2', 'Rejected', '', 'x', '#dc2626', '#fdeaea']], cols: ['Reference', 'Data Principal', 'Purpose', 'Requested', 'Status'], rows: [['CRM-018', 'navneet+1@xecurify.com', 'Marketing Communication', '5/5/2026', sb('Pending', 'sb-amber')], ['CRM-017', 'radhesham.joshi@xecurify.com', 'Member Registration', '3/5/2026', sb('Processed', 'sb-green')], ['CRM-016', 'shubhanshu.sharma@xecurify.com', 'Analytics Tracking', '1/5/2026', sb('Processed', 'sb-green')], ['CRM-015', 'himanshi.saini@xecurify.com', 'Marketing Communication', '28/4/2026', sb('Rejected', 'sb-red')]] }); };
    RENDER.datadel = function () { return genPage({ title: 'Data Deletion', icon: 'trash', color: '#dc2626', sub: 'Requests from data principals to erase their personal data (right to erasure).', filters: ['All Status'], kpis: [['7', 'Total Requests', '', 'trash', '#dc2626', '#fdeaea'], ['0', 'Pending', '', 'clock', '#b7791f', '#fef3cd'], ['6', 'Completed', '', 'check', '#16a34a', '#e7f7ee'], ['1', 'With DPO', '', 'clock', '#1f8fd4', '#e6f4fc']], cols: ['Reference', 'Data Principal', 'Scope', 'Requested', 'Status'], rows: [['DDR-009', 'radhesham.joshi@xecurify.com', 'All personal data', '5/5/2026', sb('Completed', 'sb-green')], ['DDR-008', 'navneet+1@xecurify.com', 'Marketing data only', '2/5/2026', sb('With DPO', 'sb-blue')], ['DDR-007', 'shubhanshu.sharma@xecurify.com', 'All personal data', '29/4/2026', sb('Completed', 'sb-green')], ['DDR-006', 'sneha.rao@xecurify.com', 'Account &amp; KYC data', '25/4/2026', sb('Completed', 'sb-green')]] }); };

    /* ===================== EXPANDED SIDEBAR + INIT ===================== */
    NAV.length = 0;
    [
      { t: 'group', label: 'Device Policies', collapsed: false },
      { t: 'item', id: 'policy_android', label: 'Android', icon: 'android', hasSub: true },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_policies', label: 'Policies' },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_geofencing', label: 'Geo-Fencing' },
      { t: 'subitem', parentId: 'policy_android', id: 'policy_android_message', label: 'Message Broadcasting' },
      { t: 'item', id: 'policy_apple', label: 'Apple', icon: 'apple' },
      { t: 'item', id: 'policy_windows', label: 'Windows', icon: 'windows' },
      { t: 'group', label: 'Data Protection', collapsed: false },
      { t: 'item', id: 'dspm', label: 'DSPM', icon: 'shield' },
      { t: 'item', id: 'discovery', label: 'Data Discovery', icon: 'db' },
      { t: 'item', id: 'content_filtering', label: 'Content Filtering', icon: 'content_filtering' },
      { t: 'group', label: 'Email DLP', collapsed: false },
      { t: 'item', id: 'email_dlp_policies', label: 'Policies', icon: 'list' },
      { t: 'item', id: 'email_dlp_providers', label: 'Provider Configurations', icon: 'server' },
      { t: 'item', id: 'email_dlp_quarantine', label: 'Quarantine Emails', icon: 'mail' },
      { t: 'group', label: 'Data Governance', collapsed: false },
      { t: 'item', id: 'ropa', label: 'ROPA Recommendations', icon: 'sparkles' },
      { t: 'item', id: 'dsr', label: 'DSR', icon: 'usercheck' },
      { t: 'item', id: 'inventory', label: 'Data Field Inventory', icon: 'layers' },
      { t: 'item', id: 'protection', label: 'Data Protection', icon: 'shield' },
      { t: 'item', id: 'policy', label: 'Policy Violation Dashboard', icon: 'alert' },
      { t: 'item', id: 'userdir', label: 'User Directory', icon: 'usercheck' },
      { t: 'group', label: 'Consent Management', collapsed: true },
      { t: 'item', id: 'fiduciaries', label: 'Fiduciaries', icon: 'building' },
      { t: 'item', id: 'processors', label: 'Processors', icon: 'server' },
      { t: 'item', id: 'activities', label: 'Activities', icon: 'list' },
      { t: 'item', id: 'purposes', label: 'Purposes', icon: 'flag' },
      { t: 'item', id: 'notices', label: 'Notices', icon: 'bell' },
      { t: 'item', id: 'dataflow', label: 'Data Flow', icon: 'share' },
      { t: 'item', id: 'cookies', label: 'Cookies', icon: 'cookie' },
      { t: 'item', id: 'assessments', label: 'Assessments', icon: 'clip' },
      { t: 'item', id: 'offline', label: 'Offline Consents', icon: 'cloudoff' },
      { t: 'group', label: 'Requests', collapsed: true },
      { t: 'item', id: 'consentrm', label: 'Consent Removal', icon: 'people' },
      { t: 'item', id: 'datadel', label: 'Data Deletion', icon: 'trash' },
      { t: 'group', label: 'SLA Management', collapsed: false },
      { t: 'item', id: 'sla', label: 'SLA', icon: 'clock' },
      { t: 'group', label: 'Administration', collapsed: false },
      { t: 'item', id: 'admin_users', label: 'Users', icon: 'people' },
      { t: 'item', id: 'admin_apikeys', label: 'API Keys', icon: 'key' },
      { t: 'item', id: 'admin_audit', label: 'Audit Logs', icon: 'pulse' },
      { t: 'item', id: 'admin_notifications', label: 'Notifications', icon: 'bell' },
      { t: 'item', id: 'admin_integrity', label: 'Data Integrity', icon: 'lock' },
      { t: 'item', id: 'admin_branding', label: 'Branding', icon: 'palette' },
      { t: 'item', id: 'admin_signin', label: 'Sign in methods', icon: 'login' },
      { t: 'group', label: 'Notifications', collapsed: false },
      { t: 'item', id: 'noti_channels', label: 'Channels', icon: 'channels' },
      { t: 'item', id: 'noti_templates', label: 'Templates', icon: 'fileText' },
      { t: 'group', label: 'Analytics & Reporting', collapsed: false },
      { t: 'item', id: 'anal_risk', label: 'Risk Analytics', icon: 'chart' },
      { t: 'item', id: 'anal_reports', label: 'Reports', icon: 'fileText' },
      { t: 'group', label: 'Integration', collapsed: true }
    ].forEach(function (n) { NAV.push(n); });
    Object.assign(TITLES, {
      devices: 'Devices',
      device_groups: 'Device Groups',
      onboarding_requests: 'Onboarding Requests',
      dspm: 'DSPM',
      email_dlp: 'Email DLP',
      email_dlp_policies: 'Email DLP Policies',
      email_dlp_providers: 'Provider Configurations',
      email_dlp_quarantine: 'Quarantine Emails',
      userdir: 'User Directory',
      consentrm: 'Consent Removal',
      datadel: 'Data Deletion',
      policy_android: 'Android Device Policies',
      policy_apple: 'Apple Device Policies',
      policy_windows: 'Windows Device Policies',
      sla: 'SLA Management',
      admin_users: 'Users',
      admin_apikeys: 'API Keys',
      admin_audit: 'Audit Logs',
      admin_notifications: 'Notifications',
      admin_integrity: 'Data Integrity',
      admin_branding: 'Branding',
      admin_signin: 'Sign in methods',
      noti_channels: 'Notification Channels',
      noti_templates: 'Notification Templates',
      anal_risk: 'Risk Analytics',
      anal_reports: 'Reports'
    });
    buildNav();
    /* ===================== DATA FLOW — CONNECTED NODE GRAPH (override) ===================== */
    (function () {
      var s = document.createElement('style'); s.textContent = `
.graph{position:relative;border:1px solid var(--line);border-radius:10px;background:#fff;overflow:auto}
.graph svg.edges{position:absolute;left:0;top:0;pointer-events:none;z-index:1}
.gcols{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);min-width:840px}
.gcol{border-right:1px solid var(--line)}
.gcol:last-child{border-right:none}
.gcol-h{font-size:10.5px;font-weight:700;letter-spacing:.05em;color:#5b6270;padding:9px 12px;background:#f7f8fa;border-bottom:1px solid var(--line)}
.gcol-b{padding:20px 14px;display:flex;flex-direction:column;gap:18px;justify-content:space-around;min-height:520px}
.gnode{position:relative;border:1px solid var(--line);border-radius:10px;padding:11px 12px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.05);transition:opacity .15s,border-color .15s,box-shadow .15s;cursor:default}
.gnode:hover{border-color:var(--accent);box-shadow:0 6px 18px rgba(43,166,224,.18)}
.graph.dim .gnode:not(.hl){opacity:.28}
.gnt{font-weight:700;font-size:12.5px;display:flex;align-items:center;gap:7px;line-height:1.25}
.gico{width:22px;height:22px;border-radius:6px;display:grid;place-items:center;font-weight:700;font-size:11px;flex:none}
.gns{color:var(--ink-3);font-size:10.5px;margin-top:3px}
.gtag{margin-top:8px;display:inline-block;font-size:10.5px;font-weight:700;color:#1f8fd4;background:#e6f4fc;padding:2px 9px;border-radius:20px}
.gbadges{margin-top:6px;display:flex;gap:5px;flex-wrap:wrap}
.gfields{margin-top:8px;display:flex;flex-wrap:wrap;gap:4px}
.gdot{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:#fff;border:2px solid var(--accent);transform:translateY(-50%);z-index:3}
.gdot.in{left:-6px}.gdot.out{right:-6px}
.edge{fill:none;stroke:#bcd0e4;stroke-width:1.6;transition:stroke .15s,stroke-width .15s}
.edge.hot{stroke:var(--accent);stroke-width:2.6}
`; document.head.appendChild(s);
    })();
    function gnode(id, inn, out, html) { return '<div class="gnode" data-n="' + id + '">' + (inn ? '<span class="gdot in"></span>' : '') + html + (out ? '<span class="gdot out"></span>' : '') + '</div>'; }
    const FLOW_CONFIGS = {
      CUSTOMER: {
        principal: { name: 'CUSTOMER', desc: 'Personal Data \u00b7 102 fields' },
        fiduciaries: [
          { id: 'f0', name: 'DPDPAX by Jodetx Stock Exchange', desc: 'CIN U65100MH2023PLC123456' },
          { id: 'f1', name: 'Bharat FinServ Ltd.', desc: 'CIN U65923KA2018PLC104512' },
          { id: 'f2', name: 'EduTech Bharat Pvt. Ltd.', desc: 'CIN U80900KA2019PTC112233' },
          { id: 'f3', name: 'MediCare Health Pvt. Ltd.', desc: 'CIN U85100HR2020PTC098765' },
          { id: 'f4', name: 'Sula Vineyards', desc: 'CIN L15549MH2003PLC139352' }
        ],
        processors: [
          { id: 'pr0', name: 'Hospital Information System', type1: 'INTERNAL', class1: 'bm-int', type2: 'No DPA', class2: 'bm-nodpa', fields: ['Medical History', 'Biometric', 'Prescriptions'] },
          { id: 'pr1', name: 'Core Banking System', type1: 'INTERNAL', class1: 'bm-int', type2: 'No DPA', class2: 'bm-nodpa', fields: ['Aadhaar', 'PAN', 'Bank Account', 'Income'] },
          { id: 'pr2', name: 'Salesforce CRM', type1: 'SAAS', class1: 'bm-saas', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['First Name', 'Email', 'Phone'] }
        ],
        stores: [
          { id: 's0', name: 'PERSONAL_INFORMATION', fields: ['First Name', 'Last Name', 'Email', 'Phone', 'Address'] },
          { id: 's1', name: 'HEALTH_DATA', fields: ['Medical History', 'Prescriptions', 'Diagnosis'] },
          { id: 's2', name: 'FINANCIAL_DATA', fields: ['Aadhaar', 'PAN', 'Bank Account', 'Income'] }
        ],
        edges: [['p_customer', 'f0'], ['p_customer', 'f1'], ['p_customer', 'f2'], ['p_customer', 'f3'], ['p_customer', 'f4'], ['f3', 'pr0'], ['f0', 'pr1'], ['f1', 'pr1'], ['f0', 'pr2'], ['f2', 'pr2'], ['f4', 'pr2'], ['pr0', 's1'], ['pr0', 's0'], ['pr1', 's2'], ['pr1', 's0'], ['pr2', 's0']]
      },
      EMPLOYEE: {
        principal: { name: 'EMPLOYEE', desc: 'Employee Records \u00b7 12 fields' },
        fiduciaries: [
          { id: 'f0', name: 'Bharat FinServ Ltd.', desc: 'CIN U65923KA2018PLC104512' },
          { id: 'f1', name: 'MediCare Health Pvt. Ltd.', desc: 'CIN U85100HR2020PTC098765' }
        ],
        processors: [
          { id: 'pr0', name: 'Learning Management System', type1: 'INTERNAL', class1: 'bm-int', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['Employee ID', 'Name', 'Performance'] },
          { id: 'pr1', name: 'Razorpay Payment Gateway', type1: 'SAAS', class1: 'bm-saas', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['Bank Account', 'Salary'] }
        ],
        stores: [
          { id: 's0', name: 'EMPLOYEE_RECORDS', fields: ['Employee ID', 'Name', 'Department', 'Performance'] },
          { id: 's1', name: 'FINANCIAL_DATA', fields: ['Bank Account', 'Salary'] }
        ],
        edges: [['p_customer', 'f0'], ['p_customer', 'f1'], ['f0', 'pr0'], ['f1', 'pr1'], ['pr0', 's0'], ['pr1', 's1']]
      },
      VENDOR: {
        principal: { name: 'VENDOR', desc: 'Vendor Data \u00b7 13 fields' },
        fiduciaries: [
          { id: 'f0', name: 'Bharat FinServ Ltd.', desc: 'CIN U65923KA2018PLC104512' },
          { id: 'f1', name: 'Sula Vineyards', desc: 'CIN L15549MH2003PLC139352' }
        ],
        processors: [
          { id: 'pr0', name: 'Acme Logistics Pvt Ltd', type1: 'INTERNAL', class1: 'bm-int', type2: 'No DPA', class2: 'bm-nodpa', fields: ['GSTIN', 'Invoice Details'] },
          { id: 'pr1', name: 'Zoho Books', type1: 'SAAS', class1: 'bm-saas', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['Bank Details', 'Billing Address'] }
        ],
        stores: [
          { id: 's0', name: 'VENDOR_RECORDS', fields: ['GSTIN', 'Company Name', 'Invoice Details'] },
          { id: 's1', name: 'FINANCIAL_DATA', fields: ['Bank Details', 'Billing Address'] }
        ],
        edges: [['p_customer', 'f0'], ['p_customer', 'f1'], ['f0', 'pr0'], ['f1', 'pr1'], ['pr0', 's0'], ['pr1', 's1']]
      },
      VISITOR: {
        principal: { name: 'VISITOR', desc: 'Visitor Logs \u00b7 7 fields' },
        fiduciaries: [
          { id: 'f0', name: 'EduTech Bharat Pvt. Ltd.', desc: 'CIN U80900KA2019PTC112233' },
          { id: 'f1', name: 'Sula Vineyards', desc: 'CIN L15549MH2003PLC139352' }
        ],
        processors: [
          { id: 'pr0', name: 'GlobalTech Solutions GmbH', type1: 'INTERNAL', class1: 'bm-int', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['IP Address', 'Browser Signature'] }
        ],
        stores: [
          { id: 's0', name: 'VISITOR_LOGS', fields: ['IP Address', 'Browser Signature', 'Timestamp'] }
        ],
        edges: [['p_customer', 'f0'], ['p_customer', 'f1'], ['f0', 'pr0'], ['f1', 'pr0'], ['pr0', 's0']]
      },
      Customer: {
        principal: { name: 'Customer', desc: 'Consent Data \u00b7 1 field' },
        fiduciaries: [
          { id: 'f0', name: 'EduTech Bharat Pvt. Ltd.', desc: 'CIN U80900KA2019PTC112233' }
        ],
        processors: [
          { id: 'pr0', name: 'Salesforce CRM', type1: 'SAAS', class1: 'bm-saas', type2: 'DPA Signed', class2: 'bm-dpa', fields: ['Consent Status'] }
        ],
        stores: [
          { id: 's0', name: 'CONSENT_DB', fields: ['Consent Status', 'Timestamp'] }
        ],
        edges: [['p_customer', 'f0'], ['f0', 'pr0'], ['pr0', 's0']]
      }
    };

    RENDER.dataflow = function () {
      var head = '<div class="page-title">' + ic('share', 'width="19" height="19" style="color:#1f8fd4"') + ' Data Flow</div>' +
        '<div class="page-sub">DPDP Act 2023 \u2014 4-Layer Data Processing Architecture</div>';

      var tabs = '<div class="tabs" style="margin-bottom: 20px;">' +
        '<button class="' + (flowTab === 'ov' ? 'on' : '') + '" data-ft="ov" style="display:inline-flex; align-items:center; gap:6px;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Overview' +
        '</button>' +
        '<button class="' + (flowTab === 'flow' ? 'on' : '') + '" data-ft="flow" style="display:inline-flex; align-items:center; gap:6px;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Data Flow' +
        '</button>' +
        '</div>';

      if (flowTab === 'ov') {
        var style = '<style>' +
          '.df-kpis { display: flex; gap: 16px; margin-bottom: 24px; }' +
          '.df-kpi-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex: 1; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }' +
          '.df-kpi-num { font-size: 24px; font-weight: 700; color: #1f2937; line-height: 1.2; }' +
          '.df-kpi-label { font-size: 12.5px; color: #6b7280; font-weight: 500; margin-top: 4px; }' +
          '.df-kpi-icon-wrapper { width: 38px; height: 38px; border-radius: 8px; display: grid; place-items: center; }' +
          '.df-kpi-icon-wrapper.green { background: #e8f5e9; color: #2e7d32; }' +
          '.df-kpi-icon-wrapper.blue { background: #e3f2fd; color: #1565c0; }' +
          '.df-kpi-icon-wrapper.orange { background: #fff3e0; color: #e65100; }' +
          '.df-section-title { font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 14px; text-transform: uppercase; margin-top: 24px; }' +
          '.df-principals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }' +
          '.df-principal-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; display: flex; gap: 16px; align-items: flex-start; box-shadow: 0 1px 2px rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; }' +
          '.df-principal-card:hover { transform: translateY(-2px); border-color: #1f8fd4; }' +
          '.df-principal-badge { width: 32px; height: 32px; border-radius: 50%; background: #e8f5e9; color: #2e7d32; font-weight: 700; font-size: 14px; display: grid; place-items: center; flex-shrink: 0; }' +
          '.df-principal-content { flex: 1; }' +
          '.df-principal-name { font-size: 14px; font-weight: 700; color: #1f2937; letter-spacing: 0.02em; margin-bottom: 12px; }' +
          '.df-principal-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }' +
          '.df-stat-val { font-size: 15px; font-weight: 700; color: #1f2937; }' +
          '.df-stat-lbl { font-size: 10.5px; color: #9ca3af; margin-top: 2px; }' +
          '.df-fiduciaries-list { display: flex; flex-direction: column; gap: 16px; }' +
          '.df-fiduciary-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }' +
          '.df-fiduciary-left { display: flex; gap: 16px; align-items: flex-start; }' +
          '.df-fiduciary-icon { width: 40px; height: 40px; border-radius: 8px; background: #eff6ff; color: #1d4ed8; display: grid; place-items: center; flex-shrink: 0; }' +
          '.df-fiduciary-info h4 { font-size: 14px; font-weight: 700; color: #1f2937; margin-bottom: 6px; }' +
          '.df-fiduciary-info p { font-size: 12px; color: #6b7280; margin-bottom: 4px; line-height: 1.4; }' +
          '.df-fiduciary-info a { font-size: 12px; color: #2563eb; text-decoration: none; font-weight: 500; }' +
          '.df-fiduciary-info a:hover { text-decoration: underline; }' +
          '.df-fiduciary-right { border-left: 2px solid #f1f5f9; padding-left: 20px; display: flex; flex-direction: column; gap: 10px; min-width: 320px; }' +
          '.df-officer-item { font-size: 12px; line-height: 1.4; }' +
          '.df-officer-name { font-weight: 600; color: #1f2937; }' +
          '.df-officer-title { color: #9ca3af; font-size: 11px; }' +
          '.df-officer-email { color: #6b7280; font-size: 11px; }' +
          '</style>';

        var kpis = '<div class="df-kpis">' +
          '<div class="df-kpi-card">' +
          '<div>' +
          '<div class="df-kpi-num">5</div>' +
          '<div class="df-kpi-label">Data Principals</div>' +
          '</div>' +
          '<div class="df-kpi-icon-wrapper green">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' +
          '</div>' +
          '</div>' +
          '<div class="df-kpi-card">' +
          '<div>' +
          '<div class="df-kpi-num">5</div>' +
          '<div class="df-kpi-label">Data Fiduciaries</div>' +
          '</div>' +
          '<div class="df-kpi-icon-wrapper blue">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
          '</div>' +
          '</div>' +
          '<div class="df-kpi-card">' +
          '<div>' +
          '<div class="df-kpi-num">9</div>' +
          '<div class="df-kpi-label">Data Processors</div>' +
          '</div>' +
          '<div class="df-kpi-icon-wrapper orange">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>' +
          '</div>' +
          '</div>' +
          '</div>';

        var principals = '<div class="df-section-title">DATA PRINCIPAL CATEGORIES (5)</div>' +
          '<div class="df-principals-grid">' +
          '<div class="df-principal-card" onclick="window.activePrincipalCategory = \'EMPLOYEE\'; flowTab = \'flow\'; go(\'dataflow\');">' +
          '<div class="df-principal-badge">E</div>' +
          '<div class="df-principal-content">' +
          '<div class="df-principal-name">EMPLOYEE</div>' +
          '<div class="df-principal-stats">' +
          '<div><div class="df-stat-val">12</div><div class="df-stat-lbl">PII Fields</div></div>' +
          '<div><div class="df-stat-val">3</div><div class="df-stat-lbl">Activities</div></div>' +
          '<div><div class="df-stat-val">3</div><div class="df-stat-lbl">Processors</div></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="df-principal-card" onclick="window.activePrincipalCategory = \'VENDOR\'; flowTab = \'flow\'; go(\'dataflow\');">' +
          '<div class="df-principal-badge">V</div>' +
          '<div class="df-principal-content">' +
          '<div class="df-principal-name">VENDOR</div>' +
          '<div class="df-principal-stats">' +
          '<div><div class="df-stat-val">13</div><div class="df-stat-lbl">PII Fields</div></div>' +
          '<div><div class="df-stat-val">4</div><div class="df-stat-lbl">Activities</div></div>' +
          '<div><div class="df-stat-val">5</div><div class="df-stat-lbl">Processors</div></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="df-principal-card" onclick="window.activePrincipalCategory = \'CUSTOMER\'; flowTab = \'flow\'; go(\'dataflow\');">' +
          '<div class="df-principal-badge">C</div>' +
          '<div class="df-principal-content">' +
          '<div class="df-principal-name">CUSTOMER</div>' +
          '<div class="df-principal-stats">' +
          '<div><div class="df-stat-val">102</div><div class="df-stat-lbl">PII Fields</div></div>' +
          '<div><div class="df-stat-val">24</div><div class="df-stat-lbl">Activities</div></div>' +
          '<div><div class="df-stat-val">9</div><div class="df-stat-lbl">Processors</div></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="df-principal-card" onclick="window.activePrincipalCategory = \'VISITOR\'; flowTab = \'flow\'; go(\'dataflow\');">' +
          '<div class="df-principal-badge">V</div>' +
          '<div class="df-principal-content">' +
          '<div class="df-principal-name">VISITOR</div>' +
          '<div class="df-principal-stats">' +
          '<div><div class="df-stat-val">7</div><div class="df-stat-lbl">PII Fields</div></div>' +
          '<div><div class="df-stat-val">3</div><div class="df-stat-lbl">Activities</div></div>' +
          '<div><div class="df-stat-val">2</div><div class="df-stat-lbl">Processors</div></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="df-principal-card" onclick="window.activePrincipalCategory = \'Customer\'; flowTab = \'flow\'; go(\'dataflow\');">' +
          '<div class="df-principal-badge">C</div>' +
          '<div class="df-principal-content">' +
          '<div class="df-principal-name">Customer</div>' +
          '<div class="df-principal-stats">' +
          '<div><div class="df-stat-val">1</div><div class="df-stat-lbl">PII Fields</div></div>' +
          '<div><div class="df-stat-val">1</div><div class="df-stat-lbl">Activities</div></div>' +
          '<div><div class="df-stat-val">2</div><div class="df-stat-lbl">Processors</div></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        var fiduciaries = '<div class="df-section-title">DATA FIDUCIARIES (5)</div>' +
          '<div class="df-fiduciaries-list">' +
          '<div class="df-fiduciary-card">' +
          '<div class="df-fiduciary-left">' +
          '<div class="df-fiduciary-icon">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
          '</div>' +
          '<div class="df-fiduciary-info">' +
          '<h4>DPDPAX by Jodetx Stock Exchange</h4>' +
          '<p>CIN-U65100MH2023PLC123456</p>' +
          '<p>Mumbai, Maharashtra, 123 Street, India, 324010</p>' +
          '<a href="https://www.bseindia.com/" target="_blank">https://www.bseindia.com/</a>' +
          '</div>' +
          '</div>' +
          '<div class="df-fiduciary-right">' +
          '<div class="df-officer-item">' +
          '<div class="df-officer-name">navneet DPO</div>' +
          '<div class="df-officer-title">DPO | <span class="df-officer-email">navneet+dpo@xecurify.com</span></div>' +
          '</div>' +
          '<div class="df-officer-item">' +
          '<div class="df-officer-name">navneet Grievance Officer</div>' +
          '<div class="df-officer-title">CUSTOMER_ADMIN | <span class="df-officer-email">navneet+grievanceofficer@xecurify.com</span></div>' +
          '</div>' +
          '<div class="df-officer-item">' +
          '<div class="df-officer-name">Radhesham Joshi</div>' +
          '<div class="df-officer-title">FIDUCIARY | <span class="df-officer-email">radhesham.joshi+5@xecurify.com</span></div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        return style + head + tabs + kpis + principals + fiduciaries;
      }

      var currentCat = window.activePrincipalCategory || 'CUSTOMER';
      var config = FLOW_CONFIGS[currentCat] || FLOW_CONFIGS.CUSTOMER;

      var col1 = '<div class="gcol"><div class="gcol-h">LAYER 1 \u00b7 DATA PRINCIPAL</div><div class="gcol-b" style="justify-content:center">' + gnode('p_customer', 0, 1, '<div class="gnt"><span class="gico" style="background:#e6f4fc;color:#1f8fd4">' + config.principal.name.charAt(0) + '</span> ' + config.principal.name + '</div><div class="gns">Data Principal Category</div><div class="gtag">' + config.principal.desc + '</div>') + '</div></div>';
      var col2 = '<div class="gcol"><div class="gcol-h">LAYER 2 \u00b7 DATA FIDUCIARY</div><div class="gcol-b">' + config.fiduciaries.map(function (f) { return gnode(f.id, 1, 1, '<div class="gnt">' + ic('building', 'width="14" height="14" style="display:inline"') + ' ' + f.name + '</div><div class="gns">' + f.desc + '</div>'); }).join('') + '</div></div>';
      var col3 = '<div class="gcol"><div class="gcol-h">LAYER 3 \u00b7 DATA PROCESSORS</div><div class="gcol-b">' + config.processors.map(function (p) { return gnode(p.id, 1, 1, '<div class="gnt">' + ic('server', 'width="14" height="14" style="display:inline"') + ' ' + p.name + '</div><div class="gbadges"><span class="badgemini ' + p.class1 + '">' + p.type1 + '</span><span class="badgemini ' + p.class2 + '">' + p.type2 + '</span></div><div class="gfields">' + p.fields.map(function (x) { return '<span class="pchip">' + x + '</span>'; }).join('') + '</div>'); }).join('') + '</div></div>';
      var col4 = '<div class="gcol"><div class="gcol-h">LAYER 4 \u00b7 PII DATA STORE</div><div class="gcol-b">' + config.stores.map(function (st) { return gnode(st.id, 1, 0, '<div class="gnt">' + ic('db', 'width="14" height="14" style="display:inline"') + ' ' + st.name + ' <span class="badgemini bm-std">STANDARD</span></div><div style="margin-top:6px">' + st.fields.map(function (x) { return '<div class="gns" style="padding:1px 0">' + x + '</div>'; }).join('') + '</div>'); }).join('') + '</div></div>';
      var filters = '<div class="flowfilters"><div class="select">All Fiduciaries ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All Processor Types ' + ic('chevd', 'width="12" height="12"') + '</div><div class="select">All PII Fields ' + ic('chevd', 'width="12" height="12"') + '</div><div class="spacer" style="flex:1"></div><span class="muted" style="font-size:12px; font-weight: 600; color: #1f8fd4;">Viewing: ' + config.principal.name + '</span><span class="muted" style="font-size:12px; margin-left: 12px;">Hover a node to trace its flow</span></div>';
      var graph = '<div class="graph" id="graph"><svg class="edges"></svg><div class="gcols">' + col1 + col2 + col3 + col4 + '</div></div>';
      return head + tabs + filters + graph;
    };
    AFTER.dataflow = function () {
      document.querySelectorAll('[data-ft]').forEach(function (b) { b.onclick = function () { flowTab = b.dataset.ft; go('dataflow'); }; });
      if (flowTab === 'ov') return;
      var g = document.getElementById('graph'); if (!g) return;
      var svg = g.querySelector('svg.edges');
      var currentCat = window.activePrincipalCategory || 'CUSTOMER';
      var config = FLOW_CONFIGS[currentCat] || FLOW_CONFIGS.CUSTOMER;

      function pt(id, side) { var el = g.querySelector('[data-n="' + id + '"]'); if (!el) return null; var r = el.getBoundingClientRect(); var gr = g.getBoundingClientRect(); return { x: (side === 'r' ? r.right : r.left) - gr.left + g.scrollLeft, y: r.top + r.height / 2 - gr.top + g.scrollTop }; }
      function draw() { var W = g.scrollWidth, H = g.scrollHeight; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('width', W); svg.setAttribute('height', H); svg.innerHTML = config.edges.map(function (e) { var a = pt(e[0], 'r'), b = pt(e[1], 'l'); if (!a || !b) return ''; var dx = Math.max(36, (b.x - a.x) * 0.45); return '<path class="edge" data-a="' + e[0] + '" data-b="' + e[1] + '" d="M' + a.x + ' ' + a.y + ' C ' + (a.x + dx) + ' ' + a.y + ' ' + (b.x - dx) + ' ' + b.y + ' ' + b.x + ' ' + b.y + '"/>'; }).join(''); }
      requestAnimationFrame(function () { draw(); requestAnimationFrame(draw); });
      g.querySelectorAll('.gnode').forEach(function (n) { n.addEventListener('mouseenter', function () { var id = n.dataset.n; g.classList.add('dim'); var keep = {}; keep[id] = 1; svg.querySelectorAll('.edge').forEach(function (p) { if (p.dataset.a === id || p.dataset.b === id) { p.classList.add('hot'); keep[p.dataset.a] = 1; keep[p.dataset.b] = 1; } }); g.querySelectorAll('.gnode').forEach(function (m) { if (keep[m.dataset.n]) m.classList.add('hl'); }); }); n.addEventListener('mouseleave', function () { g.classList.remove('dim'); svg.querySelectorAll('.edge.hot').forEach(function (p) { p.classList.remove('hot'); }); g.querySelectorAll('.gnode.hl').forEach(function (m) { m.classList.remove('hl'); }); }); });
      if (window._flowResize) window.removeEventListener('resize', window._flowResize);
      window._flowResize = function () { draw(); }; window.addEventListener('resize', window._flowResize);
    };
    go('dashboard');
    /* ===================== DYNAMIC BEHAVIORS ===================== */
    (function () {
      // Resizable main sidebar and sub-sidebar
      (function () {
        var startX, startWidth;
        var activeResizer = null;

        document.addEventListener('mousedown', function (e) {
          var sidebarResizer = e.target.closest('#sidebar-resizer');
          var subSidebarResizer = e.target.closest('.sub-sidebar-resizer');

          if (sidebarResizer) {
            activeResizer = 'main';
            startX = e.clientX;
            startWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sb')) || 210;
            sidebarResizer.classList.add('dragging');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
          } else if (subSidebarResizer) {
            activeResizer = 'sub';
            startX = e.clientX;
            var subSidebar = subSidebarResizer.closest('.sub-sidebar-win');
            startWidth = subSidebar ? subSidebar.getBoundingClientRect().width : 240;
            subSidebarResizer.classList.add('dragging');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
          }
        });

        document.addEventListener('mousemove', function (e) {
          if (!activeResizer) return;

          var dx = e.clientX - startX;
          if (activeResizer === 'main') {
            var newWidth = Math.max(150, Math.min(450, startWidth + dx));
            document.documentElement.style.setProperty('--sb', newWidth + 'px');
          } else if (activeResizer === 'sub') {
            var newWidth = Math.max(160, Math.min(500, startWidth + dx));
            document.documentElement.style.setProperty('--sub-sb', newWidth + 'px');
          }
        });

        document.addEventListener('mouseup', function (e) {
          if (!activeResizer) return;

          document.querySelectorAll('.sidebar-resizer, .sub-sidebar-resizer').forEach(function (r) {
            r.classList.remove('dragging');
          });
          activeResizer = null;
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
        });
      })();

      var sb = document.querySelector('.sidebar');
      var menu = document.querySelector('.topbar .menu');
      var layout = document.getElementById('layout');
      function rmBackdrop() { var b = document.querySelector('.sb-backdrop'); if (b) b.remove(); }
      function closeSb() { sb.classList.remove('open'); rmBackdrop(); }
      function openSb() { sb.classList.add('open'); if (!document.querySelector('.sb-backdrop')) { var b = document.createElement('div'); b.className = 'sb-backdrop'; b.onclick = closeSb; document.body.appendChild(b); } }
      if (menu) menu.onclick = function () { if (window.innerWidth <= 900) { sb.classList.contains('open') ? closeSb() : openSb(); } else { layout.classList.toggle('sb-collapsed'); } };
      document.getElementById('nav').addEventListener('click', function (e) { if (e.target.closest('a') && window.innerWidth <= 900) closeSb(); });
      window.addEventListener('resize', function () { if (window.innerWidth > 900) closeSb(); });
      document.addEventListener('click', function (e) {
        var actName = e.target.closest('.act-name');
        if (actName) {
          e.stopPropagation();
          go('inventory');
          return;
        }
        var t = e.target.closest('.toggle');
        if (t) { t.classList.toggle('on'); return; }
        var c = e.target.closest('.checkbox');
        if (c) { c.classList.toggle('on'); return; }
      });
      document.addEventListener('input', function (e) { if (!e.target.matches('.search input')) return; var q = e.target.value.trim().toLowerCase(); document.querySelectorAll('#view table').forEach(function (tb) { tb.querySelectorAll('tbody tr').forEach(function (tr) { tr.style.display = (!q || tr.textContent.toLowerCase().indexOf(q) > -1) ? '' : 'none'; }); }); });
    })();

    /* ===================== GLOBAL INTERACTIVITY ===================== */
    (function () {
      var ICONS = { ok: "<path d='M20 6 9 17l-5-5'/>", info: "<circle cx='12' cy='12' r='9'/><path d='M12 11v5M12 8h.01'/>", warn: "<path d='M12 3 21 19H3z'/><path d='M12 10v4M12 17h.01'/>", err: "<circle cx='12' cy='12' r='9'/><path d='M15 9l-6 6M9 9l6 6'/>" };
      var box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box);
      function toast(msg, sub, kind) { kind = kind || 'ok'; var t = document.createElement('div'); t.className = 'toast ' + kind; t.innerHTML = "<svg class='ti' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>" + (ICONS[kind] || ICONS.info) + "</svg><span class='tx'><b>" + msg + "</b>" + (sub ? "<span>" + sub + "</span>" : "") + "</span>"; box.appendChild(t); setTimeout(function () { t.classList.add('out'); setTimeout(function () { if (t.parentNode) t.remove(); }, 260); }, 2700); }
      window.toast = toast;
      function csv(tb) { var out = []; tb.querySelectorAll('tr').forEach(function (tr) { var c = []; tr.querySelectorAll('th,td').forEach(function (x) { c.push('"' + x.textContent.trim().replace(/\s+/g, ' ').replace(/"/g, '""') + '"'); }); if (c.length) out.push(c.join(',')); }); return out.join('\n'); }
      function dl(name, text) { var a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(text); a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
      function closeIfModal(btn) { var m = btn.closest('.overlay'); if (m && window.closeModal) closeModal(); }
      document.addEventListener('click', function (e) {
        var qa = e.target.closest('.qa');
        if (qa) { var b = qa.querySelector('b'); var _lab = b ? b.textContent.trim() : ''; var QR = { 'Data Fiduciaries': 'fiduciaries', 'Processing Activities': 'activities', 'Notices': 'notices', 'Purposes': 'purposes', 'Consent Removal': 'consentrm', 'Data Deletion': 'datadel', 'Data Discovery': 'discovery', 'Data Flow': 'dataflow', 'Cookie Consent': 'cookies', 'Data Protection': 'protection', 'Risk Analytics': 'assessments', 'Audit Logs': 'policy' }; var _r = QR[_lab]; if (_r && window.go) { toast(_lab, 'Opening\u2026', 'info'); go(_r); } else { toast(_lab || 'Quick action', 'Opening workspace\u2026', 'info'); } return; }
        var btn = e.target.closest('button, .btn, .iconbtn, .copy');
        if (!btn || btn.disabled) return;
        if (btn.onclick || btn.hasAttribute('onclick')) return;
        if (btn.closest('#nav')) return;
        if (btn.classList.contains('toggle') || btn.classList.contains('checkbox')) return;
        var label = (btn.getAttribute('aria-label') || btn.textContent || '').trim().replace(/\s+/g, ' ');
        var l = label.toLowerCase();
        e.preventDefault();
        if (btn.classList.contains('copy')) { var c = btn.closest('.code,.codebox,pre,.sdkbox'); var txt = c ? c.textContent.replace(/^\s*Copy\s*/i, '').trim() : label; try { if (navigator.clipboard) navigator.clipboard.writeText(txt); } catch (_) { } toast('Copied to clipboard', null, 'ok'); return; }
        if (/delete|remove|revoke|reject|deny|discard|trash|erase/.test(l)) { var row = btn.closest('tr'); if (row) { if (window.confirm('Remove this record? This action cannot be undone.')) { row.style.transition = '.3s'; row.style.opacity = '0'; row.style.background = '#fdeaea'; setTimeout(function () { row.remove(); }, 300); toast('Record removed', null, 'ok'); } } else { toast('Removed', label, 'ok'); closeIfModal(btn); } return; }
        if (/export|download|csv|\.pdf|^report/.test(l)) { var tb = (btn.closest('.card,.panel,#view') || document).querySelector('table'); if (tb) { dl('dpdpx-export.csv', csv(tb)); toast('Export complete', 'CSV file downloaded', 'ok'); } else { toast('Export started', label, 'info'); } return; }
        if (/save|update|apply|submit|confirm|publish|finish|^done$|^ok$/.test(l)) { toast('Changes saved', label || null, 'ok'); closeIfModal(btn); return; }
        if (/^\+|\badd\b|\bnew\b|create|invite|register|import|upload|assign/.test(l)) { toast('Created', (label || 'New record') + ' \u2014 added successfully', 'ok'); closeIfModal(btn); return; }
        if (/generate|regenerate|rotate|reset/.test(l)) { toast('Generated', 'A new value was generated', 'ok'); return; }
        if (/sync|refresh|reload|scan|^run\b|re-?run|recompute|recheck|crawl|discover/.test(l)) { toast(label || 'Running', 'In progress\u2026', 'info'); setTimeout(function () { toast('Completed', label || 'Task finished', 'ok'); }, 950); return; }
        if (/test|connect|verify|validate|send|notify|email|approve|grant|enable|activate/.test(l)) { toast('Done', label, 'ok'); return; }
        if (/filter|sort|column|customize|configure|settings|manage|^view\b|age verification/.test(l)) { toast(label || 'Updated', 'Preferences applied', 'info'); return; }
        if (/\bedit\b/.test(l)) { toast('Edit mode', label, 'info'); return; }
        if (/cancel|close|back|dismiss/.test(l)) { if (btn.closest('.overlay')) { closeIfModal(btn); return; } toast('Dismissed', null, 'info'); return; }
        toast(label || 'Action', 'Action completed', 'ok');
      });
    })();


    /* ===================== CUSTOM TABLE CRUD (T2) ===================== */
    (function () {
      function plain2(html) { var d = document.createElement('div'); d.innerHTML = String(html == null ? '' : html); return (d.textContent || d.innerText || '').trim(); }
      function esc2(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
      var SEL = 'style="width:100%;border:1px solid var(--line);border-radius:8px;padding:9px 11px;font-size:13px;background:#fff;color:#1f2430"';
      var T2 = {
        activities: {
          arr: ACT_ROWS, route: 'activities', title: 'Activity', pk: 'act', si: 4, deny: 'Pending DPO Review',
          fields: [{ l: 'Activity Name', i: 0, t: 'text' }, { l: 'Type (comma separated)', i: 1, t: 'tags' }, { l: 'Fiduciary', i: 2, t: 'text' }, { l: 'Data Principal', i: 3, t: 'text' }, { l: 'Status', i: 4, t: 'select', opts: ['Approved', 'Pending DPO Review'] }]
        },
        ropa: {
          arr: ROPA_ROWS, route: 'ropa', title: 'Recommendation', pk: 'ropa', si: 7, deny: 'Rejected',
          fields: [{ l: 'Activity Name', i: 0, t: 'text' }, { l: 'Type', i: 1, t: 'text' }, { l: 'New / Existing', i: 2, t: 'select', opts: ['NEW', 'EXISTING'] }, { l: 'Confidence Level', i: 3, t: 'select', opts: ['med', 'high'] }, { l: 'Confidence %', i: 4, t: 'text' }, { l: 'PII Count', i: 5, t: 'text' }, { l: 'Systems', i: 6, t: 'text' }, { l: 'Status', i: 7, t: 'select', opts: ['Pending Review', 'Materialized', 'Approved'] }]
        },
        dsr: {
          arr: DSR_ROWS, route: 'dsr', title: 'Request', pk: 'dsr', si: 4, deny: 'Denied',
          fields: [{ l: 'Reference', i: 0, t: 'text' }, { l: 'Right Type', i: 1, t: 'select', opts: ['Access', 'Correction', 'Erasure', 'Withdraw'] }, { l: 'User Email', i: 2, t: 'text' }, { l: 'Submitted', i: 3, t: 'text' }, { l: 'Status', i: 4, t: 'select', opts: ['Approved', 'Denied', 'Partial Success', 'Denied by DPO', 'Pending', 'Pending DPO Approval'] }]
        },
        inventory: {
          arr: INV_ROWS, route: 'inventory', title: 'Field', pk: 'inv', si: 5, deny: 'Optional',
          fields: [{ l: 'Field Name', i: 0, t: 'text' }, { l: 'Data Category', i: 1, t: 'text' }, { l: 'Purpose', i: 2, t: 'text' }, { l: 'Retention', i: 3, t: 'text' }, { l: 'Sensitivity Level', i: 4, t: 'select', opts: ['Low', 'Medium', 'High'] }, { l: 'Required', i: 5, t: 'select', opts: ['Required', 'Optional'] }]
        }
      };
      function save2(tk) { try { localStorage.setItem('dpdpx_t2_' + T2[tk].pk, JSON.stringify(T2[tk].arr)); } catch (e) { } }
      function load2(tk) { try { var d = localStorage.getItem('dpdpx_t2_' + T2[tk].pk); if (d) { var p = JSON.parse(d); if (Array.isArray(p)) { var a = T2[tk].arr; a.length = 0; p.forEach(function (x) { a.push(x); }); } } } catch (e) { } }
      Object.keys(T2).forEach(load2);
      function field(inner, label) { return '<div class="field"><label>' + label + '</label>' + inner + '</div>'; }
      function view2(tk, i) {
        var c = T2[tk], r = c.arr[i]; if (!r) return; var body = c.fields.map(function (f) { var v = f.t === 'tags' ? (r[f.i] || []).join(', ') : r[f.i]; return '<div style="display:flex;justify-content:space-between;gap:18px;padding:10px 0;border-bottom:1px solid var(--line-2)"><span class="muted" style="font-size:12px">' + f.l + '</span><span style="font-size:13px;text-align:right;font-weight:500">' + v + '</span></div>'; }).join('');
        openModal('<div class="modal modal-sm"><div class="modal-h"><div><h3>' + plain2(r[0]) + '</h3><div class="muted" style="font-size:12px;margin-top:3px">' + c.title + ' details</div></div><button class="x" onclick="closeModal()">' + ic('x') + '</button></div><div class="modal-b">' + body + '</div><div class="modal-f"><button class="btn-text" onclick="closeModal()">Close</button><button class="btn btn-blue t2-vedit">' + ic('edit') + ' Edit</button></div></div>');
        var e = document.querySelector('.t2-vedit'); if (e) e.onclick = function () { form2(tk, i); };
      }
      function form2(tk, idx) {
        var c = T2[tk], arr = c.arr, editing = (idx != null && idx > -1), r = editing ? arr[idx] : null;
        var fields = c.fields.map(function (f) {
          var raw = r ? r[f.i] : (f.t === 'tags' ? [] : ''); var val = f.t === 'tags' ? (raw || []).join(', ') : plain2(raw);
          if (f.t === 'select') { var opts = f.opts.slice(); if (val && opts.indexOf(val) < 0) opts.unshift(val); return field('<select class="ff2" data-i="' + f.i + '" data-t="select" ' + SEL + '>' + opts.map(function (o) { return '<option' + (o === val ? ' selected' : '') + '>' + esc2(o) + '</option>'; }).join('') + '</select>', f.l); }
          return field('<input class="ff2" data-i="' + f.i + '" data-t="' + f.t + '" value="' + esc2(val) + '" placeholder="Enter ' + f.l.toLowerCase() + '"/>', f.l);
        }).join('');
        openModal('<div class="modal modal-sm"><div class="modal-h"><h3>' + (editing ? 'Edit ' : 'Add ') + c.title + '</h3><button class="x" onclick="closeModal()">' + ic('x') + '</button></div><div class="modal-b">' + fields + '</div><div class="modal-f"><button class="btn-text" onclick="closeModal()">Cancel</button><button class="btn btn-blue t2-save">' + (editing ? 'Save Changes' : 'Add ' + c.title) + '</button></div></div>');
        document.querySelector('.t2-save').onclick = function () {
          var newRow = editing ? arr[idx].slice() : []; var bad = null;
          document.querySelectorAll('.modal .ff2').forEach(function (inp) {
            var i = +inp.dataset.i, t = inp.dataset.t, v = inp.value.trim(); if (i === 0 && !v) bad = inp;
            if (t === 'tags') { newRow[i] = v ? v.split(',').map(function (x) { return esc2(x.trim()); }).filter(Boolean) : []; } else { newRow[i] = esc2(v); }
          });
          if (bad) { bad.style.borderColor = '#dc2626'; bad.focus(); if (window.toast) toast('This field is required', null, 'err'); return; }
          if (editing) arr[idx] = newRow; else arr.unshift(newRow); save2(tk); closeModal(); go(c.route); if (window.toast) toast(editing ? 'Changes saved' : (c.title + ' added'), editing ? 'Record updated successfully' : 'New record created successfully', 'ok');
        };
      }
      function del2(tk, i) { var c = T2[tk]; if (!c.arr[i]) return; if (!window.confirm('Remove "' + plain2(c.arr[i][0]) + '"? This action cannot be undone.')) return; c.arr.splice(i, 1); save2(tk); go(c.route); if (window.toast) toast('Record removed', 'The record was permanently deleted', 'ok'); }
      function setStatus(tk, i, val) { var c = T2[tk]; if (!c.arr[i]) return; c.arr[i][c.si] = val; save2(tk); go(c.route); if (window.toast) toast(val, 'Status updated', 'ok'); }
      function wire2(tk) {
        var v = document.getElementById('view'); if (!v) return;
        v.querySelectorAll('.t2-add[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); if (tk === 'activities') { openEditActivity(null); } else { form2(tk, null); } }; });
        v.querySelectorAll('.t2-view[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); view2(tk, +b.dataset.i); }; });
        v.querySelectorAll('.t2-edit[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); if (tk === 'activities') { openEditActivity(+b.dataset.i); } else { form2(tk, +b.dataset.i); } }; });
        v.querySelectorAll('.t2-del[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); del2(tk, +b.dataset.i); }; });
        v.querySelectorAll('.t2-appr[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); setStatus(tk, +b.dataset.i, 'Approved'); }; });
        v.querySelectorAll('.t2-deny[data-tk="' + tk + '"]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); setStatus(tk, +b.dataset.i, T2[tk].deny); }; });
      }
      window._t2 = { form: form2, view: view2, del: del2, wire: wire2 };
      function acts(tk, i, extra) { return '<div class="acts"><span class="e t2-view" data-tk="' + tk + '" data-i="' + i + '" title="View">' + ic('eye') + '</span><span class="e t2-edit" data-tk="' + tk + '" data-i="' + i + '" title="Edit">' + ic('edit') + '</span><span class="no t2-del" data-tk="' + tk + '" data-i="' + i + '" title="Delete" style="color:#dc2626">' + ic('trash') + '</span>' + (extra || '') + '</div>'; }
      function apprdeny(tk, i) { return '<span class="ok t2-appr" data-tk="' + tk + '" data-i="' + i + '" title="Approve">' + ic('check') + '</span><span class="no t2-deny" data-tk="' + tk + '" data-i="' + i + '" title="Reject">' + ic('x') + '</span>'; }

      /* ---- ACTIVITIES ---- */
      RENDER.activities = function () {
        var rows = ACT_ROWS.map(function (r, i) {
          return '<tr><td class="act-title act-name" onclick="event.stopPropagation(); window.activeActivityName = ACT_ROWS[' + i + '][0]; go(\'inventory\')" style="cursor:pointer;color:#1f8fd4;font-weight:600">' + r[0] + '</td>' +
            '<td>' + (r[1] || []).map(function (t) { return '<span class="tag low" style="background:#eef0fb;color:#5566a8;margin-right:4px">' + t + '</span>'; }).join('') + '</td>' +
            '<td onclick="event.stopPropagation(); window.activeActivityName = ACT_ROWS[' + i + '][0]; go(\'inventory\')" style="cursor:pointer;color:#1f8fd4;font-weight:600">' + r[2] + '</td><td>' + r[3] + '</td>' +
            '<td>' + (r[4] === 'Approved' ? '<span class="dotpill d-green">Approved</span>' : '<span class="dotpill d-amber">' + r[4] + '</span>') + '</td>' +
            '<td>' + acts('activities', i) + '</td></tr>';
        }).join('');
        return '<div class="page-title">' + ic('list', 'width="20" height="20" style="color:#16a34a"') + ' Processing Activities</div>' +
          '<div class="toolbar" style="margin-top:14px"><div class="search">' + ic('search') + '<input placeholder="Search activities..."/></div><div class="select">All Categories ' + ic('chevd', 'width="13" height="13"') + '</div><div class="select">All Status ' + ic('chevd', 'width="13" height="13"') + '</div><div class="spacer"></div><button class="btn btn-blue t2-add" data-tk="activities">' + ic('plus') + ' Add Activity</button></div>' +
          '<div class="card"><table><thead><tr><th>Activity Name</th><th>Type</th><th>Fiduciary</th><th>Data Principal</th><th>Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
      };
      AFTER.activities = function () { wire2('activities'); };

      /* ---- INVENTORY ---- */
      RENDER.inventory = function () {
        var rows = INV_ROWS.map(function (r, i) {
          var sensDot = r[4] === 'Low' ? '<span style="color:#3b82f6; margin-right:4px;">●</span>' : r[4] === 'Medium' ? '<span style="color:#f97316; margin-right:4px;">●</span>' : '<span style="color:#ef4444; margin-right:4px;">●</span>';
          var reqDot = r[5] === 'Required' ? '<span style="color:#f97316; margin-right:4px;">●</span>' : '<span style="color:#6b7280; margin-right:4px;">●</span>';

          var threeDots = '<span class="inv-edit-btn" style="cursor:pointer;letter-spacing:1px;font-weight:700;padding:4px 8px;font-size:16px;color:#9aa0ab;vertical-align:middle;margin-right:6px;" data-i="' + i + '">\u22ee</span>';
          var delBtn = '<button class="inv-del-btn" data-i="' + i + '" style="background:#fef2f2; border:none; border-radius:4px; padding:6px; cursor:pointer; color:#b91c1c; display:inline-flex; align-items:center; justify-content:center; vertical-align:middle;">' + ic('trash', 'width="14" height="14"') + '</button>';

          return '<tr>' +
            '<td class="tname inv-field-name" data-i="' + i + '" style="cursor:pointer; color:#1f8fd4; font-weight:600;">' + r[0] + '</td>' +
            '<td style="color:#4b5160;">' + r[1] + '</td>' +
            '<td style="color:#4b5160;">' + (r[2] === '\u2014' ? '<span class="muted">\u2014</span>' : r[2]) + '</td>' +
            '<td>' +
            '<span style="background:#f1f5f9; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500;">' + r[3] + '</span>' +
            '</td>' +
            '<td>' +
            '<span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;">' + sensDot + r[4] + '</span>' +
            '</td>' +
            '<td>' +
            '<span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;">' + reqDot + r[5] + '</span>' +
            '</td>' +
            '<td>' +
            '<span style="background:#f0fdf4; border:1px solid #dcfce7; color:#16a34a; padding:4px 8px; border-radius:12px; font-size:11.5px; font-weight:500; display:inline-flex; align-items:center;"><span style="color:#16a34a; margin-right:4px;">●</span> Active</span>' +
            '</td>' +
            '<td style="text-align:right; white-space:nowrap;">' + threeDots + delBtn + '</td>' +
            '</tr>';
        }).join('');

        return '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">' +
          '<button class="btn-text" onclick="go(\'activities\')" style="background:none; border:none; cursor:pointer; display:flex; align-items:center; font-size:20px; font-weight:700; color:#1f2430; gap:8px;">' +
          '<span style="font-size:22px;">←</span> ' + (window.activeActivityName || 'Swag Store Registration') +
          '</button>' +
          '<div class="spacer" style="flex:1"></div>' +
          '<button id="inv-btn-sdk" class="btn" style="background:#166534; color:#fff; border:none; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="stroke:#fff;"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Get SDK' +
          '</button>' +
          '<button class="btn" style="background:#f8fafc; border:1px solid #cbd5e1; color:#374151; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32832 19.4697 5.32832 20.2303 4.85857 20.7C4.38882 21.1697 3.62824 21.1697 3.15849 20.7C1.19835 18.7399 0 15.9745 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5C10.5 22.0858 10.8358 21.75 11.25 21.75C11.6642 21.75 12 21.4142 12 21V22Z"/><circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/><circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"/></svg> Customize Consent Page' +
          '</button>' +
          '<button class="btn" style="background:#f8fafc; border:1px solid #cbd5e1; color:#374151; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1f8fd4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11 2 2 4-4"/></svg> Age Verification' +
          '</button>' +
          '<button id="inv-btn-add" class="btn btn-blue" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; padding:0 14px; font-weight:600; display:flex; align-items:center; gap:6px; height:38px; cursor:pointer;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="stroke:#fff;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Field' +
          '</button>' +
          '</div>' +
          '<div class="toolbar" style="margin-bottom:16px; background:none; border:none; padding:0;">' +
          '<div class="search" style="position:relative;">' +
          ic('search') +
          '<input id="inv-search" placeholder="Search fields..." style="padding-left:32px; height:38px; border-radius:6px; border:1px solid #cbd5e1; width:260px; outline:none; background:#fff;"/>' +
          '</div>' +
          '</div>' +
          '<div class="card">' +
          '<table>' +
          '<thead>' +
          '<tr>' +
          '<th>Field Name</th>' +
          '<th>Data Category</th>' +
          '<th>Purpose</th>' +
          '<th>Retention</th>' +
          '<th>Sensitivity Level</th>' +
          '<th>Required</th>' +
          '<th>Active</th>' +
          '<th>Actions</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody id="inv-table-body">' +
          rows +
          '</tbody>' +
          '</table>' +
          '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
          'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
          ' 1–' + INV_ROWS.length + ' of ' + INV_ROWS.length + ' ' +
          '<span style="display:flex;gap:8px;align-items:center;">' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
          '</span>' +
          '</div>' +
          '</div>';
      };
      AFTER.inventory = function () { };

      /* ---- DSR ---- */
      RENDER.dsr = function () {
        var rows = DSR_ROWS.map(function (r, i) {
          var extra = (r[4] === 'Pending' || r[4] === 'Pending DPO Approval') ? apprdeny('dsr', i) : '';
          return '<tr data-dsr="' + r[0] + '" data-rt="' + r[1] + '" style="cursor:pointer"><td class="tname">' + r[0] + '</td><td>' + r[1] + '</td><td style="color:#3a6fd1">' + r[2] + '</td><td class="muted">' + r[3] + '</td><td>' + dsrStatus(r[4]) + '</td><td>' + acts('dsr', i, extra) + '</td></tr>';
        }).join('');
        var pagination = '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
          'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
          ' 1–' + DSR_ROWS.length + ' of ' + DSR_ROWS.length + ' ' +
          '<span style="display:flex;gap:8px;align-items:center;">' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
          '</span>' +
          '</div>';
        return '<div class="page-title">Exercise Rights Requests <span class="tag blue">Admin</span></div>' +
          '<div class="page-sub">Review data principal rights requests (access, correction, erasure, etc.). Approve to forward to DPO, then complete or deny after DPO sign-off.</div>' +
          '<div class="kpis k4">' + kpi('13', 'Action Required', '', 'alert', '#1483c4', '#e6f4fc') + kpi('11', 'With DPO', '', 'clock', '#1f8fd4', '#e6f4fc') + kpi('6', 'Approved', '', 'check', '#16a34a', '#e7f7ee') + kpi('2', 'Denied', '', 'x', '#dc2626', '#fdeaea') + '</div>' +
          '<div class="toolbar"><div class="search" style="flex:1">' + ic('search') + '<input style="width:100%" placeholder="Search by email or reference"/></div><button class="btn btn-blue t2-add" data-tk="dsr">' + ic('plus') + ' New Request</button></div>' +
          '<div class="card"><table><thead><tr><th>Reference</th><th>Right Type</th><th>User Email</th><th>Submitted</th><th>Current Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table>' + pagination + '</div>';
      };
      AFTER.dsr = function () {
        wire2('dsr');
        document.querySelectorAll('[data-dsr]').forEach(function (el) {
          var openFn = function () {
            var t = el.dataset.rt;
            var em = el.querySelector('td:nth-child(3)').textContent;
            var ref = el.dataset.dsr;
            if (t === 'Correction') openCorrectionModal(ref, em);
            else if (t === 'Access') openAccessModal(ref, em);
            else if (t === 'Erasure') openErasureModal(ref, em);
            else if (t === 'Withdraw') openWithdrawModal(ref, em);
          };
          el.onclick = openFn;
          el.querySelectorAll('.t2-view, .t2-edit').forEach(function (btn) {
            btn.onclick = function (e) {
              e.stopPropagation();
              openFn();
            };
          });
        });
      };

      /* ---- ROPA recommendations ---- */
      ropaRecs = function () {
        var merge = '<div class="card" style="margin-bottom:16px"><div style="padding:14px 18px;display:flex;align-items:center;gap:10px"><b style="font-size:14px">' + ic('branch', 'width="16" height="16" style="display:inline;vertical-align:-3px;color:#5b6270"') + ' Merge candidates</b><span class="muted" style="font-size:12px">1 group \u00b7 6 recommendations</span><span style="margin-left:auto;color:#1f8fd4;font-size:12px;font-weight:600;cursor:pointer">' + ic('refresh', 'width="13" height="13" style="display:inline;vertical-align:-2px"') + ' Refresh</span></div><div style="margin:8px 18px 16px;border:1px solid var(--line);border-radius:9px;padding:11px 14px;display:flex;align-items:center;gap:10px;cursor:pointer" id="mergerow"><b style="font-size:13px">KYC_VERIFICATION \u2192 CUSTOMER</b><span class="tag gray">6 candidates</span><span class="tag blue">\u226580% field overlap</span><span style="margin-left:auto;color:#9aa0ab">' + ic('chevd', 'width="16" height="16"') + '</span></div></div>';
        var kpis = '<div class="kpis k4">' + kpi('25', 'Total Recommendations', '', 'doc', '#1f8fd4', '#e6f4fc') + kpi('8', 'Pending Review', '', 'clock', '#1483c4', '#e6f4fc') + kpi('3', 'High Confidence', '', 'trend', '#16a34a', '#e7f7ee') + kpi('15', 'Approved', '', 'check', '#7c3aed', '#f1eafe') + '</div>';
        var toolbar = '<div class="toolbar"><button class="btn btn-blue t2-add" data-tk="ropa">' + ic('plus') + ' Add Recommendation</button><button class="btn btn-ghost">' + ic('refresh') + ' Generate Recommendations</button><button class="btn btn-red">' + ic('x') + ' Clear Pending</button><div class="spacer"></div><div class="search">' + ic('search') + '<input placeholder="Search..."/></div></div>';
        var rows = ROPA_ROWS.map(function (r, i) { return '<tr><td><span class="checkbox"></span></td><td><div class="tname">' + r[0] + '</div><div class="tsub">' + r[1] + '</div><div class="ai">' + ic('sparkles', 'width="12" height="12"') + ' AI Enhanced</div></td><td><span class="tag new">' + r[2] + '</span></td><td><span class="tag ' + r[3] + '">' + (r[3] === 'high' ? 'High' : 'Medium') + '</span> ' + r[4] + '%</td><td>' + r[5] + '</td><td>' + r[6] + '</td><td>' + statusBadge(r[7]) + '</td><td><div class="acts"><span class="e" data-detail="' + i + '" title="Detail">' + ic('eye') + '</span><span class="e t2-edit" data-tk="ropa" data-i="' + i + '" title="Edit">' + ic('edit') + '</span><span class="no t2-del" data-tk="ropa" data-i="' + i + '" title="Delete" style="color:#dc2626">' + ic('trash') + '</span>' + (r[7] === 'Pending Review' ? apprdeny('ropa', i) : '') + '</div></td></tr>'; }).join('');
        var pagination = '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
          'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
          ' 1–' + ROPA_ROWS.length + ' of ' + ROPA_ROWS.length + ' ' +
          '<span style="display:flex;gap:8px;align-items:center;">' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
          '</span>' +
          '</div>';
        var table = '<div class="card"><table><thead><tr><th style="width:38px"><span class="checkbox"></span></th><th>Activity Name</th><th>Type</th><th>Confidence</th><th>PII Count</th><th>Systems</th><th>Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table>' + pagination + '</div>';
        return merge + kpis + toolbar + table;
      };
      AFTER.ropa = function () { document.querySelectorAll('.tabs button[data-rt]').forEach(function (b) { b.onclick = function () { ropaTab = b.dataset.rt; go('ropa'); }; }); var mr = document.getElementById('mergerow'); if (mr) mr.onclick = openMergeModal; document.querySelectorAll('[data-detail]').forEach(function (el) { el.onclick = function () { openRecDetail(parseInt(el.dataset.detail)); }; }); wire2('ropa'); };
    })();


    /* ===================== ACTIVITIES FILTERS ===================== */
    (function () {
      function ddChev() { return ic('chevd', 'width="13" height="13"'); }
      function wireFilters() {
        var v = document.getElementById('view'); if (!v) return;
        var map = { 'all categories': 1, 'all status': 4 };
        v.querySelectorAll('.toolbar .select').forEach(function (sel) {
          if (!sel.getAttribute('data-base')) sel.setAttribute('data-base', sel.textContent.trim());
          var base = sel.getAttribute('data-base'); var key = base.toLowerCase().replace(/\s+/g, ' ');
          var col = null; Object.keys(map).forEach(function (k) { if (key.indexOf(k) === 0) col = map[k]; });
          if (col == null) return; sel.style.cursor = 'pointer';
          sel.onclick = function (e) {
            e.stopPropagation();
            var rows = [].slice.call(v.querySelectorAll('table tbody tr')); var seen = {}, opts = [base];
            rows.forEach(function (tr) {
              var cell = tr.children[col]; if (!cell) return;
              if (col === 1) { [].forEach.call(cell.querySelectorAll('.tag'), function (t) { var x = t.textContent.trim(); if (x && !seen[x]) { seen[x] = 1; opts.push(x); } }); }
              else { var x = cell.textContent.trim(); if (x && !seen[x]) { seen[x] = 1; opts.push(x); } }
            });
            var r = sel.getBoundingClientRect();
            showDropdown(r.left, r.bottom + 4, opts, null, function (choice) {
              rows.forEach(function (tr) {
                var cell = tr.children[col]; if (!cell) { return; } var show = true;
                if (choice !== base) { if (col === 1) { show = [].some.call(cell.querySelectorAll('.tag'), function (t) { return t.textContent.trim() === choice; }); } else { show = cell.textContent.trim() === choice; } }
                tr.style.display = show ? '' : 'none';
              });
              sel.innerHTML = (choice === base ? base : choice) + ' ' + ddChev();
              if (window.toast) toast(choice === base ? 'Filter cleared' : 'Filter applied', choice === base ? null : choice, 'info');
            });
          };
        });
      }
      AFTER.activities = function () { if (window._t2) window._t2.wire('activities'); wireFilters(); };
    })();


    /* ===================== LOGIN / AUTH ===================== */
    (function () {
      var lg = document.getElementById('login'); if (!lg) return;
      function unlock() { lg.classList.add('hide'); setTimeout(function () { lg.style.display = 'none'; }, 440); try { sessionStorage.setItem('dpdpx_auth', '1'); } catch (e) { } var em = (document.getElementById('lemail') || {}).value || 'admin@jodetx.com'; if (window.toast) setTimeout(function () { toast('Welcome back', 'Signed in as ' + em, 'ok'); }, 520); }
      try { if (sessionStorage.getItem('dpdpx_auth') === '1') { lg.style.display = 'none'; lg.classList.add('hide'); } } catch (e) { }
      var f = document.getElementById('lform');
      if (f) f.addEventListener('submit', function (e) { e.preventDefault(); var em = (document.getElementById('lemail').value || '').trim(); var pw = (document.getElementById('lpass').value || '').trim(); var er = document.getElementById('lerr'); if (!em || !pw) { er.textContent = 'Please enter your email and password.'; return; } if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { er.textContent = 'Please enter a valid email address.'; return; } er.textContent = ''; unlock(); });
      var sso = document.getElementById('lsso'); if (sso) sso.addEventListener('click', function () { var er = document.getElementById('lerr'); if (er) er.textContent = ''; unlock(); });
      var fg = document.getElementById('lforgot'); if (fg) fg.addEventListener('click', function () { if (window.toast) toast('Password reset', 'A reset link would be sent to your email', 'info'); });
      window._logout = function () { try { sessionStorage.removeItem('dpdpx_auth'); } catch (e) { } lg.style.display = 'flex'; void lg.offsetWidth; lg.classList.remove('hide'); if (window.toast) toast('Signed out', null, 'info'); };
      var ibs = document.querySelectorAll('.topbar .right .iconbtn'); if (ibs.length) ibs[ibs.length - 1].onclick = function () { window._logout(); };
    })();


    /* ===================== GENPAGE CRUD (standardized data pages) ===================== */
    (function () {
      var GPSTORE = {};
      var GP = ['fiduciaries', 'processors', 'purposes', 'notices', 'cookies', 'assessments', 'offline', 'protection', 'policy', 'consentrm', 'datadel'];
      function plain(html) { var d = document.createElement('div'); d.innerHTML = (html == null ? '' : String(html)); return (d.textContent || d.innerText || '').replace(/\s+/g, ' ').trim(); }
      function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
      function statusCls(v) {
        v = ('' + v).toLowerCase().trim();
        if (/^no$|draft|inactive|archived|n\/a/.test(v)) return 'sb-gray';
        if (/^yes$|pending|review|investigat|progress|with dpo|partial|medium/.test(v)) return 'sb-amber';
        if (/active|approved|publish|complet|processed|signed|resolved|enabled|success|^low$/.test(v)) return 'sb-green';
        if (/reject|denied|^open$|^high$|withdraw|missing|fail|error|critical/.test(v)) return 'sb-red';
        return 'sb-gray';
      }
      function colKind(sampleHtml) { var h = ('' + sampleHtml); if (/statusbadge/.test(h)) return 'status'; if (/badgemini/.test(h)) return 'badge'; if (/class="tag/.test(h)) return 'tag'; return 'text'; }
      function sampleCell(S, col) { for (var i = 0; i < S.rows.length; i++) { if (S.rows[i][col] != null) return S.rows[i][col]; } return ''; }
      function distinct(S, col) { var seen = {}, out = []; S.rows.forEach(function (r) { var v = plain(r[col]); if (v && !seen[v]) { seen[v] = 1; out.push(v); } }); return out; }
      function matchCol(label, cols) { var stem = label.replace(/^all\s+/i, '').toLowerCase().replace(/ies$/, 'y').replace(/s$/, ''); for (var i = 0; i < cols.length; i++) { var c = cols[i].toLowerCase(); if (c.indexOf(stem) > -1 || stem.indexOf(c.replace(/s$/, '')) > -1) return i; } return cols.length - 1; }
      function saveGP(k) { try { localStorage.setItem('dpdpx_gp_' + k, JSON.stringify(GPSTORE[k].rows)); } catch (e) { } }
      function loadGP(k) { try { var d = localStorage.getItem('dpdpx_gp_' + k); if (d) { var p = JSON.parse(d); if (Array.isArray(p)) GPSTORE[k].rows = p; } } catch (e) { } }

      genPage = function (c) {
        var key = current;
        if (!GPSTORE[key]) { GPSTORE[key] = { cols: c.cols, rows: c.rows.map(function (r) { return r.slice(); }), add: c.add, filters: (c.filters || ['All Status']), fil: {} }; loadGP(key); }
        var S = GPSTORE[key]; S.cols = c.cols; S.add = c.add; S.filters = (c.filters || ['All Status']);
        var kp = '';
        if (c.kpis) { var kk = c.kpis.map(function (x) { return x.slice(); }); if (/total/i.test(kk[0][1])) kk[0][0] = String(S.rows.length); kp = '<div class="kpis k4">' + kk.map(function (k) { return kpi(k[0], k[1], k[2] || '', k[3], k[4], k[5]); }).join('') + '</div>'; }
        var th = c.cols.map(function (h) { return '<th>' + h + '</th>'; }).join('');
        var idx = S.rows.map(function (r, i) { return i; }).filter(function (i) { var r = S.rows[i]; var ok = true; Object.keys(S.fil).forEach(function (col) { if (plain(r[col]) !== S.fil[col]) ok = false; }); return ok; });
        var tr = idx.map(function (i) { var r = S.rows[i]; return '<tr>' + r.map(function (cell, ci) { return '<td' + (ci === 0 ? ' class="tname"' : '') + '>' + cell + '</td>'; }).join('') + '<td><div class="acts"><span class="e gp-view" data-i="' + i + '" title="View">' + ic('eye') + '</span><span class="e gp-edit" data-i="' + i + '" title="Edit">' + ic('edit') + '</span><span class="no gp-del" data-i="' + i + '" title="Delete" style="color:#dc2626">' + ic('trash') + '</span></div></td></tr>'; }).join('');
        if (!idx.length) tr = '<tr><td colspan="' + (c.cols.length + 1) + '" style="text-align:center;color:#9aa0ab;padding:34px">No matching records. Try clearing filters or add a new record.</td></tr>';
        var filters = S.filters.map(function (f) { var col = matchCol(f, c.cols); var active = S.fil[col]; var lab = active || f; return '<div class="select gp-filter" data-col="' + col + '" data-base="' + esc(f) + '"' + (active ? ' style="border-color:#1f8fd4;color:#1f8fd4"' : '') + '>' + lab + ' ' + ic('chevd', 'width="12" height="12"') + '</div>'; }).join('');
        return '<div class="page-title">' + ic(c.icon, 'width="20" height="20" style="color:' + c.color + '"') + ' ' + c.title + '</div>' + (c.sub ? '<div class="page-sub">' + c.sub + '</div>' : '<div style="height:14px"></div>') + kp + '<div class="toolbar"><div class="search">' + ic('search') + '<input class="gp-search" placeholder="Search..."/></div>' + filters + '<div class="spacer"></div>' + (c.add ? '<button class="btn btn-blue gp-add">' + ic('plus') + ' ' + c.add + '</button>' : '') + '</div><div class="card"><table><thead><tr>' + th + '<th>Actions</th></tr></thead><tbody>' + tr + '</tbody></table></div>';
      };

      function viewGP(key, i) {
        var S = GPSTORE[key]; var r = S.rows[i]; if (!r) return; var body = S.cols.map(function (cn, ci) { return '<div style="display:flex;justify-content:space-between;gap:18px;padding:10px 0;border-bottom:1px solid var(--line-2)"><span class="muted" style="font-size:12px">' + cn + '</span><span style="font-size:13px;text-align:right;font-weight:500">' + r[ci] + '</span></div>'; }).join('');
        openModal('<div class="modal modal-sm"><div class="modal-h"><div><h3>' + plain(r[0]) + '</h3><div class="muted" style="font-size:12px;margin-top:3px">Record details</div></div><button class="x" onclick="closeModal()">' + ic('x') + '</button></div><div class="modal-b">' + body + '</div><div class="modal-f"><button class="btn-text" onclick="closeModal()">Close</button><button class="btn btn-blue gp-vedit">' + ic('edit') + ' Edit</button></div></div>');
        var e = document.querySelector('.gp-vedit'); if (e) e.onclick = function () { formGP(key, i); };
      }

      function formGP(key, idx) {
        var S = GPSTORE[key]; var editing = (idx != null && idx > -1); var r = editing ? S.rows[idx] : null;
        var fields = S.cols.map(function (cn, ci) {
          var kind = colKind(editing ? r[ci] : sampleCell(S, ci)); var val = editing ? plain(r[ci]) : '';
          if (kind !== 'text') {
            var opts = distinct(S, ci); if (val && opts.indexOf(val) < 0) opts.unshift(val); if (!opts.length) opts = [val || ''];
            return '<div class="field"><label>' + cn + '</label><select class="gpf" data-ci="' + ci + '" data-kind="' + kind + '" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:9px 11px;font-size:13px;background:#fff;color:#1f2430">' + opts.map(function (o) { return '<option' + (o === val ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select></div>';
          }
          return '<div class="field"><label>' + cn + '</label><input class="gpf" data-ci="' + ci + '" data-kind="text" value="' + esc(val) + '" placeholder="Enter ' + cn.toLowerCase() + '"/></div>';
        }).join('');
        openModal('<div class="modal modal-sm"><div class="modal-h"><h3>' + (editing ? 'Edit Record' : 'Add ' + (S.add ? S.add.replace(/^add\s+/i, '') : 'Record')) + '</h3><button class="x" onclick="closeModal()">' + ic('x') + '</button></div><div class="modal-b">' + fields + '</div><div class="modal-f"><button class="btn-text" onclick="closeModal()">Cancel</button><button class="btn btn-blue gp-save">' + (editing ? 'Save Changes' : 'Add Record') + '</button></div></div>');
        document.querySelector('.gp-save').onclick = function () {
          var newRow = editing ? S.rows[idx].slice() : []; var bad = null;
          document.querySelectorAll('.modal .gpf').forEach(function (inp) {
            var ci = +inp.dataset.ci, kind = inp.dataset.kind, v = inp.value.trim(); if (ci === 0 && !v) bad = inp;
            var orig = editing ? S.rows[idx][ci] : null;
            if (editing && orig != null && plain(orig) === v) { newRow[ci] = orig; return; }
            if (kind === 'status') newRow[ci] = sb(esc(v), statusCls(v));
            else if (kind === 'tag') newRow[ci] = tg(esc(v), 'blue');
            else if (kind === 'badge') newRow[ci] = bm(esc(v), 'bm-std');
            else newRow[ci] = esc(v);
          });
          if (bad) { bad.style.borderColor = '#dc2626'; bad.focus(); if (window.toast) toast('This field is required', null, 'err'); return; }
          if (editing) S.rows[idx] = newRow; else S.rows.unshift(newRow); saveGP(key); closeModal(); go(key); if (window.toast) toast(editing ? 'Changes saved' : 'Record added', editing ? 'Record updated successfully' : 'New record created successfully', 'ok');
        };
      }

      function delGP(key, i) { var S = GPSTORE[key]; if (!S.rows[i]) return; if (!window.confirm('Remove "' + plain(S.rows[i][0]) + '"? This action cannot be undone.')) return; S.rows.splice(i, 1); saveGP(key); go(key); if (window.toast) toast('Record removed', 'The record was permanently deleted', 'ok'); }

      function wireGP(key) {
        var v = document.getElementById('view'); if (!v) return; var S = GPSTORE[key]; if (!S) return;
        var add = v.querySelector('.gp-add'); if (add) add.onclick = function () { formGP(key, null); };
        v.querySelectorAll('.gp-view').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); viewGP(key, +b.dataset.i); }; });
        v.querySelectorAll('.gp-edit').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); formGP(key, +b.dataset.i); }; });
        v.querySelectorAll('.gp-del').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); delGP(key, +b.dataset.i); }; });
        v.querySelectorAll('.gp-filter').forEach(function (sel) { sel.style.cursor = 'pointer'; sel.onclick = function (e) { e.stopPropagation(); var col = +sel.dataset.col, base = sel.dataset.base; var opts = [base].concat(distinct(S, col)); var rect = sel.getBoundingClientRect(); showDropdown(rect.left, rect.bottom + 4, opts, S.fil[col] || base, function (choice) { if (choice === base) delete S.fil[col]; else S.fil[col] = choice; go(key); if (window.toast) toast(choice === base ? 'Filter cleared' : 'Filter applied', choice === base ? null : choice, 'info'); }); }; });
        var sch = v.querySelector('.gp-search'); if (sch) sch.oninput = function () { var q = this.value.toLowerCase(); v.querySelectorAll('table tbody tr').forEach(function (tr) { if (tr.children.length < 2) return; tr.style.display = tr.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none'; }); };
      }
      window._gp = { form: formGP, view: viewGP, del: delGP, wire: wireGP };
      GP.forEach(function (k) { AFTER[k] = function () { wireGP(k); }; });
    })();

    /* ===================== USER DIRECTORY / IDENTITY RESOLUTION ===================== */
    function generateUserAttributes(name, email) {
      var firstName = name.split(' ')[0].toLowerCase();
      var isFemale = firstName === 'himanshi' || firstName === 'ananya' || firstName === 'neha';
      var dateStr = 'Added: 9/4/2026, 6:10:39 PM';
      var scanStr = 'Last scanned: 24/4/2026, 7:20:55 PM';

      return [
        { id: 'a_em1', name: 'Email', category: 'PERSONAL_INFORMATION', value: email, date: scanStr, icon: 'globe' },
        { id: 'a_ad', name: 'Address', category: 'PERSONAL_INFORMATION', value: '123 Main St, Mumbai', date: dateStr, icon: 'map' },
        { id: 'a_ge1', name: 'gender', category: 'PERSONAL_INFORMATION', value: isFemale ? 'Female' : 'Male', date: 'Added: 13/4/2026, 9:57:02 PM', icon: 'user' },

        { id: 'a_ph', name: 'phone', category: 'PERSONAL_DATA', value: '+91 98765 43210', date: dateStr, icon: 'phone' },
        { id: 'a_em2', name: 'email', category: 'PERSONAL_DATA', value: email, date: scanStr, icon: 'globe' },

        { id: 'a_adnum', name: 'Aadhaar Number', category: 'SENSITIVE_DATA', value: '********4321', date: dateStr, icon: 'lock' },

        { id: 'a_ge2', name: 'gender', category: 'OTHER', value: isFemale ? 'Female' : 'Male', date: dateStr, icon: 'user' },
        { id: 'a_ci', name: 'city', category: 'OTHER', value: 'Mumbai', date: dateStr, icon: 'map' },
        { id: 'a_co', name: 'Country', category: 'OTHER', value: 'India', date: dateStr, icon: 'globe' },
        { id: 'a_bg', name: 'blood_group', category: 'OTHER', value: 'O+', date: dateStr, icon: 'alert' },
        { id: 'a_he', name: 'height', category: 'OTHER', value: '175 cm', date: dateStr, icon: 'user' },
        { id: 'a_gidt', name: 'government_id_type', category: 'OTHER', value: 'PAN Card', date: dateStr, icon: 'lock' },
        { id: 'a_gidv', name: 'government_id_value', category: 'OTHER', value: 'ABCDE1234F', date: dateStr, icon: 'lock' },
        { id: 'a_we', name: 'weight', category: 'OTHER', value: '70 kg', date: dateStr, icon: 'user' },
        { id: 'a_ka', name: 'known_allergies', category: 'OTHER', value: 'None', date: dateStr, icon: 'alert' },
        { id: 'a_cc', name: 'chronic_conditions', category: 'OTHER', value: 'None', date: dateStr, icon: 'alert' },
        { id: 'a_cm', name: 'current_medications', category: 'OTHER', value: 'None', date: dateStr, icon: 'alert' },
        { id: 'a_ps', name: 'previous_surgeries', category: 'OTHER', value: 'None', date: dateStr, icon: 'alert' }
      ].map(function (item) {
        item.id = item.id + '_' + Math.random().toString(36).substr(2, 5);
        return item;
      });
    }

    function generateUserDetections(name) {
      return [
        {
          type: 'Aadhaar Number',
          redacted: '9*8*-*8*2*-*9*9*',
          sourceType: 'Database & S3',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhar_number',
            's3://mo-privacy-s3/aadhar.csv',
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/aadhar',
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_logs/raw_data'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">4 source types</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;">Multiple locations captured for this grouped detection</div>' +
            '<div style="display:flex;gap:6px;margin-top:6px;align-items:center;">' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">4 locations</span>' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">4 source types</span>' +
            '<a href="#" class="view-locations-link" data-type="Aadhaar Number" style="font-size:11px;color:#1f8fd4;font-weight:600;text-decoration:none;margin-left:4px;">View all</a>' +
            '</div>',
          scanned: '24/4/2026, 7:27:08 PM'
        },
        {
          type: 'Unknown',
          redacted: 'VO**OO**O5',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Driver License Number',
          redacted: 'D*-W*-10**00*',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/driving_license_number',
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/description'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;">Multiple locations captured for this grouped detection</div>' +
            '<div style="display:flex;gap:6px;margin-top:6px;align-items:center;">' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">2 locations</span>' +
            '<a href="#" class="view-locations-link" data-type="Driver License Number" style="font-size:11px;color:#1f8fd4;font-weight:600;text-decoration:none;margin-left:4px;">View all</a>' +
            '</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'PAN Card Number',
          redacted: 'FR**T1**5P',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/pan_number',
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_logs/pan_val'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;">Multiple locations captured for this grouped detection</div>' +
            '<div style="display:flex;gap:6px;margin-top:6px;align-items:center;">' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">2 locations</span>' +
            '<a href="#" class="view-locations-link" data-type="PAN Card Number" style="font-size:11px;color:#1f8fd4;font-weight:600;text-decoration:none;margin-left:4px;">View all</a>' +
            '</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Credit Card Number',
          redacted: '0000****4037****',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/credit_card',
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_transactions/cc_number'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;">Multiple locations captured for this grouped detection</div>' +
            '<div style="display:flex;gap:6px;margin-top:6px;align-items:center;">' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">2 locations</span>' +
            '<a href="#" class="view-locations-link" data-type="Credit Card Number" style="font-size:11px;color:#1f8fd4;font-weight:600;text-decoration:none;margin-left:4px;">View all</a>' +
            '</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Email Address',
          redacted: 'm****h@xecurify.com',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/email'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/email</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Phone Number',
          redacted: '+91 98*** **210',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/phone'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/phone</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Physical Address',
          redacted: '123 M*** S*, M****i',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/address'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/address</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Gender Value',
          redacted: 'M**e / F****e',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/gender'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/gender</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'City Location',
          redacted: 'M****i',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/city'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/city</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Country Name',
          redacted: 'I***a',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/country'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/country</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        },
        {
          type: 'Blood Group Type',
          redacted: 'O*',
          sourceType: 'Database',
          locations: [
            'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/blood_group'
          ],
          sourceHtml: '<div style="font-weight:600;color:var(--ink);">Database</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;font-family:monospace;word-break:break-all;">testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/blood_group</div>',
          scanned: '24/4/2026, 7:20:55 PM'
        }
      ];
    }

    function generateUserAudits(name) {
      return [
        { action: 'Attribute Email verified', actor: name, ip: '192.168.1.45', date: '24/4/2026, 7:20:55 PM' },
        { action: 'Address updated', actor: 'System Sync', ip: '10.0.4.12', date: '9/4/2026, 6:10:40 PM' },
        { action: 'Aadhaar Number mapped', actor: name, ip: '192.168.1.45', date: '9/4/2026, 6:10:39 PM' },
        { action: 'User registered', actor: 'System Sync', ip: '10.0.4.12', date: '9/4/2026, 6:10:39 PM' }
      ];
    }

    var USERDIR_DATA = [
      {
        id: 'u1',
        name: 'navneet Chhabra',
        email: 'navneet@xecurify.com',
        externalId: '36d863ca-6763-4dea-b3cf-9d4f557ac3c4',
        lastSynced: '12/5/2026, 5:10:23 PM',
        avatarColor: '#1f3b5c',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u2',
        name: 'Himanshi Saini',
        email: 'himanshi.saini@xecurify.com',
        externalId: 'f87a8b9c-1234-4bc2-8c7e-92d3f4567abc',
        lastSynced: '11/5/2026, 4:22:15 PM',
        avatarColor: '#7c3aed',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u3',
        name: 'Radhesham Joshi',
        email: 'radhesham.joshi@xecurify.com',
        externalId: '12345678-abcd-ef01-2345-6789abcdef01',
        lastSynced: '10/5/2026, 2:15:00 PM',
        avatarColor: '#1f8fd4',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u4',
        name: 'Aarav Mehta',
        email: 'aarav.mehta@xecurify.com',
        externalId: '87654321-dcba-10fe-5432-10fedcba9876',
        lastSynced: '09/5/2026, 1:12:00 PM',
        avatarColor: '#ea580c',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u5',
        name: 'Vikram Singh',
        email: 'vikram.singh@xecurify.com',
        externalId: '98765432-fedc-ba98-7654-3210fedcba98',
        lastSynced: '08/5/2026, 11:30:00 AM',
        avatarColor: '#16a34a',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u6',
        name: 'Ananya Sharma',
        email: 'ananya.sharma@xecurify.com',
        externalId: '54321098-abcd-ef01-2345-6789abcdef01',
        lastSynced: '07/5/2026, 10:15:00 AM',
        avatarColor: '#db2777',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u7',
        name: 'Neha Patil',
        email: 'neha.patil@xecurify.com',
        externalId: '24681357-ace0-bdf2-4681-3579ace0bdf2',
        lastSynced: '06/5/2026, 9:00:00 AM',
        avatarColor: '#2563eb',
        attributes: [],
        detections: [],
        audits: []
      },
      {
        id: 'u8',
        name: 'Sanjay Dutt',
        email: 'sanjay.dutt@xecurify.com',
        externalId: '13579246-8024-6810-1214-161820222426',
        lastSynced: '05/5/2026, 8:45:00 AM',
        avatarColor: '#4b5563',
        attributes: [],
        detections: [],
        audits: []
      }
    ];

    // Populate attributes, detections and audits for all users
    USERDIR_DATA.forEach(function (u) {
      u.attributes = generateUserAttributes(u.name, u.email);
      u.detections = generateUserDetections(u.name);
      u.audits = generateUserAudits(u.name);
    });

    var ALL_FINDINGS_DATA = [
      {
        type: 'Aadhaar Number',
        icon: 'lock',
        iconColor: '#7c3aed',
        occurrences: 7,
        detections: 7,
        value: '5*5* 5*7* 4*1*',
        rawValue: '5254 5978 4112',
        sourceType: '3 source types',
        locations: [
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhar_number',
          's3://mo-privacy-s3/aadhar.csv',
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/aadhar',
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_logs/raw_data'
        ],
        belongsTo: 'No user linked',
        detectedOn: '24/4/2026',
        status: 'Not yet linked'
      },
      {
        type: 'Email Address',
        icon: 'globe',
        iconColor: '#3b82f6',
        occurrences: 4,
        detections: 4,
        value: 'rz**ck@do**in.c*m',
        rawValue: 'rzwick@domain.com',
        sourceType: '3 source types',
        locations: [
          's3://mo-privacy-s3/sample-data-excel.xlsx',
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/email',
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/email'
        ],
        belongsTo: 'No user linked',
        detectedOn: '24/4/2026',
        status: 'Not yet linked'
      },
      {
        type: 'Aadhaar Number',
        icon: 'lock',
        iconColor: '#7c3aed',
        occurrences: 7,
        detections: 7,
        value: '4*3* 8*1* 0*8*',
        rawValue: '4839 8210 0785',
        sourceType: '3 source types',
        locations: [
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_identity_documents/aadhar_number'
        ],
        belongsTo: 'No user linked',
        detectedOn: '24/4/2026',
        status: 'Not yet linked'
      },
      {
        type: 'Email Address',
        icon: 'globe',
        iconColor: '#3b82f6',
        occurrences: 3,
        detections: 3,
        value: 'mt**ns**d@do**in.c*m',
        rawValue: 'mtansen@domain.com',
        sourceType: '3 source types',
        locations: [
          'testmdm-rds.cvpa8ite3csl.us-east-1.rds.amazonaws.com:3306/user_pii_db/pii_users/email'
        ],
        belongsTo: 'No user linked',
        detectedOn: '24/4/2026',
        status: 'Not yet linked'
      }
    ];

    var USERDIR_STATE = {
      selectedUserId: 'u1',
      searchQuery: '',
      activeTab: 'attributes', // 'attributes', 'detections', 'audits'
      topTab: 'directory', // 'directory', 'findings'
      collapsedSections: {},
      findSearchQuery: '',
      findLinkStatusFilter: 'All',
      findDataTypeFilter: 'All'
    };

    RENDER.userdir = function () {
      var s = USERDIR_STATE;

      // Tab selectors
      var topTabs = '<div class="tabs" style="margin-bottom: 20px;">' +
        '<button class="' + (s.topTab === 'directory' ? 'on' : '') + '" id="ud-top-dir">User Directory</button>' +
        '<button class="' + (s.topTab === 'findings' ? 'on' : '') + '" id="ud-top-find">All Findings</button>' +
        '</div>';

      var header = '<div class="page-title">Identity Resolution</div>' +
        '<div class="page-sub">Review what attributes are known for each user, inspect the data detections already linked to them, and adjust the identity map when a hash needs to change.</div>' +
        topTabs;

      if (s.topTab === 'findings') {
        // Calculate KPI counts
        var totalDetectionsCount = 3946;
        var linkedCount = 690 + ALL_FINDINGS_DATA.filter(function (f) { return f.status === 'Linked'; }).length;
        var notLinkedCount = 3256 - ALL_FINDINGS_DATA.filter(function (f) { return f.status === 'Linked'; }).length;

        // Filter ALL_FINDINGS_DATA
        var filteredFindings = ALL_FINDINGS_DATA.filter(function (f) {
          var matchesSearch = !s.findSearchQuery ||
            f.type.toLowerCase().indexOf(s.findSearchQuery.toLowerCase()) > -1 ||
            f.value.toLowerCase().indexOf(s.findSearchQuery.toLowerCase()) > -1 ||
            f.belongsTo.toLowerCase().indexOf(s.findSearchQuery.toLowerCase()) > -1;

          var matchesStatus = s.findLinkStatusFilter === 'All' ||
            (s.findLinkStatusFilter === 'Linked' && f.status === 'Linked') ||
            (s.findLinkStatusFilter === 'Not yet linked' && f.status === 'Not yet linked');

          var matchesType = s.findDataTypeFilter === 'All' || f.type === s.findDataTypeFilter;

          return matchesSearch && matchesStatus && matchesType;
        });

        var findingsRows = filteredFindings.map(function (f, idx) {
          var sourceHtml = '<div style="font-weight:600;color:var(--ink);">' + f.sourceType + '</div>' +
            '<div class="muted" style="font-size:11.5px;margin-top:2px;">Multiple locations captured for this grouped detection</div>' +
            '<div style="display:flex;gap:6px;margin-top:6px;align-items:center;">' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">' + f.locations.length + ' locations</span>' +
            '<span style="background:#e6f4fc;color:#1f8fd4;font-size:11px;padding:2px 6px;border-radius:4px;font-weight:600;">' + f.sourceType + '</span>' +
            '<a href="#" class="view-locations-link-find" data-idx="' + idx + '" style="font-size:11px;color:#1f8fd4;font-weight:600;text-decoration:none;margin-left:4px;">View all</a>' +
            '</div>';

          var belongsStyle = f.belongsTo === 'No user linked' ? 'font-style:italic;color:var(--ink-3);' : 'font-weight:600;color:var(--navy);';

          return '<tr>' +
            '<td>' +
            '<div style="display:flex; align-items:center; gap:10px;">' +
            '<span style="color: ' + f.iconColor + '; background: #f3f4f6; width: 28px; height: 28px; border-radius: 6px; display: grid; place-items: center; flex: none;">' +
            ic(f.icon, 'width="14" height="14"') +
            '</span>' +
            '<div>' +
            '<b style="font-size:13px; color:var(--ink);">' + f.type + '</b>' +
            '<div class="muted" style="font-size:11px;margin-top:1px;">' + f.occurrences + 'x occurrences &middot; Seen in ' + f.detections + ' detections</div>' +
            '</div>' +
            '</div>' +
            '</td>' +
            '<td style="font-family:monospace; font-size:13px; color:var(--ink);">' + f.value + '</td>' +
            '<td>' + sourceHtml + '</td>' +
            '<td style="' + belongsStyle + '">' + f.belongsTo + '</td>' +
            '<td class="muted" style="font-size:12.5px;">' + f.detectedOn + '</td>' +
            '<td><span class="statusbadge ' + (f.status === 'Linked' ? 'sb-green' : 'sb-amber') + '">' + f.status + '</span></td>' +
            '<td>' +
            '<div class="acts">' +
            '<span class="e gp-view-find-det" data-idx="' + idx + '" title="View">' + ic('eye') + '</span>' +
            '<span class="e gp-link-find" data-idx="' + idx + '" title="Link to User" style="color:#1f8fd4;">' + ic('people') + '</span>' +
            '<span class="no gp-exclude-find" data-idx="' + idx + '" title="Exclude" style="color:#dc2626;">' + ic('x') + '</span>' +
            '</div>' +
            '</td>' +
            '</tr>';
        }).join('');

        var kpisHtml = '<div class="kpis k4" style="margin-bottom: 20px;">' +
          '<div class="card" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; box-shadow:none;">' +
          '<div><div style="font-size: 24px; font-weight: 800; color: var(--navy);">' + totalDetectionsCount + '</div><div class="muted" style="font-size: 12px; font-weight: 600; margin-top: 2px;">Total Detections</div></div>' +
          '<div style="width: 36px; height: 36px; border-radius: 50%; background: #e6f4fc; color: #1f8fd4; display: grid; place-items: center;">' + ic('shield', 'width="18" height="18"') + '</div>' +
          '</div>' +
          '<div class="card" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; box-shadow:none;">' +
          '<div><div style="font-size: 24px; font-weight: 800; color: #2e7d32;">' + linkedCount + '</div><div class="muted" style="font-size: 12px; font-weight: 600; margin-top: 2px;">Linked to Users</div></div>' +
          '<div style="width: 36px; height: 36px; border-radius: 50%; background: #e8f5e9; color: #2e7d32; display: grid; place-items: center;">' + ic('check', 'width="18" height="18"') + '</div>' +
          '</div>' +
          '<div class="card" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; box-shadow:none;">' +
          '<div><div style="font-size: 24px; font-weight: 800; color: #c62828;">' + notLinkedCount + '</div><div class="muted" style="font-size: 12px; font-weight: 600; margin-top: 2px;">Not Yet Linked</div></div>' +
          '<div style="width: 36px; height: 36px; border-radius: 50%; background: #ffebee; color: #c62828; display: grid; place-items: center;">' + ic('alert', 'width="18" height="18"') + '</div>' +
          '</div>' +
          '<div class="card" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; box-shadow:none;">' +
          '<div><div style="font-size: 24px; font-weight: 800; color: var(--navy);">17.5%</div><div class="muted" style="font-size: 12px; font-weight: 600; margin-top: 2px;">Coverage</div></div>' +
          '<div style="width: 36px; height: 36px; border-radius: 50%; background: #f3f4f6; color: #4b5563; display: grid; place-items: center;">' + ic('share', 'width="18" height="18"') + '</div>' +
          '</div>' +
          '</div>';

        var toolbarHtml = '<div class="toolbar" style="margin-bottom:16px;">' +
          '<div class="search" style="width:300px;">' +
          ic('search') +
          '<input type="text" id="ud-find-search" value="' + s.findSearchQuery + '" placeholder="Search by value, user, source, or location" style="width:100%;" />' +
          '</div>' +
          '<select id="ud-find-status-filter" style="border:1px solid var(--line); border-radius:8px; padding:8px 12px; font-size:13px; background:#fff; color:var(--ink-2); cursor:pointer;">' +
          '<option value="All" ' + (s.findLinkStatusFilter === 'All' ? 'selected' : '') + '>Link Status</option>' +
          '<option value="Linked" ' + (s.findLinkStatusFilter === 'Linked' ? 'selected' : '') + '>Linked</option>' +
          '<option value="Not yet linked" ' + (s.findLinkStatusFilter === 'Not yet linked' ? 'selected' : '') + '>Not yet linked</option>' +
          '</select>' +
          '<select id="ud-find-type-filter" style="border:1px solid var(--line); border-radius:8px; padding:8px 12px; font-size:13px; background:#fff; color:var(--ink-2); cursor:pointer;">' +
          '<option value="All" ' + (s.findDataTypeFilter === 'All' ? 'selected' : '') + '>Data type</option>' +
          '<option value="Aadhaar Number" ' + (s.findDataTypeFilter === 'Aadhaar Number' ? 'selected' : '') + '>Aadhaar Number</option>' +
          '<option value="Email Address" ' + (s.findDataTypeFilter === 'Email Address' ? 'selected' : '') + '>Email Address</option>' +
          '</select>' +
          '</div>';

        var tableHtml = '<div class="card"><table>' +
          '<thead><tr><th>What was detected</th><th>Detected value</th><th>Where found</th><th>Belongs to</th><th>Detected on</th><th>Status</th><th>Actions</th></tr></thead>' +
          '<tbody>' + (findingsRows || '<tr><td colspan="7" style="text-align:center;padding:24px;" class="muted">No matching findings found.</td></tr>') + '</tbody>' +
          '</table></div>';

        return header + '<div class="page-sub" style="margin-top:-14px; margin-bottom:20px;">Personal data detected across your connected data sources. Identical values are grouped so you can review every location before linking or excluding them.</div>' + kpisHtml + toolbarHtml + tableHtml;
      }

      // User Directory layout
      var filteredUsers = USERDIR_DATA.filter(function (u) {
        var q = s.searchQuery.toLowerCase();
        return u.name.toLowerCase().indexOf(q) > -1 || u.email.toLowerCase().indexOf(q) > -1;
      });

      var userListHtml = filteredUsers.map(function (u) {
        var isSelected = u.id === s.selectedUserId;
        var initials = u.name.split(' ').map(function (n) { return n[0]; }).join('').toUpperCase().slice(0, 2);
        return '<div class="user-list-item" data-id="' + u.id + '" style="padding:12px; border-radius:8px; border:1px solid ' + (isSelected ? '#cfe6f6' : 'var(--line)') + '; background: ' + (isSelected ? '#e6f4fc' : '#fff') + '; cursor: pointer; display: flex; align-items: center; gap: 12px; margin-bottom: 8px; transition:0.15s;">' +
          '<div style="width:36px; height:36px; border-radius:50%; background:' + u.avatarColor + '; color:#fff; display:grid; place-items:center; font-weight:700; font-size:12px; position:relative; flex:none;">' +
          initials +
          (u.attributes.length ? '<span style="position:absolute; top:-3px; right:-3px; background:#1f8fd4; color:#fff; font-size:10px; font-weight:700; width:16px; height:16px; border-radius:50%; display:grid; place-items:center; border:2px solid #fff;">' + u.attributes.length + '</span>' : '') +
          '</div>' +
          '<div style="display:flex; flex-direction:column; min-width:0; flex:1;">' +
          '<b style="font-size:13px; color:var(--ink); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">' + u.email + '</b>' +
          '<span class="muted" style="font-size:11.5px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">' + u.name + '</span>' +
          '</div>' +
          '</div>';
      }).join('');

      var selectedUser = USERDIR_DATA.find(function (u) { return u.id === s.selectedUserId; }) || USERDIR_DATA[0];
      var detailsHtml = '';

      if (selectedUser) {
        var uInitials = selectedUser.name.split(' ').map(function (n) { return n[0]; }).join('').toUpperCase().slice(0, 2);

        // 1. Right Header Card
        var userHeaderCard = '<div class="card" style="padding: 20px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; gap: 20px; box-shadow: var(--shadow);">' +
          '<div style="display:flex; align-items:center; gap:16px;">' +
          '<div style="width:48px; height:48px; border-radius:50%; background:' + selectedUser.avatarColor + '; color:#fff; display:grid; place-items:center; font-weight:700; font-size:16px;">' + uInitials + '</div>' +
          '<div>' +
          '<h3 style="font-size:17px; font-weight:700; color:var(--navy);">' + selectedUser.name + '</h3>' +
          '<div class="muted" style="font-size:12px; margin-top:2px;">Identity map for this user &mdash; updating an attribute replaces the stored hash and re-runs DLP reconciliation.</div>' +
          '</div>' +
          '</div>' +
          '<button class="btn btn-blue" id="ud-add-attr-btn" style="flex:none;">' + ic('plus') + ' Add Attribute</button>' +
          '</div>';

        // Grid meta row
        var metaRow = '<div class="card" style="padding: 14px 20px; margin-bottom: 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; box-shadow: none;">' +
          '<div><div class="muted" style="font-size:10.5px; font-weight:700; text-transform:uppercase;">Email</div><div style="font-size:13px; font-weight:600; color:var(--ink); margin-top:4px;">' + selectedUser.email + '</div></div>' +
          '<div><div class="muted" style="font-size:10.5px; font-weight:700; text-transform:uppercase;">External ID</div><div style="font-size:13px; font-weight:600; color:var(--ink); margin-top:4px; font-family:monospace; word-break:break-all;">' + selectedUser.externalId + '</div></div>' +
          '<div><div class="muted" style="font-size:10.5px; font-weight:700; text-transform:uppercase;">Last Synced</div><div style="font-size:13px; font-weight:600; color:var(--ink); margin-top:4px;">' + selectedUser.lastSynced + '</div></div>' +
          '</div>';

        // 2. KPI Cards
        var kpiCards = '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">' +
          '<div class="kpi-card" data-tab="attributes" style="padding:14px 18px; border-radius:10px; border:1px solid ' + (s.activeTab === 'attributes' ? '#1f8fd4' : 'var(--line)') + '; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow:var(--shadow); transition:0.15s;">' +
          '<div><div style="font-size:20px; font-weight:800; color:var(--ink);">' + selectedUser.attributes.length + '</div><div class="muted" style="font-size:12px; font-weight:600;">Known Attributes</div></div>' +
          '<div style="width:32px; height:32px; border-radius:50%; background:#e6f4fc; color:#1f8fd4; display:grid; place-items:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>' +
          '</div>' +
          '<div class="kpi-card" data-tab="detections" style="padding:14px 18px; border-radius:10px; border:1px solid ' + (s.activeTab === 'detections' ? '#1f8fd4' : 'var(--line)') + '; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow:var(--shadow); transition:0.15s;">' +
          '<div><div style="font-size:20px; font-weight:800; color:var(--ink);">' + selectedUser.detections.length + '</div><div class="muted" style="font-size:12px; font-weight:600;">Data Detections</div></div>' +
          '<div style="width:32px; height:32px; border-radius:50%; background:#e8f5e9; color:#2e7d32; display:grid; place-items:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>' +
          '</div>' +
          '<div class="kpi-card" data-tab="audits" style="padding:14px 18px; border-radius:10px; border:1px solid ' + (s.activeTab === 'audits' ? '#1f8fd4' : 'var(--line)') + '; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow:var(--shadow); transition:0.15s;">' +
          '<div><div style="font-size:20px; font-weight:800; color:var(--ink);">' + selectedUser.audits.length + '</div><div class="muted" style="font-size:12px; font-weight:600;">User Action Audit</div></div>' +
          '<div style="width:32px; height:32px; border-radius:50%; background:#fff3e0; color:#ef6c00; display:grid; place-items:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"></path></svg></div>' +
          '</div>' +
          '</div>';

        // Sub-tab Navigation Bar
        var subTabsBar = '<div class="tabs" style="margin-bottom: 16px;">' +
          '<button class="sub-tab-btn ' + (s.activeTab === 'attributes' ? 'on' : '') + '" data-tab="attributes">KNOWN ATTRIBUTES (' + selectedUser.attributes.length + ')</button>' +
          '<button class="sub-tab-btn ' + (s.activeTab === 'detections' ? 'on' : '') + '" data-tab="detections">DATA DETECTIONS (' + selectedUser.detections.length + ')</button>' +
          '<button class="sub-tab-btn ' + (s.activeTab === 'audits' ? 'on' : '') + '" data-tab="audits">USER ACTION AUDIT (' + selectedUser.audits.length + ')</button>' +
          '</div>';

        // 3. Tab content
        var tabContent = '';
        if (s.activeTab === 'attributes') {
          // Group by category
          var categories = {};
          selectedUser.attributes.forEach(function (attr) {
            if (!categories[attr.category]) categories[attr.category] = [];
            categories[attr.category].push(attr);
          });

          var sectionsHtml = Object.keys(categories).map(function (cat) {
            var attrs = categories[cat];
            var isCollapsed = s.collapsedSections[cat];

            var cards = isCollapsed ? '' : '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-top: 12px;">' +
              attrs.map(function (attr) {
                var displayCat = attr.category === 'OTHER' ? 'Unknown category' : attr.category;
                return '<div class="card" style="padding: 12px; box-shadow: none; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid var(--line); border-radius: 8px; position: relative;">' +
                  '<div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">' +
                  '<div style="display: flex; align-items: center; gap: 8px; min-width: 0;">' +
                  '<span style="color: #6b7280; background: #f3f4f6; width: 28px; height: 28px; border-radius: 6px; display: grid; place-items: center; flex: none;">' +
                  ic(attr.icon || 'globe', 'width="14" height="14"') +
                  '</span>' +
                  '<div style="min-width: 0;">' +
                  '<b style="font-size: 13px; color: var(--ink); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; display:block;" title="' + attr.name + '">' + attr.name + '</b>' +
                  '<div class="muted" style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.02em;">' + displayCat + '</div>' +
                  '</div>' +
                  '</div>' +
                  '<button class="btn-del-attr" data-id="' + attr.id + '" style="background: none; border: none; color: #dc2626; opacity: 0.6; cursor: pointer; padding: 4px; flex: none;">' +
                  ic('trash', 'width="13" height="13"') +
                  '</button>' +
                  '</div>' +
                  '<div style="margin-top: 12px; font-size: 11px; color: var(--ink-3);">' + attr.date + '</div>' +
                  '</div>';
              }).join('') +
              '</div>';

            return '<div style="margin-bottom: 16px;">' +
              '<div class="ud-category-hdr" data-cat="' + cat + '" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; cursor: pointer; border-bottom: 1px solid var(--line-2);">' +
              '<span style="font-weight: 700; font-size: 11.5px; letter-spacing: 0.05em; color: var(--ink-2); text-transform: uppercase;">' + cat + ' &nbsp;<span style="background: #e9eaef; color: var(--ink-2); border-radius: 12px; padding: 2px 6px; font-size: 10px;">' + attrs.length + '</span></span>' +
              '<span style="transition: 0.2s; transform: rotate(' + (isCollapsed ? '-90deg' : '0deg') + '); color: var(--ink-3);">' + ic('chevd', 'width="16" height="16"') + '</span>' +
              '</div>' +
              cards +
              '</div>';
          }).join('');

          tabContent = '<div style="font-weight: 700; color: var(--navy); font-size: 14px; margin-bottom: 4px;">Known Attributes</div>' +
            '<div class="muted" style="font-size: 12.5px; margin-bottom: 16px;">Edit the attribute name, the matching data type, or replace the raw value when the source data changes.</div>' +
            (sectionsHtml || '<div class="muted" style="text-align:center;padding:24px;">No attributes found.</div>');
        } else if (s.activeTab === 'detections') {
          var detectionRows = selectedUser.detections.map(function (d) {
            return '<tr>' +
              '<td class="tname">' + d.type + '</td>' +
              '<td style="font-family:monospace;font-size:13px;color:var(--ink);">' + d.redacted + '</td>' +
              '<td>' + d.sourceHtml + '</td>' +
              '<td class="muted" style="font-size:12.5px;">' + d.scanned + '</td>' +
              '<td><div class="acts"><span class="e gp-view-det" data-type="' + d.type + '" title="View">' + ic('eye') + '</span></div></td>' +
              '</tr>';
          }).join('');

          tabContent = '<div style="font-weight: 700; color: var(--navy); font-size: 14px; margin-bottom: 4px;">Data Detections</div>' +
            '<div class="muted" style="font-size: 12.5px; margin-bottom: 12px;">Personal data belonging to this user that was detected across your connected data sources.</div>' +
            '<div class="card"><table>' +
            '<thead><tr><th>Data Type</th><th>Redacted Value</th><th>Source</th><th>Scanned</th><th>Actions</th></tr></thead>' +
            '<tbody>' + (detectionRows || '<tr><td colspan="5" style="text-align:center;padding:18px;" class="muted">No detections found for this user.</td></tr>') + '</tbody>' +
            '</table></div>';
        } else { // audits
          var auditRows = selectedUser.audits.map(function (a) {
            return '<tr>' +
              '<td class="tname">' + a.action + '</td>' +
              '<td>' + a.actor + '</td>' +
              '<td class="muted" style="font-family:monospace;">' + a.ip + '</td>' +
              '<td class="muted" style="font-size:12.5px;">' + a.date + '</td>' +
              '</tr>';
          }).join('');

          tabContent = '<div style="font-weight: 700; color: var(--navy); font-size: 14px; margin-bottom: 12px;">User Action Audit</div>' +
            '<div class="card"><table>' +
            '<thead><tr><th>Activity</th><th>Action Taken By</th><th>IP Address</th><th>Timestamp</th></tr></thead>' +
            '<tbody>' + (auditRows || '<tr><td colspan="4" style="text-align:center;padding:18px;" class="muted">No audit logs found.</td></tr>') + '</tbody>' +
            '</table></div>';
        }

        detailsHtml = userHeaderCard + metaRow + kpiCards + subTabsBar + tabContent;
      }

      var directoryLayout = '<div style="display: grid; grid-template-columns: 240px 1fr; gap: 20px; align-items: start;">' +
        // Left Column
        '<div>' +
        '<div class="card" style="padding: 16px; box-shadow: none;">' +
        '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">' +
        '<b style="font-size:14px; color:var(--navy);">User Directory</b>' +
        '<span class="muted" style="font-size:11.5px; font-weight:600;">' + filteredUsers.length + ' users</span>' +
        '</div>' +
        '<div class="search" style="margin-bottom: 12px;">' +
        ic('search') +
        '<input type="text" id="ud-user-search" value="' + s.searchQuery + '" placeholder="Search by email or name" style="width:100%;" />' +
        '</div>' +
        '<div style="max-height: 500px; overflow-y: auto; padding-right: 2px;">' +
        (userListHtml || '<div class="muted" style="text-align:center;padding:12px;">No users match search.</div>') +
        '</div>' +
        '</div>' +
        '</div>' +
        // Right Column
        '<div>' + detailsHtml + '</div>' +
        '</div>';

      return header + directoryLayout;
    };

    AFTER.userdir = function () {
      var s = USERDIR_STATE;

      // Wire top tabs
      var btnDir = document.getElementById('ud-top-dir');
      var btnFind = document.getElementById('ud-top-find');
      if (btnDir && btnFind) {
        btnDir.onclick = function () {
          s.topTab = 'directory';
          go('userdir');
        };
        btnFind.onclick = function () {
          s.topTab = 'findings';
          go('userdir');
        };
      }

      if (s.topTab === 'findings') {
        // Wire search
        var findSearch = document.getElementById('ud-find-search');
        if (findSearch) {
          findSearch.oninput = function () {
            s.findSearchQuery = findSearch.value;
            var viewDiv = document.getElementById('view');
            if (viewDiv) {
              viewDiv.innerHTML = RENDER.userdir();
              AFTER.userdir();
              var newSearch = document.getElementById('ud-find-search');
              if (newSearch) {
                newSearch.focus();
                newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
              }
            }
          };
        }

        // Wire status filter
        var statusFilter = document.getElementById('ud-find-status-filter');
        if (statusFilter) {
          statusFilter.onchange = function () {
            s.findLinkStatusFilter = statusFilter.value;
            go('userdir');
          };
        }

        // Wire type filter
        var typeFilter = document.getElementById('ud-find-type-filter');
        if (typeFilter) {
          typeFilter.onchange = function () {
            s.findDataTypeFilter = typeFilter.value;
            go('userdir');
          };
        }

        // Wire view locations click for findings
        document.querySelectorAll('.view-locations-link-find').forEach(function (lnk) {
          lnk.onclick = function (e) {
            e.preventDefault();
            var idx = parseInt(this.dataset.idx);
            openDetectedLocationsModal(null, null, true, idx);
          };
        });

        document.querySelectorAll('.gp-view-find-det').forEach(function (btn) {
          btn.onclick = function () {
            var idx = parseInt(this.dataset.idx);
            openDataEntityModal(idx);
          };
        });

        // Wire Link to User click
        document.querySelectorAll('.gp-link-find').forEach(function (btn) {
          btn.onclick = function () {
            var idx = parseInt(this.dataset.idx);
            openLinkFindingModal(idx);
          };
        });

        // Wire Exclude click
        document.querySelectorAll('.gp-exclude-find').forEach(function (btn) {
          btn.onclick = function () {
            var idx = parseInt(this.dataset.idx);
            var f = ALL_FINDINGS_DATA[idx];
            if (f && window.confirm('Exclude finding "' + f.type + '" (' + f.value + ') from Identity Resolution?')) {
              ALL_FINDINGS_DATA.splice(idx, 1);
              go('userdir');
              if (window.toast) toast('Finding Excluded', 'The finding has been excluded.', 'info');
            }
          };
        });

        return;
      }

      // Wire User search
      var searchInput = document.getElementById('ud-user-search');
      if (searchInput) {
        searchInput.oninput = function () {
          s.searchQuery = searchInput.value;
          var viewDiv = document.getElementById('view');
          if (viewDiv) {
            viewDiv.innerHTML = RENDER.userdir();
            AFTER.userdir();
            var newSearch = document.getElementById('ud-user-search');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      // Wire User list items click
      document.querySelectorAll('.user-list-item').forEach(function (item) {
        item.onclick = function () {
          s.selectedUserId = item.dataset.id;
          s.activeTab = 'attributes';
          go('userdir');
        };
      });

      // Wire KPI card clicks
      document.querySelectorAll('.kpi-card').forEach(function (card) {
        card.onclick = function () {
          s.activeTab = card.dataset.tab;
          go('userdir');
        };
      });

      // Wire sub-tab button clicks
      document.querySelectorAll('.sub-tab-btn').forEach(function (btn) {
        btn.onclick = function () {
          s.activeTab = btn.dataset.tab;
          go('userdir');
        };
      });

      // Wire view locations click (both eye icon and view all link)
      var handleViewLocations = function (e) {
        e.preventDefault();
        var type = this.dataset.type;
        openDetectedLocationsModal(type, s.selectedUserId);
      };

      document.querySelectorAll('.view-locations-link').forEach(function (lnk) {
        lnk.onclick = handleViewLocations;
      });

      document.querySelectorAll('.gp-view-det').forEach(function (btn) {
        btn.onclick = handleViewLocations;
      });

      // Wire Add Attribute button
      var addAttrBtn = document.getElementById('ud-add-attr-btn');
      if (addAttrBtn) {
        addAttrBtn.onclick = function () {
          openAddAttributeModal(s.selectedUserId);
        };
      }

      // Wire Category headers click (collapsing)
      document.querySelectorAll('.ud-category-hdr').forEach(function (hdr) {
        hdr.onclick = function () {
          var cat = hdr.dataset.cat;
          s.collapsedSections[cat] = !s.collapsedSections[cat];
          go('userdir');
        };
      });

      // Wire Delete Attribute buttons
      document.querySelectorAll('.btn-del-attr').forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var attrId = btn.dataset.id;
          var user = USERDIR_DATA.find(function (u) { return u.id === s.selectedUserId; });
          if (user) {
            var attrIdx = user.attributes.findIndex(function (a) { return a.id === attrId; });
            if (attrIdx > -1) {
              var attrName = user.attributes[attrIdx].name;
              if (window.confirm('Remove attribute "' + attrName + '" from ' + user.name + '?')) {
                user.attributes.splice(attrIdx, 1);
                user.audits.unshift({
                  action: 'Attribute ' + attrName + ' removed',
                  actor: 'Admin',
                  ip: '192.168.1.45',
                  date: new Date().toLocaleString()
                });
                go('userdir');
                if (window.toast) toast('Attribute Removed', 'Attribute was successfully removed.', 'ok');
              }
            }
          }
        };
      });
    };

    function openDetectedLocationsModal(type, userId, isGlobalFinding, findIdx) {
      var det;
      if (isGlobalFinding) {
        det = ALL_FINDINGS_DATA[findIdx];
      } else {
        var user = USERDIR_DATA.find(function (u) { return u.id === userId; });
        if (!user) return;
        det = user.detections.find(function (d) { return d.type === type; });
      }
      if (!det) return;

      var locationsHtml = det.locations.map(function (loc, idx) {
        return '<div style="border:1px solid var(--line); border-radius:8px; padding:12px 16px; background:#fff; margin-bottom:12px;">' +
          '<div style="font-weight:700; font-size:10.5px; color:var(--ink-3); text-transform:uppercase; margin-bottom:4px;">Location ' + (idx + 1) + '</div>' +
          '<div style="font-family:monospace; font-size:12px; color:var(--ink); word-break:break-all;">' + loc + '</div>' +
          '</div>';
      }).join('');

      var html = '<div class="modal modal-md">' +
        '<div class="modal-h">' +
        '<div>' +
        '<h3>Detected Locations</h3>' +
        '</div>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="padding:20px;">' +
        '<h4 style="font-size:15px; font-weight:700; color:var(--navy); margin-bottom:4px;">' + det.type + '</h4>' +
        '<div class="muted" style="font-size:12.5px; margin-bottom:16px;">Found in ' + det.locations.length + ' locations within ' + det.sourceType + '.</div>' +
        '<div class="muted" style="font-size:11px; font-weight:700; text-transform:uppercase; margin-bottom:8px;">Source Types</div>' +
        '<div style="display:flex; gap:8px; margin-bottom:20px;">' +
        '<span style="background:#e9eaef; color:var(--ink-2); font-size:11.5px; padding:4px 10px; border-radius:12px; font-weight:600;">' + det.sourceType + '</span>' +
        '</div>' +
        '<div style="max-height:250px; overflow-y:auto; padding-right:4px;">' +
        locationsHtml +
        '</div>' +
        '</div>' +
        '<div class="modal-f" style="justify-content:flex-end; border-top:none; padding-top:0;">' +
        '<button class="btn-text" onclick="closeModal()" style="color:#1f8fd4; font-weight:700; font-size:13px; cursor:pointer; background:none; border:none;">Close</button>' +
        '</div>' +
        '</div>';

      openModal(html);
    }

    function openDataEntityModal(findIdx) {
      var det = ALL_FINDINGS_DATA[findIdx];
      if (!det) return;

      var firstLocation = det.locations[0] || 'Unknown location';
      var displayValue = det.rawValue || det.value;

      var html = '<div class="modal modal-md" style="max-width: 480px; border-radius: 12px;">' +
        '<div class="modal-h" style="border-bottom: none; padding: 20px 24px 10px 24px;">' +
        '<div>' +
        '<h3 style="font-size: 18px; font-weight: 700; color: var(--navy);">Data Entity</h3>' +
        '</div>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b" style="padding: 0 24px 20px 24px;">' +
        '<div style="margin-bottom: 16px;">' +
        '<div class="muted" style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--ink-3); margin-bottom: 6px;">Type</div>' +
        '<div style="font-size: 14px; font-weight: 600; color: var(--ink);">' + det.type + '</div>' +
        '</div>' +

        '<div style="background: #ebf7ed; border-radius: 8px; padding: 12px 16px; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px;">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' +
        '<div style="font-size: 13px; color: #1e4620; font-weight: 500; line-height: 1.4; word-break: break-all;">' +
        'Match found in: ' + firstLocation +
        '</div>' +
        '</div>' +

        '<div class="field" style="margin-bottom: 6px;">' +
        '<label style="font-weight: 600; font-size: 12px; color: var(--ink-2); margin-bottom: 6px; display: block;">Data Entity</label>' +
        '<input type="text" value="' + displayValue + '" style="width: 100%; border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; font-size: 13px; color: var(--ink); background: #fff;" />' +
        '</div>' +
        '<div style="font-size: 11.5px; color: var(--ink-3); font-weight: 500;">Read-only</div>' +
        '</div>' +
        '<div class="modal-f" style="border-top: none; padding: 0 24px 24px 24px; justify-content: flex-end; gap: 16px; display: flex; align-items: center;">' +
        '<button class="btn btn-blue" id="btn-entity-link-user" style="padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 13px;">Link to User</button>' +
        '<button class="btn-text" onclick="closeModal()" style="color: #1f8fd4; font-weight: 700; font-size: 13px; cursor: pointer; background: none; border: none; padding: 0;">Close</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var linkBtn = document.getElementById('btn-entity-link-user');
      if (linkBtn) {
        linkBtn.onclick = function () {
          closeModal();
          openLinkFindingModal(findIdx);
        };
      }
    }

    function openLinkFindingModal(findIdx) {
      var f = ALL_FINDINGS_DATA[findIdx];
      if (!f) return;

      var userOptions = USERDIR_DATA.map(function (u) {
        return '<option value="' + u.id + '">' + u.name + ' (' + u.email + ')</option>';
      }).join('');

      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<div>' +
        '<h3>Link to User</h3>' +
        '<div class="muted" style="font-size:12px;margin-top:3px;">Link this detected value to a user identity</div>' +
        '</div>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b">' +
        '<div style="margin-bottom:12px;">' +
        '<div class="muted" style="font-size:11px;font-weight:700;text-transform:uppercase;">Detected Value</div>' +
        '<b style="font-size:14px;color:var(--navy);font-family:monospace;">' + f.value + '</b>' +
        '</div>' +
        '<div class="field">' +
        '<label style="font-weight:600;font-size:12px;margin-bottom:6px;display:block;">Select User</label>' +
        '<select id="link-user-select" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; background:#fff; font-size:13px;">' +
        userOptions +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button class="btn btn-blue" id="btn-confirm-link">Link Finding</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var confirmBtn = document.getElementById('btn-confirm-link');
      if (confirmBtn) {
        confirmBtn.onclick = function () {
          var userId = document.getElementById('link-user-select').value;
          var user = USERDIR_DATA.find(function (u) { return u.id === userId; });
          if (user) {
            f.belongsTo = user.name;
            f.status = 'Linked';

            var alreadyExists = user.attributes.some(function (attr) {
              return attr.name.toLowerCase() === f.type.toLowerCase();
            });
            if (!alreadyExists) {
              user.attributes.push({
                id: 'a_link_' + Math.random().toString(36).substr(2, 5),
                name: f.type,
                category: 'PERSONAL_INFORMATION',
                value: f.value,
                date: 'Linked: ' + new Date().toLocaleDateString(),
                icon: f.icon
              });
              user.audits.unshift({
                action: 'Linked finding ' + f.type + ' (' + f.value + ')',
                actor: 'Admin',
                ip: '192.168.1.45',
                date: new Date().toLocaleString()
              });
            }

            closeModal();
            go('userdir');
            if (window.toast) toast('Finding Linked', 'Finding was successfully linked to ' + user.name + '.', 'ok');
          }
        };
      }
    }

    function openAddAttributeModal(userId) {
      var html = '<div class="modal modal-sm">' +
        '<div class="modal-h">' +
        '<div>' +
        '<h3>Add Attribute</h3>' +
        '<div class="muted" style="font-size:12px;margin-top:3px">Add new identity attribute mapping</div>' +
        '</div>' +
        '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
        '</div>' +
        '<div class="modal-b">' +
        '<div class="field"><label style="font-weight:600;font-size:12px;margin-bottom:6px;display:block;">Attribute Name</label><input type="text" id="new-attr-name" placeholder="e.g. username" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px;" /></div>' +
        '<div class="field" style="margin-top:12px;"><label style="font-weight:600;font-size:12px;margin-bottom:6px;display:block;">Category</label><select id="new-attr-cat" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; background:#fff; font-size:13px;">' +
        '<option value="PERSONAL_INFORMATION">PERSONAL_INFORMATION</option>' +
        '<option value="PERSONAL_DATA">PERSONAL_DATA</option>' +
        '</select></div>' +
        '<div class="field" style="margin-top:12px;"><label style="font-weight:600;font-size:12px;margin-bottom:6px;display:block;">Value</label><input type="text" id="new-attr-val" placeholder="e.g. navneet_c" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px;" /></div>' +
        '<div class="field" style="margin-top:12px;"><label style="font-weight:600;font-size:12px;margin-bottom:6px;display:block;">Icon</label><select id="new-attr-icon" style="width:100%; border:1px solid var(--line); border-radius:8px; padding:9px 11px; background:#fff; font-size:13px;">' +
        '<option value="user">User</option>' +
        '<option value="globe">Globe/Network</option>' +
        '<option value="map">Map/Address</option>' +
        '<option value="phone">Phone</option>' +
        '<option value="lock">Lock/Security</option>' +
        '</select></div>' +
        '</div>' +
        '<div class="modal-f">' +
        '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
        '<button class="btn btn-blue" id="btn-save-new-attr">Add Attribute</button>' +
        '</div>' +
        '</div>';

      openModal(html);

      var saveBtn = document.getElementById('btn-save-new-attr');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var name = document.getElementById('new-attr-name').value.trim();
          var cat = document.getElementById('new-attr-cat').value;
          var val = document.getElementById('new-attr-val').value.trim();
          var icon = document.getElementById('new-attr-icon').value;

          if (!name || !val) {
            if (window.toast) toast('Required Fields', 'Please fill in Name and Value.', 'err');
            return;
          }

          var user = USERDIR_DATA.find(function (u) { return u.id === userId; });
          if (user) {
            var dateStr = 'Added: ' + new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            user.attributes.push({
              id: 'a' + (Math.random().toString(36).substr(2, 9)),
              name: name,
              category: cat,
              value: val,
              date: dateStr,
              icon: icon
            });

            user.audits.unshift({
              action: 'Attribute ' + name + ' added',
              date: new Date().toLocaleString()
            });

            closeModal();
            go('userdir');
            if (window.toast) toast('Attribute Added', 'Attribute "' + name + '" was successfully added to ' + user.name + '.', 'ok');
          }
        };
      }
    }

    /* ===================== ENDPOINT DEFENCE AND EMAIL DLP VIEWS ===================== */
    var WINDOWS_STATE = {
      activeSubroute: 'usb',
      activeTab: 'inventory', // 'inventory', 'policy'
      activeWebsitesTab: 'domains', // 'domains', 'categories', 'policy'
      websitesSearchQuery: '',
      chooseDomainsType: 'Custom',
      websites: [
        { id: 'web1', domain: 'facebook.com', category: 'Social Media', status: true },
        { id: 'web2', domain: 'instagram.com', category: 'Social Media', status: true },
        { id: 'web3', domain: 'x.com', category: 'Social Media', status: true }
      ],
      activePrinterTab: 'usb_printer', // 'usb_printer', 'policy'
      printerSearchQuery: '',
      printers: [
        { id: 'print1', name: 'Company Printer', productId: '342', vendorId: '564' }
      ],
      printerPolicies: {
        blockAllPrinters: false,
        notifyOnBlock: true
      },
      activeDesktopAppsTab: 'all_apps', // 'all_apps', 'category', 'policy'
      desktopAppsSearchQuery: '',
      desktopApps: [],
      activeCloudAppsTab: 'cloud_apps', // 'cloud_apps', 'policy'
      cloudAppsSearchQuery: '',
      cloudApps: [
        { id: 'ca1', name: 'Google', loginUrl: 'google.com', isDefault: true },
        { id: 'ca2', name: 'Office365', loginUrl: '/common/GetCredentialType', isDefault: true },
        { id: 'ca3', name: 'Slack', loginUrl: 'slack.com/api/signup.checkEmail', isDefault: true }
      ],
      searchQuery: '',
      usbInventory: [
        { id: 'usb1', name: 'Company SSD', productId: '123', vendorId: '321' }
      ],
      policies: {
        blockUsb: false,
        readOnly: true,
        notifyUser: true
      }
    };

    RENDER.policy_windows = function () {
      var s = WINDOWS_STATE;
      console.log('RENDER.policy_windows: activeSubroute is', s.activeSubroute);

      function getLogoSvg(domain) {
        if (domain.indexOf('facebook') > -1) {
          return '<svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" style="border-radius:4px;flex-shrink:0;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#fff"/><path d="M16.671 15.542l.532-3.47h-3.328V9.822c0-.949.465-1.874 1.956-1.874h1.513V4.995s-1.374-.235-2.686-.235c-2.74 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.09 12.09 0 002.915 0v-8.385h2.796z" fill="#1877F2"/></svg>';
        }
        if (domain.indexOf('instagram') > -1) {
          return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;"><radialGradient id="rg" cx="0.2" cy="0.9" r="1.2"><stop offset="0" stop-color="#FED576"/><stop offset="0.25" stop-color="#F47F3E"/><stop offset="0.5" stop-color="#E1306C"/><stop offset="0.75" stop-color="#C13584"/><stop offset="1" stop-color="#405DE6"/></radialGradient><rect width="24" height="24" rx="5" fill="url(#rg)"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2zm5.3-8.3c-.39 0-.7.31-.7.7s.31.7.7.7.7-.31.7-.7-.31-.7-.7-.7z" fill="#fff"/><path d="M16 3H8C5.24 3 3 5.24 3 8v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5zm3.8 13c0 2.1-1.7 3.8-3.8 3.8H8c-2.1 0-3.8-1.7-3.8-3.8V8c0-2.1 1.7-3.8 3.8-3.8h8c2.1 0 3.8 1.7 3.8 3.8v8z" fill="#fff"/></svg>';
        }
        if (domain.indexOf('x.com') > -1 || domain.indexOf('twitter') > -1) {
          return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="background:#000; border-radius:4px; padding:3px; box-sizing:border-box;flex-shrink:0;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#fff"/></svg>';
        }
        return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>';
      }

      var subSidebarHtml = '<div class="sub-sidebar-win" style="width: var(--sub-sb, 240px); border-right: 1px solid var(--line); background: #fff; display: flex; flex-direction: column; flex-shrink: 0; padding: 20px 16px; overflow-y: auto; height: 100%; position: relative;">' +
        '<div class="sub-sidebar-resizer" style="position: absolute; top: 0; right: 0; bottom: 0; width: 4px; cursor: col-resize; z-index: 9999;"></div>' +
        '<h3 style="font-size: 14px; font-weight: 700; color: var(--navy); margin-bottom: 20px; padding-left: 8px;">Windows Management</h3>' +

        '<div style="margin-bottom: 20px;">' +
        '<div style="font-size: 11px; font-weight: 700; color: var(--ink-3); text-transform: uppercase; letter-spacing: .05em; padding-left: 8px; margin-bottom: 8px;">System Hardening</div>' +
        '<div style="display: flex; flex-direction: column; gap: 4px;">' +
        renderSubNavItem('usb', 'USB Storage', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v16M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 6l4 4M12 10l-4 4"/></svg>') +
        renderSubNavItem('hardware', 'Hardware Peripherals', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>') +
        renderSubNavItem('camera', 'Camera Hardware', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>') +
        renderSubNavItem('events', 'User Device Events', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>') +
        renderSubNavItem('registry', 'Registry Editor', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>') +
        renderSubNavItem('relaxations', 'Policy Relaxations', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>') +
        '</div>' +
        '</div>' +

        '<div style="margin-bottom: 20px;">' +
        '<div style="font-size: 11px; font-weight: 700; color: var(--ink-3); text-transform: uppercase; letter-spacing: .05em; padding-left: 8px; margin-bottom: 8px;">Information Protection</div>' +
        '<div style="display: flex; flex-direction: column; gap: 4px;">' +
        renderSubNavItem('printer', 'Printer Control', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>') +
        renderSubNavItem('websites', 'Websites', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 1 1-10 10h10V2z"/></svg>') +
        renderSubNavItem('screenshot', 'Screenshot Policy', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 16V8a2 2 0 0 0-2-2h-5M3 8v8a2 2 0 0 0 2 2h5"/></svg>') +
        renderSubNavItem('filetracking', 'File Activity Tracking', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>') +
        '</div>' +
        '</div>' +

        '<div style="margin-bottom: 20px;">' +
        '<div style="font-size: 11px; font-weight: 700; color: var(--ink-3); text-transform: uppercase; letter-spacing: .05em; padding-left: 8px; margin-bottom: 8px;">App Management</div>' +
        '<div style="display: flex; flex-direction: column; gap: 4px;">' +
        renderSubNavItem('desktopapps', 'Desktop Apps', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>') +
        renderSubNavItem('cloudapps', 'Cloud Apps', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>') +
        renderSubNavItem('softwareinventory', 'Software Inventory', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M2 10h20"/></svg>') +
        '</div>' +
        '</div>' +
        '<div style="margin-bottom: 20px;">' +
        '<div style="font-size: 11px; font-weight: 700; color: var(--ink-3); text-transform: uppercase; letter-spacing: .05em; padding-left: 8px; margin-bottom: 8px;">Connectivity & Identity</div>' +
        '<div style="display: flex; flex-direction: column; gap: 4px;">' +
        renderSubNavItem('wificontrol', 'Wi-Fi Control', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20" stroke-width="3" stroke-linecap="round"/></svg>') +
        renderSubNavItem('ethernetcontrol', 'Ethernet Control', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="15" rx="2"/><path d="M6 17v4M18 17v4M10 21h4"/></svg>') +
        renderSubNavItem('adusersessions', 'AD User Sessions', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>') +
        renderSubNavItem('passwordpolicy', 'Password Policy', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>') +
        '</div>' +
        '</div>' +

        '<div style="margin-bottom: 20px;">' +
        '<div style="font-size: 11px; font-weight: 700; color: var(--ink-3); text-transform: uppercase; letter-spacing: .05em; padding-left: 8px; margin-bottom: 8px;">System Alerts</div>' +
        '<div style="display: flex; flex-direction: column; gap: 4px;">' +
        renderSubNavItem('adminalerts', 'Admin Alerts', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>') +
        renderSubNavItem('policybreachalerts', 'Policy Breach Alerts', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>') +
        '</div>' +
        '</div>' +
        '</div>';

      function renderSubNavItem(id, label, iconSvg) {
        var isActive = s.activeSubroute === id;
        var color = isActive ? 'var(--blue)' : '#4b5160';
        var bg = isActive ? '#e6f4fc' : 'transparent';
        var fw = isActive ? '600' : '500';
        return '<a class="sub-nav-item-win" data-subroute="' + id + '" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; color: ' + color + '; background: ' + bg + '; font-weight: ' + fw + '; cursor: pointer; text-decoration: none; transition: 0.15s;">' +
          iconSvg +
          '<span style="font-size: 13px;">' + label + '</span>' +
          '</a>';
      }

      var mainContentHtml = '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; display: flex; flex-direction: column; background: #fdfdfd; height: 100%;">';

      if (s.activeSubroute === 'usb') {
        var isInventory = s.activeTab === 'inventory';
        var isPolicy = s.activeTab === 'policy';

        mainContentHtml += '<div style="margin-bottom: 24px;">' +
          '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">USB Policy</h2>' +
          '<div class="muted" style="font-size: 13px;">Block Unauthorized USB Devices and Whitelist Only Approved Ones with Product and Vendor IDs.</div>' +
          '</div>' +

          '<div class="tabs" style="margin-bottom: 20px;">' +
          '<button class="subroute-tab-btn ' + (isInventory ? 'on' : '') + '" data-tab="inventory">USB Inventory</button>' +
          '<button class="subroute-tab-btn ' + (isPolicy ? 'on' : '') + '" data-tab="policy">Policy</button>' +
          '</div>';

        if (isInventory) {
          mainContentHtml += '<div style="background: #e6f4fc; border: 1px solid #bce0fd; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #1f8fd4; font-size: 13px; font-weight: 500;">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
            '<span>Ensure that only authorized USB Inventory are connected to your system</span>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">' +
            '<div class="search" style="width: 300px;">' +
            ic('search') +
            '<input type="text" id="usb-search" value="' + s.searchQuery + '" placeholder="Search" style="width: 100%;" />' +
            '</div>' +
            '<button class="btn btn-blue" id="btn-add-usb" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px;">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v16M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 6l4 4M12 10l-4 4"/></svg>' +
            'Add USB Inventory' +
            '</button>' +
            '</div>' +

            '<div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);">' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>Name</th>' +
            '<th>Product Id</th>' +
            '<th>Vendor Id</th>' +
            '<th style="text-align: right;">Actions</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

          var filteredUsb = s.usbInventory.filter(function (item) {
            return !s.searchQuery || item.name.toLowerCase().indexOf(s.searchQuery.toLowerCase()) > -1 || item.productId.indexOf(s.searchQuery) > -1 || item.vendorId.indexOf(s.searchQuery) > -1;
          });

          if (filteredUsb.length === 0) {
            mainContentHtml += '<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--ink-3);">No USB devices found.</td></tr>';
          } else {
            filteredUsb.forEach(function (item) {
              mainContentHtml += '<tr>' +
                '<td class="tname" style="font-weight: 600; color: var(--ink);">' + item.name + '</td>' +
                '<td>' + item.productId + '</td>' +
                '<td>' + item.vendorId + '</td>' +
                '<td style="text-align: right; color: var(--ink-3);">' +
                '<div style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; padding: 4px;" class="usb-row-actions" data-id="' + item.id + '">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
                '</div>' +
                '</td>' +
                '</tr>';
            });
          }

          mainContentHtml += '</tbody>' +
            '</table>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px; font-size: 13px; color: var(--ink-2); gap: 20px;">' +
            '<div style="display: flex; align-items: center; gap: 8px;">' +
            '<span>Rows per page:</span>' +
            '<select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 13px; background: #fff; outline: none; cursor: pointer;">' +
            '<option>10</option>' +
            '<option>25</option>' +
            '<option>50</option>' +
            '</select>' +
            '</div>' +
            '<span>1-1 of 1</span>' +
            '<div style="display: flex; gap: 4px;">' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>' +
            '</button>' +
            '</div>' +
            '</div>';
        } else if (isPolicy) {
          mainContentHtml += '<div class="card" style="padding: 24px; max-width: 600px; display: flex; flex-direction: column; gap: 20px;">' +
            '<div style="font-size: 15px; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--line); padding-bottom: 12px; margin-bottom: 8px;">USB Policy Configuration</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between;">' +
            '<div>' +
            '<b style="font-size: 13.5px; color: var(--ink);">Block All USB Devices</b>' +
            '<p class="muted" style="font-size: 12px; margin-top: 2px;">Completely disable access to any USB storage devices connected to the system.</p>' +
            '</div>' +
            '<button class="toggle ' + (s.policies.blockUsb ? 'on' : '') + '" id="toggle-block-usb"></button>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between;">' +
            '<div>' +
            '<b style="font-size: 13.5px; color: var(--ink);">Read-Only Mode</b>' +
            '<p class="muted" style="font-size: 12px; margin-top: 2px;">Allow reading from USB devices, but block any write/copy operations to the USB.</p>' +
            '</div>' +
            '<button class="toggle ' + (s.policies.readOnly ? 'on' : '') + '" id="toggle-readonly-usb"></button>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between;">' +
            '<div>' +
            '<b style="font-size: 13.5px; color: var(--ink);">Notify User on Block</b>' +
            '<p class="muted" style="font-size: 12px; margin-top: 2px;">Show a desktop notification to the user when a USB device is blocked.</p>' +
            '</div>' +
            '<button class="toggle ' + (s.policies.notifyUser ? 'on' : '') + '" id="toggle-notify-usb"></button>' +
            '</div>' +

            '<div style="margin-top: 10px; display: flex; justify-content: flex-end;">' +
            '<button class="btn btn-blue" id="btn-save-usb-policy" style="padding: 10px 24px; font-size: 13px; border-radius: 8px;">Save Policy</button>' +
            '</div>' +
            '</div>';
        }
      } else if (s.activeSubroute === 'websites') {
        var isDomains = s.activeWebsitesTab === 'domains';
        var isCategories = s.activeWebsitesTab === 'categories';
        var isPolicy = s.activeWebsitesTab === 'policy';

        var infoBox = '<div style="background: #e6f4fc; border: 1px solid #bce0fd; border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px; color: #1f8fd4; font-size: 13px; line-height: 1.5;">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
          '<div>Define and manage specific website domains to monitor or allow. You can add domains manually or select from reports. Wildcards should use .* format (e.g., .*google.com).</div>' +
          '</div>';

        mainContentHtml += '<div style="margin-bottom: 24px;">' +
          '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Websites</h2>' +
          '<div class="muted" style="font-size: 13px;">Whitelist Domains and Prevent Upload of Sensitive Data</div>' +
          '</div>' +
          infoBox +
          '<div class="tabs" style="margin-bottom: 20px; border-bottom:1px solid #e2e8f0; display:flex; gap:24px;">' +
          '<button class="subroute-tab-btn ' + (isDomains ? 'on' : '') + '" data-win-tab="domains" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isDomains ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isDomains ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Domains</button>' +
          '<button class="subroute-tab-btn ' + (isCategories ? 'on' : '') + '" data-win-tab="categories" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isCategories ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isCategories ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Categories</button>' +
          '<button class="subroute-tab-btn ' + (isPolicy ? 'on' : '') + '" data-win-tab="policy" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isPolicy ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isPolicy ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Policy</button>' +
          '</div>';

        if (isDomains) {
          var rowsHtml = s.websites.filter(function (w) {
            return !s.websitesSearchQuery || w.domain.toLowerCase().indexOf(s.websitesSearchQuery.toLowerCase()) > -1;
          }).map(function (w) {
            return '<tr>' +
              '<td style="width: 40px;"><div class="checkbox"></div></td>' +
              '<td class="tname" style="font-weight: 600; color: var(--ink); display:flex; align-items:center; gap:10px; border:none; padding:14px 12px;">' +
              getLogoSvg(w.domain) +
              '<span>' + w.domain + '</span>' +
              '</td>' +
              '<td><span style="background: #e6f4fc; color: #1f8fd4; font-size: 11.5px; padding: 4px 10px; border-radius: 12px; font-weight: 600;">' + w.category + '</span></td>' +
              '<td><button class="toggle ' + (w.status ? 'on' : '') + ' toggle-website-status" data-id="' + w.id + '"></button></td>' +
              '<td style="text-align: right; position: relative;">' +
              '<div class="website-row-actions-trigger" data-id="' + w.id + '" style="cursor: pointer; display: inline-flex; padding: 6px; color: var(--ink-3);">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
              '</div>' +
              '</td>' +
              '</tr>';
          }).join('');

          var toolbarHtml = '<div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 18px;">' +
            // Row 1: Choose Domains
            '<div class="field outlined" style="margin:0; width: 160px; position:relative;">' +
            '<label style="background:#fff; padding:0 4px; position:absolute; top:-8px; left:8px; font-size:10.5px; font-weight:600; color:#6b7280; z-index:1;">Choose domains</label>' +
            '<select id="choose-domains-select" style="width:100%; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; font-size:13px; outline:none; background:#fff; height:36px; cursor:pointer;">' +
            '<option' + (s.chooseDomainsType === 'Custom' ? ' selected' : '') + '>Custom</option>' +
            '<option' + (s.chooseDomainsType === 'Predefined' ? ' selected' : '') + '>Predefined</option>' +
            '</select>' +
            '</div>' +
            // Row 2: Search, Filter, Bulk, Add
            '<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">' +
            '<div style="display: flex; align-items: center; gap: 12px; flex: 1;">' +
            '<div class="search" style="width: 260px;">' +
            ic('search') +
            '<input type="text" id="website-search-input" value="' + s.websitesSearchQuery + '" placeholder="Search by Domain" style="width: 100%;" />' +
            '</div>' +
            '<div class="select" style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 12px; font-size: 12.5px; background: #fff; color: #374151;">' +
            'Apply filter on ' + ic('chevd', 'width="12" height="12"') +
            '</div>' +
            '</div>' +
            '<div style="display: flex; align-items: center; gap: 12px;">' +
            '<div class="select" style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 12px; font-size: 12.5px; background: #fff; color: #374151;">' +
            'Bulk Action ' + ic('chevd', 'width="12" height="12"') +
            '</div>' +
            '<button class="btn-outline-blue" id="btn-website-bulk-upload" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px; border-color: #cbd5e1; color: #1f8fd4; background:#fff; height:36px;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Bulk Upload' +
            '</button>' +
            '<button class="btn btn-blue" id="btn-add-website-domain" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px; background: #1f8fd4;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Domain' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>';

          var tableHtml = '<div class="card" style="border-radius: 10px; overflow: visible; box-shadow: var(--shadow);">' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th style="width: 40px;"><div class="checkbox"></div></th>' +
            '<th>Domain</th>' +
            '<th>Categories</th>' +
            '<th>Status</th>' +
            '<th style="text-align: right;">Actions</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            (rowsHtml || '<tr><td colspan="5" style="text-align: center; padding: 24px; color: var(--ink-3);">No domains found.</td></tr>') +
            '</tbody>' +
            '</table>' +
            '</div>';

          var paginationHtml = '<div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px; font-size: 13px; color: var(--ink-2); gap: 20px;">' +
            '<div style="display: flex; align-items: center; gap: 8px;">' +
            '<span>Rows per page:</span>' +
            '<select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 13px; background: #fff; outline: none; cursor: pointer;">' +
            '<option>10</option>' +
            '<option>25</option>' +
            '<option>50</option>' +
            '</select>' +
            '</div>' +
            '<span>1-' + s.websites.length + ' of ' + s.websites.length + '</span>' +
            '<div style="display: flex; gap: 4px;">' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>' +
            '</button>' +
            '</div>' +
            '</div>';

          mainContentHtml += toolbarHtml + tableHtml + paginationHtml;
        } else {
          mainContentHtml += '<div class="card" style="padding: 40px; text-align: center; color: var(--ink-3); border-radius: 12px;">' +
            '<div style="font-size: 48px; margin-bottom: 16px;">🛡️</div>' +
            '<h3 style="font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px;">' + (isCategories ? 'Categories' : 'Policy') + ' Settings</h3>' +
            '<p class="muted" style="font-size: 13px; max-width: 400px; margin: 0 auto 20px;">Configure settings and rules for website categories and policies.</p>' +
            '</div>';
        }
      } else if (s.activeSubroute === 'printer') {
        var isUsbPrinter = s.activePrinterTab === 'usb_printer';
        var isPolicy = s.activePrinterTab === 'policy';

        var infoBox = '<div style="background: #e6f4fc; border: 1px solid #bce0fd; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #1f8fd4; font-size: 13px; font-weight: 500;">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
          '<span>Ensure that only authorized USB Printer are connected to your system</span>' +
          '</div>';

        mainContentHtml += '<div style="margin-bottom: 24px;">' +
          '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Printer Policy</h2>' +
          '<div class="muted" style="font-size: 13px;">Block Unauthorized USB Devices and Whitelist Only Approved Ones with Product and Vendor IDs.</div>' +
          '</div>' +

          '<div class="tabs" style="margin-bottom: 20px; border-bottom:1px solid #e2e8f0; display:flex; gap:24px;">' +
          '<button class="subroute-tab-btn ' + (isUsbPrinter ? 'on' : '') + '" data-win-printer-tab="usb_printer" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isUsbPrinter ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isUsbPrinter ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">USB Printer</button>' +
          '<button class="subroute-tab-btn ' + (isPolicy ? 'on' : '') + '" data-win-printer-tab="policy" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isPolicy ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isPolicy ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Policy</button>' +
          '</div>';

        if (isUsbPrinter) {
          mainContentHtml += infoBox +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">' +
            '<div class="search" style="width: 300px;">' +
            ic('search') +
            '<input type="text" id="printer-search" value="' + s.printerSearchQuery + '" placeholder="Search" style="width: 100%;" />' +
            '</div>' +
            '<button class="btn btn-blue" id="btn-add-printer" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px; background: #1f8fd4;">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v16M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 6l4 4M12 10l-4 4"/></svg>' +
            'Add USB Printer' +
            '</button>' +
            '</div>' +

            '<div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);">' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>Name</th>' +
            '<th>Product Id</th>' +
            '<th>Vendor Id</th>' +
            '<th style="text-align: right;">Actions</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

          var filteredPrinters = s.printers.filter(function (item) {
            return !s.printerSearchQuery || item.name.toLowerCase().indexOf(s.printerSearchQuery.toLowerCase()) > -1 || item.productId.indexOf(s.printerSearchQuery) > -1 || item.vendorId.indexOf(s.printerSearchQuery) > -1;
          });

          if (filteredPrinters.length === 0) {
            mainContentHtml += '<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--ink-3);">No printers found.</td></tr>';
          } else {
            filteredPrinters.forEach(function (item) {
              mainContentHtml += '<tr>' +
                '<td class="tname" style="font-weight: 600; color: var(--ink);">' + item.name + '</td>' +
                '<td>' + item.productId + '</td>' +
                '<td>' + item.vendorId + '</td>' +
                '<td style="text-align: right; color: var(--ink-3);">' +
                '<div style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; padding: 4px;" class="printer-row-actions" data-id="' + item.id + '">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
                '</div>' +
                '</td>' +
                '</tr>';
            });
          }

          mainContentHtml += '</tbody>' +
            '</table>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px; font-size: 13px; color: var(--ink-2); gap: 20px;">' +
            '<div style="display: flex; align-items: center; gap: 8px;">' +
            '<span>Rows per page:</span>' +
            '<select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 13px; background: #fff; outline: none; cursor: pointer;">' +
            '<option>10</option>' +
            '<option>25</option>' +
            '<option>50</option>' +
            '</select>' +
            '</div>' +
            '<span>1-' + s.printers.length + ' of ' + s.printers.length + '</span>' +
            '<div style="display: flex; gap: 4px;">' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
            '</button>' +
            '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>' +
            '</button>' +
            '</div>' +
            '</div>';
        } else if (isPolicy) {
          mainContentHtml += '<div class="card" style="padding: 24px; max-width: 600px; display: flex; flex-direction: column; gap: 20px;">' +
            '<div style="font-size: 15px; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--line); padding-bottom: 12px; margin-bottom: 8px;">Printer Policy Configuration</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between;">' +
            '<div>' +
            '<b style="font-size: 13.5px; color: var(--ink);">Block All Printers</b>' +
            '<p class="muted" style="font-size: 12px; margin-top: 2px;">Completely disable access to any USB printers connected to the system.</p>' +
            '</div>' +
            '<button class="toggle ' + (s.printerPolicies.blockAllPrinters ? 'on' : '') + '" id="toggle-block-printers"></button>' +
            '</div>' +

            '<div style="display: flex; align-items: center; justify-content: space-between;">' +
            '<div>' +
            '<b style="font-size: 13.5px; color: var(--ink);">Notify User on Block</b>' +
            '<p class="muted" style="font-size: 12px; margin-top: 2px;">Show a desktop notification to the user when a printer is blocked.</p>' +
            '</div>' +
            '<button class="toggle ' + (s.printerPolicies.notifyOnBlock ? 'on' : '') + '" id="toggle-notify-printer"></button>' +
            '</div>' +

            '<div style="margin-top: 10px; display: flex; justify-content: flex-end;">' +
            '<button class="btn btn-blue" id="btn-save-printer-policy" style="padding: 10px 24px; font-size: 13px; border-radius: 8px; background: #1f8fd4;">Save Policy</button>' +
            '</div>' +
            '</div>';
        }
      } else if (s.activeSubroute === 'desktopapps') {
        var isAllApps = s.activeDesktopAppsTab === 'all_apps';
        var isCategory = s.activeDesktopAppsTab === 'category';
        var isPolicy = s.activeDesktopAppsTab === 'policy';

        var infoBox = '<div style="background: #e6f4fc; border: 1px solid #bce0fd; border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px; color: #1f8fd4; font-size: 13px; line-height: 1.5;">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
          '<div>List of all applications within your organization.</div>' +
          '</div>';

        mainContentHtml += '<div style="margin-bottom: 24px;">' +
          '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Desktop Applications</h2>' +
          '<div class="muted" style="font-size: 13px;">Manage Application Categories and Restrict Use of Unwanted Applications in Your Organization</div>' +
          '</div>' +

          '<div class="tabs" style="margin-bottom: 20px; border-bottom:1px solid #e2e8f0; display:flex; gap:24px;">' +
          '<button class="subroute-tab-btn ' + (isAllApps ? 'on' : '') + '" data-win-app-tab="all_apps" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isAllApps ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isAllApps ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">All Applications</button>' +
          '<button class="subroute-tab-btn ' + (isCategory ? 'on' : '') + '" data-win-app-tab="category" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isCategory ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isCategory ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Application Category</button>' +
          '<button class="subroute-tab-btn ' + (isPolicy ? 'on' : '') + '" data-win-app-tab="policy" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:' + (isPolicy ? '#1f8fd4' : '#6b7280') + '; border-bottom:2px solid ' + (isPolicy ? '#1f8fd4' : 'transparent') + '; margin-bottom:-1px; cursor:pointer;">Policy</button>' +
          '</div>';

        if (isAllApps) {
          mainContentHtml += infoBox +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">' +
            '<div class="search" style="width: 300px;">' +
            ic('search') +
            '<input type="text" id="app-search" value="' + s.desktopAppsSearchQuery + '" placeholder="Search" style="width: 100%;" />' +
            '</div>' +
            '<button class="btn btn-blue" id="btn-add-desktop-app" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px; background: #1f8fd4;">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' +
            'Add App' +
            '</button>' +
            '</div>';

          var filteredApps = s.desktopApps.filter(function (item) {
            return !s.desktopAppsSearchQuery || item.name.toLowerCase().indexOf(s.desktopAppsSearchQuery.toLowerCase()) > -1;
          });

          if (filteredApps.length === 0) {
            // Style block for float animation
            var styleBlock = '<style>' +
              '@keyframes float-back { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }' +
              '@keyframes float-front { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(5px); } }' +
              '.float-back-cap { animation: float-back 4s ease-in-out infinite; }' +
              '.float-front-cap { animation: float-front 4s ease-in-out infinite; }' +
              '</style>';

            var emptyStateHtml = styleBlock +
              '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:60px 0; flex:1; background:#fff; border:1px solid var(--line); border-radius:12px; margin-top:10px;">' +
              '<div style="position:relative; width:200px; height:150px; margin-bottom:20px; display:flex; justify-content:center; align-items:center;">' +
              '<div style="position:absolute; width:140px; height:140px; border-radius:50%; background:#f8fafc; z-index:1;"></div>' +

              // Back Capsule (Black terminal)
              '<div class="float-back-cap" style="position:absolute; top:35px; right:20px; width:120px; height:38px; background:#0f172a; border-radius:20px; z-index:2; display:flex; align-items:center; padding:0 12px; gap:8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">' +
              '<div style="flex:1; height:6px; background:#1f8fd4; border-radius:3px;"></div>' +
              '<div style="width:8px; height:8px; border-radius:50%; background:#fff;"></div>' +
              '</div>' +

              // Front Capsule (Light blue terminal)
              '<div class="float-front-cap" style="position:absolute; bottom:35px; left:20px; width:120px; height:38px; background:#e0f2fe; border-radius:20px; z-index:3; display:flex; align-items:center; padding:0 12px; gap:8px; box-shadow: 0 4px 12px rgba(31,143,212,0.15);">' +
              '<div style="width:12px; height:12px; border-radius:50%; background:#1f8fd4;"></div>' +
              '<div style="flex:1; height:6px; background:#bae6fd; border-radius:3px;"></div>' +
              '</div>' +

              '<div style="position:absolute; top:20px; left:40px; font-size:10px; color:#cbd5e1; z-index:4;">✦</div>' +
              '<div style="position:absolute; bottom:20px; right:40px; font-size:12px; color:#94a3b8; z-index:4;">✦</div>' +
              '<div style="position:absolute; top:60px; left:20px; width:4px; height:4px; border-radius:50%; background:#cbd5e1; z-index:4;"></div>' +
              '</div>' +
              '<div style="font-weight:700; color:#1f2937; font-size:15px; margin-top:8px;">No Records Found</div>' +
              '</div>';

            mainContentHtml += '<div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);">' +
              '<table>' +
              '<thead>' +
              '<tr>' +
              '<th>Application Name</th>' +
              '<th>Added By</th>' +
              '<th style="text-align: right;">Actions</th>' +
              '</tr>' +
              '</thead>' +
              '</table>' +
              '</div>' +
              emptyStateHtml;
          } else {
            mainContentHtml += '<div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);">' +
              '<table>' +
              '<thead>' +
              '<tr>' +
              '<th>Application Name</th>' +
              '<th>Added By</th>' +
              '<th style="text-align: right;">Actions</th>' +
              '</tr>' +
              '</thead>' +
              '<tbody>';

            filteredApps.forEach(function (item) {
              mainContentHtml += '<tr>' +
                '<td class="tname" style="font-weight: 600; color: var(--ink);">' + item.name + '</td>' +
                '<td>' + item.addedBy + '</td>' +
                '<td style="text-align: right; color: var(--ink-3);">' +
                '<div style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; padding: 4px;" class="app-row-actions" data-id="' + item.id + '">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
                '</div>' +
                '</td>' +
                '</tr>';
            });

            mainContentHtml += '</tbody>' +
              '</table>' +
              '</div>' +

              '<div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px; font-size: 13px; color: var(--ink-2); gap: 20px;">' +
              '<div style="display: flex; align-items: center; gap: 8px;">' +
              '<span>Rows per page:</span>' +
              '<select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 13px; background: #fff; outline: none; cursor: pointer;">' +
              '<option>10</option>' +
              '<option>25</option>' +
              '</select>' +
              '</div>' +
              '<span>1-' + s.desktopApps.length + ' of ' + s.desktopApps.length + '</span>' +
              '</div>';
          }
        } else {
          mainContentHtml += '<div class="card" style="padding: 40px; text-align: center; color: var(--ink-3); border-radius: 12px;">' +
            '<div style="font-size: 48px; margin-bottom: 16px;">🛡️</div>' +
            '<h3 style="font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px;">' + (isCategory ? 'Application Category' : 'Policy') + ' Settings</h3>' +
            '<p class="muted" style="font-size: 13px; max-width: 400px; margin: 0 auto 20px;">Configure settings and rules for application categories and policies.</p>' +
            '</div>';
        }
      } else if (s.activeSubroute === 'cloudapps') {
        var isCloudApps = s.activeCloudAppsTab === 'cloud_apps';
        var isCaPolicy = s.activeCloudAppsTab === 'policy';

        mainContentHtml += '<div style="margin-bottom:24px;">' +
          '<h2 style="font-size:20px; font-weight:700; color:var(--navy); margin-bottom:4px;">Cloud Application Login Policy</h2>' +
          '<div class="muted" style="font-size:13px;">Manage and Control Cloud App Login Policies for Your Organization.</div>' +
          '</div>' +
          '<div style="margin-bottom:20px; border-bottom:1px solid #e2e8f0; display:flex; gap:24px;">' +
          '<button class="subroute-tab-btn" data-win-ca-tab="cloud_apps" style="background:none;border:none;padding:10px 0;font-size:13.5px;font-weight:600;color:' + (isCloudApps ? '#1f8fd4' : '#6b7280') + ';border-bottom:2px solid ' + (isCloudApps ? '#1f8fd4' : 'transparent') + ';margin-bottom:-1px;cursor:pointer;">Cloud Apps</button>' +
          '<button class="subroute-tab-btn" data-win-ca-tab="policy" style="background:none;border:none;padding:10px 0;font-size:13.5px;font-weight:600;color:' + (isCaPolicy ? '#1f8fd4' : '#6b7280') + ';border-bottom:2px solid ' + (isCaPolicy ? '#1f8fd4' : 'transparent') + ';margin-bottom:-1px;cursor:pointer;">Policy</button>' +
          '</div>';

        if (isCloudApps) {
          var filteredCloudApps = s.cloudApps.filter(function (item) {
            return !s.cloudAppsSearchQuery || item.name.toLowerCase().indexOf(s.cloudAppsSearchQuery.toLowerCase()) > -1 || item.loginUrl.toLowerCase().indexOf(s.cloudAppsSearchQuery.toLowerCase()) > -1;
          });

          mainContentHtml +=
            '<div style="background:#e6f4fc;border:1px solid #bce0fd;border-radius:8px;padding:14px 18px;display:flex;align-items:center;gap:10px;margin-bottom:20px;color:#1f8fd4;font-size:13px;font-weight:500;">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
            '<span>Manage your organization\'s approved cloud applications here.</span></div>' +

            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">' +
            '<div class="search" style="width:280px;">' + ic('search') +
            '<input type="text" id="cloud-app-search" value="' + s.cloudAppsSearchQuery + '" placeholder="Search Cloud Apps" style="width:100%;" /></div>' +
            '<button class="btn btn-blue" id="btn-add-cloud-app" style="border-radius:8px;padding:8px 18px;font-size:13px;display:flex;align-items:center;gap:8px;background:#1f8fd4;">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
            'Add Cloud App</button></div>' +

            '<div class="card" style="border-radius:10px;overflow:hidden;box-shadow:var(--shadow);">' +
            '<table><thead><tr>' +
            '<th>Name</th><th>Login URL</th><th style="text-align:right;">Actions</th>' +
            '</tr></thead><tbody>';

          if (filteredCloudApps.length === 0) {
            mainContentHtml += '<tr><td colspan="3" style="text-align:center;padding:24px;color:var(--ink-3);">No cloud apps found.</td></tr>';
          } else {
            filteredCloudApps.forEach(function (item) {
              mainContentHtml += '<tr>' +
                '<td><div style="display:flex;align-items:center;gap:8px;font-weight:600;color:var(--ink);">' + item.name +
                (item.isDefault ? '<span style="font-size:11px;font-weight:500;color:#64748b;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:20px;padding:1px 8px;">Default</span>' : '') +
                '</div></td>' +
                '<td style="color:var(--ink-2);font-size:13px;">' + item.loginUrl + '</td>' +
                '<td style="text-align:right;">' +
                '<div class="ca-three-dot" data-id="' + item.id + '" style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;cursor:pointer;color:var(--ink-3);position:relative;">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
                '</div></td></tr>';
            });
          }

          mainContentHtml += '</tbody></table></div>' +
            '<div style="display:flex;align-items:center;justify-content:flex-end;margin-top:16px;font-size:13px;color:var(--ink-2);gap:20px;">' +
            '<div style="display:flex;align-items:center;gap:8px;"><span>Rows per page:</span>' +
            '<select style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;font-size:13px;background:#fff;outline:none;cursor:pointer;"><option>10</option><option>25</option><option>50</option></select></div>' +
            '<span>1–' + filteredCloudApps.length + ' of ' + filteredCloudApps.length + '</span>' +
            '<div style="display:flex;gap:4px;">' +
            ['<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>', '<polyline points="15 18 9 12 15 6"/>', '<polyline points="9 18 15 12 9 6"/>', '<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>'].map(function (p) {
              return '<button style="border:1px solid var(--line);background:#fff;padding:4px 8px;border-radius:6px;cursor:not-allowed;color:var(--ink-3);display:flex;align-items:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg></button>';
            }).join('') + '</div></div>';

        } else {
          mainContentHtml += '<div class="card" style="padding:40px;text-align:center;color:var(--ink-3);border-radius:12px;">' +
            '<div style="font-size:48px;margin-bottom:16px;">☁️</div>' +
            '<h3 style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:8px;">Cloud App Policy</h3>' +
            '<p class="muted" style="font-size:13px;max-width:400px;margin:0 auto 20px;">Configure login policies and access controls for cloud applications.</p>' +
            '</div>';
        }
      } else {
        var subrouteLabels = {
          hardware: 'Hardware Peripherals',
          camera: 'Camera Hardware',
          events: 'User Device Events',
          registry: 'Registry Editor',
          relaxations: 'Policy Relaxations',
          printer: 'Printer Control',
          websites: 'Websites',
          screenshot: 'Screenshot Policy',
          filetracking: 'File Activity Tracking',
          desktopapps: 'Desktop Apps',
          cloudapps: 'Cloud Apps',
          softwareinventory: 'Software Inventory',
          wificontrol: 'Wi-Fi Control',
          ethernetcontrol: 'Ethernet Control',
          adusersessions: 'AD User Sessions',
          passwordpolicy: 'Password Policy',
          adminalerts: 'Admin Alerts',
          policybreachalerts: 'Policy Breach Alerts'
        };
        var label = subrouteLabels[s.activeSubroute] || 'Policy';

        mainContentHtml += '<div style="margin-bottom: 24px;">' +
          '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">' + label + '</h2>' +
          '<div class="muted" style="font-size: 13px;">Manage and configure policies for ' + label.toLowerCase() + ' on Windows endpoints.</div>' +
          '</div>' +
          '<div class="card" style="padding: 40px; text-align: center; color: var(--ink-3); border-radius: 12px;">' +
          '<div style="font-size: 48px; margin-bottom: 16px;">🛡️</div>' +
          '<h3 style="font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px;">' + label + ' Configuration</h3>' +
          '<p class="muted" style="font-size: 13px; max-width: 400px; margin: 0 auto 20px;">Configure settings, enforcement rules, and exceptions for ' + label.toLowerCase() + '.</p>' +
          '<button class="btn btn-blue" style="border-radius: 8px; padding: 8px 16px;">Configure Policy</button>' +
          '</div>';
      }

      mainContentHtml += '</div>';

      return '<div style="display: flex; margin-top: -22px; margin-left: -26px; margin-right: -26px; margin-bottom: -22px; height: calc(100vh - var(--tb)); background: #fff;">' +
        subSidebarHtml +
        mainContentHtml +
        '</div>';
    };

    AFTER.policy_windows = function () {
      var s = WINDOWS_STATE;

      // Sub-nav clicks
      document.querySelectorAll('.sub-nav-item-win').forEach(function (item) {
        item.onclick = function () {
          s.activeSubroute = this.dataset.subroute;
          s.activeTab = 'inventory';
          s.activePrinterTab = 'usb_printer';
          s.activeDesktopAppsTab = 'all_apps';
          s.activeWebsitesTab = 'domains';
          s.activeCloudAppsTab = 'cloud_apps';
          go('policy_windows');
        };
      });

      // Tab clicks (USB only — excludes all page-specific tab types)
      document.querySelectorAll('.subroute-tab-btn').forEach(function (btn) {
        var d = btn.dataset;
        if (!d.winTab && !d.winPrinterTab && !d.winAppTab && !d.winCaTab) {
          btn.onclick = function () {
            s.activeTab = this.dataset.tab;
            go('policy_windows');
          };
        }
      });

      // Websites Tab clicks
      document.querySelectorAll('.subroute-tab-btn[data-win-tab]').forEach(function (btn) {
        btn.onclick = function () {
          s.activeWebsitesTab = this.dataset.winTab;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
          }
        };
      });

      // Search input (USB)
      var searchInput = document.getElementById('usb-search');
      if (searchInput) {
        searchInput.oninput = function () {
          s.searchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
            var newSearch = document.getElementById('usb-search');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      // Search input (Websites)
      var webSearchInput = document.getElementById('website-search-input');
      if (webSearchInput) {
        webSearchInput.oninput = function () {
          s.websitesSearchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
            var newSearch = document.getElementById('website-search-input');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      // Toggle Website Status
      document.querySelectorAll('.toggle-website-status').forEach(function (btn) {
        btn.onclick = function () {
          var id = this.dataset.id;
          var w = s.websites.find(function (item) { return item.id === id; });
          if (w) {
            w.status = !w.status;
            this.classList.toggle('on', w.status);
            toast('Status Updated', 'Website policy status updated.', 'ok');
          }
        };
      });

      // Choose Domains Dropdown Change
      var chooseDomainsSelect = document.getElementById('choose-domains-select');
      if (chooseDomainsSelect) {
        chooseDomainsSelect.onchange = function () {
          s.chooseDomainsType = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
          }
        };
      }

      // Add Website Domain Button
      var addWebsiteBtn = document.getElementById('btn-add-website-domain');
      if (addWebsiteBtn) {
        addWebsiteBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div>' +
            '<h3>Add Website Domain</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Add a domain to whitelist/monitor</div>' +
            '</div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field outlined"><label>Domain Name</label><input id="new-web-domain" placeholder="e.g. google.com" /></div>' +
            '<div class="field outlined" style="margin-top:12px;">' +
            '<label>Category</label>' +
            '<select id="new-web-category" style="width:100%; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; font-size:13px; outline:none; background:#fff; height:38px;">' +
            '<option>Social Media</option>' +
            '<option>Search Engine</option>' +
            '<option>Entertainment</option>' +
            '<option>Productivity</option>' +
            '<option>Custom</option>' +
            '</select>' +
            '</div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-website-domain">Add Domain</button>' +
            '</div>' +
            '</div>';

          openModal(html);

          var saveWebBtn = document.getElementById('btn-save-website-domain');
          if (saveWebBtn) {
            saveWebBtn.onclick = function () {
              var domain = document.getElementById('new-web-domain').value.trim();
              var category = document.getElementById('new-web-category').value;

              if (!domain) {
                toast('Required Fields', 'Please enter a domain.', 'err');
                return;
              }

              s.websites.push({
                id: 'web_' + Math.random().toString(36).substr(2, 9),
                domain: domain,
                category: category,
                status: true
              });

              closeModal();
              var container = document.getElementById('view');
              if (container) {
                container.innerHTML = RENDER.policy_windows();
                AFTER.policy_windows();
              }
              toast('Domain Added', 'The domain was added successfully.', 'ok');
            };
          }
        };
      }

      // Printer Tab clicks
      document.querySelectorAll('.subroute-tab-btn[data-win-printer-tab]').forEach(function (btn) {
        btn.onclick = function () {
          s.activePrinterTab = this.dataset.winPrinterTab;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
          }
        };
      });

      // Search input (Printer)
      var printerSearch = document.getElementById('printer-search');
      if (printerSearch) {
        printerSearch.oninput = function () {
          s.printerSearchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
            var newSearch = document.getElementById('printer-search');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      // Add USB Printer Button
      var addPrinterBtn = document.getElementById('btn-add-printer');
      if (addPrinterBtn) {
        addPrinterBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div>' +
            '<h3>Add USB Printer</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Whitelist an approved USB printer</div>' +
            '</div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field outlined"><label>Printer Name</label><input id="new-printer-name" placeholder="e.g. Office Laserjet" /></div>' +
            '<div class="field outlined" style="margin-top:12px;"><label>Product ID</label><input id="new-printer-pid" placeholder="e.g. 342" /></div>' +
            '<div class="field outlined" style="margin-top:12px;"><label>Vendor ID</label><input id="new-printer-vid" placeholder="e.g. 564" /></div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-printer">Add Printer</button>' +
            '</div>' +
            '</div>';

          openModal(html);

          var savePrinterBtn = document.getElementById('btn-save-printer');
          if (savePrinterBtn) {
            savePrinterBtn.onclick = function () {
              var name = document.getElementById('new-printer-name').value.trim();
              var pid = document.getElementById('new-printer-pid').value.trim();
              var vid = document.getElementById('new-printer-vid').value.trim();

              if (!name || !pid || !vid) {
                toast('Required Fields', 'Please fill in all fields.', 'err');
                return;
              }

              s.printers.push({
                id: 'print_' + Math.random().toString(36).substr(2, 9),
                name: name,
                productId: pid,
                vendorId: vid
              });

              closeModal();
              var container = document.getElementById('view');
              if (container) {
                container.innerHTML = RENDER.policy_windows();
                AFTER.policy_windows();
              }
              toast('Printer Whitelisted', 'The printer was whitelisted successfully.', 'ok');
            };
          }
        };
      }

      // Printer Policy Toggles
      var toggleBlockPrinters = document.getElementById('toggle-block-printers');
      if (toggleBlockPrinters) {
        toggleBlockPrinters.onclick = function () {
          s.printerPolicies.blockAllPrinters = !s.printerPolicies.blockAllPrinters;
          this.classList.toggle('on', s.printerPolicies.blockAllPrinters);
        };
      }

      var toggleNotifyPrinter = document.getElementById('toggle-notify-printer');
      if (toggleNotifyPrinter) {
        toggleNotifyPrinter.onclick = function () {
          s.printerPolicies.notifyOnBlock = !s.printerPolicies.notifyOnBlock;
          this.classList.toggle('on', s.printerPolicies.notifyOnBlock);
        };
      }

      var savePrinterPolicyBtn = document.getElementById('btn-save-printer-policy');
      if (savePrinterPolicyBtn) {
        savePrinterPolicyBtn.onclick = function () {
          toast('Policy Saved', 'Printer policy was successfully saved and deployed.', 'ok');
        };
      }

      // Desktop Apps Tab clicks
      document.querySelectorAll('.subroute-tab-btn[data-win-app-tab]').forEach(function (btn) {
        btn.onclick = function () {
          s.activeDesktopAppsTab = this.dataset.winAppTab;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
          }
        };
      });

      // Search input (Desktop Apps)
      var appSearchInput = document.getElementById('app-search');
      if (appSearchInput) {
        appSearchInput.oninput = function () {
          s.desktopAppsSearchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
            var newSearch = document.getElementById('app-search');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      // Add Desktop App Button
      var addDesktopAppBtn = document.getElementById('btn-add-desktop-app');
      if (addDesktopAppBtn) {
        addDesktopAppBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div>' +
            '<h3>Add Desktop Application</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Add a desktop application to the list</div>' +
            '</div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field outlined"><label>Application Name</label><input id="new-app-name" placeholder="e.g. Slack.exe" /></div>' +
            '<div class="field outlined" style="margin-top:12px;"><label>Added By</label><input id="new-app-addedby" value="navneet" placeholder="e.g. Admin" /></div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-desktop-app">Add App</button>' +
            '</div>' +
            '</div>';

          openModal(html);

          var saveAppBtn = document.getElementById('btn-save-desktop-app');
          if (saveAppBtn) {
            saveAppBtn.onclick = function () {
              var name = document.getElementById('new-app-name').value.trim();
              var addedBy = document.getElementById('new-app-addedby').value.trim();

              if (!name || !addedBy) {
                toast('Required Fields', 'Please fill in all fields.', 'err');
                return;
              }

              s.desktopApps.push({
                id: 'app_' + Math.random().toString(36).substr(2, 9),
                name: name,
                addedBy: addedBy
              });

              closeModal();
              var container = document.getElementById('view');
              if (container) {
                container.innerHTML = RENDER.policy_windows();
                AFTER.policy_windows();
              }
              toast('Application Added', 'The application was added successfully.', 'ok');
            };
          }
        };
      }

      // Cloud Apps Tab clicks
      document.querySelectorAll('.subroute-tab-btn[data-win-ca-tab]').forEach(function (btn) {
        btn.onclick = function () {
          s.activeCloudAppsTab = this.dataset.winCaTab;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
          }
        };
      });

      // Search (Cloud Apps)
      var cloudAppSearch = document.getElementById('cloud-app-search');
      if (cloudAppSearch) {
        cloudAppSearch.oninput = function () {
          s.cloudAppsSearchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_windows();
            AFTER.policy_windows();
            var ns = document.getElementById('cloud-app-search');
            if (ns) { ns.focus(); ns.setSelectionRange(ns.value.length, ns.value.length); }
          }
        };
      }

      // Add Cloud App Button
      var addCloudAppBtn = document.getElementById('btn-add-cloud-app');
      if (addCloudAppBtn) {
        addCloudAppBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div><h3>Add Cloud Application</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Add a cloud app login policy</div></div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field outlined"><label>Application Name</label><input id="new-ca-name" placeholder="e.g. Dropbox" /></div>' +
            '<div class="field outlined" style="margin-top:12px;"><label>Login URL</label><input id="new-ca-url" placeholder="e.g. dropbox.com/login" /></div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-cloud-app">Add App</button>' +
            '</div></div>';

          openModal(html);

          var saveBtn = document.getElementById('btn-save-cloud-app');
          if (saveBtn) {
            saveBtn.onclick = function () {
              var name = document.getElementById('new-ca-name').value.trim();
              var url = document.getElementById('new-ca-url').value.trim();
              if (!name || !url) { toast('Required Fields', 'Please fill in all fields.', 'err'); return; }
              s.cloudApps.push({ id: 'ca_' + Math.random().toString(36).substr(2, 9), name: name, loginUrl: url, isDefault: false });
              closeModal();
              var container = document.getElementById('view');
              if (container) { container.innerHTML = RENDER.policy_windows(); AFTER.policy_windows(); }
              toast('Cloud App Added', name + ' was added successfully.', 'ok');
            };
          }
        };
      }

      // Three-dot menu for cloud apps rows
      document.querySelectorAll('.ca-three-dot').forEach(function (el) {
        el.onclick = function (e) {
          e.stopPropagation();
          var id = this.dataset.id;
          document.querySelectorAll('.ca-dropdown').forEach(function (m) { m.remove(); });
          var menu = document.createElement('div');
          menu.className = 'ca-dropdown';
          menu.style.cssText = 'position:absolute; right:0; top:100%; background:#fff; border:1px solid var(--line); border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,.12); min-width:140px; z-index:1000; overflow:hidden;';
          menu.innerHTML =
            '<div class="dd-item" style="padding:10px 14px; font-size:13px; cursor:pointer; color:var(--ink);" onmouseenter="this.style.background=\'#f8fafc\'" onmouseleave="this.style.background=\'\'">Edit</div>' +
            '<div class="dd-del" style="padding:10px 14px; font-size:13px; cursor:pointer; color:#ef4444;" onmouseenter="this.style.background=\'#fef2f2\'" onmouseleave="this.style.background=\'\'">Delete</div>';
          this.style.position = 'relative';
          this.appendChild(menu);

          menu.querySelector('.dd-del').onclick = function (ev) {
            ev.stopPropagation();
            s.cloudApps = s.cloudApps.filter(function (x) { return x.id !== id; });
            menu.remove();
            var container = document.getElementById('view');
            if (container) { container.innerHTML = RENDER.policy_windows(); AFTER.policy_windows(); }
            toast('Removed', 'Cloud app removed.', 'ok');
          };

          setTimeout(function () {
            document.addEventListener('click', function closeMenu() {
              menu.remove();
              document.removeEventListener('click', closeMenu);
            });
          }, 0);
        };
      });

      // Add USB button
      var addBtn = document.getElementById('btn-add-usb');
      if (addBtn) {
        addBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div>' +
            '<h3>Add USB Device</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Whitelist an approved USB device</div>' +
            '</div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field"><label>Device Name</label><input id="new-usb-name" placeholder="e.g. Encrypted Drive" /></div>' +
            '<div class="field" style="margin-top:12px;"><label>Product ID</label><input id="new-usb-pid" placeholder="e.g. 123" /></div>' +
            '<div class="field" style="margin-top:12px;"><label>Vendor ID</label><input id="new-usb-vid" placeholder="e.g. 321" /></div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn-text" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-usb-device">Add Device</button>' +
            '</div>' +
            '</div>';

          openModal(html);

          var saveDeviceBtn = document.getElementById('btn-save-usb-device');
          if (saveDeviceBtn) {
            saveDeviceBtn.onclick = function () {
              var name = document.getElementById('new-usb-name').value.trim();
              var pid = document.getElementById('new-usb-pid').value.trim();
              var vid = document.getElementById('new-usb-vid').value.trim();

              if (!name || !pid || !vid) {
                toast('Required Fields', 'Please fill in all fields.', 'err');
                return;
              }

              s.usbInventory.push({
                id: 'usb_' + Math.random().toString(36).substr(2, 9),
                name: name,
                productId: pid,
                vendorId: vid
              });

              closeModal();
              go('policy_windows');
              toast('Device Whitelisted', 'The USB device was whitelisted successfully.', 'ok');
            };
          }
        };
      }

      // Toggles
      var toggleBlock = document.getElementById('toggle-block-usb');
      if (toggleBlock) {
        toggleBlock.onclick = function () {
          s.policies.blockUsb = !s.policies.blockUsb;
          this.classList.toggle('on', s.policies.blockUsb);
        };
      }

      var toggleReadOnly = document.getElementById('toggle-readonly-usb');
      if (toggleReadOnly) {
        toggleReadOnly.onclick = function () {
          s.policies.readOnly = !s.policies.readOnly;
          this.classList.toggle('on', s.policies.readOnly);
        };
      }

      var toggleNotify = document.getElementById('toggle-notify-usb');
      if (toggleNotify) {
        toggleNotify.onclick = function () {
          s.policies.notifyUser = !s.policies.notifyUser;
          this.classList.toggle('on', s.policies.notifyUser);
        };
      }

      // Save Policy Button
      var savePolicyBtn = document.getElementById('btn-save-usb-policy');
      if (savePolicyBtn) {
        savePolicyBtn.onclick = function () {
          toast('Policy Saved', 'USB storage policy was successfully saved and deployed.', 'ok');
        };
      }
    };

    // Email DLP States & Views
    var EMAIL_DLP_STATE = {
      searchQuery: '',
      policies: [
        { id: 'p1', name: 'Block Public Email Domains', action: 'BLOCK', enabled: true, group: 'Default User Group' },
        { id: 'p2', name: 'Quarantine PII Emails', action: 'QUARANTINE', enabled: true, group: 'Default User Group' }
      ]
    };

    RENDER.email_dlp_policies = function () {
      var s = EMAIL_DLP_STATE;

      var infoBox = '<div style="background: #e6f4fc; border: 1px solid #bce0fd; border-radius: 8px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px; color: #1f8fd4; font-size: 13px; line-height: 1.5;">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' +
        '<div>Before implementing the Email DLP Policy, you must first configure your email provider to integrate with the Email DLP Server. This ensures proper monitoring and protection against data loss. Refer to the following guides <a href="#" style="color: #1f8fd4; font-weight: 600; text-decoration: underline;">Google Workspace Setup</a> and <a href="#" style="color: #1f8fd4; font-weight: 600; text-decoration: underline;">Office 365 Setup</a>.</div>' +
        '</div>';

      var toolbar = '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; gap: 12px;">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<div class="search" style="width: 260px;">' +
        ic('search') +
        '<input type="text" id="email-policy-search" value="' + s.searchQuery + '" placeholder="Search by Policy Name" style="width: 100%;" />' +
        '</div>' +
        '<div class="select" style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 12px; font-size: 12.5px; background: #fff; color: #374151;">' +
        'Bulk Action ' + ic('chevd', 'width="12" height="12"') +
        '</div>' +
        '</div>' +
        '<button class="btn btn-blue" id="btn-add-email-policy" style="border-radius: 8px; padding: 8px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px;">' +
        ic('plus') + ' Add Policy' +
        '</button>' +
        '</div>';

      var rowsHtml = s.policies.filter(function (p) {
        return !s.searchQuery || p.name.toLowerCase().indexOf(s.searchQuery.toLowerCase()) > -1;
      }).map(function (p) {
        return '<tr>' +
          '<td style="width: 40px;"><div class="checkbox"></div></td>' +
          '<td class="tname" style="font-weight: 600; color: var(--ink);">' + p.name + '</td>' +
          '<td><span style="font-family: monospace; font-weight: 600; font-size: 12px; color: var(--navy);">' + p.action + '</span></td>' +
          '<td><button class="toggle ' + (p.enabled ? 'on' : '') + ' toggle-email-policy" data-id="' + p.id + '"></button></td>' +
          '<td><span style="background: #e6f4fc; color: #1f8fd4; font-size: 11.5px; padding: 4px 10px; border-radius: 12px; font-weight: 600;">' + p.group + '</span></td>' +
          '<td style="text-align: right; position: relative;">' +
          '<div class="email-row-actions-trigger" data-id="' + p.id + '" style="cursor: pointer; display: inline-flex; padding: 6px; color: var(--ink-3);">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
          '</div>' +
          '</td>' +
          '</tr>';
      }).join('');

      var table = '<div class="card" style="border-radius: 10px; overflow: visible; box-shadow: var(--shadow);">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th style="width: 40px;"><div class="checkbox"></div></th>' +
        '<th>Name</th>' +
        '<th>Incident Action</th>' +
        '<th>Policy Enabled</th>' +
        '<th>Groups</th>' +
        '<th style="text-align: right;">Actions</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        (rowsHtml || '<tr><td colspan="6" style="text-align: center; padding: 24px; color: var(--ink-3);">No policies found.</td></tr>') +
        '</tbody>' +
        '</table>' +
        '</div>';

      var pagination = '<div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px; font-size: 13px; color: var(--ink-2); gap: 20px;">' +
        '<div style="display: flex; align-items: center; gap: 8px;">' +
        '<span>Rows per page:</span>' +
        '<select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 13px; background: #fff; outline: none; cursor: pointer;">' +
        '<option>10</option>' +
        '<option>25</option>' +
        '<option>50</option>' +
        '</select>' +
        '</div>' +
        '<span>1-2 of 2</span>' +
        '<div style="display: flex; gap: 4px;">' +
        '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>' +
        '</button>' +
        '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
        '</button>' +
        '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
        '</button>' +
        '<button style="border: 1px solid var(--line); background: #fff; padding: 4px 8px; border-radius: 6px; cursor: not-allowed; color: var(--ink-3); display: flex; align-items: center;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>' +
        '</button>' +
        '</div>' +
        '</div>';

      return '<div style="padding: 24px 32px; background: #fdfdfd; min-height: calc(100vh - var(--tb)); box-sizing: border-box;">' +
        '<div style="margin-bottom: 24px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Email DLP</h2>' +
        '<div class="muted" style="font-size: 13px;">Implement Email Policy to Prevent Sending Sensitive Data via Emails</div>' +
        '</div>' +
        infoBox +
        toolbar +
        table +
        pagination +
        '</div>';
    };

    AFTER.email_dlp_policies = function () {
      var s = EMAIL_DLP_STATE;

      var searchInput = document.getElementById('email-policy-search');
      if (searchInput) {
        searchInput.oninput = function () {
          s.searchQuery = this.value;
          var viewDiv = document.getElementById('view');
          if (viewDiv) {
            viewDiv.innerHTML = RENDER.email_dlp_policies();
            AFTER.email_dlp_policies();
            var newSearch = document.getElementById('email-policy-search');
            if (newSearch) {
              newSearch.focus();
              newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
            }
          }
        };
      }

      document.querySelectorAll('.toggle-email-policy').forEach(function (btn) {
        btn.onclick = function () {
          var id = this.dataset.id;
          var p = s.policies.find(function (item) { return item.id === id; });
          if (p) {
            p.enabled = !p.enabled;
            this.classList.toggle('on', p.enabled);
            toast('Policy Updated', 'Policy status was updated successfully.', 'ok');
          }
        };
      });

      document.querySelectorAll('.email-row-actions-trigger').forEach(function (trigger) {
        trigger.onclick = function (e) {
          e.stopPropagation();
          closeAllDropdowns();

          var id = this.dataset.id;
          var rect = this.getBoundingClientRect();

          var dropdownHtml = '<div class="dropdown email-actions-dropdown" style="position: fixed; top: ' + (rect.bottom + window.scrollY) + 'px; left: ' + (rect.left - 150 + window.scrollX) + 'px; min-width: 160px; z-index: 1000;">' +
            '<div class="opt" data-action="edit-as-new">Edit as New</div>' +
            '<div class="opt" data-action="edit">Edit</div>' +
            '<div class="opt" data-action="download">Download</div>' +
            '<div class="opt" data-action="delete" style="color: var(--red);">Delete</div>' +
            '</div>';

          var div = document.createElement('div');
          div.id = 'email-actions-dropdown-container';
          div.innerHTML = dropdownHtml;
          document.body.appendChild(div);

          div.querySelectorAll('.opt').forEach(function (opt) {
            opt.onclick = function () {
              var action = this.dataset.action;
              closeAllDropdowns();
              if (action === 'edit') {
                openUpdateEmailPolicyDrawer(id);
              } else {
                toast('Action Triggered', 'Triggered action: ' + action + ' for policy ' + id, 'info');
              }
            };
          });
        };
      });

      function openUpdateEmailPolicyDrawer(policyId) {
        var p = s.policies.find(function (item) { return item.id === policyId; });
        if (!p) return;

        var riskVal = p.risk || 'High';
        var actionVal = p.action === 'BLOCK' ? 'Block' : p.action === 'QUARANTINE' ? 'Quarantine' : 'Log';

        var drawerHtml =
          '<div class="drawer" style="display:flex; flex-direction:column; height:100%; width: 520px; max-width: 100%;">' +
          '<div class="drawer-h" style="display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:none;">' +
          '<h3 style="font-size:18px; font-weight:700; color:#1f2430; margin:0;">Update Email Policy</h3>' +
          '<button class="x" onclick="closeModal()" style="background:none; border:none; font-size:20px; cursor:pointer; color:#6b7280; display:flex; align-items:center; justify-content:center; padding:4px;">' + ic('x', 'width="18" height="18"') + '</button>' +
          '</div>' +

          '<div style="display:flex; gap:24px; border-bottom:1px solid #e2e8f0; margin: 0 24px 20px; padding-bottom:0;">' +
          '<button class="drawer-tab" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:#1f8fd4; border-bottom:2px solid #1f8fd4; margin-bottom:-1px; cursor:pointer;">General</button>' +
          '<button class="drawer-tab" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:#6b7280; border-bottom:2px solid transparent; margin-bottom:-1px; cursor:pointer;">Restrictions</button>' +
          '<button class="drawer-tab" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:#6b7280; border-bottom:2px solid transparent; margin-bottom:-1px; cursor:pointer;">Classification</button>' +
          '<button class="drawer-tab" style="background:none; border:none; padding:10px 0; font-size:13.5px; font-weight:600; color:#6b7280; border-bottom:2px solid transparent; margin-bottom:-1px; cursor:pointer;">Associate Groups</button>' +
          '</div>' +

          '<div class="drawer-b" style="padding:0 24px 24px; flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:20px;">' +

          // PANEL 1: GENERAL
          '<div class="drawer-panel" id="panel-general" style="display:flex; flex-direction:column; gap:20px;">' +
          '<div style="font-size:13px; color:#6b7280; line-height:1.5;">Specify the policy name, action (outcome when policy is violated), and risk level associated with the policy.</div>' +

          '<div class="field outlined" style="margin-top: 8px;">' +
          '<label>Policy Name <span style="display:inline-flex;align-items:center;vertical-align:middle;cursor:help;color:#9aa0ab;margin-right:4px;" title="Policy name info">' + ic('info', 'width="12" height="12" style="display:inline;"') + '</span> <span style="color:#dc2626;">*</span></label>' +
          '<input type="text" id="email-policy-name-input" value="' + p.name + '" placeholder="Enter policy name"/>' +
          '</div>' +

          '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">' +
          '<div class="field outlined" style="margin:0;">' +
          '<label>Action <span style="display:inline-flex;align-items:center;vertical-align:middle;cursor:help;color:#9aa0ab;margin-right:4px;" title="Action info">' + ic('info', 'width="12" height="12" style="display:inline;"') + '</span></label>' +
          '<select id="email-policy-action-select" style="width:100%; border:1px solid #c4c8d1; border-radius:6px; padding:10px 12px; font-size:13.5px; outline:none; background:#fff; height:40px;">' +
          '<option' + (actionVal === 'Block' ? ' selected' : '') + '>Block</option>' +
          '<option' + (actionVal === 'Log' ? ' selected' : '') + '>Log</option>' +
          '<option' + (actionVal === 'Quarantine' ? ' selected' : '') + '>Quarantine</option>' +
          '</select>' +
          '</div>' +

          '<div class="field outlined" style="margin:0;">' +
          '<label>Risk <span style="display:inline-flex;align-items:center;vertical-align:middle;cursor:help;color:#9aa0ab;margin-right:4px;" title="Risk info">' + ic('info', 'width="12" height="12" style="display:inline;"') + '</span></label>' +
          '<select id="email-policy-risk-select" style="width:100%; border:1px solid #c4c8d1; border-radius:6px; padding:10px 12px; font-size:13.5px; outline:none; background:#fff; height:40px;">' +
          '<option' + (riskVal === 'High' ? ' selected' : '') + '>High</option>' +
          '<option' + (riskVal === 'Medium' ? ' selected' : '') + '>Medium</option>' +
          '<option' + (riskVal === 'Low' ? ' selected' : '') + '>Low</option>' +
          '</select>' +
          '</div>' +
          '</div>' +

          '<div style="background:#fafafa; border-radius:8px; padding:16px; border:1px solid #f0f0f0; display:flex; flex-direction:column; gap:8px; font-size:12.5px; line-height:1.5; color:#374151; margin-top:8px;">' +
          '<div><b>Block:</b> Prevents the email from being sent due to policy violations.</div>' +
          '<div><b>Log:</b> Records the incident for future monitoring and analysis.</div>' +
          '<div><b>Quarantine:</b> Holds the email for review before deciding on further action</div>' +
          '</div>' +
          '</div>' +

          // PANEL 2: RESTRICTIONS
          '<div class="drawer-panel" id="panel-restrictions" style="display:none; flex-direction:column; gap:20px;">' +
          // Domains Restriction
          '<div>' +
          '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">' +
          '<span style="font-weight:600; color:#1f2937; display:inline-flex; align-items:center; gap:6px;">' +
          'Domains Restriction <span style="color:#9ca3af; cursor:help;" title="Domains info">' + ic('info', 'width="13" height="13" style="display:inline;"') + '</span>' +
          '</span>' +
          '<button class="btn-outline-blue" onclick="toast(\'Configure List\',\'Domain list configuration opened.\',\'info\')" style="padding:4px 10px; font-size:11.5px; height:28px; border-radius:6px; display:flex; align-items:center; gap:4px; border-color:#cbd5e1; color:#1f8fd4;">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:2px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Configure List' +
          '</button>' +
          '</div>' +
          '<div style="display:flex; flex-direction:column; gap:10px; padding-left:2px;">' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="domain_restriction" value="none" style="width:16px; height:16px; accent-color:#1f8fd4;"/> No Restriction' +
          '</label>' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="domain_restriction" value="allow" style="width:16px; height:16px; accent-color:#1f8fd4;"/> Allow Domains' +
          '</label>' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="domain_restriction" value="block" checked style="width:16px; height:16px; accent-color:#1f8fd4;"/> Block Domains' +
          '</label>' +
          '</div>' +
          '</div>' +

          // Attachments Restriction
          '<div>' +
          '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">' +
          '<span style="font-weight:600; color:#1f2937; display:inline-flex; align-items:center; gap:6px;">' +
          'Attachments Restriction <span style="color:#9ca3af; cursor:help;" title="Attachments info">' + ic('info', 'width="13" height="13" style="display:inline;"') + '</span>' +
          '</span>' +
          '<button class="btn-outline-blue" onclick="toast(\'Configure List\',\'Attachment list configuration opened.\',\'info\')" style="padding:4px 10px; font-size:11.5px; height:28px; border-radius:6px; display:flex; align-items:center; gap:4px; border-color:#cbd5e1; color:#1f8fd4;">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:2px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Configure List' +
          '</button>' +
          '</div>' +
          '<div style="display:flex; flex-direction:column; gap:10px; padding-left:2px;">' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="attachment_restriction" value="none" checked style="width:16px; height:16px; accent-color:#1f8fd4;"/> No Restriction' +
          '</label>' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="attachment_restriction" value="allow" style="width:16px; height:16px; accent-color:#1f8fd4;"/> Allow Attachments' +
          '</label>' +
          '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13.5px; color:#374151;">' +
          '<input type="radio" name="attachment_restriction" value="block" style="width:16px; height:16px; accent-color:#1f8fd4;"/> Block Attachments' +
          '</label>' +
          '</div>' +
          '</div>' +

          // Email Size Restriction
          '<div>' +
          '<div style="font-weight:600; color:#1f2937; display:inline-flex; align-items:center; gap:6px; margin-bottom:14px;">' +
          'Email Size Restriction <span style="color:#9ca3af; cursor:help;" title="Size info">' + ic('info', 'width="13" height="13" style="display:inline;"') + '</span> <span style="color:#dc2626;">*</span>' +
          '</div>' +
          '<div style="padding:0 8px;">' +
          '<input type="range" id="email-size-slider" min="1" max="35" value="15" style="width: 100%; cursor: pointer; accent-color:#1f8fd4;" />' +
          '<div style="display:flex; justify-content:space-between; font-size:12px; color:#4b5160; margin-top:8px;">' +
          '<span>1 MB</span>' +
          '<span id="email-size-val" style="font-weight: 700; color: #1f8fd4; font-size:13px;">15 MB</span>' +
          '<span>35 MB</span>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +

          // PANEL 3: CLASSIFICATION
          '<div class="drawer-panel" id="panel-classification" style="display:none; grid-template-columns: 1fr 1px 1fr; gap: 20px; align-items: stretch; margin-top: 8px;">' +
          // Left Column
          '<div style="display: flex; flex-direction: column; gap: 16px;">' +
          '<div style="font-weight: 600; color: #1f2937; display: inline-flex; align-items: center; gap: 6px;">' +
          'Apply Classification On <span style="color: #9ca3af; cursor: help;" title="Apply classification info">' + ic('info', 'width="13" height="13" style="display:inline;"') + '</span>' +
          '</div>' +
          '<div style="display: flex; flex-direction: column; gap: 12px; padding-left: 2px;">' +
          '<label class="chk on" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #1f8fd4; display: grid; place-items: center; background: #1f8fd4; color: #fff;">' +
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" style="stroke:#fff;"><polyline points="20 6 9 17l-5-5"/></svg>' +
          '</span>' +
          'Email Body' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'Email Subject' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'Attachments' +
          '</label>' +
          '</div>' +
          '</div>' +

          // Vertical Divider
          '<div style="background: #e2e8f0; width: 1px; height: 100%;"></div>' +

          // Right Column
          '<div style="display: flex; flex-direction: column; gap: 16px;">' +
          '<div style="display: flex; align-items: center; justify-content: space-between;">' +
          '<span style="font-weight: 600; color: #1f2937;">Select Classifications</span>' +
          '<div style="display: flex; gap: 12px; color: #8a909c;">' +
          '<span style="cursor: pointer;" onclick="toast(\'Filter\',\'Filter classifications\',\'info\')">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>' +
          '</span>' +
          '<span style="cursor: pointer;" onclick="toast(\'Refresh\',\'Refreshed classifications\',\'info\')">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>' +
          '</span>' +
          '</div>' +
          '</div>' +

          // Search box
          '<div class="search" style="width: 100%;">' +
          ic('search') +
          '<input type="text" id="class-search-input" placeholder="Search" style="width: 100%; height: 38px; border-radius: 6px; border: 1px solid #cbd5e1; padding-left: 32px; outline: none;" />' +
          '</div>' +

          // Classifications List
          '<div style="display: flex; flex-direction: column; gap: 12px; padding-left: 2px; max-height: 200px; overflow-y: auto;">' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'Select All' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'PII' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'PCI' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'PHI' +
          '</label>' +
          '<label class="chk" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 13.5px; color: #374151;">' +
          '<span class="box" style="width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid #cbd5e1; display: grid; place-items: center; background: #fff;"></span>' +
          'Custom' +
          '</label>' +
          '</div>' +
          '</div>' +
          '</div>' +

          // PANEL 4: ASSOCIATE GROUPS
          '<div class="drawer-panel" id="panel-groups" style="display:none; flex-direction:column; gap:20px; text-align:center; padding: 40px 0; color:#6b7280;">' +
          ic('people', 'width="48" height="48" style="margin: 0 auto 12px; color:#cbd5e1;"') +
          '<div>Select the user groups that this policy applies to.</div>' +
          '</div>' +

          '</div>' +

          '<div class="drawer-f" style="padding:16px 24px; border-top:1px solid #e2e8f0; display:flex; justify-content:flex-end; gap:12px; background:#fff;">' +
          '<button class="btn-outline-blue" onclick="closeModal()" style="padding:8px 16px; height:38px; border-radius:6px; display:flex; align-items:center; gap:8px; border-color:#cbd5e1; color:#374151;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Cancel' +
          '</button>' +
          '<button class="btn btn-blue" id="email-policy-save-btn" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; padding:0 20px; font-weight:600; cursor:pointer; height:38px; display:flex; align-items:center; justify-content:center; gap:8px;">' +
          'Next <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="12 5 19 12 12 19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
          '</button>' +
          '</div>' +
          '</div>';

        var r = document.getElementById('modal-root');
        r.innerHTML = '<div class="overlay" id="ovl" style="justify-content:flex-end; padding:0;">' + drawerHtml + '</div>';
        document.getElementById('ovl').onclick = function (e) {
          if (e.target.id === 'ovl') closeModal();
        };

        // Tab click handling
        var tabBtns = r.querySelectorAll('.drawer-tab');
        var panels = r.querySelectorAll('.drawer-panel');

        tabBtns.forEach(function (btn, idx) {
          btn.onclick = function () {
            tabBtns.forEach(function (b) {
              b.style.color = '#6b7280';
              b.style.borderBottomColor = 'transparent';
            });
            btn.style.color = '#1f8fd4';
            btn.style.borderBottomColor = '#1f8fd4';

            panels.forEach(function (pnl) {
              pnl.style.display = 'none';
            });
            if (idx === 2) {
              panels[idx].style.display = 'grid';
            } else {
              panels[idx].style.display = 'flex';
            }
          };
        });

        // Checkbox click handling in drawer panels
        r.querySelectorAll('.drawer-panel .chk').forEach(function (chk) {
          chk.onclick = function (e) {
            e.preventDefault();
            var isOn = chk.classList.toggle('on');
            var box = chk.querySelector('.box');
            if (box) {
              if (isOn) {
                box.style.background = '#1f8fd4';
                box.style.borderColor = '#1f8fd4';
                box.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" style="stroke:#fff;"><polyline points="20 6 9 17l-5-5"/></svg>';
              } else {
                box.style.background = '#fff';
                box.style.borderColor = '#cbd5e1';
                box.innerHTML = '';
              }
            }
          };
        });

        // Slider interaction
        var slider = document.getElementById('email-size-slider');
        var sliderVal = document.getElementById('email-size-val');
        if (slider && sliderVal) {
          slider.oninput = function () {
            sliderVal.textContent = this.value + ' MB';
          };
        }

        var saveBtn = document.getElementById('email-policy-save-btn');
        if (saveBtn) {
          saveBtn.onclick = function () {
            var nameInput = document.getElementById('email-policy-name-input');
            var actionSelect = document.getElementById('email-policy-action-select');
            var riskSelect = document.getElementById('email-policy-risk-select');

            if (nameInput) {
              p.name = nameInput.value.trim();
            }
            if (actionSelect) {
              p.action = actionSelect.value.toUpperCase();
            }
            if (riskSelect) {
              p.risk = riskSelect.value;
            }

            closeModal();
            var viewDiv = document.getElementById('view');
            if (viewDiv) {
              viewDiv.innerHTML = RENDER.email_dlp_policies();
              AFTER.email_dlp_policies();
            }
            toast('Policy Updated', 'Email policy was updated successfully.', 'ok');
          };
        }
      }

      document.addEventListener('click', closeAllDropdowns);

      function closeAllDropdowns() {
        var existing = document.getElementById('email-actions-dropdown-container');
        if (existing) existing.remove();
      }
    };

    RENDER.email_dlp_providers = function () {
      return '<div style="padding: 24px 32px; background: #fdfdfd; min-height: calc(100vh - var(--tb)); box-sizing: border-box;">' +
        '<div style="margin-bottom: 24px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Provider Configurations</h2>' +
        '<div class="muted" style="font-size: 13px;">Configure and manage integrations with email providers.</div>' +
        '</div>' +
        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 800px;">' +
        '<div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 16px; border-radius: 12px;">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<div style="width: 40px; height: 40px; border-radius: 8px; background: #f3f4f6; display: grid; place-items: center; font-size: 20px;">📧</div>' +
        '<div>' +
        '<b style="font-size: 15px; color: var(--navy);">Google Workspace</b>' +
        '<div class="muted" style="font-size: 12px; margin-top: 2px;">Integrate with Gmail using Google APIs.</div>' +
        '</div>' +
        '</div>' +
        '<span class="statusbadge sb-gray" style="align-self: flex-start;">Not Configured</span>' +
        '<button class="btn btn-blue" style="border-radius: 8px; padding: 8px 16px; margin-top: 8px; align-self: flex-start;">Configure Gmail</button>' +
        '</div>' +
        '<div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 16px; border-radius: 12px;">' +
        '<div style="display: flex; align-items: center; gap: 12px;">' +
        '<div style="width: 40px; height: 40px; border-radius: 8px; background: #f3f4f6; display: grid; place-items: center; font-size: 20px;">🏢</div>' +
        '<div>' +
        '<b style="font-size: 15px; color: var(--navy);">Office 365</b>' +
        '<div class="muted" style="font-size: 12px; margin-top: 2px;">Integrate with Exchange using Microsoft Graph.</div>' +
        '</div>' +
        '</div>' +
        '<span class="statusbadge sb-gray" style="align-self: flex-start;">Not Configured</span>' +
        '<button class="btn btn-blue" style="border-radius: 8px; padding: 8px 16px; margin-top: 8px; align-self: flex-start;">Configure Outlook</button>' +
        '</div>' +
        '</div>' +
        '</div>';
    };

    RENDER.email_dlp_quarantine = function () {
      return genPage({
        title: 'Quarantine Emails',
        icon: 'mail',
        color: '#e65100',
        sub: 'Review and manage emails that were quarantined due to PII or sensitive data violations.',
        cols: ['Sender', 'Recipient', 'Violated Policy', 'Quarantined On', 'Status'],
        rows: [
          ['user@public-domain.com', 'client@company.com', 'Block Public Email Domains', '29/6/2026', sb('Quarantined', 'sb-amber')],
          ['employee@company.com', 'external@gmail.com', 'Quarantine PII Emails', '28/6/2026', sb('Quarantined', 'sb-amber')]
        ]
      });
    };

    RENDER.devices = function () {
      return genPage({
        title: 'Devices',
        icon: 'devices',
        color: '#1f8fd4',
        sub: 'Enrolled endpoints and mobile devices monitored by DPDPAX Endpoint Defence.',
        cols: ['Device Name', 'User', 'OS', 'Last Seen', 'Status'],
        rows: [
          ['DESKTOP-navneet', 'navneet Chhabra', 'Windows 11', 'Just now', sb('Compliant', 'sb-green')],
          ['IPHONE-HIMANSHI', 'Himanshi Saini', 'iOS 17.4', '5 mins ago', sb('Compliant', 'sb-green')],
          ['ANDROID-RADHESHAM', 'Radhesham Joshi', 'Android 14', '1 hour ago', sb('Non-Compliant', 'sb-red')]
        ]
      });
    };

    RENDER.device_groups = function () {
      return genPage({
        title: 'Device Groups',
        icon: 'device_groups',
        color: '#7c3aed',
        sub: 'Logical grouping of devices for policy enforcement and compliance reporting.',
        cols: ['Group Name', 'Devices', 'Policies Applied', 'Created By', 'Status'],
        rows: [
          ['Default User Group', '245 devices', '3 policies', 'System', sb('Active', 'sb-green')],
          ['High Risk Department', '12 devices', '5 policies', 'Admin', sb('Active', 'sb-green')],
          ['Temporary Contractor Group', '0 devices', '1 policy', 'Admin', sb('Inactive', 'sb-gray')]
        ]
      });
    };

    var SLA_STATE = {
      activeTab: 'dashboard'
    };

    RENDER.sla = function () {
      var s = SLA_STATE;
      
      var pageHtml = '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; background: #f8fafc; height: 100%; display: flex; flex-direction: column;">' +
        '<div style="margin-bottom: 20px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">SLA</h2>' +
        '<div class="muted" style="font-size: 13.5px; line-height: 1.5; color: var(--ink-2);">' +
        'Monitor SLA compliance and define service level agreements for privacy request processing' +
        '</div>' +
        '</div>';

      // Tab switcher
      var tabs = [
        { id: 'dashboard', label: 'DASHBOARD' },
        { id: 'definitions', label: 'DEFINITIONS' }
      ];

      pageHtml += '<div style="display:flex; border-bottom:1px solid #e2e8f0; margin-bottom:20px; gap:24px;">';
      tabs.forEach(function (t) {
        var isActive = s.activeTab === t.id;
        var borderBottom = isActive ? '2px solid #1f8fd4' : '2px solid transparent';
        var color = isActive ? '#1f8fd4' : '#64748b';
        pageHtml += '<button class="sla-tab-btn" data-tab="' + t.id + '" style="background:none; border:none; padding:10px 0; font-size:12.5px; font-weight:600; color:' + color + '; border-bottom:' + borderBottom + '; cursor:pointer; white-space:nowrap; margin-bottom:-1px; text-transform:uppercase; letter-spacing:0.02em; transition:color 0.15s; outline:none;">' + t.label + '</button>';
      });
      pageHtml += '</div>';

      if (s.activeTab === 'dashboard') {
        var kpis = '<div class="kpis k7" style="display:grid; grid-template-columns: repeat(7, 1fr); gap:12px; margin-bottom:20px;">' +
          '<!-- Card 1 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">1</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">On Track</div>' +
          '</div>' +
          '<div style="background:#e7f7ee; color:#16a34a; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 2 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">1</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">At Risk</div>' +
          '</div>' +
          '<div style="background:#fef3cd; color:#d97706; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 3 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">54</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">Breached</div>' +
          '</div>' +
          '<div style="background:#fef2f2; color:#dc2626; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 4 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">34</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">Resolved</div>' +
          '</div>' +
          '<div style="background:#e6f4fc; color:#1f8fd4; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 5 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">94.1%</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">Compliance Rate</div>' +
          '<div style="font-size:10px; color:#94a3b8; margin-top:1px;">Resolved within SLA</div>' +
          '</div>' +
          '<div style="background:#e7f7ee; color:#16a34a; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 6 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">23.4h</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">Avg Response</div>' +
          '<div style="font-size:10px; color:#94a3b8; margin-top:1px;">Time to first response</div>' +
          '</div>' +
          '<div style="background:#f1eafe; color:#7c3aed; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
          '</div>' +
          '</div>' +
          '<!-- Card 7 -->' +
          '<div class="card kpi" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; margin-bottom:0;">' +
          '<div>' +
          '<div style="font-size:22px; font-weight:700; color:var(--ink);">14.9h</div>' +
          '<div style="font-size:12px; color:var(--ink-3); margin-top:2px;">Avg Resolution</div>' +
          '<div style="font-size:10px; color:#94a3b8; margin-top:1px;">Time to resolution</div>' +
          '</div>' +
          '<div style="background:#e0f5f8; color:#0ea5b7; width:36px; height:36px; border-radius:8px; display:grid; place-items:center;">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
          '</div>' +
          '</div>' +
          '</div>';

        var middleSection = '<div style="display:flex; gap:20px; margin-bottom:24px;">' +
          '<!-- Left: Status Distribution -->' +
          '<div class="card" style="flex: 1; padding: 20px; margin-bottom: 0; display: flex; flex-direction: column; justify-content: center;">' +
          '<h3 style="font-size:14px; font-weight:700; color:var(--navy); margin: 0 0 16px 0;">Status Distribution</h3>' +
          '<div style="display:flex; align-items:center; justify-content:center; height:180px;">' +
          '  <svg width="150" height="150" viewBox="0 0 36 36" style="transform: rotate(-110deg); display: block; margin: auto;">' +
          '    <circle cx="18" cy="18" r="11.5" fill="none" stroke="#dc2626" stroke-width="4.2" stroke-dasharray="39 72.25" stroke-dashoffset="0" stroke-linecap="round"></circle>' +
          '    <circle cx="18" cy="18" r="11.5" fill="none" stroke="#d97706" stroke-width="4.2" stroke-dasharray="1 72.25" stroke-dashoffset="-42.5" stroke-linecap="round"></circle>' +
          '    <circle cx="18" cy="18" r="11.5" fill="none" stroke="#16a34a" stroke-width="4.2" stroke-dasharray="1 72.25" stroke-dashoffset="-45" stroke-linecap="round"></circle>' +
          '    <circle cx="18" cy="18" r="11.5" fill="none" stroke="#1f8fd4" stroke-width="4.2" stroke-dasharray="22 72.25" stroke-dashoffset="-48.5" stroke-linecap="round"></circle>' +
          '  </svg>' +
          '</div>' +
          '</div>' +
          '<!-- Right: Breakdown by Request Type -->' +
          '<div class="card" style="flex: 1.5; padding: 20px; margin-bottom: 0;">' +
          '<h3 style="font-size:14px; font-weight:700; color:var(--navy); margin: 0 0 16px 0;">Breakdown by Request Type</h3>' +
          '<div style="display:flex; justify-content:space-between; align-items:flex-end; height:160px; padding: 0 10px; border-bottom: 1px solid var(--line);">' +
          '  <!-- Column 1: Consent Withdrawal -->' +
          '  <div style="display:flex; flex-direction:column; align-items:center; flex:1; gap:6px;">' +
          '    <div style="width:24px; height:120px; display:flex; flex-direction:column-reverse; border-radius:3px; overflow:hidden; background:#f1f5f9;">' +
          '      <div style="height:3.5%; background:#16a34a;" title="On Track: 1"></div>' +
          '      <div style="height:35.7%; background:#dc2626;" title="Breached: 10"></div>' +
          '      <div style="height:60.8%; background:#1f8fd4;" title="Resolved: 17"></div>' +
          '    </div>' +
          '    <span style="font-size:9.5px; color:var(--ink-3); text-align:center; white-space:nowrap;">Consent Withdrawal</span>' +
          '  </div>' +
          '  <!-- Column 2: Data Access -->' +
          '  <div style="display:flex; flex-direction:column; align-items:center; flex:1; gap:6px;">' +
          '    <div style="width:24px; height:120px; display:flex; flex-direction:column-reverse; border-radius:3px; overflow:hidden; background:#f1f5f9;">' +
          '      <div style="height:84.6%; background:#dc2626;" title="Breached: 22"></div>' +
          '      <div style="height:15.4%; background:#1f8fd4;" title="Resolved: 4"></div>' +
          '    </div>' +
          '    <span style="font-size:9.5px; color:var(--ink-3); text-align:center; white-space:nowrap;">Data Access</span>' +
          '  </div>' +
          '  <!-- Column 3: Data Correction -->' +
          '  <div style="display:flex; flex-direction:column; align-items:center; flex:1; gap:6px;">' +
          '    <div style="width:24px; height:120px; display:flex; flex-direction:column-reverse; border-radius:3px; overflow:hidden; background:#f1f5f9;">' +
          '      <div style="height:25%; background:#dc2626;" title="Breached: 3"></div>' +
          '      <div style="height:75%; background:#1f8fd4;" title="Resolved: 9"></div>' +
          '    </div>' +
          '    <span style="font-size:9.5px; color:var(--ink-3); text-align:center; white-space:nowrap;">Data Correction</span>' +
          '  </div>' +
          '  <!-- Column 4: Grievance -->' +
          '  <div style="display:flex; flex-direction:column; align-items:center; flex:1; gap:6px;">' +
          '    <div style="width:24px; height:120px; display:flex; flex-direction:column-reverse; border-radius:3px; overflow:hidden; background:#f1f5f9;">' +
          '      <div style="height:100%; background:#dc2626;" title="Breached: 7"></div>' +
          '    </div>' +
          '    <span style="font-size:9.5px; color:var(--ink-3); text-align:center; white-space:nowrap;">Grievance</span>' +
          '  </div>' +
          '  <!-- Column 5: Data Erasure -->' +
          '  <div style="display:flex; flex-direction:column; align-items:center; flex:1; gap:6px;">' +
          '    <div style="width:24px; height:120px; display:flex; flex-direction:column-reverse; border-radius:3px; overflow:hidden; background:#f1f5f9;">' +
          '      <div style="height:75%; background:#dc2626;" title="Breached: 12"></div>' +
          '      <div style="height:25%; background:#1f8fd4;" title="Resolved: 4"></div>' +
          '    </div>' +
          '    <span style="font-size:9.5px; color:var(--ink-3); text-align:center; white-space:nowrap;">Data Erasure</span>' +
          '  </div>' +
          '</div>' +
          '<!-- Legend -->' +
          '<div style="display:flex; justify-content:center; gap:16px; font-size:11px; margin-top:12px;">' +
          '  <div style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:2px; background:#16a34a; display:inline-block;"></span> On Track</div>' +
          '  <div style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:2px; background:#d97706; display:inline-block;"></span> At Risk</div>' +
          '  <div style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:2px; background:#dc2626; display:inline-block;"></span> Breached</div>' +
          '  <div style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:2px; background:#1f8fd4; display:inline-block;"></span> Resolved</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        var detailsTable = '<div class="card" style="border-radius:10px; overflow:hidden; box-shadow:var(--shadow); margin-bottom:20px;">' +
          '<div style="padding:16px 20px; border-bottom:1px solid var(--line); font-weight:700; color:var(--navy); font-size:14px;">Request Type Details</div>' +
          '<table style="width:100%; border-collapse:collapse; text-align:left;">' +
          '  <thead>' +
          '    <tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Request Type</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">On Track</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">At Risk</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Breached</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Resolved</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Total</th>' +
          '    </tr>' +
          '  </thead>' +
          '  <tbody>' +
          '    <!-- Row 1 -->' +
          '    <tr style="border-bottom:1px solid var(--line-2);">' +
          '      <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">Consent Withdrawal</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">1</span></td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">10</span></td>' +
          '      <td style="padding:12px 20px;"><span style="background:#eaf5fc; border:1px solid #b3e0f5; color:#1f8fd4; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">17</span></td>' +
          '      <td style="padding:12px 20px; color:var(--ink-2); font-weight:600; font-size:13px;">28</td>' +
          '    </tr>' +
          '    <!-- Row 2 -->' +
          '    <tr style="border-bottom:1px solid var(--line-2);">' +
          '      <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">Data Access</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">22</span></td>' +
          '      <td style="padding:12px 20px;"><span style="background:#eaf5fc; border:1px solid #b3e0f5; color:#1f8fd4; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">4</span></td>' +
          '      <td style="padding:12px 20px; color:var(--ink-2); font-weight:600; font-size:13px;">26</td>' +
          '    </tr>' +
          '    <!-- Row 3 -->' +
          '    <tr style="border-bottom:1px solid var(--line-2);">' +
          '      <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">Data Correction</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">3</span></td>' +
          '      <td style="padding:12px 20px;"><span style="background:#eaf5fc; border:1px solid #b3e0f5; color:#1f8fd4; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">9</span></td>' +
          '      <td style="padding:12px 20px; color:var(--ink-2); font-weight:600; font-size:13px;">12</td>' +
          '    </tr>' +
          '    <!-- Row 4 -->' +
          '    <tr style="border-bottom:1px solid var(--line-2);">' +
          '      <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">Grievance</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">7</span></td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px; color:var(--ink-2); font-weight:600; font-size:13px;">7</td>' +
          '    </tr>' +
          '    <!-- Row 5 -->' +
          '    <tr style="border-bottom:1px solid var(--line-2);">' +
          '      <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">Data Erasure</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px; color:#94a3b8; font-size:13px;">0</td>' +
          '      <td style="padding:12px 20px;"><span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">12</span></td>' +
          '      <td style="padding:12px 20px;"><span style="background:#eaf5fc; border:1px solid #b3e0f5; color:#1f8fd4; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">4</span></td>' +
          '      <td style="padding:12px 20px; color:var(--ink-2); font-weight:600; font-size:13px;">16</td>' +
          '    </tr>' +
          '  </tbody>' +
          '</table>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2); border-top:1px solid #e9eaef;">' +
          '  <span>Rows per page:</span>' +
          '  <select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '    <option>10</option><option>25</option><option>50</option>' +
          '  </select>' +
          '  <span>1–5 of 5</span>' +
          '  <div style="display:flex; gap:4px;">' +
          '    <button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '    <button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '  </div>' +
          '</div>' +
          '</div>';

        pageHtml += kpis + middleSection + detailsTable;
      } else {
        // Definitions tab (matching the screenshot exactly)
        var toolbar = '<div class="toolbar" style="margin-bottom:16px;">' +
          '  <div class="search" style="flex:1; max-width:320px;">' +
          '    ' + ic('search') +
          '    <input placeholder="Search SLA definitions..." style="width:100%"/>' +
          '  </div>' +
          '  <div class="spacer"></div>' +
          '  <button class="btn btn-blue" onclick="toast(\'Add\',\'Add SLA Definition\',\'info\')" style="display:flex; align-items:center; gap:6px; font-weight:600; padding:6px 12px; border-radius:8px;">' +
          '    ' + ic('plus') + ' Add' +
          '  </button>' +
          '</div>';

        var rowsData = [
          ['DPDPAX by Jodetx Stock Exchange', 'Data Access', 'High', '5', '2', '80%', 'Manish Chhabra', 'Manish DPO', 'Active'],
          ['Bharat FinServ Ltd.', 'Data Access', 'Normal', '48', '720', '80%', '—', 'Rajesh Kumar Sharma', 'Active'],
          ['Bharat FinServ Ltd.', 'Data Erasure', 'High', '24', '720', '80%', '—', 'Rajesh Kumar Sharma', 'Active'],
          ['Bharat FinServ Ltd.', 'Consent Withdrawal', 'Critical', '4', '48', '80%', '—', '—', 'Active'],
          ['Bharat FinServ Ltd.', 'Grievance', 'Regulatory', '24', '360', '80%', '—', 'Rajesh Kumar Sharma', 'Active'],
          ['MediCare Health Pvt. Ltd.', 'Data Correction', 'Normal', '48', '168', '80%', '—', '—', 'Active'],
          ['Bharat FinServ Ltd.', 'Breach Inquiry', 'Regulatory', '2', '72', '80%', '—', 'Rajesh Kumar Sharma', 'Active']
        ];

        var tableRows = rowsData.map(function (row) {
          var priorityBadge = '';
          if (row[2] === 'High') {
            priorityBadge = '<span style="display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:#eaf5fc; color:#1f8fd4; border:1px solid #b3e0f5;"><span style="width:6px; height:6px; border-radius:50%; background:#1f8fd4; display:inline-block;"></span>High</span>';
          } else if (row[2] === 'Normal') {
            priorityBadge = '<span style="display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:#f1f5f9; color:#475569; border:1px solid #cbd5e1;"><span style="width:6px; height:6px; border-radius:50%; background:#475569; display:inline-block;"></span>Normal</span>';
          } else if (row[2] === 'Critical') {
            priorityBadge = '<span style="display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:#fffbeb; color:#d97706; border:1px solid #fde68a;"><span style="width:6px; height:6px; border-radius:50%; background:#d97706; display:inline-block;"></span>Critical</span>';
          } else {
            priorityBadge = '<span style="display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:#fff1f2; color:#e11d48; border:1px solid #fecdd3;"><span style="width:6px; height:6px; border-radius:50%; background:#e11d48; display:inline-block;"></span>Regulatory</span>';
          }

          var statusBadge = '<span style="display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:#f0fdf4; color:#16a34a; border:1px solid #bbf7d0;"><span style="width:6px; height:6px; border-radius:50%; background:#16a34a; display:inline-block;"></span>Active</span>';

          var officerTag = row[6] === '—' ? '<span class="muted">—</span>' : '<span style="background:#f1f5f9; border:1px solid #cbd5e1; color:#475569; font-size:11.5px; padding:2px 8px; border-radius:4px; font-weight:500; display:inline-block;">' + row[6] + '</span>';
          var dpoTag = row[7] === '—' ? '<span class="muted">—</span>' : '<span style="background:#f1f5f9; border:1px solid #cbd5e1; color:#475569; font-size:11.5px; padding:2px 8px; border-radius:4px; font-weight:500; display:inline-block;">' + row[7] + '</span>';

          var actionsMarkup = '<div class="acts" style="display:flex; gap:8px;">' +
            '  <span class="e" style="color:#1f8fd4; cursor:pointer;" onclick="openEditSlaModal()">' + ic('edit') + '</span>' +
            '  <span class="no" style="color:#dc2626; cursor:pointer;" onclick="toast(\'Delete\',\'Delete SLA Definition\',\'warning\')">' + ic('trash') + '</span>' +
            '</div>';

          return '<tr style="border-bottom:1px solid var(--line-2);">' +
            '  <td style="padding:12px 20px; color:var(--ink); font-weight:600; font-size:13px;">' + row[0] + '</td>' +
            '  <td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + row[1] + '</td>' +
            '  <td style="padding:12px 20px;">' + priorityBadge + '</td>' +
            '  <td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + row[3] + '</td>' +
            '  <td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + row[4] + '</td>' +
            '  <td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + row[5] + '</td>' +
            '  <td style="padding:12px 20px;">' + officerTag + '</td>' +
            '  <td style="padding:12px 20px;">' + dpoTag + '</td>' +
            '  <td style="padding:12px 20px;">' + statusBadge + '</td>' +
            '  <td style="padding:12px 20px;">' + actionsMarkup + '</td>' +
            '</tr>';
        }).join('');

        var pagination = '<div style="display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:12px 18px;color:#6b7280;font-size:12px;border-top:1px solid #e9eaef;">' +
          'Rows per page: <span class="select" style="padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;">10 ' + ic('chevd', 'width="12" height="12"') + '</span>' +
          ' 1–7 of 7 ' +
          '<span style="display:flex;gap:8px;align-items:center;">' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16" style="transform:rotate(180deg)"') + '</span>' +
          '<span style="cursor:pointer; opacity: 0.5;">' + ic('chevr', 'width="16" height="16"') + '</span>' +
          '</span>' +
          '</div>';

        pageHtml += toolbar + '<div class="card" style="border-radius:10px; overflow:hidden; box-shadow:var(--shadow); margin-bottom:20px;">' +
          '<table style="width:100%; border-collapse:collapse; text-align:left;">' +
          '  <thead>' +
          '    <tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Fiduciary</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Request Type</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Priority</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Response (hrs)</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Resolution (hrs)</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Warning %</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Grievance Officers</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">DPOs</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Status</th>' +
          '      <th style="padding:12px 20px; font-size:11.5px; font-weight:700; color:var(--navy); text-transform:uppercase;">Actions</th>' +
          '    </tr>' +
          '  </thead>' +
          '  <tbody>' + tableRows + '</tbody>' +
          '</table>' +
          pagination +
          '</div>';
      }

      pageHtml += '</div>';
      return pageHtml;
    };

    AFTER.sla = function () {
      var s = SLA_STATE;
      document.querySelectorAll('.sla-tab-btn').forEach(function (btn) {
        btn.onclick = function () {
          s.activeTab = this.dataset.tab;
          var view = document.getElementById('view');
          if (view) {
            view.innerHTML = RENDER.sla();
            AFTER.sla();
          }
        };
      });
    };

    RENDER.admin_users = function () {
      return genPage({
        title: 'Users',
        icon: 'people',
        color: '#1f8fd4',
        sub: 'Manage administrators, security officers, and viewer accounts with role-based access control (RBAC).',
        add: 'Add User',
        filters: ['All Roles', 'Active Status'],
        kpis: [
          ['8', 'Active Admins', '', 'people', '#1f8fd4', '#eaf5fc'],
          ['2', 'Security Officers', '', 'shield', '#16a34a', '#e7f7ee'],
          ['14', 'Total Users', '', 'people', '#1f8fd4', '#eaf5fc']
        ],
        cols: ['Name', 'Email', 'Role', 'Status'],
        rows: [
          ['navneet Joshi', 'navneet@xecurify.com', tg('Super Admin', 'purple'), sb('Active', 'sb-green')],
          ['Radhesham Joshi', 'radhesham.joshi@xecurify.com', tg('Security Officer', 'blue'), sb('Active', 'sb-green')],
          ['Himanshi Saini', 'himanshi.saini@xecurify.com', tg('Viewer', 'gray'), sb('Active', 'sb-green')],
          ['Security Scan Agent', 'scan-agent@dpdpax.com', tg('API Service Account', 'amber'), sb('Active', 'sb-green')]
        ]
      });
    };

    RENDER.admin_apikeys = function () {
      return genPage({
        title: 'API Keys',
        icon: 'key',
        color: '#7c3aed',
        sub: 'Manage API tokens and credentials for secure integrations with external services and pipelines.',
        add: 'Generate API Key',
        filters: ['All Keys'],
        kpis: [
          ['3', 'Active Keys', '', 'key', '#7c3aed', '#f3effe'],
          ['1', 'Revoked', '', 'x', '#dc2626', '#fdeaea']
        ],
        cols: ['Key Name', 'Created By', 'Permissions', 'Last Used', 'Status'],
        rows: [
          ['RDS Scanner Agent Token', 'navneet@xecurify.com', tg('Read & Write', 'blue'), '10 mins ago', sb('Active', 'sb-green')],
          ['SIEM Logging Webhook', 'radhesham.joshi@xecurify.com', tg('Write Only', 'purple'), '2 hours ago', sb('Active', 'sb-green')],
          ['External DSR Sync service', 'navneet@xecurify.com', tg('Read Only', 'gray'), '1 day ago', sb('Active', 'sb-green')]
        ]
      });
    };

    function subtractSeconds(timeStr, secs) {
      try {
        var d = new Date(timeStr);
        if (isNaN(d.getTime())) {
          var parts = timeStr.split(', ');
          var dateParts = parts[0].split('/');
          var timeParts = parts[1].split(' ');
          var hms = timeParts[0].split(':');
          var isPM = timeParts[1] === 'PM';
          var hour = parseInt(hms[0]);
          if (isPM && hour < 12) hour += 12;
          if (!isPM && hour === 12) hour = 0;
          d = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]), hour, parseInt(hms[1]), parseInt(hms[2]));
        }
        d.setSeconds(d.getSeconds() - secs);
        return d.toLocaleDateString() + ', ' + d.toLocaleTimeString();
      } catch (e) {
        return timeStr;
      }
    }

    var AUDIT_STATE = {
      activeTab: 'consent',
      searchQuery: '',
      actionFilter: ''
    };

    RENDER.admin_audit = function () {
      var s = AUDIT_STATE;
      var subList = OFFLINE_STATE.submissions;

      var pageHtml = '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; background: #fdfdfd; height: 100%; display: flex; flex-direction: column;">';

      pageHtml += '<div style="margin-bottom: 20px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Audit Logs</h2>' +
        '<div class="muted" style="font-size: 13.5px; line-height: 1.5; color: var(--ink-2);">' +
        'Browse a comprehensive, tamper-evident log of every action performed within the privacy portal. Filter by action type, request category, or user to investigate specific events or generate compliance reports.' +
        '</div>' +
        '</div>';

      // Tab switcher
      var tabs = [
        { id: 'consent', label: 'CONSENT HISTORY' },
        { id: 'request', label: 'REQUEST HISTORY' },
        { id: 'grievance', label: 'GRIEVANCE HISTORY' },
        { id: 'sla', label: 'SLA HISTORY' },
        { id: 'source', label: 'SOURCE ACTIONS' },
        { id: 'notice', label: 'NOTICE HISTORY' }
      ];

      pageHtml += '<div style="display:flex; border-bottom:1px solid #e2e8f0; margin-bottom:20px; gap:24px; overflow-x:auto;">';
      tabs.forEach(function (t) {
        var isActive = s.activeTab === t.id;
        var borderBottom = isActive ? '2px solid #1f8fd4' : '2px solid transparent';
        var color = isActive ? '#1f8fd4' : '#64748b';
        pageHtml += '<button class="audit-tab-btn" data-tab="' + t.id + '" style="background:none; border:none; padding:10px 0; font-size:12.5px; font-weight:600; color:' + color + '; border-bottom:' + borderBottom + '; cursor:pointer; white-space:nowrap; margin-bottom:-1px; text-transform:uppercase; letter-spacing:0.02em; transition:color 0.15s;">' + t.label + '</button>';
      });
      pageHtml += '</div>';

      // Filters
      var selectStyle = 'border:1px solid var(--line); border-radius:6px; padding:8px 12px; font-size:13px; color:#475569; background:#fff; outline:none; cursor:pointer; min-width:140px; appearance:none; -webkit-appearance:none; background-image:url(\'data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%237a8190%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.4c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\'); background-repeat:no-repeat; background-position:right 12px top 50%; background-size:9px auto; padding-right:28px;';
      pageHtml += '<div style="display:flex; gap:12px; align-items:center; margin-bottom:16px;">';
      if (s.activeTab === 'request') {
        pageHtml += '<div>' +
          '<select id="audit-action-select" style="' + selectStyle + '">' +
          '<option value="">Action</option>' +
          '<option value="pending_dp">Pending from DP</option>' +
          '<option value="request_received">Request Received</option>' +
          '</select>' +
          '</div>' +
          '<div>' +
          '<select style="' + selectStyle + '">' +
          '<option value="">Request Type</option>' +
          '<option>Exercise Rights</option>' +
          '<option>Data Deletion</option>' +
          '<option>Consent Removal</option>' +
          '</select>' +
          '</div>';
      } else if (s.activeTab === 'grievance') {
        pageHtml += '<div>' +
          '<select id="audit-action-select" style="' + selectStyle + '">' +
          '<option value="">Action</option>' +
          '<option value="status_changed">Status Changed</option>' +
          '<option value="raised">Raised</option>' +
          '</select>' +
          '</div>';
      } else if (s.activeTab === 'sla') {
        pageHtml += '<div>' +
          '<input type="text" placeholder="Search by Request ID" style="border:1.5px solid var(--line); border-radius:6px; padding:7px 12px; font-size:13px; color:#475569; outline:none; min-width:190px;" />' +
          '</div>' +
          '<div>' +
          '<select style="' + selectStyle + '">' +
          '<option value="">Action</option>' +
          '<option value="tracker_created">Tracker Created</option>' +
          '<option value="warning_sent">Warning Sent</option>' +
          '<option value="breach_sent">Breach Sent</option>' +
          '</select>' +
          '</div>' +
          '<div>' +
          '<select style="' + selectStyle + '">' +
          '<option value="">Request Type</option>' +
          '<option>Data Deletion</option>' +
          '<option>Consent Removal</option>' +
          '<option>Exercise Rights</option>' +
          '</select>' +
          '</div>';
      } else if (s.activeTab === 'source') {
        // Source actions — no filter dropdowns, just description
      } else {
        pageHtml += '<div>' +
          '<select id="audit-action-select" style="' + selectStyle + '">' +
          '<option value="">Action</option>' +
          '<option value="Offline_consent_submitted" ' + (s.actionFilter === 'Offline_consent_submitted' ? 'selected' : '') + '>Offline_consent_submitted</option>' +
          '<option value="Document_extraction" ' + (s.actionFilter === 'Document_extraction' ? 'selected' : '') + '>Document_extraction</option>' +
          '<option value="Granted" ' + (s.actionFilter === 'Granted' ? 'selected' : '') + '>Granted</option>' +
          '<option value="Revoked" ' + (s.actionFilter === 'Revoked' ? 'selected' : '') + '>Revoked</option>' +
          '</select>' +
          '</div>' +
          '<div>' +
          '<input type="text" id="audit-username-search" value="' + s.searchQuery + '" placeholder="Search Username" style="border:1.5px solid var(--line); border-radius:6px; padding:7px 12px; font-size:13px; color:#475569; outline:none; min-width:200px;" />' +
          '</div>';
      }
      pageHtml += '</div>';

      // Source actions description text (replaces filter bar)
      if (s.activeTab === 'source') {
        pageHtml += '<p style="color:var(--ink-3); font-size:13px; margin:0 0 16px 0;">Review every delete and update action submitted to the DLP service across all users and connected data sources.</p>';
      }

      // Table Container
      pageHtml += '<div class="card" style="border-radius:10px; overflow:hidden; box-shadow:var(--shadow); margin-bottom:20px;">' +
        '<table style="width:100%; border-collapse:collapse; text-align:left;">';

      if (s.activeTab === 'consent') {
        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">GUID</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">System Name</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Action</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Consent Fields</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var greenTags = ['Form Type', 'Company Name', 'Payment Scheme', 'Declaration.date', 'Office Use.bp No', 'Office Use.co No', 'Voter ID / Passport', 'Payment Details.date', 'I am Owner & Occupier', 'Office Use.agency Code', 'Office Use.agency Name', 'Payment Details.amount', 'Personal Details.title', 'Office Use.received Date', 'Installation Address.wing', 'Office Use.application No', 'Payment Details.bank Name', 'Declaration.applicant Name', 'Installation Address.floor', 'Personal Details.full Name', 'Office Use.signature Of Dma', 'Office Use.special Comments', 'Installation Address.pincode', 'Installation Address.plot No', 'Payment Details.payment Mode', 'Installation Address.email id', 'Payment Details.cheque Txn ID', 'Installation Address.cheque Txn ID', 'Installation Address.mobile No', 'Declaration.applicant Signature', 'Installation Address.society Name', 'Address.area Locality', 'Payment Details.rtgs Neft Details', 'Installation Address.area Locality', 'Installation Address.building Name', 'Installation Address.flat House No', 'Declaration.paperless Billing Opted', 'Installation Address.ownership Status', 'Amount Breakdown.security Deposit Note', 'Lpg Connection Details.has Lpg Connection', 'Address And Identity Proof.proof Of Address', 'Address And Identity Proof.proof Of Identity', 'Amount Breakdown.non Refundable Application Charges', 'Government ID Like (#) With Above Installation Address', 'Amount Breakdown.interest Free Refundable Security Deposit Gas Connection', 'Amount Breakdown.interest Free Refundable Security Deposit Gas Consumption'];

        var bseTags1 = ['Email', 'Address', 'Last Name', 'First Name', 'Payment Mode', 'Phone Number', 'Payment Method', 'Proof Of Address', 'Type Of Identity Type', 'Proof Of Identity Value'];
        var bseTags2 = ['Email', 'Last Name', 'First Name'];
        var bseTags3 = ['Online Upi', 'Aadhar Card', 'Application Type', 'Office Use.bp No', 'Office Use.co No', 'Proof Of Address', 'Proof Of Identity', 'Applicant Details.ward', 'Applicant Details.wing', 'Office Use.agency Code', 'Office Use.agency Name', 'Payment Details.amount', 'Applicant Details.email', 'Applicant Details.floor', 'Applicant Details.title', 'Applicant Signature.date', 'Applicant Signature.name'];

        // Generate combined audit rows (Offline Consent + Document Extraction)
        var auditRows = [];
        subList.forEach(function (sub) {
          auditRows.push({
            guid: sub.guid,
            systemName: '—',
            action: 'Offline_consent_submitted',
            actionStyle: 'mono',
            time: sub.time,
            customTags: null,
            fields: sub.fields
          });
          auditRows.push({
            guid: 'navneet@xecurify.com',
            systemName: '—',
            action: 'Document_extraction',
            actionStyle: 'mono',
            time: subtractSeconds(sub.time, 16),
            customTags: null,
            fields: 0
          });
        });

        // Hardcoded BSE Investor Portal rows
        auditRows.push({
          guid: '7fd51c23-cd9e-4f57-9421-6e8df9f6d305',
          systemName: 'BSE Investor Portal',
          action: 'Granted',
          actionStyle: 'granted',
          time: '12/5/2026, 4:15:21 PM',
          customTags: bseTags1,
          fields: bseTags1.length
        });
        auditRows.push({
          guid: '87f05344-0f03-4e0a-ab3f-13c86fa413b4',
          systemName: 'BSE Investor Portal',
          action: 'Granted',
          actionStyle: 'granted',
          time: '11/5/2026, 6:08:59 PM',
          customTags: bseTags2,
          fields: bseTags2.length
        });
        auditRows.push({
          guid: '87f05344-0f03-4e0a-ab3f-13c86fa413b4',
          systemName: 'BSE Investor Portal',
          action: 'Revoked',
          actionStyle: 'revoked',
          time: '11/5/2026, 6:05:43 PM',
          customTags: null,
          fields: 0
        });
        auditRows.push({
          guid: '87f05344-0f03-4e0a-ab3f-13c86fa413b4',
          systemName: 'BSE Investor Portal',
          action: 'Offline_consent_submitted',
          actionStyle: 'mono',
          time: '11/5/2026, 5:58:10 PM',
          customTags: bseTags3,
          fields: bseTags3.length
        });

        // Filter
        var filtered = auditRows.filter(function (row) {
          return (!s.searchQuery || row.guid.toLowerCase().indexOf(s.searchQuery.toLowerCase()) > -1) &&
            (!s.actionFilter || row.action === s.actionFilter);
        });

        if (filtered.length === 0) {
          pageHtml += '<tr><td colspan="5" style="text-align:center; padding:32px; color:var(--ink-3);">No matching audit logs found.</td></tr>';
        } else {
          filtered.forEach(function (row) {
            // Render tags cloud
            var tagCloud = '—';
            var tagsToUse = row.customTags || greenTags;
            var tagCount = Math.min(row.fields, tagsToUse.length);
            if (tagCount > 0) {
              tagCloud = '<div style="display:flex; flex-wrap:wrap; gap:6px 8px; max-width:550px; justify-content:flex-start; padding: 4px 0;">';
              for (var i = 0; i < tagCount; i++) {
                tagCloud += '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px; white-space:nowrap;">' + tagsToUse[i] + '</span>';
              }
              tagCloud += '</div>';
            }

            // Action badge style
            var actionBadge = '';
            if (row.actionStyle === 'granted') {
              actionBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11.5px; font-weight:600; padding:3px 12px; border-radius:4px;">' + row.action + '</span>';
            } else if (row.actionStyle === 'revoked') {
              actionBadge = '<span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11.5px; font-weight:600; padding:3px 12px; border-radius:4px;">' + row.action + '</span>';
            } else {
              actionBadge = '<span style="background:#f1f5f9; border:1px solid #e2e8f0; color:#475569; font-size:11.5px; font-weight:600; padding:3px 10px; border-radius:4px; font-family:monospace;">' + row.action + '</span>';
            }

            pageHtml += '<tr style="border-bottom:1px solid var(--line-2); vertical-align:top;">' +
              '<td style="padding:16px 20px; color:var(--ink); font-size:13px; font-family:var(--font-mono, monospace);">' + row.guid + '</td>' +
              '<td style="padding:16px 20px; color:var(--ink-2);">' + row.systemName + '</td>' +
              '<td style="padding:16px 20px;">' + actionBadge + '</td>' +
              '<td style="padding:16px 20px; color:var(--ink-2); font-size:13px; white-space:nowrap;">' + row.time + '</td>' +
              '<td style="padding:16px 20px;">' + tagCloud + '</td>' +
              '</tr>';
          });
        }
        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–' + filtered.length + ' of ' + filtered.length + '</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      } else if (s.activeTab === 'request') {
        // REQUEST HISTORY tab
        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Type</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Action</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Username</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Performed By</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Remarks</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">IP Address</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var reqRows = [
          ['22/4/2026, 11:50:08 PM', 'Exercise Rights', 'pending_dp', 'shubhanshu.sharma+enduser@xecurify.com', 'navneet@xecurify.com', '—', '103.197.74.141'],
          ['22/4/2026, 11:49:54 PM', 'Exercise Rights', 'request_received', 'shubhanshu.sharma+enduser@xecurify.com', 'user', '—', '103.197.74.141'],
          ['22/4/2026, 7:13:40 PM', 'Exercise Rights', 'pending_dp', 'shubhanshu.sharma+enduser@xecurify.com', 'navneet@xecurify.com', '—', '103.197.74.141'],
          ['22/4/2026, 7:12:55 PM', 'Exercise Rights', 'request_received', 'shubhanshu.sharma+enduser@xecurify.com', 'user', '—', '103.197.74.141'],
          ['22/4/2026, 5:55:59 PM', 'Exercise Rights', 'pending_dp', 'shubhanshu.sharma+enduser@xecurify.com', 'navneet@xecurify.com', '—', '103.197.74.141'],
          ['22/4/2026, 5:55:49 PM', 'Exercise Rights', 'request_received', 'shubhanshu.sharma+enduser@xecurify.com', 'user', '—', '103.197.74.141'],
          ['22/4/2026, 5:53:50 PM', 'Exercise Rights', 'pending_dp', 'shubhanshu.sharma+enduser@xecurify.com', 'navneet@xecurify.com', '—', '103.197.74.141'],
          ['22/4/2026, 5:53:29 PM', 'Exercise Rights', 'request_received', 'shubhanshu.sharma+enduser@xecurify.com', 'user', '—', '103.197.74.141'],
          ['22/4/2026, 5:51:21 PM', 'Exercise Rights', 'request_received', 'navneet+1@xecurify.com', 'user', '—', '42.105.238.26'],
          ['22/4/2026, 4:49:36 PM', 'Exercise Rights', 'pending_dp', 'navneet+1@xecurify.com', 'navneet@xecurify.com', 'approved', '14.194.174.234']
        ];

        reqRows.forEach(function (r) {
          var actionBadge = '';
          if (r[2] === 'pending_dp') {
            actionBadge = '<span style="background:#fef3cd; border:1px solid #fde68a; color:#92400e; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Pending from DP</span>';
          } else if (r[2] === 'request_received') {
            actionBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Request Received</span>';
          } else {
            actionBadge = '<span style="background:#f1f5f9; border:1px solid #e2e8f0; color:#475569; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px;">' + r[2] + '</span>';
          }

          pageHtml += '<tr style="border-bottom:1px solid var(--line-2);">' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px; white-space:nowrap;">' + r[0] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink); font-size:13px;">' + r[1] + '</td>' +
            '<td style="padding:12px 20px;">' + actionBadge + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[3] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[4] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[5] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[6] + '</td>' +
            '</tr>';
        });

        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–10 of 105</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      } else if (s.activeTab === 'grievance') {
        // GRIEVANCE HISTORY tab
        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Action</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Username</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Performed By</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Details</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">IP Address</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Actions</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var grvRows = [
          ['27/3/2026, 10:17:03 AM', 'status_changed', 'aniket.jaiswal@xecurify.com', 'goff@gmail.com', 'Resolved please check', '115.160.215.254'],
          ['27/3/2026, 10:16:41 AM', 'status_changed', 'manish.chopra@xecurify.com', 'goff@gmail.com', 'dsfdasffsdfsd', '115.160.215.254'],
          ['16/3/2026, 5:39:24 AM', 'raised', 'manish.chopra@xecurify.com', 'user', '—', '49.248.140.166'],
          ['5/3/2026, 3:16:28 PM', 'raised', 'manish.chopra@xecurify.com', 'user', '—', '49.248.140.166'],
          ['5/3/2026, 3:16:28 PM', 'raised', 'aniket.jaiswal@xecurify.com', 'user', '—', '103.115.2011'],
          ['26/2/2026, 12:19:01 PM', 'raised', 'aniket.jaiswal@xecurify.com', 'user', '—', '150.129.156.194'],
          ['25/2/2026, 10:30:02 AM', 'status_changed', 'manish+1@xecurify.com', 'goff@gmail.com', 'daat given', '49.15.117.83'],
          ['24/2/2026, 7:11:41 AM', 'status_changed', 'manish+1@xecurify.com', 'goff@gmail.com', 'testing', '49.248.140.166'],
          ['24/2/2026, 7:10:45 AM', 'raised', 'manish+1@xecurify.com', 'user', '—', '49.248.140.166'],
          ['23/2/2026, 8:35:29 PM', 'status_changed', 'manish+1@xecurify.com', 'goff@gmail.com', 'checking claim', '103.197.74.177'],
          ['23/2/2026, 4:48:35 PM', 'raised', 'sla-user@gmail.com', 'user', '—', '103.197.75.154']
        ];

        var eyeIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f8fd4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

        grvRows.forEach(function (r) {
          var actionBadge = '';
          if (r[1] === 'status_changed') {
            actionBadge = '<span style="background:#fff; border:1px solid #93c5fd; color:#2563eb; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Status Changed</span>';
          } else if (r[1] === 'raised') {
            actionBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Raised</span>';
          }

          pageHtml += '<tr style="border-bottom:1px solid var(--line-2);">' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px; white-space:nowrap;">' + r[0] + '</td>' +
            '<td style="padding:12px 20px;">' + actionBadge + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[2] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[3] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[4] + '</td>' +
            '<td style="padding:12px 20px; color:var(--ink-2); font-size:13px;">' + r[5] + '</td>' +
            '<td style="padding:12px 20px; text-align:center;">' +
            '<button style="background:#eaf5fc; border:none; border-radius:50%; width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;" onclick="toast(\'Grievance\',\'Opening grievance details\',\'info\')">' + eyeIcon + '</button>' +
            '</td>' +
            '</tr>';
        });

        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–10 of 26</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      } else if (s.activeTab === 'sla') {
        // SLA HISTORY tab
        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Request ID</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Action</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Request Type</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Phase</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Details</th>' +
          '<th style="padding:14px 16px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Actions</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var slaRows = [
          ['1b8c80f6...', '11/5/2026, 12:39:33 PM', 'tracker_created', 'Data Deletion', 'Response', 'Response due: 12/5/2026, 12:39:33 AM'],
          ['1eabc98d...', '11/5/2026, 11:05:23 AM', 'tracker_created', 'Consent Removal', 'Response', 'Response due: 11/5/2026, 10:05:23 PM'],
          ['b43daa5b...', '8/5/2026, 11:25:53 AM', 'warning_sent', 'Data Deletion', 'Resolution', 'Phase: Resolution'],
          ['3db8e966...', '6/5/2026, 8:40:53 AM', 'breach_sent', 'Data Deletion', 'Resolution', 'Phase: Resolution'],
          ['e9bc219b...', '5/5/2026, 10:55:29 AM', 'tracker_created', 'Consent Removal', 'Response', 'Response due: 5/5/2026, 9:55:29 PM'],
          ['d64bde73...', '5/5/2026, 10:55:08 AM', 'tracker_created', 'Data Deletion', 'Response', 'Response due: 6/5/2026, 5:55:08 PM'],
          ['67e38a54...', '5/5/2026, 10:54:10 AM', 'tracker_created', 'Data Deletion', 'Response', 'Response due: 9/5/2026, 10:54:10 PM'],
          ['3db8e966...', '30/4/2026, 8:41:34 AM', 'warning_sent', 'Data Deletion', 'Resolution', 'Phase: Resolution'],
          ['48828cc5...', '22/4/2026, 11:49:54 PM', 'tracker_created', 'Data Deletion', 'Response', 'Response due: 25/4/2026, 6:49:54 AM'],
          ['398519f2...', '22/4/2026, 11:01:42 PM', 'breach_sent', 'Data Deletion', 'Response', 'Phase: Response']
        ];

        var slaEyeIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f8fd4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        var copyIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

        slaRows.forEach(function (r) {
          var actionBadge = '';
          if (r[2] === 'tracker_created') {
            actionBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Tracker Created</span>';
          } else if (r[2] === 'warning_sent') {
            actionBadge = '<span style="background:#fef3cd; border:1px solid #fde68a; color:#92400e; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Warning Sent</span>';
          } else if (r[2] === 'breach_sent') {
            actionBadge = '<span style="background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Breach Sent</span>';
          }

          pageHtml += '<tr style="border-bottom:1px solid var(--line-2);">' +
            '<td style="padding:12px 16px; font-size:13px;">' +
            '<span style="color:var(--ink); font-family:monospace;">' + r[0] + '</span>' +
            ' <button style="background:none; border:none; cursor:pointer; padding:2px; vertical-align:middle;" onclick="navigator.clipboard.writeText(\'' + r[0] + '\'); toast(\'Copied\',\'Request ID copied to clipboard\',\'info\')">' + copyIcon + '</button>' +
            '</td>' +
            '<td style="padding:12px 16px; color:var(--ink-2); font-size:13px; white-space:nowrap;">' + r[1] + '</td>' +
            '<td style="padding:12px 16px;">' + actionBadge + '</td>' +
            '<td style="padding:12px 16px; color:var(--ink-2); font-size:13px;">' + r[3] + '</td>' +
            '<td style="padding:12px 16px; color:var(--ink-2); font-size:13px;">' + r[4] + '</td>' +
            '<td style="padding:12px 16px; color:var(--ink-2); font-size:13px;">' + r[5] + '</td>' +
            '<td style="padding:12px 16px; text-align:center;">' +
            '<button style="background:#eaf5fc; border:none; border-radius:50%; width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;" onclick="toast(\'SLA Detail\',\'Opening SLA tracker details\',\'info\')">' + slaEyeIcon + '</button>' +
            '</td>' +
            '</tr>';
        });

        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–10 of 213</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      } else if (s.activeTab === 'source') {
        // SOURCE ACTIONS tab
        var userIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle; margin-right:4px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
        var chevronRight = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
        var checkIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle; margin-right:3px;"><path d="M20 6L9 17l-5-5"/></svg>';
        var warnIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle; margin-right:3px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 12px; width:30px;"></th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Submitted</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Job</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Affected users</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Targets</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Performed by</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Status</th>' +
          '<th style="padding:14px 14px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Results</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var srcRows = [
          ['23/4/2026, 6:50:20 AM', 'Done 23/4/2026, 6:50:29 AM', 'Update in source', '2 targets • 2 rows', 'shubhanshu.sharma+enduser@xecurify.com', '2 targets', 'Manish Chhabra', 'completed', '2 success'],
          ['23/4/2026, 6:50:20 AM', 'Done 23/4/2026, 6:50:20 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual'],
          ['23/4/2026, 6:50:19 AM', 'Done 23/4/2026, 6:51:29 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'completed', '1 manual'],
          ['23/4/2026, 2:13:47 AM', 'Done 23/4/2026, 2:13:57 AM', 'Update in source', '2 targets • 2 rows', 'shubhanshu.sharma+enduser@xecurify.com', '2 targets', 'Manish Chhabra', 'completed', '2 success'],
          ['23/4/2026, 2:13:47 AM', 'Done 23/4/2026, 2:13:47 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual'],
          ['23/4/2026, 2:13:47 AM', 'Done 23/4/2026, 2:13:47 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual'],
          ['23/4/2026, 12:56:13 AM', 'Done 23/4/2026, 12:56:22 AM', 'Update in source', '2 targets • 2 rows', 'shubhanshu.sharma+enduser@xecurify.com', '2 targets', 'Manish Chhabra', 'completed', '2 success'],
          ['23/4/2026, 12:56:13 AM', 'Done 23/4/2026, 12:56:13 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual'],
          ['23/4/2026, 12:56:13 AM', 'Done 23/4/2026, 12:56:13 AM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual'],
          ['21/4/2026, 8:14:11 PM', 'Done 21/4/2026, 8:14:11 PM', 'Update in source', '1 target • 0 rows', 'shubhanshu.sharma+enduser@xecurify.com', '1 target', 'Manish Chhabra', 'manual', '1 manual']
        ];

        srcRows.forEach(function (r) {
          var targetBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">' + r[5] + '</span>';
          var statusBadge = '';
          if (r[7] === 'completed') {
            statusBadge = '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Completed update</span>';
          } else {
            statusBadge = '<span style="background:#fef3cd; border:1px solid #fde68a; color:#92400e; font-size:11px; font-weight:600; padding:3px 10px; border-radius:4px; white-space:nowrap;">Manual action required</span>';
          }
          var resultBadge = '';
          if (r[8].indexOf('success') > -1) {
            resultBadge = '<span style="color:#16a34a; font-size:12px; font-weight:600; white-space:nowrap;">' + checkIcon + r[8] + '</span>';
          } else {
            resultBadge = '<span style="color:#d97706; font-size:12px; font-weight:600; white-space:nowrap;">' + warnIcon + r[8] + '</span>';
          }

          pageHtml += '<tr style="border-bottom:1px solid var(--line-2);">' +
            '<td style="padding:10px 12px; text-align:center; cursor:pointer;">' + chevronRight + '</td>' +
            '<td style="padding:10px 14px; vertical-align:top;">' +
            '<div style="color:var(--ink); font-size:13px; font-weight:500;">' + r[0] + '</div>' +
            '<div style="color:#94a3b8; font-size:11.5px; margin-top:2px;">' + r[1] + '</div>' +
            '</td>' +
            '<td style="padding:10px 14px; vertical-align:top;">' +
            '<div style="color:var(--ink); font-size:13px; font-weight:600;">' + r[2] + '</div>' +
            '<div style="color:#94a3b8; font-size:11.5px; margin-top:2px;">' + r[3] + '</div>' +
            '</td>' +
            '<td style="padding:10px 14px; color:var(--ink-2); font-size:13px;">' + userIcon + ' ' + r[4] + '</td>' +
            '<td style="padding:10px 14px;">' + targetBadge + '</td>' +
            '<td style="padding:10px 14px; color:var(--ink-2); font-size:13px;">' + r[6] + '</td>' +
            '<td style="padding:10px 14px;">' + statusBadge + '</td>' +
            '<td style="padding:10px 14px;">' + resultBadge + '</td>' +
            '</tr>';
        });
        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–' + srcRows.length + ' of ' + srcRows.length + '</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      } else {
        pageHtml += '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">User</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Action</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Resource</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        var mockRows = {
          notice: [
            ['27/06/2026, 4:12:00 PM', 'manish@xecurify.com', 'Published Notice', 'Swag Store Registration']
          ]
        };

        var currentMock = mockRows[s.activeTab] || [];
        if (currentMock.length === 0) {
          pageHtml += '<tr><td colspan="4" style="text-align:center; padding:32px; color:var(--ink-3);">No audit logs recorded under this category.</td></tr>';
        } else {
          currentMock.forEach(function (row) {
            pageHtml += '<tr style="border-bottom:1px solid var(--line-2);">' +
              '<td style="padding:14px 20px; color:var(--ink-2);">' + row[0] + '</td>' +
              '<td style="padding:14px 20px; color:var(--ink); font-weight:600;">' + row[1] + '</td>' +
              '<td style="padding:14px 20px; color:var(--ink-2);">' + row[2] + '</td>' +
              '<td style="padding:14px 20px; color:var(--ink-2);">' + row[3] + '</td>' +
              '</tr>';
          });
        }
        pageHtml += '</tbody></table></div>' +
          '<div style="display:flex; justify-content:flex-end; align-items:center; gap:16px; padding:12px 20px; font-size:13px; color:var(--ink-2);">' +
          '<span>Rows per page:</span>' +
          '<select style="border:1px solid var(--line); border-radius:4px; padding:4px 8px; font-size:13px; color:var(--ink); background:#fff; outline:none; cursor:pointer;">' +
          '<option>10</option><option>25</option><option>50</option>' +
          '</select>' +
          '<span>1–' + currentMock.length + ' of ' + currentMock.length + '</span>' +
          '<div style="display:flex; gap:4px;">' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing previous page\',\'info\')">&lt;</button>' +
          '<button style="background:none; border:1px solid var(--line); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--ink-2); font-size:13px;" onclick="toast(\'Page\',\'Showing next page\',\'info\')">&gt;</button>' +
          '</div>' +
          '</div>';
        pageHtml += '</div>';
        return pageHtml;
      }
    };

    AFTER.admin_audit = function () {
      var s = AUDIT_STATE;

      document.querySelectorAll('.audit-tab-btn').forEach(function (btn) {
        btn.onclick = function () {
          s.activeTab = this.dataset.tab;
          var view = document.getElementById('view');
          if (view) {
            view.innerHTML = RENDER.admin_audit();
            AFTER.admin_audit();
          }
        };
      });

      var actionSelect = document.getElementById('audit-action-select');
      if (actionSelect) {
        actionSelect.onchange = function () {
          s.actionFilter = this.value;
          var view = document.getElementById('view');
          if (view) {
            view.innerHTML = RENDER.admin_audit();
            AFTER.admin_audit();
          }
        };
      }

      var usernameSearch = document.getElementById('audit-username-search');
      if (usernameSearch) {
        usernameSearch.oninput = function () {
          s.searchQuery = this.value;
          var view = document.getElementById('view');
          if (view) {
            view.innerHTML = RENDER.admin_audit();
            AFTER.admin_audit();
            var input = document.getElementById('audit-username-search');
            if (input) {
              input.focus();
              input.setSelectionRange(input.value.length, input.value.length);
            }
          }
        };
      }
    };

    RENDER.admin_notifications = function () {
      return genPage({
        title: 'Notifications Settings',
        icon: 'bell',
        color: '#0ea5b7',
        sub: 'Configure default system notification channels, alert thresholds, and email templates.',
        cols: ['Recipient Channel', 'Alert Type', 'Frequency', 'Status'],
        rows: [
          ['System Admins (Email)', 'Critical System Failures', 'Instant', sb('Enabled', 'sb-green')],
          ['Security Officers (Slack)', 'SLA Violations & Policy Breaches', 'Instant', sb('Enabled', 'sb-green')],
          ['Support Webhook (Jira)', 'Data Subject Requests (DSR)', 'Daily Summary', sb('Enabled', 'sb-green')]
        ]
      });
    };

    var INTEGRITY_STATE = {
      activeTab: 'config', // Default to configuration tab to match user's request, but supports switching
      loggingEnabled: true,
      rpcUrl: 'http://3.235.234.144:8545',
      chainId: '12345',
      contractAddress: '0xE34E876583C84Ea866518BAF791d46ED4ce37671',
      gasLimit: '5000000'
    };

    RENDER.admin_integrity = function () {
      var s = INTEGRITY_STATE;
      var pageHtml = '<div style="padding:32px 40px;">' +
        '<h1 style="font-size:24px; font-weight:700; color:var(--ink); margin:0 0 6px 0;">Data Integrity</h1>' +
        '<p style="color:var(--ink-3); font-size:13.5px; margin:0 0 24px 0;">Manage immutable blockchain audit records and configure your blockchain connection.</p>';

      // Tabs
      var tab1Col = s.activeTab === 'log' ? '#1f8fd4' : 'var(--ink-3)';
      var tab1Border = s.activeTab === 'log' ? '2px solid #1f8fd4' : '2px solid transparent';
      var tab2Col = s.activeTab === 'config' ? '#1f8fd4' : 'var(--ink-3)';
      var tab2Border = s.activeTab === 'config' ? '2px solid #1f8fd4' : '2px solid transparent';

      pageHtml += '<div style="display:flex; gap:24px; border-bottom:1px solid var(--line); margin-bottom:24px;">' +
        '<button class="integrity-tab-btn" data-tab="log" style="background:none; border:none; padding:10px 0; font-size:12.5px; font-weight:600; color:' + tab1Col + '; border-bottom:' + tab1Border + '; cursor:pointer; text-transform:uppercase; letter-spacing:0.02em; margin-bottom:-1px; outline:none;">Immutable Audit Log</button>' +
        '<button class="integrity-tab-btn" data-tab="config" style="background:none; border:none; padding:10px 0; font-size:12.5px; font-weight:600; color:' + tab2Col + '; border-bottom:' + tab2Border + '; cursor:pointer; text-transform:uppercase; letter-spacing:0.02em; margin-bottom:-1px; outline:none;">Blockchain Configuration</button>' +
        '</div>';

      if (s.activeTab === 'config') {
        // Render blockchain configuration form
        pageHtml += '<div class="card" style="border-radius:10px; box-shadow:var(--shadow); background:#fff; padding:24px 32px; max-width:550px;">' +
          '<h3 style="font-size:18px; font-weight:700; color:var(--navy); margin:0 0 6px 0;">Blockchain Connection</h3>' +
          '<p style="font-size:13px; color:var(--ink-3); margin:0 0 24px 0;">Configure the blockchain network used to store immutable consent audit records.</p>' +
          
          '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">' +
          '<div>' +
          '<div style="font-weight:600; font-size:14px; color:var(--ink);">Enable Blockchain Logging</div>' +
          '<div style="font-size:12.5px; color:var(--ink-3); margin-top:2px;">When enabled, consent events are written to the immutable blockchain ledger.</div>' +
          '</div>' +
          '<span class="toggle ' + (s.loggingEnabled ? 'on' : '') + '" style="cursor:pointer;" id="toggle-blockchain"></span>' +
          '</div>' +

          '<div class="field outlined" style="margin-bottom:20px;">' +
          '<label>RPC URL</label>' +
          '<input type="text" id="bc-rpc-url" value="' + s.rpcUrl + '" placeholder="http://127.0.0.1:8545"/>' +
          '</div>' +

          '<div class="field outlined" style="margin-bottom:20px;">' +
          '<label>Chain ID</label>' +
          '<input type="number" id="bc-chain-id" value="' + s.chainId + '" placeholder="1337" style="width:100%; box-sizing:border-box;"/>' +
          '</div>' +

          '<div class="field outlined" style="margin-bottom:20px;">' +
          '<label>Contract Address</label>' +
          '<input type="text" id="bc-contract-address" value="' + s.contractAddress + '" placeholder="0x..."/>' +
          '</div>' +

          '<div class="field outlined" style="margin-bottom:6px;">' +
          '<label>Private Key</label>' +
          '<input type="password" id="bc-private-key" value="••••••••••••••••••••••••••••••••" placeholder="Enter private key"/>' +
          '</div>' +
          '<div style="font-size:12px; color:#1f8fd4; cursor:pointer; margin:0 0 20px 4px; font-weight:600; transition:color 0.15s;" id="replace-pkey-btn" onmouseover="this.style.color=\'#1170a8\'" onmouseout="this.style.color=\'#1f8fd4\'">Click to replace the existing private key</div>' +

          '<div class="field outlined" style="margin-bottom:24px;">' +
          '<label>Gas Limit</label>' +
          '<input type="number" id="bc-gas-limit" value="' + s.gasLimit + '" placeholder="21000" style="width:100%; box-sizing:border-box;"/>' +
          '</div>' +

          '<button class="btn btn-blue" id="btn-save-blockchain" style="background:#1f8fd4; color:#fff; border:none; border-radius:6px; height:38px; padding:0 20px; font-weight:600; cursor:pointer;">Save Configuration</button>' +
          '</div>';
      } else {
        // Immutable Audit Log
        var consentTags = ['Email', 'First Name', 'Last Name', 'Phone-Number', 'Address', 'Payment-Method', 'Payment-Mode', 'Proof Of Identity Type', 'Proof Of Identity Value', 'Proof Of Address'];
        var tagCloud = '<div style="display:flex; flex-wrap:wrap; gap:5px 6px; max-width:420px;">';
        consentTags.forEach(function (t) {
          tagCloud += '<span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; font-size:10.5px; font-weight:600; padding:2px 8px; border-radius:20px; white-space:nowrap;">' + t + '</span>';
        });
        tagCloud += '</div>';

        var integrityRows = [
          { num: 52, hash: 'ef6f5f5ea2...e20dbc43', time: '12/5/2026, 6:10:17 PM', consentId: '122', givenAt: '2026-05-12T11:10:17.937133369Z[Etc/UTC]' },
          { num: 51, hash: 'ef6f5f5ea2...e20dbc43', time: '12/5/2026, 4:16:44 PM', consentId: '121', givenAt: '2026-05-12T09:16:44.512847261Z[Etc/UTC]' }
        ];

        function eventDataBlock(row) {
          var kvStyle = 'display:flex; border-bottom:1px solid #f1f5f9; padding:6px 0;';
          var keyStyle = 'min-width:130px; font-size:12px; font-weight:600; color:#64748b;';
          var valStyle = 'font-size:12px; color:var(--ink); word-break:break-all;';
          return '<div style="background:#fff; border-radius:6px; padding:8px 12px;">' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">Consent ID</span><span style="' + valStyle + '">' + row.consentId + '</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">App ID</span><span style="' + valStyle + '">app-bse</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">Processor ID</span><span style="' + valStyle + '">a0000001-1111-0000-0000-000000000001</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">Consent Fields</span><span style="' + valStyle + '">' + tagCloud + '</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">Consent Status</span><span style="' + valStyle + '">active</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">Consent Source</span><span style="' + valStyle + '">web</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">IP Address</span><span style="' + valStyle + '">49.228.244.49</span></div>' +
            '<div style="' + kvStyle + '"><span style="' + keyStyle + '">User Agent</span><span style="' + valStyle + '">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36</span></div>' +
            '<div style="display:flex; padding:6px 0;"><span style="' + keyStyle + '">Consent Given At</span><span style="' + valStyle + '">' + row.givenAt + '</span></div>' +
            '</div>';
        }

        pageHtml += '<div class="card" style="border-radius:10px; overflow:hidden; box-shadow:var(--shadow);">' +
          '<table style="width:100%; border-collapse:collapse; text-align:left;">' +
          '<thead>' +
          '<tr style="background:#f8fafc; border-bottom:1px solid var(--line);">' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase; width:50px;">#</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">User ID Hash</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Timestamp</th>' +
          '<th style="padding:14px 20px; font-size:12px; font-weight:700; color:var(--navy); text-transform:uppercase;">Event Data</th>' +
          '</tr>' +
          '</thead>' +
          '<tbody>';

        integrityRows.forEach(function (row) {
          pageHtml += '<tr style="border-bottom:1px solid var(--line-2); vertical-align:top;">' +
            '<td style="padding:16px 20px; color:var(--ink); font-size:13px; font-weight:600;">' + row.num + '</td>' +
            '<td style="padding:16px 20px; color:var(--ink-2); font-size:13px; font-family:monospace;">' + row.hash + '</td>' +
            '<td style="padding:16px 20px; color:var(--ink-2); font-size:13px; white-space:nowrap;">' + row.time + '</td>' +
            '<td style="padding:12px 20px;">' + eventDataBlock(row) + '</td>' +
            '</tr>';
        });

        pageHtml += '</tbody></table></div>';
      }

      pageHtml += '</div>';
      return pageHtml;
    };

    AFTER.admin_integrity = function () {
      var s = INTEGRITY_STATE;

      document.querySelectorAll('.integrity-tab-btn').forEach(function (btn) {
        btn.onclick = function () {
          s.activeTab = btn.dataset.tab;
          var view = document.getElementById('view');
          if (view) {
            view.innerHTML = RENDER.admin_integrity();
            AFTER.admin_integrity();
          }
        };
      });

      var toggleBc = document.getElementById('toggle-blockchain');
      if (toggleBc) {
        toggleBc.onclick = function () {
          s.loggingEnabled = !s.loggingEnabled;
          toggleBc.classList.toggle('on', s.loggingEnabled);
          toast('Configuration', 'Blockchain logging ' + (s.loggingEnabled ? 'enabled' : 'disabled'), 'ok');
        };
      }

      var replacePkey = document.getElementById('replace-pkey-btn');
      if (replacePkey) {
        replacePkey.onclick = function () {
          var input = document.getElementById('bc-private-key');
          if (input) {
            input.value = '';
            input.focus();
            toast('Private Key', 'Please enter a new private key', 'info');
          }
        };
      }

      var saveBtn = document.getElementById('btn-save-blockchain');
      if (saveBtn) {
        saveBtn.onclick = function () {
          var rpc = document.getElementById('bc-rpc-url').value.trim();
          var chain = document.getElementById('bc-chain-id').value.trim();
          var addr = document.getElementById('bc-contract-address').value.trim();
          var gas = document.getElementById('bc-gas-limit').value.trim();

          if (!rpc || !chain || !addr || !gas) {
            toast('Error', 'All blockchain configuration fields are required', 'error');
            return;
          }

          s.rpcUrl = rpc;
          s.chainId = chain;
          s.contractAddress = addr;
          s.gasLimit = gas;

          toast('Configuration Saved', 'Blockchain connection settings updated successfully', 'ok');
        };
      }
    };

    RENDER.admin_branding = function () {
      return genPage({
        title: 'Branding Configuration',
        icon: 'palette',
        color: '#e65100',
        sub: 'Configure custom company logo, color themes, login portals, and custom domains.',
        cols: ['Element', 'Configuration Value', 'Applied On', 'Status'],
        rows: [
          ['Primary Brand Color', tg('#1f8fd4 (DPDPAX Blue)', 'blue'), 'System-wide', sb('Active', 'sb-green')],
          ['Portal Logo', tg('dpdpax_logo.png', 'gray'), 'Sign-in & Header', sb('Active', 'sb-green')],
          ['Custom Console Domain', tg('privacy.xecurify.com', 'purple'), 'Customer Portal', sb('Active', 'sb-green')]
        ]
      });
    };

    RENDER.admin_signin = function () {
      return genPage({
        title: 'Sign in Methods',
        icon: 'login',
        color: '#3b82f6',
        sub: 'Configure Single Sign-On (SSO), Identity Providers, Multi-Factor Authentication, and Password Policies.',
        cols: ['Method', 'Protocol', 'Assertion Issuer', 'Status'],
        rows: [
          ['DPDPAX by Jodetx SSO Portal', 'SAML 2.0', 'https://auth.xecurify.com', sb('Active', 'sb-green')],
          ['Google Workspace SSO', 'OIDC', 'https://accounts.google.com', sb('Active', 'sb-green')],
          ['Microsoft Entra ID', 'SAML 2.0', 'https://sts.windows.net/07ad8cca', sb('Inactive', 'sb-gray')]
        ]
      });
    };

    RENDER.noti_channels = function () {
      var channelsData = [
        {
          id: 'email',
          name: 'Email',
          description: 'Send notices via SMTP email provider',
          icon: 'mail',
          status: 'Enabled',
          provider: 'DPDPAX by Jodetx'
        },
        {
          id: 'sms',
          name: 'SMS',
          description: 'Send text messages via SMS gateway',
          icon: 'message',
          status: 'Enabled',
          provider: 'DPDPAX by Jodetx'
        },
        {
          id: 'whatsapp',
          name: 'WhatsApp',
          description: 'Send via WhatsApp Business API',
          icon: 'whatsapp',
          status: 'Enabled',
          provider: 'DPDPAX by Jodetx'
        }
      ];

      var cardsHtml = channelsData.map(function (c) {
        var statusBadge = '<span style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 12px; margin-right: 8px;">' + c.status + '</span>';
        var providerBadge = '<span style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 4px;">' + c.provider + '</span>';

        return '<div class="card" style="border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; padding: 24px; position: relative; box-shadow: var(--shadow); flex: 1; min-width: 280px; max-width: 340px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; height: 180px;">' +
          '  <div style="position: absolute; top: 18px; right: 18px; color: #64748b; font-size: 18px; cursor: pointer; display: flex; align-items: center;" onclick="toast(\'Configure\', \'Configure ' + c.name + ' Channel\', \'info\')">' +
          '    ' + ic('chevr', 'width="18" height="18"') +
          '  </div>' +
          '  <div>' +
          '    <div style="width: 42px; height: 42px; border-radius: 8px; background: #1f8fd4; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #fff;">' +
          '      ' + ic(c.icon, 'width="20" height="20" style="color:#fff;"') +
          '    </div>' +
          '    <h3 style="font-size: 15px; font-weight: 700; color: var(--navy); margin: 0 0 6px 0;">' + c.name + '</h3>' +
          '    <p style="font-size: 12.5px; color: var(--ink-2); margin: 0 0 16px 0; line-height: 1.4;">' + c.description + '</p>' +
          '  </div>' +
          '  <div style="display: flex; align-items: center;">' +
          '    ' + statusBadge + providerBadge +
          '  </div>' +
          '</div>';
      }).join('');

      return '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; background: #f8fafc; height: 100%; display: flex; flex-direction: column;">' +
        '  <div style="margin-bottom: 24px;">' +
        '    <h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Channels</h2>' +
        '    <div class="muted" style="font-size: 13.5px; line-height: 1.5; color: var(--ink-2);">' +
        '      Configure notification channels for sending notifications' +
        '    </div>' +
        '  </div>' +
        '  <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start;">' +
        '    ' + cardsHtml +
        '  </div>' +
        '</div>';
    };

    RENDER.noti_templates = function () {
      return genPage({
        title: 'Notification Templates',
        icon: 'fileText',
        color: '#0f766e',
        sub: 'Manage localized email and message templates for system alerts, SLA warnings, and consent receipts.',
        cols: ['Template Name', 'Channel', 'Modified On', 'Status'],
        rows: [
          ['DSR Verification Email', tg('Email', 'blue'), '28/06/2026', sb('Active', 'sb-green')],
          ['SLA Warning Alert', tg('Slack', 'purple'), '25/06/2026', sb('Active', 'sb-green')],
          ['Consent Receipt PDF Template', tg('PDF Generator', 'amber'), '22/06/2026', sb('Active', 'sb-green')],
          ['Grievance Ticket Created Alert', tg('Email', 'blue'), '20/06/2026', sb('Active', 'sb-green')]
        ]
      });
    };

    RENDER.anal_risk = function () {
      return genPage({
        title: 'Risk Analytics',
        icon: 'chart',
        color: '#dc2626',
        sub: 'Analyze data privacy risk scores, non-compliant sources, policy breach frequencies, and data subject exposure.',
        cols: ['Category', 'Identified Risks', 'Critical Vulnerabilities', 'Risk Level'],
        rows: [
          ['Unauthorized Data Transfer', '18 events', '2 critical', sb('High Risk', 'sb-red')],
          ['SLA Resolution Delayed', '8 trackers', '0 critical', sb('Medium Risk', 'sb-amber')],
          ['Device Compliance Violations', '3 endpoints', '1 critical', sb('Medium Risk', 'sb-amber')],
          ['Consent Ledger Mismatch', '0 hash gaps', '0 critical', sb('Low Risk', 'sb-green')]
        ]
      });
    };

    RENDER.anal_reports = function () {
      var dlIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle; margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
      var eyeIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle; margin-right:6px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

      var reports = [
        {
          title: 'Consent Compliance',
          desc: 'Consent lifecycle metrics, purpose-wise breakdown, and notice version audit.',
          icon: 'shield',
          color: '#ef4444',
          bg: '#fef2f2',
          btnText: 'Download PDF',
          btnIcon: dlIcon,
          btnStyle: 'border:1.5px solid #dc2626; color:#dc2626;'
        },
        {
          title: 'DPIA',
          desc: 'Data Protection Impact Assessments across processing activities.',
          icon: 'lock',
          color: '#3b82f6',
          bg: '#eff6ff',
          btnText: 'View Report',
          btnIcon: eyeIcon,
          btnStyle: 'border:1.5px solid #2563eb; color:#2563eb;'
        },
        {
          title: 'RoPA',
          desc: 'Record of Processing Activities for regulatory compliance.',
          icon: 'fileText',
          color: '#8b5cf6',
          bg: '#faf5ff',
          btnText: 'View Report',
          btnIcon: eyeIcon,
          btnStyle: 'border:1.5px solid #7c3aed; color:#7c3aed;'
        },
        {
          title: 'Breach',
          desc: 'Breach incident reports, timelines, and notification records.',
          icon: 'alert',
          color: '#ef4444',
          bg: '#fef2f2',
          btnText: 'View Report',
          btnIcon: eyeIcon,
          btnStyle: 'border:1.5px solid #dc2626; color:#dc2626;'
        },
        {
          title: 'Overall Compliance',
          desc: 'Privacy posture assessment across all six compliance domains with maturity scoring and remediation roadmap.',
          icon: 'check',
          color: '#475569',
          bg: '#f8fafc',
          btnText: 'Download PDF',
          btnIcon: dlIcon,
          btnStyle: 'border:1.5px solid #475569; color:#475569;'
        }
      ];

      var gridHtml = '';
      reports.forEach(function (rep) {
        gridHtml += '<div class="report-card" style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:24px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 1px 3px rgba(0,0,0,.05); transition:all 0.2s;" onmouseenter="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'var(--shadow)\';" onmouseleave="this.style.transform=\'\'; this.style.boxShadow=\'0 1px 3px rgba(0,0,0,.05)\';">' +
          '<div>' +
          '<div style="width:40px; height:40px; border-radius:8px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; background:' + rep.bg + '; color:' + rep.color + ';">' +
          ic(rep.icon, 'width="20" height="20"') +
          '</div>' +
          '<h3 style="font-size:15px; font-weight:700; color:var(--navy); margin:0 0 8px 0;">' + rep.title + '</h3>' +
          '<p style="font-size:12.5px; color:var(--ink-3); line-height:1.5; margin:0 0 20px 0;">' + rep.desc + '</p>' +
          '</div>' +
          '<div>' +
          '<button style="background:none; border-radius:6px; padding:7px 16px; font-size:13px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; transition:background 0.15s; ' + rep.btnStyle + '" onmouseenter="this.style.background=\'' + rep.bg + '\'" onmouseleave="this.style.background=\'none\'" onclick="toast(\'' + rep.title + '\',\'Generating report...\',\'info\')">' +
          rep.btnIcon + ' ' + rep.btnText +
          '</button>' +
          '</div>' +
          '</div>';
      });

      return '<div style="padding:32px 40px;">' +
        '<h1 style="font-size:24px; font-weight:700; color:var(--ink); margin:0 0 6px 0;">Reports</h1>' +
        '<p style="color:var(--ink-3); font-size:13.5px; margin:0 0 28px 0;">Generate and preview compliance reports across privacy domains.</p>' +
        '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(290px, 1fr)); gap:24px;">' +
        gridHtml +
        '</div>' +
        '</div>';
    };

    RENDER.onboarding_requests = function () {
      return genPage({
        title: 'Onboarding Requests',
        icon: 'onboarding_requests',
        color: '#e65100',
        sub: 'Pending requests from endpoints to enroll into the Endpoint Defence MDM.',
        cols: ['Device Model', 'MAC Address', 'Requested By', 'Request Date', 'Status'],
        rows: [
          ['MacBook Pro 16"', '00:1A:2B:3C:4D:5E', 'Ananya Sharma', '30/6/2026', sb('Pending', 'sb-amber')],
          ['Samsung Galaxy S24', '11:22:33:44:55:66', 'Vikram Singh', '29/6/2026', sb('Approved', 'sb-green')]
        ]
      });
    };

    RENDER.dspm = function () {
      return genPage({
        title: 'Data Security Posture Management (DSPM)',
        icon: 'shield',
        color: '#16a34a',
        sub: 'Assess and manage the security posture of your personal and sensitive data assets.',
        cols: ['Data Asset', 'Type', 'Sensitive Fields', 'Risk Rating', 'Status'],
        rows: [
          ['user_pii_db', tg('Database', 'blue'), 'Aadhaar, PAN, Email', sb('HIGH RISK', 'sb-red'), sb('Monitored', 'sb-green')],
          ['mo-privacy-s3', tg('S3 Bucket', 'amber'), 'Aadhaar CSV, Excel', sb('MEDIUM RISK', 'sb-amber'), sb('Monitored', 'sb-green')],
          ['SharePoint Online', tg('Cloud Storage', 'purple'), 'User Documents', sb('LOW RISK', 'sb-gray'), sb('Scanning', 'sb-blue')]
        ]
      });
    };

    var ANDROID_STATE = {
      policies: [],
      searchQuery: ''
    };

    RENDER.policy_android = function () {
      return RENDER.policy_android_policies();
    };

    AFTER.policy_android = function () {
      if (AFTER.policy_android_policies) AFTER.policy_android_policies();
    };

    RENDER.policy_android_policies = function () {
      var s = ANDROID_STATE;

      var mainContentHtml = '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; display: flex; flex-direction: column; background: #fdfdfd; height: 100%;">';

      mainContentHtml += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">' +
        '<div>' +
        '<h2 style="font-size:20px; font-weight:700; color:var(--navy); margin-bottom:4px;">Android Policies</h2>' +
        '<div class="muted" style="font-size:13px;">Manage and Monitor Your Organization\'s Android Policies</div>' +
        '</div>' +
        '<button class="btn btn-blue" id="btn-create-android-policy" style="border-radius:8px; padding:8px 18px; font-size:13px; background:#1f8fd4; color:#fff; border:none; font-weight:600;">Create Policy</button>' +
        '</div>' +

        '<div style="display:flex; align-items:center; margin-bottom:16px;">' +
        '<div class="search" style="width:280px;">' + ic('search') +
        '<input type="text" id="android-policy-search" value="' + s.searchQuery + '" placeholder="Search by policy name" style="width:100%;" />' +
        '</div>' +
        '</div>';

      var filtered = s.policies.filter(function (p) {
        return !s.searchQuery || p.name.toLowerCase().indexOf(s.searchQuery.toLowerCase()) > -1;
      });

      mainContentHtml += '<div class="card" style="border-radius:10px; overflow:hidden; box-shadow:var(--shadow);">' +
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Name</th>' +
        '<th>Description</th>' +
        '<th style="text-align:right;">Actions</th>' +
        '</tr>' +
        '</thead>';

      if (filtered.length === 0) {
        mainContentHtml += '</table></div>';

        var styleBlock = '<style>' +
          '@keyframes float-back { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }' +
          '@keyframes float-front { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(5px); } }' +
          '.float-back-cap { animation: float-back 4s ease-in-out infinite; }' +
          '.float-front-cap { animation: float-front 4s ease-in-out infinite; }' +
          '</style>';

        mainContentHtml += styleBlock +
          '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:60px 0; flex:1; background:#fff; border:1px solid var(--line); border-radius:12px; margin-top:10px;">' +
          '<div style="position:relative; width:200px; height:150px; margin-bottom:20px; display:flex; justify-content:center; align-items:center;">' +
          '<div style="position:absolute; width:140px; height:140px; border-radius:50%; background:#f8fafc; z-index:1;"></div>' +

          // Back Capsule
          '<div class="float-back-cap" style="position:absolute; top:35px; right:20px; width:120px; height:38px; background:#0f172a; border-radius:20px; z-index:2; display:flex; align-items:center; padding:0 12px; gap:8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">' +
          '<div style="flex:1; height:6px; background:#1f8fd4; border-radius:3px;"></div>' +
          '<div style="width:8px; height:8px; border-radius:50%; background:#fff;"></div>' +
          '</div>' +

          // Front Capsule
          '<div class="float-front-cap" style="position:absolute; bottom:35px; left:20px; width:120px; height:38px; background:#e0f2fe; border-radius:20px; z-index:3; display:flex; align-items:center; padding:0 12px; gap:8px; box-shadow: 0 4px 12px rgba(31,143,212,0.15);">' +
          '<div style="width:12px; height:12px; border-radius:50%; background:#1f8fd4;"></div>' +
          '<div style="flex:1; height:6px; background:#bae6fd; border-radius:3px;"></div>' +
          '</div>' +

          '<div style="position:absolute; top:20px; left:40px; font-size:10px; color:#cbd5e1; z-index:4;">✦</div>' +
          '<div style="position:absolute; bottom:20px; right:40px; font-size:12px; color:#94a3b8; z-index:4;">✦</div>' +
          '<div style="position:absolute; top:60px; left:20px; width:4px; height:4px; border-radius:50%; background:#cbd5e1; z-index:4;"></div>' +
          '</div>' +
          '<div style="font-weight:700; color:#1f2937; font-size:15px; margin-top:8px;">No Records Found</div>' +
          '</div>';
      } else {
        mainContentHtml += '<tbody>';
        filtered.forEach(function (item) {
          mainContentHtml += '<tr>' +
            '<td class="tname" style="font-weight: 600; color: var(--ink);">' + item.name + '</td>' +
            '<td>' + item.description + '</td>' +
            '<td style="text-align: right; color: var(--ink-3);">' +
            '<div style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; padding: 4px;" class="android-row-actions" data-id="' + item.id + '">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>' +
            '</div>' +
            '</td>' +
            '</tr>';
        });
        mainContentHtml += '</tbody></table></div>';
      }

      mainContentHtml += '</div>';
      return mainContentHtml;
    };

    RENDER.policy_android_geofencing = function () {
      return '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; display: flex; flex-direction: column; background: #fdfdfd; height: 100%;">' +
        '<div style="margin-bottom: 24px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Geo-Fencing</h2>' +
        '<div class="muted" style="font-size: 13px;">Configure location-based policy enforcement and restrictions for Android endpoints.</div>' +
        '</div>' +
        '<div class="card" style="padding: 40px; text-align: center; color: var(--ink-3); border-radius: 12px;">' +
        '<div style="font-size: 48px; margin-bottom: 16px;">📍</div>' +
        '<h3 style="font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px;">Geo-Fencing Settings</h3>' +
        '<p class="muted" style="font-size: 13px; max-width: 400px; margin: 0 auto 20px;">Establish virtual geographical boundaries and rule sets.</p>' +
        '<button class="btn btn-blue" style="border-radius: 8px; padding: 8px 16px; background:#1f8fd4; color:#fff; border:none;">Configure Geo-Fencing</button>' +
        '</div>' +
        '</div>';
    };

    RENDER.policy_android_message = function () {
      return '<div style="flex: 1; padding: 24px 32px; overflow-y: auto; display: flex; flex-direction: column; background: #fdfdfd; height: 100%;">' +
        '<div style="margin-bottom: 24px;">' +
        '<h2 style="font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Message Broadcasting</h2>' +
        '<div class="muted" style="font-size: 13px;">Broadcast push messages and emergency notifications to enrolled devices.</div>' +
        '</div>' +
        '<div class="card" style="padding: 40px; text-align: center; color: var(--ink-3); border-radius: 12px;">' +
        '<div style="font-size: 48px; margin-bottom: 16px;">📢</div>' +
        '<h3 style="font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px;">Broadcasting Center</h3>' +
        '<p class="muted" style="font-size: 13px; max-width: 400px; margin: 0 auto 20px;">Send instant alerts or general updates to one or more user groups.</p>' +
        '<button class="btn btn-blue" style="border-radius: 8px; padding: 8px 16px; background:#1f8fd4; color:#fff; border:none;">New Broadcast</button>' +
        '</div>' +
        '</div>';
    };

    AFTER.policy_android_policies = function () {
      var s = ANDROID_STATE;

      var searchInput = document.getElementById('android-policy-search');
      if (searchInput) {
        searchInput.oninput = function () {
          s.searchQuery = this.value;
          var container = document.getElementById('view');
          if (container) {
            container.innerHTML = RENDER.policy_android_policies();
            AFTER.policy_android_policies();
            var input = document.getElementById('android-policy-search');
            if (input) {
              input.focus();
              input.setSelectionRange(input.value.length, input.value.length);
            }
          }
        };
      }

      var createBtn = document.getElementById('btn-create-android-policy');
      if (createBtn) {
        createBtn.onclick = function () {
          var html = '<div class="modal modal-sm">' +
            '<div class="modal-h">' +
            '<div>' +
            '<h3>Create Android Policy</h3>' +
            '<div class="muted" style="font-size:12px;margin-top:3px;">Add a new device configuration policy</div>' +
            '</div>' +
            '<button class="x" onclick="closeModal()">' + ic('x') + '</button>' +
            '</div>' +
            '<div class="modal-b">' +
            '<div class="field"><label>Policy Name</label><input id="new-android-pname" placeholder="e.g. Block Screen Capture" /></div>' +
            '<div class="field" style="margin-top:12px;"><label>Description</label><input id="new-android-pdesc" placeholder="e.g. Restricts taking screenshots on work profile" /></div>' +
            '</div>' +
            '<div class="modal-f">' +
            '<button class="btn btn-ghost" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-blue" id="btn-save-android-policy" style="background:#1f8fd4; color:#fff; border:none; font-weight:600;">Create</button>' +
            '</div>' +
            '</div>';
          showModal(html);

          var saveBtn = document.getElementById('btn-save-android-policy');
          if (saveBtn) {
            saveBtn.onclick = function () {
              var name = document.getElementById('new-android-pname').value.trim();
              var desc = document.getElementById('new-android-pdesc').value.trim();
              if (!name) return alert('Policy Name is required.');
              s.policies.push({
                id: 'ap_' + Math.random().toString(36).substr(2, 9),
                name: name,
                description: desc || 'Enforced on all enrolled devices.'
              });
              closeModal();
              var container = document.getElementById('view');
              if (container) {
                container.innerHTML = RENDER.policy_android_policies();
                AFTER.policy_android_policies();
              }
              toast('Policy Created', name + ' was created successfully.', 'ok');
            };
          }
        };
      }

      document.querySelectorAll('.android-row-actions').forEach(function (el) {
        el.onclick = function (e) {
          e.stopPropagation();
          var id = this.dataset.id;
          document.querySelectorAll('.android-dropdown').forEach(function (m) { m.remove(); });
          var menu = document.createElement('div');
          menu.className = 'android-dropdown';
          menu.style.cssText = 'position:absolute; right:0; top:100%; background:#fff; border:1px solid var(--line); border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,.12); min-width:140px; z-index:1000; overflow:hidden;';
          menu.innerHTML =
            '<div class="dd-item" style="padding:10px 14px; font-size:13px; cursor:pointer; color:var(--ink);" onmouseenter="this.style.background=\'#f8fafc\'" onmouseleave="this.style.background=\'\'">Edit</div>' +
            '<div class="dd-del" style="padding:10px 14px; font-size:13px; cursor:pointer; color:#ef4444;" onmouseenter="this.style.background=\'#fef2f2\'" onmouseleave="this.style.background=\'\'">Delete</div>';
          this.style.position = 'relative';
          this.appendChild(menu);

          menu.querySelector('.dd-del').onclick = function (ev) {
            ev.stopPropagation();
            s.policies = s.policies.filter(function (x) { return x.id !== id; });
            menu.remove();
            var container = document.getElementById('view');
            if (container) {
              container.innerHTML = RENDER.policy_android_policies();
              AFTER.policy_android_policies();
            }
            toast('Removed', 'Policy removed successfully.', 'ok');
          };

          setTimeout(function () {
            document.addEventListener('click', function closeMenu() {
              menu.remove();
              document.removeEventListener('click', closeMenu);
            });
          }, 0);
        };
      });
    };

    RENDER.policy_apple = function () {
      return genPage({
        title: 'Apple Device Policies',
        icon: 'apple',
        color: '#000000',
        sub: 'MDM configurations, configuration profiles, and compliance rules for macOS, iOS, and iPadOS devices.',
        add: 'Create Policy',
        filters: ['All Platforms', 'Enforced'],
        kpis: [
          ['188', 'Enrolled Devices', '', 'people', '#1f8fd4', '#e6f4fc'],
          ['3', 'Non-Compliant', '', 'alert', '#dc2626', '#fdeaea'],
          ['6', 'Active Policies', '', 'shield', '#16a34a', '#e7f7ee'],
          ['98.4%', 'Compliance Rate', '', 'trend', '#1f8fd4', '#e6f4fc']
        ],
        cols: ['Policy Name', 'Platform', 'Type', 'Compliant Devices', 'Status'],
        rows: [
          ['FileVault Encryption', tg('macOS', 'blue'), 'Mandatory', '185/188', sb('Active', 'sb-green')],
          ['Passcode Complexity & Screen Lock', tg('iOS & macOS', 'purple'), 'Enforced', '188/188', sb('Active', 'sb-green')],
          ['Restrict AirDrop (Work to Personal)', tg('iOS', 'amber'), 'Enforced', '188/188', sb('Active', 'sb-green')],
          ['Automatic Software Update', tg('macOS', 'blue'), 'Enforced', '186/188', sb('Active', 'sb-green')],
          ['App Store App Installation Restrictions', tg('iOS', 'amber'), 'Enforced', '188/188', sb('Active', 'sb-green')]
        ]
      });
    };

  
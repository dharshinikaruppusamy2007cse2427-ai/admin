/* ===== SAMPLE DATA ===== */
const complaints = [
  { id: '#1024', student: 'Rahul Sharma', title: 'Hostel Water Supply Issue', date: '2026-04-28', status: 'Pending', description: 'The water supply in Block C hostel has been irregular for the past week. Students are facing difficulties with daily routines.' },
  { id: '#1023', student: 'Priya Patel', title: 'Library AC Not Working', date: '2026-04-28', status: 'In Progress', description: 'The air conditioning in the main library reading hall has not been functioning since Monday. It is very uncomfortable to study.' },
  { id: '#1022', student: 'Amit Kumar', title: 'Lab Equipment Malfunction', date: '2026-04-27', status: 'Pending', description: 'Multiple oscilloscopes in the Electronics Lab are not working properly, affecting our practical sessions.' },
  { id: '#1021', student: 'Sneha Reddy', title: 'Cafeteria Hygiene Concerns', date: '2026-04-27', status: 'Resolved', description: 'The cafeteria kitchen area needs better hygiene maintenance. Found unclean utensils on multiple occasions.' },
  { id: '#1020', student: 'Vikram Singh', title: 'Classroom Projector Broken', date: '2026-04-26', status: 'In Progress', description: 'Projector in Room 302 has been broken for two weeks. Lectures are being affected as faculty cannot show presentations.' },
  { id: '#1019', student: 'Ananya Gupta', title: 'Parking Lot Lighting', date: '2026-04-26', status: 'Resolved', description: 'Several lights in the student parking lot are not working, making it unsafe to walk to vehicles after evening classes.' },
  { id: '#1018', student: 'Rohan Mehta', title: 'Wi-Fi Connectivity Issues', date: '2026-04-25', status: 'Resolved', description: 'Wi-Fi in the engineering block drops frequently during peak hours. Unable to access online resources for assignments.' },
  { id: '#1017', student: 'Kavya Nair', title: 'Sports Ground Maintenance', date: '2026-04-25', status: 'Pending', description: 'The cricket pitch on the main sports ground is in poor condition. The grass is uneven and the boundary markings have faded.' },
  { id: '#1016', student: 'Arjun Das', title: 'Exam Hall Seating Issue', date: '2026-04-24', status: 'Pending', description: 'Seating in Exam Hall B is cramped. Many desks are broken and students struggle to write comfortably during exams.' },
  { id: '#1015', student: 'Megha Iyer', title: 'Bus Route Timing Change', date: '2026-04-24', status: 'In Progress', description: 'The college bus on Route 5 has changed its timing without prior notice. Many students are missing the bus and arriving late.' },
  { id: '#1014', student: 'Siddharth Joshi', title: 'Washroom Maintenance', date: '2026-04-23', status: 'Resolved', description: 'The washrooms on the 2nd floor of the Science block need urgent maintenance. Taps are leaking and doors are broken.' },
  { id: '#1013', student: 'Divya Sharma', title: 'Noisy Construction Work', date: '2026-04-23', status: 'Pending', description: 'Ongoing construction near the lecture halls is causing too much noise during class hours. Difficult to concentrate.' },
  { id: '#1012', student: 'Karthik Rajan', title: 'Scholarship Delay', date: '2026-04-22', status: 'In Progress', description: 'Scholarship disbursement for this semester is delayed by over a month. Several students are facing financial difficulties.' },
  { id: '#1011', student: 'Neha Verma', title: 'Canteen Price Increase', date: '2026-04-22', status: 'Resolved', description: 'Canteen prices have increased significantly without any improvement in food quality. Students are dissatisfied.' },
  { id: '#1010', student: 'Aakash Mishra', title: 'Gym Equipment Request', date: '2026-04-21', status: 'Pending', description: 'The college gym lacks modern equipment. Request for treadmills and weight machines for better fitness facilities.' },
  { id: '#1009', student: 'Tanvi Kulkarni', title: 'Course Registration Bug', date: '2026-04-21', status: 'Resolved', description: 'The online course registration portal shows errors when trying to register for elective courses. Cannot complete registration.' },
  { id: '#1008', student: 'Rajesh Nair', title: 'Hostel Room Leakage', date: '2026-04-20', status: 'In Progress', description: 'Room 412 in Block A hostel has a ceiling leak that gets worse during rain. Belongings are getting damaged.' },
  { id: '#1007', student: 'Pooja Hegde', title: 'Library Book Shortage', date: '2026-04-20', status: 'Pending', description: 'The library does not have enough copies of prescribed textbooks. Students have to wait weeks to borrow them.' },
  { id: '#1006', student: 'Manish Tiwari', title: 'Lab Safety Concerns', date: '2026-04-19', status: 'Resolved', description: 'Chemistry lab lacks proper safety equipment. Fire extinguishers are expired and first aid kits are empty.' },
  { id: '#1005', student: 'Riya Saxena', title: 'Auditorium Sound System', date: '2026-04-19', status: 'Resolved', description: 'The sound system in the main auditorium produces heavy distortion. Cultural events are affected.' },
  { id: '#1004', student: 'Harsh Pandey', title: 'Elevator Not Working', date: '2026-04-18', status: 'Pending', description: 'The elevator in the management block has been out of service. Students with mobility issues are severely affected.' },
  { id: '#1003', student: 'Swati Banerjee', title: 'Fee Portal Glitch', date: '2026-04-18', status: 'In Progress', description: 'Payment gateway on the fee portal fails intermittently, causing double charges on student accounts.' },
  { id: '#1002', student: 'Nikhil Rao', title: 'Drinking Water Quality', date: '2026-04-17', status: 'Resolved', description: 'Water coolers in Block D are dispensing water with an unusual taste. Possible filter issue.' },
  { id: '#1001', student: 'Ishita Bhat', title: 'Attendance System Error', date: '2026-04-17', status: 'Resolved', description: 'Biometric attendance system is marking absent even when students are present. Affecting attendance records.' }
];

/* ===== DOM REFS ===== */
const sidebar = document.getElementById('sidebar');
const mainWrapper = document.getElementById('mainWrapper');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const notificationBtn = document.getElementById('notificationBtn');
const notificationsDropdown = document.getElementById('notificationsDropdown');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const globalSearch = document.getElementById('globalSearch');
const complaintsSearch = document.getElementById('complaintsSearch');
const statusFilter = document.getElementById('statusFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const complaintModal = document.getElementById('complaintModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalSubmitBtn = document.getElementById('modalSubmitBtn');
const toastContainer = document.getElementById('toastContainer');

let currentUserName = 'Student User';

/* ===== VIEW SWITCHING ===== */
const viewLogin = document.getElementById('view-login');
const viewStudent = document.getElementById('view-student');
const viewAdmin = document.getElementById('view-admin');

function switchView(viewId) {
  viewLogin?.classList.remove('active');
  viewStudent?.classList.remove('active');
  viewAdmin?.classList.remove('active');
  document.getElementById(viewId)?.classList.add('active');
  
  if (viewId === 'view-admin') {
    populateAllTables();
    updateStatCounts();
    animateBars();
  } else if (viewId === 'view-student') {
    renderStudentComplaints();
  }
}

/* ===== LOGIN LOGIC ===== */
const loginTabs = document.querySelectorAll('.login-tab');
const loginBtn = document.getElementById('loginBtn');
const loginEmail = document.getElementById('loginEmail');
const loginForm = document.getElementById('loginForm');
let selectedRole = 'Student';

loginTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    loginTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    selectedRole = tab.dataset.role;
    loginBtn.textContent = `Login as ${selectedRole}`;
    if (selectedRole === 'Admin') loginEmail.value = 'admin@campuspulse.edu';
    else if (selectedRole === 'Student') loginEmail.value = 'student@campuspulse.edu';
    else loginEmail.value = `${selectedRole.toLowerCase()}@campuspulse.edu`;
  });
});

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (selectedRole === 'Admin' || selectedRole === 'HOD' || selectedRole === 'Principal') {
    switchView('view-admin');
    showToast(`Logged in as ${selectedRole}`, 'success');
  } else {
    currentUserName = loginEmail.value.split('@')[0];
    const nameDisplays = document.querySelectorAll('#studentWelcomeName, #studentNameDisplay');
    nameDisplays.forEach(el => el.textContent = currentUserName);
    switchView('view-student');
    showToast('Logged in as Student', 'success');
  }
});

/* Logout */
document.getElementById('studentLogoutBtn')?.addEventListener('click', () => { switchView('view-login'); showToast('Logged out successfully', 'info'); });
document.getElementById('adminLogoutBtn')?.addEventListener('click', () => { switchView('view-login'); showToast('Logged out successfully', 'info'); });

/* ===== STUDENT LOGIC ===== */
const studentComplaintForm = document.getElementById('studentComplaintForm');

function renderStudentComplaints() {
  const container = document.getElementById('studentComplaintsBody');
  if(!container) return;
  // Show complaints for demo
  const displayList = complaints.slice(0, 5);
  
  container.innerHTML = displayList.map((c, index) => {
    if (c.votes === undefined) c.votes = Math.floor(Math.random() * 200) + 10;
    let badgeText = c.status.toUpperCase();
    let statusClass = 'status-pending';
    if (index === 0) { badgeText = 'ESCALATED TO HOD'; statusClass = 'status-escalated'; }
    else if (index === 1) { badgeText = 'ESCALATED TO PRINCIPAL'; statusClass = 'status-escalated'; }
    else if (c.status === 'Resolved') statusClass = 'status-resolved';
    else if (c.status === 'In Progress') statusClass = 'status-inprogress';
    
    return `
      <div class="complaint-feed-card" data-id="${c.id}">
        <div class="complaint-vote">
          <button class="upvote-btn ${c.voted ? 'voted' : ''}"><i class="fas fa-chevron-up"></i></button>
          <span class="vote-count">${c.votes}</span>
        </div>
        <div class="complaint-feed-content">
          <div class="complaint-feed-meta">
            <span class="feed-badge ${statusClass}">${badgeText}</span>
            <span class="feed-badge category-badge">${(c.category || 'GENERAL').toUpperCase()}</span>
            <span class="feed-date"><i class="far fa-clock"></i> ${c.date}</span>
          </div>
          <h3 class="complaint-feed-title">${c.title}</h3>
          <p class="complaint-feed-desc">${c.description}</p>
          <div class="complaint-feed-footer">
            <div class="feed-reporter">
              <div class="feed-avatar">${c.student.charAt(0)}</div>
              <span>Reported by ${c.student}</span>
            </div>
            <div class="feed-actions">
              <button class="feed-action-btn"><i class="far fa-comment-alt"></i> DISCUSS</button>
              <button class="feed-action-btn"><i class="fas fa-share-alt"></i> SHARE</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Event delegation for upvotes
document.getElementById('studentComplaintsBody')?.addEventListener('click', (e) => {
  const upvoteBtn = e.target.closest('.upvote-btn');
  if (upvoteBtn) {
    const card = upvoteBtn.closest('.complaint-feed-card');
    if (!card) return;
    const id = card.dataset.id;
    const complaint = complaints.find(c => c.id === id);
    if (complaint) {
      if (!complaint.voted) {
        complaint.votes = (complaint.votes || 0) + 1;
        complaint.voted = true;
      } else {
        complaint.votes = complaint.votes - 1;
        complaint.voted = false;
      }
      renderStudentComplaints();
    }
  }
});

studentComplaintForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('newComplaintTitle').value;
  const category = document.getElementById('newComplaintCategory').value;
  const desc = document.getElementById('newComplaintDesc').value;
  
  const newComp = {
    id: '#' + (1025 + Math.floor(Math.random()*100)),
    student: currentUserName,
    title: title,
    category: category,
    date: new Date().toISOString().split('T')[0],
    status: 'Pending',
    description: desc,
    reply: ''
  };
  
  complaints.unshift(newComp);
  studentComplaintForm.reset();
  renderStudentComplaints();
  showToast('Complaint submitted successfully!', 'success');
});

/* ===== THEME TOGGLE STUDENT ===== */
document.getElementById('themeToggleStudent')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
  const icon = document.getElementById('themeToggleStudent').querySelector('i');
  if (document.body.classList.contains('dark')) icon.classList.replace('fa-moon', 'fa-sun');
  else icon.classList.replace('fa-sun', 'fa-moon');
});

/* ===== SIDEBAR TOGGLE ===== */
hamburgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  mainWrapper.classList.toggle('sidebar-open');
});
sidebarCloseBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  mainWrapper.classList.remove('sidebar-open');
});

/* Close sidebar on outside click (mobile) */
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
    if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      sidebar.classList.remove('open');
      mainWrapper.classList.remove('sidebar-open');
    }
  }
});

/* ===== PAGE NAVIGATION ===== */
const navLinks = document.querySelectorAll('.nav-link[data-page]');
const viewAllLinks = document.querySelectorAll('.view-all-link[data-page]');
const pages = document.querySelectorAll('.page');

function navigateTo(pageId) {
  navLinks.forEach(l => l.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeNav) activeNav.classList.add('active');

  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  /* Close sidebar on mobile after navigation */
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('open');
    mainWrapper.classList.remove('sidebar-open');
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

viewAllLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

/* ===== NOTIFICATIONS DROPDOWN ===== */
notificationBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  notificationsDropdown.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  if (!notificationsDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
    notificationsDropdown.classList.remove('show');
  }
});
document.querySelector('.mark-all-read')?.addEventListener('click', () => {
  document.querySelectorAll('.notification-item.unread').forEach(item => item.classList.remove('unread'));
  document.querySelector('.notification-dot')?.remove();
  showToast('All notifications marked as read', 'success');
});

/* ===== THEME TOGGLE ===== */
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') document.body.classList.add('dark');
updateThemeIcon();

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

/* ===== RENDER TABLE ROWS ===== */
function createStatusBadge(status) {
  const cls = status === 'Pending' ? 'badge-warning' : status === 'In Progress' ? 'badge-info' : 'badge-success';
  return `<span class="status-badge ${cls}">${status}</span>`;
}

function renderTableRows(tbody, data, includeCheckbox) {
  tbody.innerHTML = data.map(c => `
    <tr>
      ${includeCheckbox ? '<td><input type="checkbox" class="row-checkbox" /></td>' : ''}
      <td><span class="complaint-id">${c.id}</span></td>
      <td>
        <div class="student-cell">
          <div class="student-avatar">${c.student.charAt(0)}</div>
          <span>${c.student}</span>
        </div>
      </td>
      <td>${c.title}</td>
      <td>${formatDate(c.date)}</td>
      <td>${createStatusBadge(c.status)}</td>
      <td><button class="btn btn-outline btn-sm view-btn" data-id="${c.id}"><i class="fas fa-eye"></i> View</button></td>
    </tr>
  `).join('');

  /* Attach view buttons */
  tbody.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id));
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ===== POPULATE TABLES ===== */
function populateAllTables() {
  /* Dashboard - recent 5 */
  renderTableRows(document.getElementById('recentTableBody'), complaints.slice(0, 5), false);

  /* All complaints */
  renderFilteredComplaints();

  /* Status-filtered pages */
  renderTableRows(document.getElementById('pendingTableBody'), complaints.filter(c => c.status === 'Pending'), false);
  renderTableRows(document.getElementById('inprogressTableBody'), complaints.filter(c => c.status === 'In Progress'), false);
  renderTableRows(document.getElementById('resolvedTableBody'), complaints.filter(c => c.status === 'Resolved'), false);
}

/* ===== COMPLAINTS FILTERING ===== */
function renderFilteredComplaints() {
  const search = (complaintsSearch?.value || '').toLowerCase();
  const status = statusFilter?.value || 'all';

  let filtered = complaints;
  if (status !== 'all') filtered = filtered.filter(c => c.status === status);
  if (search) filtered = filtered.filter(c => c.student.toLowerCase().includes(search) || c.title.toLowerCase().includes(search));

  renderTableRows(document.getElementById('complaintsTableBody'), filtered, true);
  const info = document.getElementById('tableInfo');
  if (info) info.textContent = `Showing ${filtered.length} of ${complaints.length} complaints`;
}

complaintsSearch?.addEventListener('input', renderFilteredComplaints);
statusFilter?.addEventListener('change', renderFilteredComplaints);
clearFiltersBtn?.addEventListener('click', () => {
  if (complaintsSearch) complaintsSearch.value = '';
  if (statusFilter) statusFilter.value = 'all';
  renderFilteredComplaints();
});

/* Select all checkbox */
document.getElementById('selectAll')?.addEventListener('change', (e) => {
  document.querySelectorAll('.row-checkbox').forEach(cb => cb.checked = e.target.checked);
});

/* ===== MODAL ===== */
function openModal(id) {
  const c = complaints.find(x => x.id === id);
  if (!c) return;

  document.getElementById('detailId').textContent = c.id;
  document.getElementById('detailStudent').textContent = c.student;
  document.getElementById('detailDate').textContent = formatDate(c.date);
  document.getElementById('detailTitle').textContent = c.title;
  document.getElementById('detailDescription').textContent = c.description;
  document.getElementById('detailStatusUpdate').value = c.status;

  const statusEl = document.getElementById('detailStatus');
  statusEl.innerHTML = createStatusBadge(c.status);

  document.getElementById('detailReply').value = c.reply || '';
  complaintModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  complaintModal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn?.addEventListener('click', closeModal);
modalCancelBtn?.addEventListener('click', closeModal);
complaintModal?.addEventListener('click', (e) => {
  if (e.target === complaintModal) closeModal();
});

/* Submit response */
modalSubmitBtn?.addEventListener('click', () => {
  const id = document.getElementById('detailId').textContent;
  const newStatus = document.getElementById('detailStatusUpdate').value;
  const reply = document.getElementById('detailReply').value.trim();

  const complaint = complaints.find(c => c.id === id);
  if (complaint) {
    complaint.status = newStatus;
    complaint.reply = reply;
    populateAllTables();
    updateStatCounts();
  }

  closeModal();
  showToast(`Complaint ${id} updated to "${newStatus}"${reply ? ' with reply' : ''}`, 'success');
});

/* ===== UPDATE STAT COUNTS ===== */
function updateStatCounts() {
  const pending = complaints.filter(c => c.status === 'Pending').length;
  const inProgress = complaints.filter(c => c.status === 'In Progress').length;
  const resolved = complaints.filter(c => c.status === 'Resolved').length;

  document.getElementById('totalCount').textContent = complaints.length;
  document.getElementById('pendingCount').textContent = pending;
  document.getElementById('inProgressCount').textContent = inProgress;
  document.getElementById('resolvedCount').textContent = resolved;

  /* Update sidebar badges */
  const badges = document.querySelectorAll('.nav-badge');
  if (badges[0]) badges[0].textContent = complaints.length;
  if (badges[1]) badges[1].textContent = pending;
  if (badges[2]) badges[2].textContent = inProgress;
  if (badges[3]) badges[3].textContent = resolved;
}

/* ===== GLOBAL SEARCH (Ctrl+K) ===== */
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    globalSearch?.focus();
  }
  if (e.key === 'Escape') {
    closeModal();
    notificationsDropdown?.classList.remove('show');
  }
});

globalSearch?.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  if (!q) return;
  const match = complaints.find(c => c.student.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || c.id.includes(q));
  if (match) {
    navigateTo('complaints');
    if (complaintsSearch) complaintsSearch.value = q;
    renderFilteredComplaints();
  }
});

/* ===== TOAST NOTIFICATIONS ===== */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ===== EXPORT BUTTON ===== */
document.getElementById('exportBtn')?.addEventListener('click', () => {
  showToast('Report exported successfully!', 'success');
});

/* ===== REFRESH BUTTON ===== */
document.getElementById('refreshBtn')?.addEventListener('click', () => {
  const btn = document.getElementById('refreshBtn');
  btn.querySelector('i').classList.add('fa-spin');
  setTimeout(() => {
    btn.querySelector('i').classList.remove('fa-spin');
    showToast('Dashboard refreshed', 'success');
  }, 1000);
});

/* ===== BAR CHART ANIMATION ===== */
function animateBars() {
  document.querySelectorAll('.bar').forEach((bar, i) => {
    const h = bar.style.height;
    bar.style.height = '0%';
    setTimeout(() => { bar.style.height = h; }, i * 100);
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Application starts in Login View by default.
  // We don't populate tables until the user logs into Admin view.
});

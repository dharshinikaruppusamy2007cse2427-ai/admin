/* ===== SAMPLE DATA ===== */
let complaints = [
  { id: '#1024', student: 'Anonymous', anonymous: true, title: 'Water cooler not working in Block B', category: 'MECHANICAL', date: '2024-04-28', status: 'ESCALATED TO HOD', description: 'The water cooler on the 2nd floor of Block B has been non-functional for three days. Students are facing difficulties during lunch hours.', votes: 124 },
  { id: '#1023', student: 'Rahul K.', anonymous: false, title: 'Lab equipment maintenance required', category: 'EEE', date: '2024-04-27', status: 'ESCALATED TO PRINCIPAL', description: 'The digital oscilloscopes in Lab 4 are showing incorrect readings. Needs immediate calibration for upcoming practical exams.', votes: 311 },
  { id: '#1022', student: 'Sneha Reddy', anonymous: false, title: 'Library AC Not Working', category: 'GENERAL', date: '2024-04-26', status: 'PENDING', description: 'The air conditioning in the main library reading hall has not been functioning since Monday. It is very uncomfortable to study.', votes: 89 },
];

/* ===== STATE ===== */
let currentUserName = 'Student User';
const toastContainer = document.getElementById('toastContainer');

/* ===== VIEW SWITCHING ===== */
const viewLogin = document.getElementById('view-login');
const viewStudent = document.getElementById('view-student');

function switchView(viewId) {
  if (viewLogin) viewLogin.classList.remove('active');
  if (viewStudent) viewStudent.classList.remove('active');
  
  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');
  
  if (viewId === 'view-student') {
    renderStudentComplaints();
  }
}

/* ===== LOGIN LOGIC ===== */
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUserName = loginEmail.value.split('@')[0];
    const nameDisplays = document.querySelectorAll('#studentWelcomeName, #studentNameDisplay');
    nameDisplays.forEach(el => el.textContent = currentUserName);
    switchView('view-student');
    showToast('Logged in successfully', 'success');
  });
}

/* Logout */
const logoutBtn = document.getElementById('studentLogoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => { 
    switchView('view-login'); 
    showToast('Logged out successfully', 'info'); 
  });
}

/* ===== STUDENT LOGIC ===== */
const studentComplaintForm = document.getElementById('studentComplaintForm');

function renderStudentComplaints() {
  const feed = document.getElementById('studentComplaintFeed');
  if(!feed) return;
  
  feed.innerHTML = complaints.map(c => {
    let badgeClass = 'escalated';
    if(c.status === 'PENDING') badgeClass = 'pending';
    if(c.status === 'RESOLVED') badgeClass = 'resolved';

    return `
    <div class="feed-card">
      <div class="vote-section">
        <button class="vote-btn" onclick="voteComplaint('${c.id}')">
          <i class="fas fa-chevron-up"></i>
        </button>
        <span class="vote-count" id="vote-${c.id}">${c.votes}</span>
      </div>
      <div class="feed-content">
        <div class="feed-meta">
          <span class="feed-badge ${badgeClass}">${c.status}</span>
          <span class="feed-dept">${c.category.toUpperCase()}</span>
          <span class="feed-date"><i class="far fa-clock"></i> ${c.date}</span>
        </div>
        <h3 class="feed-title">${c.title}</h3>
        <p class="feed-desc">${c.description}</p>
        <div class="feed-footer">
          <div class="feed-reporter">
            <div class="reporter-avatar">${c.anonymous ? 'A' : c.student.charAt(0)}</div>
            <span>Reported by ${c.anonymous ? 'Anonymous' : c.student}</span>
          </div>
          <div class="feed-actions">
            <button class="action-btn"><i class="far fa-comment-alt"></i> DISCUSS</button>
            <button class="action-btn"><i class="fas fa-share-nodes"></i> SHARE</button>
          </div>
        </div>
      </div>
    </div>
  `}).join('');
}

window.voteComplaint = function(id) {
  const complaint = complaints.find(c => c.id === id);
  if (complaint) {
    complaint.votes += 1;
    const voteEl = document.getElementById(`vote-${id}`);
    if (voteEl) voteEl.textContent = complaint.votes;
    showToast('Vote recorded!', 'success');
  }
};

if (studentComplaintForm) {
  studentComplaintForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('newComplaintTitle').value;
    const category = document.getElementById('newComplaintCategory').value;
    const desc = document.getElementById('newComplaintDesc').value;
    const isAnonymous = document.getElementById('postAnonymous').checked;
    
    const newComp = {
      id: '#' + (1025 + Math.floor(Math.random()*1000)),
      student: currentUserName,
      anonymous: isAnonymous,
      title: title,
      category: category,
      date: new Date().toISOString().split('T')[0],
      status: 'PENDING',
      description: desc,
      votes: 0
    };
    
    complaints.unshift(newComp);
    studentComplaintForm.reset();
    renderStudentComplaints();
    showToast('Complaint submitted successfully!', 'success');
  });
}

/* ===== THEME TOGGLE STUDENT ===== */
const themeToggle = document.getElementById('themeToggleStudent');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });
}

/* ===== TOAST NOTIFICATIONS ===== */
function showToast(message, type = 'info') {
  if (!toastContainer) return;
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

document.addEventListener('DOMContentLoaded', () => {
  // Application starts in Login View
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    const toggleIcon = document.getElementById('themeToggleStudent')?.querySelector('i');
    if (toggleIcon) toggleIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

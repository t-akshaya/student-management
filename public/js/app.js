document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('studentForm');
  const list = document.getElementById('studentsList');

  async function load() {
    const res = await fetch('/api/students');
    const data = await res.json();
    list.innerHTML = data.map(s => `<li>${s.name} (${s.email})</li>`).join('');
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const body = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      course: document.getElementById('course').value,
      rollNo: document.getElementById('rollNo').value
    };
    await fetch('/api/students', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
    form.reset();
    load();
  });

  load();
});

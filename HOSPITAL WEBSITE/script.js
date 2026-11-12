/* ===== Jaimal Hospital · demo front-end ===== */
const $ = id => document.getElementById(id);
const DAY_LONG = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DAY_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const WEEK = [1,2,3,4,5,6,0]; // Monday first
const SLOT_MIN = 30;

const departments = [
  { name:"Cardiology",       icon:"🫀", desc:"Heart health, ECG, prevention and cardiac consultation." },
  { name:"Orthopedics",      icon:"🦴", desc:"Bone, joint, spine and sports-injury care." },
  { name:"Gynecology",       icon:"🤰", desc:"Women’s wellness, pregnancy and reproductive health." },
  { name:"Pediatrics",       icon:"👶", desc:"Gentle, attentive care for newborns and children." },
  { name:"Neurology",        icon:"🧠", desc:"Brain, nerve, migraine and stroke consultation." },
  { name:"General Medicine", icon:"🩺", desc:"Primary care, fever, diabetes, BP and routine checkups." },
  { name:"ENT",              icon:"👂", desc:"Ear, nose and throat problems for all ages." },
  { name:"Dermatology",      icon:"🧴", desc:"Skin, hair and nail concerns and cosmetic care." }
];

const MF = [1,2,3,4,5,6];
const doctors = [
  { id:"arjun",   name:"Dr. Arjun Sharma",    dept:"Cardiology",       role:"Senior Cardiologist",  qual:"MD, DM (Cardiology)", exp:18, fee:600, room:"OPD 12 · 1st Floor", photo:"images/dr-arjun.jpg", sex:"m",
    sessions:[{days:MF,from:"09:00",to:"13:00"},{days:[2,4],from:"17:00",to:"19:00"}] },
  { id:"manpreet",name:"Dr. Manpreet Singh",  dept:"Orthopedics",      role:"Orthopedic Specialist",qual:"MS (Orthopaedics)",    exp:14, fee:500, room:"OPD 8 · Ground Floor", photo:"images/dr-manpreet.jpg", sex:"m",
    sessions:[{days:[1,2,3,4,5],from:"10:00",to:"14:00"},{days:[6],from:"10:00",to:"12:00"}] },
  { id:"simran",  name:"Dr. Simran Kaur",     dept:"Gynecology",       role:"Gynecologist",         qual:"MBBS, MD (Obs & Gyn)", exp:12, fee:550, room:"OPD 5 · Ground Floor", photo:"images/dr-simran.jpg", sex:"f",
    sessions:[{days:MF,from:"11:00",to:"15:00"}] },
  { id:"neha",    name:"Dr. Neha Verma",      dept:"Pediatrics",       role:"Child Specialist",     qual:"MD (Pediatrics)",      exp:10, fee:450, room:"OPD 3 · Ground Floor", photo:"images/dr-neha.jpg", sex:"f",
    sessions:[{days:MF,from:"09:30",to:"12:30"},{days:[1,3,5],from:"16:00",to:"18:00"}] },
  { id:"rohit",   name:"Dr. Rohit Mehta",     dept:"Neurology",        role:"Neurologist",          qual:"MD, DM (Neurology)",   exp:16, fee:700, room:"OPD 14 · 1st Floor", photo:"images/dr-rohit.jpg", sex:"m",
    sessions:[{days:[2,4,6],from:"14:00",to:"17:00"}] },
  { id:"aman",    name:"Dr. Aman Gupta",      dept:"General Medicine", role:"General Physician",    qual:"MBBS, MD (Medicine)",  exp:9,  fee:350, room:"OPD 1 · Ground Floor", photo:"images/dr-aman.jpg", sex:"m",
    sessions:[{days:MF,from:"08:30",to:"12:00"},{days:MF,from:"17:00",to:"19:00"},{days:[0],from:"10:00",to:"12:00"}] },
  { id:"kavita",  name:"Dr. Kavita Malhotra", dept:"ENT",              role:"ENT Surgeon",          qual:"MS (ENT)",             exp:11, fee:450, room:"OPD 9 · Ground Floor", photo:"images/dr-kavita.jpg", sex:"f",
    sessions:[{days:[1,3,5],from:"10:00",to:"14:00"}] },
  { id:"harleen", name:"Dr. Harleen Kaur",    dept:"Dermatology",      role:"Dermatologist",        qual:"MD (Dermatology)",     exp:8,  fee:500, room:"OPD 10 · 1st Floor", photo:"images/dr-harleen.jpg", sex:"f",
    sessions:[{days:[2,4,6],from:"11:00",to:"15:00"}] },
];

const facilities = [
  { img:"emergency",  title:"24×7 Emergency & Trauma", text:"Round-the-clock emergency doctors, triage and resuscitation bay.", tags:["Always open","Trauma care"] },
  { img:"icu",        title:"Intensive Care Unit (ICU)", text:"Monitored ICU beds with ventilator support and trained critical-care nurses.", tags:["Ventilators","Monitoring"] },
  { img:"ot",         title:"Modern Operation Theatres", text:"Sterile, well-equipped theatres for general, orthopedic and gynecological surgery.", tags:["Sterile","Surgery"] },
  { img:"lab",        title:"Pathology Laboratory", text:"Blood, urine and other tests with fast, accurate reporting.", tags:["Home sample (sample)","Quick reports"] },
  { img:"radiology",  title:"Radiology & Imaging", text:"Digital X-ray, ultrasound and CT scanning under qualified radiologists.", tags:["X-ray","Ultrasound","CT"] },
  { img:"pharmacy",   title:"24×7 Pharmacy", text:"In-house pharmacy with prescription medicines and essentials at all hours.", tags:["Open 24×7","Genuine medicines"] },
  { img:"maternity",  title:"Maternity & Newborn Care", text:"Antenatal care, delivery suite and newborn nursery with family-friendly support.", tags:["Labour room","Nursery"] },
  { img:"rooms",      title:"Private & General Rooms", text:"Comfortable rooms and wards with attendant space, TV and nurse call.", tags:["Private","Semi-private","Ward"] },
  { img:"ambulance",  title:"Ambulance Service", text:"Equipped ambulances for patient transfer within the city and nearby areas.", tags:["24×7","Oxygen-equipped"] },
  { img:"blood",      title:"Blood Bank Support", text:"Coordination for blood availability and donor support in emergencies.", tags:["All groups","Donor desk"] }
];

const packages = [
  { name:"Basic Health Check", price:999,  dept:"General Medicine", items:["CBC & blood sugar","Lipid profile","Urine routine","BP & BMI","Doctor review"] },
  { name:"Advanced Health Check", price:2499, dept:"General Medicine", items:["All Basic tests","Liver & kidney profile","Thyroid (TSH)","Vitamin D & B12","Chest X-ray","ECG"], featured:true },
  { name:"Senior Citizen Care", price:3499, dept:"General Medicine", items:["Advanced package tests","Bone health screening","Eye & ENT screening","HbA1c","Physician + diet advice"] },
  { name:"Heart Care Package", price:3999, dept:"Cardiology", items:["ECG & 2D Echo","TMT (stress test)","Lipid profile","Blood sugar & HbA1c","Cardiologist consultation"] }
];

const testimonials = [
  { img:"patient-1", name:"Gurdeep S.", note:"Cardiology patient", text:"I could see the doctor’s timings online and booked the same morning. No long waiting, and the staff explained everything clearly." },
  { img:"patient-2", name:"Anjali R.", note:"Maternity care", text:"From antenatal visits to delivery, the team was kind and patient. The rooms were clean and my family felt welcome." },
  { img:"patient-3", name:"Mohit K.", note:"Orthopedics follow-up", text:"Follow-up booking was simple. The slot system meant I reached on time and met the doctor without any confusion." }
];

/* ---------- helpers ---------- */
const pad = n => String(n).padStart(2, "0");
const toMin = t => { const [h,m] = t.split(":").map(Number); return h*60+m; };
const fromMin = n => `${pad(Math.floor(n/60))}:${pad(n%60)}`;
const fmt = t => { let [h,m] = t.split(":").map(Number); const ap = h>=12?"PM":"AM"; h = h%12||12; return `${h}:${pad(m)} ${ap}`; };
const fmtS = t => { let [h,m] = t.split(":").map(Number); const ap = h>=12?"PM":"AM"; h = h%12||12; return m? `${h}:${pad(m)} ${ap}` : `${h} ${ap}`; };
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parseYmd = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y,m-1,d); };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const money = n => "₹" + n.toLocaleString("en-IN");
const getDoc = id => doctors.find(d => d.id === id);
const hash = s => { let h = 0; for (const c of s) h = (h*31 + c.charCodeAt(0)) >>> 0; return h; };
const avatar = d => d.photo || `images/avatar-${d.sex}.svg`;
const fallbackImg = d => `onerror="this.onerror=null;this.src='images/avatar-${d.sex}.svg'"`;

function daysText(days){
  const idx = [...new Set(days)].map(d => WEEK.indexOf(d)).sort((a,b)=>a-b);
  const runs = []; let run = [idx[0]];
  for (let i=1;i<idx.length;i++){ if (idx[i]===idx[i-1]+1) run.push(idx[i]); else { runs.push(run); run=[idx[i]]; } }
  runs.push(run);
  return runs.map(r => r.length>=3 ? `${DAY_SHORT[WEEK[r[0]]]}–${DAY_SHORT[WEEK[r[r.length-1]]]}` : r.map(i=>DAY_SHORT[WEEK[i]]).join(", ")).join(", ");
}
const sessionsOn = (doc, day) => doc.sessions.filter(s => s.days.includes(day)).sort((a,b)=>toMin(a.from)-toMin(b.from));
const docDays = doc => [...new Set(doc.sessions.flatMap(s => s.days))];
function slotsFor(doc, date){
  const out = [];
  sessionsOn(doc, date.getDay()).forEach(s => { for (let t = toMin(s.from); t + SLOT_MIN <= toMin(s.to); t += SLOT_MIN) out.push(fromMin(t)); });
  return out;
}

/* ---------- storage (demo, this device only) ---------- */
const KEY = "jaimal_demo_appts";
function loadAppts(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return memAppts; } }
let memAppts = [];
function saveAppts(list){ memAppts = list; try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e){} }

function isPast(date, slot){
  const now = new Date();
  return ymd(date) === ymd(now) && toMin(slot) <= now.getHours()*60 + now.getMinutes();
}
function isTaken(doc, dateStr, slot){
  if (hash(doc.id + dateStr + slot) % 100 < 28) return true; // simulated busy slots
  return loadAppts().some(a => a.docId === doc.id && a.date === dateStr && a.time === slot);
}
function nextAvailableDate(doc, from = new Date()){
  for (let i = 0; i < 21; i++){
    const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + i);
    if (slotsFor(doc, d).some(s => !isPast(d, s) && !isTaken(doc, ymd(d), s))) return d;
  }
  return null;
}
function nextDateForDay(doc, day){
  for (let i = 0; i < 14; i++){
    const d = new Date(); d.setDate(d.getDate() + i);
    if (d.getDay() === day && slotsFor(doc, d).some(s => !isPast(d, s))) return d;
  }
  return null;
}
const niceDate = d => `${DAY_LONG[d.getDay()]}, ${d.getDate()} ${d.toLocaleString("en-IN",{month:"long"})} ${d.getFullYear()}`;

/* ---------- render: departments ---------- */
function renderDepartments(){
  $("deptGrid").innerHTML = departments.map(dep => {
    const doc = doctors.find(d => d.dept === dep.name);
    return `<article class="dept-card"><div class="dept-icon">${dep.icon}</div><h3>${dep.name}</h3><p>${dep.desc}</p>
      <div class="dept-meta"><b>${esc(doc.name)}</b><span>${doc.sessions.map(s=>daysText(s.days)).filter((v,i,a)=>a.indexOf(v)===i).join(" · ")}</span></div>
      <a href="#appointment" data-book-dept="${dep.name}">Book ${dep.name} →</a></article>`;
  }).join("");
}

/* ---------- render: doctors ---------- */
function renderDoctors(){
  const q = $("doctorSearch").value.trim().toLowerCase();
  const dept = $("doctorDept").value;
  const today = new Date().getDay();
  const list = doctors.filter(d => (dept === "All" || d.dept === dept) && (!q || (d.name + d.dept + d.role).toLowerCase().includes(q)));
  $("doctorGrid").innerHTML = list.length ? list.map(d => {
    const days = docDays(d);
    return `<article class="doctor-card">
      <div class="doctor-avatar"><img src="${avatar(d)}" ${fallbackImg(d)} alt="${esc(d.name)}" loading="lazy">${days.includes(today) ? '<span class="avail">Available today</span>' : ''}</div>
      <span class="doctor-tag">${d.dept.toUpperCase()}</span><h3>${esc(d.name)}</h3>
      <p class="doc-role">${d.role} · ${d.qual}</p>
      <div class="exp-row"><span><b>${d.exp}+</b> yrs experience</span><span>${money(d.fee)} <small>(sample)</small></span></div>
      <div class="day-pills">${WEEK.map(w => `<i class="${days.includes(w)?'on':''}${w===today&&days.includes(w)?' today':''}">${DAY_SHORT[w].slice(0,2)}</i>`).join("")}</div>
      ${d.sessions.map(s => `<div class="doctor-meta"><span>${daysText(s.days)}</span><b>${fmtS(s.from)} – ${fmtS(s.to)}</b></div>`).join("")}
      <div class="doctor-meta"><span>Room</span><b>${d.room}</b></div>
      <button class="btn btn-small" data-book-doc="${d.id}">Book this doctor</button></article>`;
  }).join("") : '<p class="empty">No doctors match your search.</p>';
}

/* ---------- render: schedule ---------- */
let activeDay = new Date().getDay();
function renderDayTabs(){
  const today = new Date().getDay();
  $("dayTabs").innerHTML = WEEK.map(w => {
    const n = doctors.filter(d => sessionsOn(d, w).length).length;
    return `<button role="tab" class="day-tab${w===activeDay?' active':''}" data-day="${w}" aria-selected="${w===activeDay}"><b>${DAY_SHORT[w]}</b><small>${w===today?'Today':n+' doctors'}</small></button>`;
  }).join("");
}
function renderDayPanel(){
  const now = new Date(), isToday = activeDay === now.getDay(), nowMin = now.getHours()*60 + now.getMinutes();
  const rows = doctors.map(d => ({ d, ss: sessionsOn(d, activeDay) })).filter(r => r.ss.length).sort((a,b) => toMin(a.ss[0].from) - toMin(b.ss[0].from));
  $("dayPanel").innerHTML = `<h3 class="sub-title">${DAY_LONG[activeDay]}${isToday?' · Today':''} <small>${rows.length} doctors in OPD</small></h3>` + rows.map(({d, ss}) => {
    let status = "";
    if (isToday){
      const live = ss.find(s => nowMin >= toMin(s.from) && nowMin < toMin(s.to));
      const next = ss.find(s => toMin(s.from) > nowMin);
      status = live ? '<span class="badge live">In OPD now</span>' : next ? `<span class="badge soon">Starts ${fmtS(next.from)}</span>` : '<span class="badge done">Done for today</span>';
    }
    return `<div class="day-row"><img src="${avatar(d)}" ${fallbackImg(d)} alt="">
      <div class="day-who"><b>${esc(d.name)}</b><small>${d.dept} · ${d.room}</small></div>
      <div class="day-times">${ss.map(s => `<span>${fmtS(s.from)} – ${fmtS(s.to)}</span>`).join("")}</div>
      ${status}<button class="btn btn-small inline" data-book-doc="${d.id}" data-book-day="${activeDay}">Book</button></div>`;
  }).join("");
}
function renderTimetable(){
  const today = new Date().getDay();
  const head = `<thead><tr><th>Doctor</th>${WEEK.map(w => `<th class="${w===today?'today':''}">${DAY_SHORT[w]}</th>`).join("")}</tr></thead>`;
  const body = doctors.map(d => `<tr><th scope="row"><b>${esc(d.name)}</b><small>${d.dept}</small></th>${WEEK.map(w => {
    const ss = sessionsOn(d, w);
    return `<td class="${w===today?'today':''}">${ss.length ? ss.map(s => `<button class="tt-slot" data-book-doc="${d.id}" data-book-day="${w}">${fmtS(s.from)}–${fmtS(s.to)}</button>`).join("") : '<span class="off">—</span>'}</td>`;
  }).join("")}</tr>`).join("");
  $("timetable").innerHTML = head + `<tbody>${body}</tbody>`;
}

/* ---------- render: facilities, packages, testimonials ---------- */
function renderFacilities(){
  $("facilityGrid").innerHTML = facilities.map(f => `<article class="facility-card"><div class="facility-img"><img src="images/${f.img}.svg" alt="${f.title}" loading="lazy"></div><div class="facility-body"><h3>${f.title}</h3><p>${f.text}</p><div class="tags">${f.tags.map(t=>`<span>${t}</span>`).join("")}</div></div></article>`).join("");
}
function renderPackages(){
  $("packageGrid").innerHTML = packages.map(p => `<article class="package-card${p.featured?' featured':''}">${p.featured?'<span class="ribbon">Most popular</span>':''}<h3>${p.name}</h3><div class="price">${money(p.price)} <small>sample price</small></div><ul>${p.items.map(i=>`<li>${i}</li>`).join("")}</ul><button class="btn ${p.featured?'btn-primary':'btn-small'}" data-package="${p.name}" data-pkg-dept="${p.dept}">Book this package</button></article>`).join("");
}
let tIndex = 0, tTimer;
function renderTestimonials(){
  $("testi").innerHTML = testimonials.map((t,i) => `<figure class="testi${i===0?' show':''}"><img src="images/${t.img}.svg" alt=""><blockquote>“${t.text}”</blockquote><figcaption><b>${t.name}</b><small>${t.note}</small></figcaption></figure>`).join("");
  $("testiDots").innerHTML = testimonials.map((_,i) => `<button aria-label="Show testimonial ${i+1}" class="${i===0?'on':''}" data-t="${i}"></button>`).join("");
}
function showTesti(i){
  tIndex = i;
  document.querySelectorAll(".testi").forEach((el,n) => el.classList.toggle("show", n === i));
  document.querySelectorAll("#testiDots button").forEach((el,n) => el.classList.toggle("on", n === i));
}
function startTesti(){ clearInterval(tTimer); tTimer = setInterval(() => showTesti((tIndex+1) % testimonials.length), 6000); }

/* ---------- booking form ---------- */
let selectedSlot = "";
const deptSel = $("department"), docSel = $("doctor"), dateInp = $("appointmentDate");
dateInp.min = ymd(new Date());
deptSel.innerHTML = '<option value="">Select department</option>' + departments.map(d => `<option>${d.name}</option>`).join("");

function fillDoctors(){
  const list = doctors.filter(d => d.dept === deptSel.value);
  docSel.innerHTML = '<option value="">Select doctor</option>' + list.map(d => `<option value="${d.id}">${d.name}</option>`).join("");
  if (list.length === 1) docSel.value = list[0].id;
  onDoctorChange();
}
function onDoctorChange(){
  const doc = getDoc(docSel.value);
  selectedSlot = "";
  if (!doc){ $("doctorHint").textContent = "Select a department to see the doctor’s OPD days and timings."; $("quickDates").innerHTML = ""; renderSlots(); return; }
  $("doctorHint").innerHTML = `<b>${esc(doc.name)}</b> sits ${doc.sessions.map(s => `${daysText(s.days)} ${fmtS(s.from)}–${fmtS(s.to)}`).join(" and ")} · ${doc.room} · Fee ${money(doc.fee)} <small>(sample)</small>`;
  const cur = dateInp.value && slotsFor(doc, parseYmd(dateInp.value)).length;
  if (!cur){ const d = nextAvailableDate(doc); dateInp.value = d ? ymd(d) : ""; }
  renderQuickDates(doc); renderSlots();
}
function renderQuickDates(doc){
  const out = [];
  for (let i = 0; i < 14 && out.length < 4; i++){
    const d = new Date(); d.setDate(d.getDate() + i);
    if (slotsFor(doc, d).some(s => !isPast(d, s))) out.push(d);
  }
  const lbl = (d,i) => ymd(d) === ymd(new Date()) ? "Today" : `${DAY_SHORT[d.getDay()]} ${d.getDate()} ${d.toLocaleString("en-IN",{month:"short"})}`;
  $("quickDates").innerHTML = out.map((d,i) => `<button type="button" class="chip${dateInp.value===ymd(d)?' on':''}" data-qdate="${ymd(d)}">${lbl(d,i)}</button>`).join("");
}
function renderSlots(){
  const grid = $("slotGrid"), doc = getDoc(docSel.value);
  if (!doc || !dateInp.value){ grid.innerHTML = '<p class="slot-empty">Choose a doctor and date to see time slots.</p>'; return; }
  const date = parseYmd(dateInp.value);
  if (ymd(date) < ymd(new Date())){ grid.innerHTML = '<p class="slot-empty warn">Please choose today or a future date.</p>'; return; }
  const slots = slotsFor(doc, date);
  if (!slots.length){
    grid.innerHTML = `<p class="slot-empty warn">${esc(doc.name)} does not sit on ${DAY_LONG[date.getDay()]}. Available: ${daysText(docDays(doc))}.</p>`;
    return;
  }
  const ds = ymd(date);
  grid.innerHTML = slots.map(s => {
    const off = isPast(date, s) || isTaken(doc, ds, s);
    return `<button type="button" class="slot${off?' off':''}${s===selectedSlot?' on':''}" data-slot="${s}" ${off?'disabled':''}>${fmtS(s)}</button>`;
  }).join("");
  if (selectedSlot && (isPast(date, selectedSlot) || isTaken(doc, ds, selectedSlot) || !slots.includes(selectedSlot))) selectedSlot = "";
}
function updateQuickActive(){ document.querySelectorAll("[data-qdate]").forEach(b => b.classList.toggle("on", b.dataset.qdate === dateInp.value)); }

deptSel.addEventListener("change", fillDoctors);
docSel.addEventListener("change", onDoctorChange);
dateInp.addEventListener("change", () => { selectedSlot = ""; updateQuickActive(); renderSlots(); });
$("quickDates").addEventListener("click", e => { const b = e.target.closest("[data-qdate]"); if (!b) return; dateInp.value = b.dataset.qdate; selectedSlot = ""; updateQuickActive(); renderSlots(); });
$("slotGrid").addEventListener("click", e => { const b = e.target.closest("[data-slot]"); if (!b || b.disabled) return; selectedSlot = b.dataset.slot; document.querySelectorAll(".slot").forEach(x => x.classList.toggle("on", x === b)); $("bookingMessage").textContent = ""; });

function prefill({ deptName, docId, day, reason } = {}){
  if (docId){
    const doc = getDoc(docId);
    deptSel.value = doc.dept; fillDoctors(); docSel.value = doc.id;
    const d = day !== undefined ? nextDateForDay(doc, +day) : nextAvailableDate(doc);
    dateInp.value = d ? ymd(d) : ""; selectedSlot = ""; onDoctorChange();
  } else if (deptName){
    deptSel.value = deptName; dateInp.value = ""; fillDoctors();
  }
  if (reason) $("reason").value = reason;
  $("appointment").scrollIntoView({ behavior: "smooth" });
}

function showMsg(text, ok){ const m = $("bookingMessage"); m.textContent = text; m.className = "booking-message " + (ok ? "ok" : "err"); }

$("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("patientName").value.trim(), phone = $("patientPhone").value.trim(), age = $("patientAge").value;
  const doc = getDoc(docSel.value);
  if (name.length < 2) return showMsg("Please enter the patient’s full name.");
  if (!/^[6-9]\d{9}$/.test(phone)) return showMsg("Please enter a valid 10-digit mobile number.");
  if (age === "" || +age < 0 || +age > 120) return showMsg("Please enter a valid age.");
  if (!doc) return showMsg("Please select a department and doctor.");
  if (!dateInp.value) return showMsg("Please choose an appointment date.");
  const date = parseYmd(dateInp.value);
  if (!slotsFor(doc, date).length) return showMsg(`${doc.name} does not sit on ${DAY_LONG[date.getDay()]}. Please pick another date.`);
  if (!selectedSlot) return showMsg("Please select an available time slot.");
  if (isTaken(doc, dateInp.value, selectedSlot) || isPast(date, selectedSlot)){ renderSlots(); return showMsg("That slot is no longer available. Please choose another."); }
  if (!$("consent").checked) return showMsg("Please confirm that the details are correct.");

  const slots = slotsFor(doc, date);
  const appt = { id: "JH-" + Math.floor(100000 + Math.random()*900000), name, phone: phone.slice(0,2) + "••••••" + phone.slice(-2), age, type: $("visitType").value,
    dept: doc.dept, docId: doc.id, docName: doc.name, date: dateInp.value, time: selectedSlot, room: doc.room, fee: doc.fee, token: slots.indexOf(selectedSlot) + 1 };
  const all = loadAppts(); all.push(appt); saveAppts(all);
  showMsg("Appointment confirmed (demo).", true);
  renderResult(appt); renderMyAppts();
  $("bookingForm").reset(); dateInp.min = ymd(new Date()); selectedSlot = ""; docSel.innerHTML = '<option value="">Select doctor</option>';
  $("slotGrid").innerHTML = '<p class="slot-empty">Choose a doctor and date to see time slots.</p>'; $("quickDates").innerHTML = ""; $("doctorHint").textContent = "Select a department to see the doctor’s OPD days and timings.";
  $("bookingResult").scrollIntoView({ behavior: "smooth", block: "center" });
});

function renderResult(a){
  const d = parseYmd(a.date), report = fmt(fromMin(toMin(a.time) - 15));
  $("bookingResult").innerHTML = `<div class="result-card" id="printArea"><div class="result-head"><span>✔</span><div><b>Appointment confirmed</b><small>Demo only. Please call the hospital to confirm a real visit.</small></div></div>
    <dl><div><dt>Appointment ID</dt><dd>${a.id}</dd></div><div><dt>Token no.</dt><dd>#${a.token}</dd></div><div><dt>Patient</dt><dd>${esc(a.name)} · ${esc(a.age)} yrs</dd></div><div><dt>Visit type</dt><dd>${esc(a.type)}</dd></div>
    <div><dt>Doctor</dt><dd>${esc(a.docName)}<small>${a.dept}</small></dd></div><div><dt>Date &amp; time</dt><dd>${niceDate(d)}<small>${fmt(a.time)}</small></dd></div>
    <div><dt>Please arrive by</dt><dd>${report}</dd></div><div><dt>Room</dt><dd>${a.room}</dd></div></dl>
    <div class="result-actions"><button class="btn btn-small inline" data-ics="${a.id}">Add to calendar</button><button class="btn btn-small inline" data-print>Print</button></div></div>`;
}
function renderMyAppts(){
  const list = loadAppts().sort((x,y) => (x.date + x.time).localeCompare(y.date + y.time));
  $("myAppts").hidden = !list.length;
  $("apptList").innerHTML = list.map(a => `<div class="appt-row"><div><b>${esc(a.docName)}</b><small>${niceDate(parseYmd(a.date))} · ${fmt(a.time)} · ${a.id}</small></div><button class="link-danger" data-cancel="${a.id}">Cancel</button></div>`).join("");
}
function downloadIcs(a){
  const d = a.date.replace(/-/g,""), s = a.time.replace(":","") + "00", e = fromMin(toMin(a.time) + SLOT_MIN).replace(":","") + "00";
  const ics = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Jaimal Hospital Demo//EN","BEGIN:VEVENT",`UID:${a.id}@jaimal-demo`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").split(".")[0]}Z`,`DTSTART:${d}T${s}`,`DTEND:${d}T${e}`,`SUMMARY:Appointment with ${a.docName} (${a.dept})`,`LOCATION:Jaimal Hospital, Jalandhar - ${a.room}`,"DESCRIPTION:Demo appointment. Please arrive 15 minutes early.","END:VEVENT","END:VCALENDAR"].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const link = document.createElement("a"); link.href = url; link.download = `appointment-${a.id}.ics`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 500);
}

/* ---------- global click handling ---------- */
document.addEventListener("click", e => {
  const t = e.target;
  let el;
  if ((el = t.closest("[data-book-doc]"))) { e.preventDefault(); prefill({ docId: el.dataset.bookDoc, day: el.dataset.bookDay }); }
  else if ((el = t.closest("[data-book-dept]"))) { e.preventDefault(); prefill({ deptName: el.dataset.bookDept }); }
  else if ((el = t.closest("[data-package]"))) { prefill({ deptName: el.dataset.pkgDept, reason: "Package: " + el.dataset.package }); }
  else if ((el = t.closest("[data-day]"))) { activeDay = +el.dataset.day; renderDayTabs(); renderDayPanel(); }
  else if ((el = t.closest("[data-cancel]"))) { saveAppts(loadAppts().filter(a => a.id !== el.dataset.cancel)); renderMyAppts(); renderSlots(); if ($("bookingResult").innerHTML.includes(el.dataset.cancel)) $("bookingResult").innerHTML = ""; }
  else if ((el = t.closest("[data-ics]"))) { const a = loadAppts().find(x => x.id === el.dataset.ics); if (a) downloadIcs(a); }
  else if (t.closest("[data-print]")) { window.print(); }
  else if ((el = t.closest("[data-t]"))) { showTesti(+el.dataset.t); startTesti(); }
});

/* ---------- doctor filters ---------- */
$("doctorDept").innerHTML = '<option value="All">All departments</option>' + departments.map(d => `<option>${d.name}</option>`).join("");
$("doctorDept").addEventListener("change", renderDoctors);
$("doctorSearch").addEventListener("input", renderDoctors);

/* ---------- OPD status line in hero ---------- */
function openStatus(){
  const now = new Date(), nowMin = now.getHours()*60 + now.getMinutes();
  const live = doctors.filter(d => sessionsOn(d, now.getDay()).some(s => nowMin >= toMin(s.from) && nowMin < toMin(s.to))).length;
  if (live) return `${live} doctor${live>1?'s':''} in OPD right now · Emergency open 24×7`;
  for (let i = 0; i < 8; i++){
    const day = (now.getDay() + i) % 7;
    const starts = doctors.flatMap(d => sessionsOn(d, day)).map(s => toMin(s.from)).filter(m => i > 0 || m > nowMin).sort((a,b)=>a-b);
    if (starts.length) return `OPD opens ${i===0?'today':i===1?'tomorrow':DAY_LONG[day]} at ${fmtS(fromMin(starts[0]))} · Emergency open 24×7`;
  }
  return "Emergency open 24×7";
}

/* ---------- nav ---------- */
const menuBtn = $("menuToggle"), navMenu = $("navMenu");
menuBtn.addEventListener("click", () => { const o = navMenu.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { navMenu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));
if ("IntersectionObserver" in window){
  const links = [...navMenu.querySelectorAll("a[href^='#']")];
  const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(l => { const s = document.querySelector(l.getAttribute("href")); if (s && !l.classList.contains("nav-cta")) so.observe(s); });
}

/* ---------- animated counters (once) ---------- */
function runCounters(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-count]").forEach(el => {
    const end = +el.dataset.count, suf = el.dataset.suffix || "";
    if (reduce){ el.textContent = end.toLocaleString("en-IN") + suf; return; }
    const t0 = performance.now();
    (function step(t){ const p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + suf; if (p < 1) requestAnimationFrame(step); })(t0);
  });
}
if ("IntersectionObserver" in window){
  const co = new IntersectionObserver((es, ob) => { if (es[0].isIntersecting){ runCounters(); ob.disconnect(); } }, { threshold: .4 });
  co.observe($("stats"));
} else runCounters();

/* ---------- init ---------- */
renderDepartments(); renderDoctors(); renderDayTabs(); renderDayPanel(); renderTimetable();
renderFacilities(); renderPackages(); renderTestimonials(); startTesti(); renderMyAppts();
$("openStatus").textContent = openStatus();

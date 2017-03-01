var start = document.getElementById('start');
var btnMenu = document.getElementById('btn-menu');
var btnC = document.getElementById('btn_c');
var btnD = document.getElementById('btn_d');
var btnE = document.getElementById('btn_e');
var synth;
var state = false;

// PC用イベント処理
start.addEventListener('click', init);
btnC.addEventListener('click', playSound_C);
btnD.addEventListener('click', playSound_D);
btnE.addEventListener('click', playSound_E);

// スマホ用イベント処理
start.addEventListener('touchstart', init);
btnC.addEventListener('touchstart', playSound_C);
btnD.addEventListener('touchstart', playSound_D);
btnE.addEventListener('touchstart', playSound_E);


// 初期設定
function init() {
  synth = new Tone.Synth().toMaster();
  start.style.display = 'none';
  btnMenu.classList.add('active');
  state = true;
}


// 初期設定適用後に発動するイベント処理
function playSound_C() {
  if(!state) return;
  synth.triggerAttackRelease('C5', '8n');
}

function playSound_D() {
  if(!state) return;
  synth.triggerAttackRelease('D5', '8n');
}

function playSound_E() {
  if(!state) return;
  synth.triggerAttackRelease('E5', '8n');
}

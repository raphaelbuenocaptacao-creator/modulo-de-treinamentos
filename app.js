
const TRACK_LABELS={captador:'Captador',liner:'Liner',closer:'Closer'};
const TRACK_SUBTITLES={
  captador:'Abordagem, qualificação e geração de oportunidades',
  liner:'Conexão, diagnóstico e construção de valor',
  closer:'Decisão, negociação e fechamento responsável'
};

const COURSES={
captador:[
{id:'captador-1',title:'Mentalidade de Alta Performance',desc:'Postura, energia, disciplina e padrão de execução de um captador forte.',xp:300,lessons:[
['captador-1.1','O papel do captador','Você cria a primeira impressão da experiência. Postura aberta, energia controlada e comunicação clara aumentam a confiança.'],
['captador-1.2','Regra dos 3 segundos','Ao identificar um casal dentro do perfil, decida e inicie a abordagem rapidamente. Pensar demais reduz presença e naturalidade.'],
['captador-1.3','Meta de processo','Controle volume de abordagens, qualidade da conversa e consistência. O resultado melhora quando o processo melhora.']],quiz:{q:'Qual é a prioridade de um captador de alta performance?',o:['Esperar apenas clientes que demonstrem interesse','Controlar volume, qualidade e consistência','Falar o máximo possível sem ouvir'],a:1}},
{id:'captador-2',title:'Abordagem que Para o Cliente',desc:'Como abrir conversa com naturalidade e ganhar atenção sem pressionar.',xp:400,lessons:[
['captador-2.1','Presença antes da fala','Contato visual, sorriso leve, distância adequada e corpo voltado ao casal. A abordagem começa antes da primeira palavra.'],
['captador-2.2','Abertura curta','Use uma frase simples, humana e objetiva. Primeiro conquiste atenção; depois explique.'],
['captador-2.3','Microcompromisso','Faça uma pergunta fácil que mantenha a conversa e gere uma resposta natural.']],quiz:{q:'Uma boa abertura deve ser:',o:['Longa para explicar tudo','Curta, natural e seguida de uma pergunta','Agressiva para impedir a saída'],a:1}},
{id:'captador-3',title:'Qualificação Inteligente',desc:'Descubra rapidamente se o casal tem perfil sem transformar a conversa em interrogatório.',xp:450,lessons:[
['captador-3.1','Conversa, não formulário','Alterne pergunta e contexto. Uma pergunta por vez e sempre com tom de conversa.'],
['captador-3.2','Sinais de perfil','Observe disponibilidade, composição, interesse, momento da viagem e critérios internos da operação.'],
['captador-3.3','Transição elegante','Ao confirmar perfil, conecte o benefício ao próximo passo sem mudar o assunto de forma brusca.']],quiz:{q:'Qual a melhor forma de qualificar?',o:['Fazer todas as perguntas de uma vez','Conversar e validar critérios aos poucos','Evitar perguntas'],a:1}},
{id:'captador-4',title:'Objeções sem Confronto',desc:'Aprenda a lidar com “sem tempo”, “não quero” e “depois eu vejo” com leveza.',xp:500,lessons:[
['captador-4.1','Não rebata','Objeção não é briga. Valide primeiro, entenda e só depois esclareça.'],
['captador-4.2','Sem tempo','Reduza incerteza com objetividade. Explique duração e próximo passo sem inventar promessa.'],
['captador-4.3','Não tenho interesse','Descubra o motivo real com uma pergunta curta. Se a pessoa realmente não quiser, encerre com respeito.']],quiz:{q:'Ao receber uma objeção, o primeiro passo é:',o:['Contradizer imediatamente','Validar e entender antes de responder','Aumentar o tom'],a:1}},
{id:'captador-5',title:'Encaminhamento e Fechamento',desc:'Transforme uma boa conversa em ação clara, sem deixar o cliente esfriar.',xp:550,lessons:[
['captador-5.1','Próximo passo claro','Quando houver aceite, conduza com clareza e diga exatamente o que acontece agora.'],
['captador-5.2','Recapitule o valor','Antes de encaminhar, reforce em uma frase o benefício e o combinado.'],
['captador-5.3','Passagem de bastão','Transmita segurança na transição para o próximo profissional e evite informação conflitante.']],quiz:{q:'Depois do aceite do casal, você deve:',o:['Abrir várias novas possibilidades','Conduzir para o próximo passo com clareza','Voltar ao início da apresentação'],a:1}},
{id:'captador-6',title:'Campo: Ritmo, Ponto e Consistência',desc:'Como manter performance durante o dia e recuperar rapidamente após negativas.',xp:600,lessons:[
['captador-6.1','Ritmo de campo','Após uma negativa, reposicione-se e volte para a próxima oportunidade sem carregar a conversa anterior.'],
['captador-6.2','Leitura do ponto','Observe fluxo, direção das pessoas, horários e zonas de melhor abordagem.'],
['captador-6.3','Fechamento do dia','Revise números, objeções repetidas e o que funcionou. Escolha um ajuste para o próximo turno.']],quiz:{q:'Depois de uma sequência de negativas, o melhor é:',o:['Parar por um longo período','Recuperar postura e voltar ao processo','Mudar totalmente o discurso a cada cliente'],a:1}}
],
liner:[
{id:'liner-1',title:'Recepção e Primeira Impressão',desc:'Comece a experiência com presença, clareza e confiança.',xp:300,lessons:[
['liner-1.1','Receba com energia controlada','Acolha sem exagero. Apresente-se, organize o ambiente e faça o casal se sentir orientado.'],
['liner-1.2','Conexão nos primeiros minutos','Use perguntas leves para entender contexto, viagem e expectativa antes de entrar na apresentação.'],
['liner-1.3','Alinhamento de expectativa','Explique de forma simples como será a conversa e respeite o tempo combinado.']],quiz:{q:'O primeiro objetivo do Liner é:',o:['Começar falando do produto','Criar confiança e alinhar a experiência','Fazer perguntas sem contexto'],a:1}},
{id:'liner-2',title:'Rapport e Leitura do Casal',desc:'Construa conexão real sem parecer roteiro decorado.',xp:400,lessons:[
['liner-2.1','Perguntas que abrem conversa','Prefira perguntas abertas e relevantes ao momento do casal.'],
['liner-2.2','Escuta e espelhamento','Escute palavras, ritmo e prioridades. Resuma o que entendeu para confirmar.'],
['liner-2.3','Leitura emocional do casal','Observe engajamento, dúvidas e desconforto sem rotular ou pressionar.']],quiz:{q:'Rapport forte acontece quando você:',o:['Imita a pessoa','Escuta e adapta a comunicação com respeito','Fala sem pausas'],a:1}},
{id:'liner-3',title:'Diagnóstico e Qualificação Profunda',desc:'Descubra motivadores e critérios que realmente importam.',xp:450,lessons:[
['liner-3.1','Descubra motivadores','Entenda o que o casal valoriza na experiência, viagens e decisões.'],
['liner-3.2','Valide prioridades','Confirme quais benefícios são relevantes antes de apresentar soluções.'],
['liner-3.3','Mapeie critérios de decisão','Identifique tempo, interesse, prioridades e dúvidas sem transformar em interrogatório.']],quiz:{q:'Um bom diagnóstico serve para:',o:['Acumular perguntas','Personalizar a conversa com base em prioridades reais','Acelerar sem ouvir'],a:1}},
{id:'liner-4',title:'Apresentação com Valor',desc:'Transforme características em benefícios que façam sentido para aquele casal.',xp:500,lessons:[
['liner-4.1','Benefício antes de característica','Explique primeiro por que algo importa; depois mostre como funciona.'],
['liner-4.2','Storytelling objetivo','Use exemplos curtos e verdadeiros para facilitar entendimento, sem exagerar resultados.'],
['liner-4.3','Prova e personalização','Conecte evidências e informações verificáveis às prioridades levantadas no diagnóstico.']],quiz:{q:'Ao apresentar valor, o ideal é:',o:['Listar todas as características','Conectar benefícios às prioridades do casal','Usar promessas fortes'],a:1}},
{id:'liner-5',title:'Objeções e Construção de Desejo',desc:'Trate dúvidas como informação e preserve confiança.',xp:550,lessons:[
['liner-5.1','Objeção como informação','Pergunte o que está por trás da dúvida antes de responder.'],
['liner-5.2','Reforce valor sem confronto','Mostre o ponto relevante com evidência e sem tentar vencer uma discussão.'],
['liner-5.3','Mantenha desejo e segurança','Dê espaço para perguntas e não esconda limitações ou condições.']],quiz:{q:'Uma objeção deve ser tratada como:',o:['Ataque pessoal','Informação sobre uma dúvida ou risco percebido','Motivo para pressionar'],a:1}},
{id:'liner-6',title:'Passagem de Bastão para o Closer',desc:'Entregue ao Closer contexto, confiança e direção.',xp:600,lessons:[
['liner-6.1','Resumo estratégico','Resuma prioridades, pontos de interesse e dúvidas sem expor informações desnecessárias.'],
['liner-6.2','Sinalize pontos quentes','Destaque o que teve maior valor para o casal e o que ainda precisa de esclarecimento.'],
['liner-6.3','Transição de confiança','Apresente o Closer como continuidade natural da experiência, sem promessas de resultado.']],quiz:{q:'Uma boa passagem de bastão deve:',o:['Recomeçar tudo do zero','Levar contexto e continuidade para o Closer','Criar urgência artificial'],a:1}}
],
closer:[
{id:'closer-1',title:'Mentalidade de Fechamento',desc:'Direção, calma e responsabilidade em momentos de decisão.',xp:300,lessons:[
['closer-1.1','Postura de decisão','Conduza com clareza sem dominar a conversa. O cliente precisa entender e decidir com segurança.'],
['closer-1.2','Controle emocional','Não trate objeções como rejeição pessoal. Mantenha tom, ritmo e atenção.'],
['closer-1.3','Ritmo e direção','Organize a conversa em etapas e evite atropelar dúvidas importantes.']],quiz:{q:'A postura correta do Closer é:',o:['Pressionar até o sim','Conduzir com clareza e respeitar a decisão','Evitar perguntas difíceis'],a:1}},
{id:'closer-2',title:'Diagnóstico de Decisão',desc:'Entenda como o casal decide antes de apresentar uma proposta.',xp:400,lessons:[
['closer-2.1','Retome o diagnóstico','Confirme o que já foi entendido e atualize pontos que possam ter mudado.'],
['closer-2.2','Critérios de decisão','Pergunte quais fatores pesam mais para uma decisão segura.'],
['closer-2.3','Identifique o decisor','Inclua todos os participantes da decisão e evite criar conflito entre eles.']],quiz:{q:'Antes da proposta, o Closer deve:',o:['Assumir o que importa','Confirmar critérios e participantes da decisão','Falar de preço imediatamente'],a:1}},
{id:'closer-3',title:'Construção de Valor',desc:'Organize valor percebido antes de discutir condições.',xp:450,lessons:[
['closer-3.1','Valor percebido','Conecte a solução ao que foi identificado como importante, sem inventar benefícios.'],
['closer-3.2','Ancoragem responsável','Contextualize preço e condições com transparência, sem comparação enganosa.'],
['closer-3.3','Conexão com prioridade','Retome as prioridades do casal e verifique se a solução realmente atende.']],quiz:{q:'Valor percebido cresce quando:',o:['Há mais pressão','A proposta se conecta a prioridades reais','O preço fica escondido'],a:1}},
{id:'closer-4',title:'Tratamento de Objeções',desc:'Isole a objeção real e responda com clareza.',xp:500,lessons:[
['closer-4.1','Isole a objeção real','Pergunte se existe outro ponto além da dúvida apresentada.'],
['closer-4.2','Responda com evidência','Use informações verificáveis e condições reais. Não improvise garantias.'],
['closer-4.3','Confirme entendimento','Depois de responder, pergunte se a dúvida foi resolvida antes de avançar.']],quiz:{q:'Após responder uma objeção, faça o quê?',o:['Mude de assunto','Confirme se a dúvida foi resolvida','Repita a proposta mais alto'],a:1}},
{id:'closer-5',title:'Proposta e Negociação',desc:'Apresente condições com objetividade e preserve valor.',xp:550,lessons:[
['closer-5.1','Apresente a proposta','Explique preço, condições, prazos e responsabilidades sem esconder informação material.'],
['closer-5.2','Negocie sem perder valor','Conceda apenas o que é autorizado e relevante. Não crie falsas limitações.'],
['closer-5.3','Peça a decisão com clareza','Depois de esclarecer tudo, pergunte de forma direta se o casal deseja seguir.']],quiz:{q:'Negociação saudável significa:',o:['Criar escassez falsa','Trabalhar condições reais e autorizadas','Esconder detalhes até o final'],a:1}},
{id:'closer-6',title:'Fechamento e Pós-Decisão',desc:'Formalize o aceite e proteja a experiência depois do sim.',xp:600,lessons:[
['closer-6.1','Formalize o aceite','Garanta que o cliente compreendeu termos e condições antes da confirmação.'],
['closer-6.2','Reforce segurança','Resuma os pontos principais e indique onde consultar informações e suporte.'],
['closer-6.3','Próximos passos e pós-venda','Explique o que acontecerá a seguir e como o cliente pode pedir ajuda ou esclarecer dúvidas.']],quiz:{q:'Depois do sim, a prioridade é:',o:['Encerrar rápido','Garantir entendimento e próximos passos claros','Adicionar novas condições'],a:1}}
]};

const SCENARIOS=[
{track:'captador',q:'O casal responde: “Estamos com pressa, só estamos passeando.”',answers:[['Entendo. Em 20 segundos eu explico e vocês decidem se faz sentido.',true],['Então vocês não têm interesse nenhum?',false],['Mas vocês precisam parar para me ouvir.',false]],tip:'Valide a pressa e peça um microespaço de tempo. O objetivo é reduzir resistência, não confrontar.'},
{track:'captador',q:'A pessoa diz: “Não quero comprar nada.”',answers:[['Perfeito. Posso só explicar rapidamente a experiência e vocês decidem se faz sentido?',true],['Mas eu nem falei o preço ainda!',false],['Se não quer comprar, deixa pra lá.',false]],tip:'Esclareça a intenção e preserve leveza. Não discuta com a objeção.'},
{track:'captador',q:'O casal continua andando enquanto você fala.',answers:[['Acompanhar mantendo distância adequada e fazer uma pergunta curta.',true],['Segurar a pessoa pelo braço.',false],['Falar mais alto.',false]],tip:'Respeite o espaço físico. Contato físico não deve ser usado para impedir alguém de seguir.'},
{track:'liner',q:'O casal responde com frases curtas e parece desconectado.',answers:[['Reduzir o ritmo e fazer uma pergunta aberta sobre o que é relevante para eles.',true],['Acelerar toda a apresentação.',false],['Ignorar e seguir o roteiro.',false]],tip:'Baixo engajamento pede leitura e adaptação, não mais volume de informação.'},
{track:'liner',q:'Você percebe que uma informação passada antes pode estar incorreta.',answers:[['Corrigir com transparência e confirmar a informação certa.',true],['Manter a versão para não perder confiança.',false],['Evitar o tema.',false]],tip:'Transparência protege a confiança e evita promessas inconsistentes.'},
{track:'closer',q:'O casal diz: “Precisamos pensar.”',answers:[['Claro. O que vocês gostariam de avaliar melhor antes de decidir?',true],['Se sair agora, perde tudo.',false],['Então não faz sentido continuar.',false]],tip:'Descubra o que precisa ser analisado sem criar urgência artificial.'},
{track:'closer',q:'O cliente pergunta uma condição que você não tem autorização para oferecer.',answers:[['Explicar o limite e verificar com o responsável se existe alternativa autorizada.',true],['Prometer e resolver depois.',false],['Dizer que sim sem registrar.',false]],tip:'Nunca prometa condição não autorizada.'}
];

const cfg=window.CAPTA_CONFIG;
const db=window.supabase?.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
const app=document.querySelector('#app');
const quizDialog=document.querySelector('#quizDialog');
const quizContent=document.querySelector('#quizContent');
const toastEl=document.querySelector('#toast');
const profileBtn=document.querySelector('#profileBtn');
const managerBtn=document.querySelector('#managerBtn');
const cloudBadge=document.querySelector('#cloudBadge');
let deferredPrompt=null;
let authMode='login';

let S={
  session:null,user:null,profile:null,isManager:false,
  progress:new Set(),quiz:{},sim:{hits:0,total:0},
  leaderboard:[],certificates:[]
};

const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const firstName=()=>S.profile?.display_name?.trim().split(/\s+/)[0]||'Profissional';
const initials=()=>S.profile?.display_name?.trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()||'CA';
const trackLabel=t=>TRACK_LABELS[t]||t;
const modules=()=>COURSES[S.profile?.track||'captador']||COURSES.captador;
const toast=(msg,type='')=>{toastEl.textContent=msg;toastEl.className=`toast show ${type}`;setTimeout(()=>toastEl.className='toast',3200);};
const setBusy=(btn,on,label='Processando...')=>{if(!btn)return; if(on){btn.dataset.old=btn.textContent;btn.disabled=true;btn.textContent=label;}else{btn.disabled=false;btn.textContent=btn.dataset.old||btn.textContent;}};

function setNav(route){
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===route));
  profileBtn.textContent=initials();
  managerBtn.hidden=!S.isManager;
  cloudBadge.hidden=!S.session;
}

function allLessons(m){return m.lessons.length}
function lessonDone(key){return S.progress.has(key)}
function moduleLessonProgress(m){return Math.round(m.lessons.filter(l=>lessonDone(l[0])).length/allLessons(m)*100)}
function quizPassed(m){return (S.quiz[m.id]?.score||0)>=70}
function moduleComplete(m){return moduleLessonProgress(m)===100&&quizPassed(m)}
function isUnlocked(m){
  const list=modules(),i=list.findIndex(x=>x.id===m.id);
  return i===0||moduleComplete(list[i-1]);
}
function totals(){
  const list=modules(),lessonTotal=list.reduce((n,m)=>n+m.lessons.length,0);
  const done=list.reduce((n,m)=>n+m.lessons.filter(l=>lessonDone(l[0])).length,0);
  const quizzes=list.filter(quizPassed).length;
  const xp=done*75+list.filter(quizPassed).reduce((n,m)=>n+m.xp,0);
  return {lessonTotal,done,quizzes,xp,pct:lessonTotal?Math.round(done/lessonTotal*100):0,modulesDone:list.filter(moduleComplete).length};
}
function currentLeaderboardRow(){return S.leaderboard.find(x=>x.user_id===S.user?.id)}
function route(){return (location.hash||'#home').slice(1)}

function authScreen(message=''){
  document.body.classList.add('auth-mode');
  managerBtn.hidden=true;cloudBadge.hidden=true;
  const signup=authMode==='signup';
  app.innerHTML=`<section class="auth-page">
    <div class="auth-glow one"></div><div class="auth-glow two"></div>
    <div class="auth-card">
      <div class="auth-brand"><span class="brand-mark big">C</span><div><b>CAPTA ACADEMY</b><small>Performance Learning System</small></div></div>
      <div class="eyebrow">UNIVERSIDADE INTERNA</div>
      <h1>${signup?'Crie seu acesso':'Entre na sua jornada'}</h1>
      <p>${signup?'Seu progresso, XP, ranking e certificados ficam salvos na nuvem.':'Continue exatamente de onde parou, em qualquer dispositivo.'}</p>
      ${message?`<div class="notice">${safe(message)}</div>`:''}
      <form id="authForm" class="auth-form">
        ${signup?`<label>Nome completo<input name="name" required maxlength="80" autocomplete="name" placeholder="Seu nome" /></label>
        <label>Trilha inicial<select name="track"><option value="captador">Captador</option><option value="liner">Liner</option><option value="closer">Closer</option></select></label>`:''}
        <label>E-mail<input name="email" type="email" required autocomplete="email" placeholder="voce@empresa.com" /></label>
        <label>Senha<input name="password" type="password" required minlength="6" autocomplete="${signup?'new-password':'current-password'}" placeholder="••••••••" /></label>
        <button class="primary-btn auth-submit" type="submit">${signup?'Criar conta':'Entrar'}</button>
      </form>
      <button id="toggleAuth" class="link-btn">${signup?'Já tenho conta':'Criar meu acesso'}</button>
      <div class="auth-foot"><span>🔒 Dados protegidos por login</span><span>☁ Progresso em nuvem</span><span>🏆 Ranking da equipe</span></div>
    </div>
  </section>`;
  document.querySelector('#toggleAuth').onclick=()=>{authMode=signup?'login':'signup';authScreen();};
  document.querySelector('#authForm').onsubmit=handleAuth;
}

async function handleAuth(e){
  e.preventDefault();
  const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button[type=submit]');
  const email=String(f.get('email')).trim(),password=String(f.get('password'));
  setBusy(btn,true,authMode==='signup'?'Criando...':'Entrando...');
  try{
    if(authMode==='signup'){
      const name=String(f.get('name')).trim(),track=String(f.get('track'));
      const {data,error}=await db.auth.signUp({email,password,options:{data:{name,track}}});
      if(error)throw error;
      if(!data.session){authMode='login';authScreen('Conta criada. Confira seu e-mail para confirmar o cadastro e depois entre.');return;}
    }else{
      const {error}=await db.auth.signInWithPassword({email,password});
      if(error)throw error;
    }
  }catch(err){toast(err.message||'Não foi possível entrar.','error');setBusy(btn,false);}
}

async function ensureProfile(){
  const {data,error}=await db.from('capta_academy_profiles').select('*').eq('id',S.user.id).maybeSingle();
  if(error)throw error;
  if(data){S.profile=data;return;}
  const meta=S.user.user_metadata||{};
  const payload={id:S.user.id,display_name:(meta.name||S.user.email?.split('@')[0]||'Profissional').slice(0,80),track:['captador','liner','closer'].includes(meta.track)?meta.track:'captador'};
  const r=await db.from('capta_academy_profiles').insert(payload).select().single();
  if(r.error)throw r.error;
  S.profile=r.data;
}

async function migrateLegacy(){
  if(S.profile.track!=='captador'||localStorage.getItem('captaAcademyCloudMigratedV2'))return;
  let old={};try{old=JSON.parse(localStorage.getItem('captaAcademyStateV1')||'{}')}catch{}
  const rows=(old.completed||[]).map(k=>{
    const m=String(k).match(/^(\d+)-(\d+\.\d+)$/); if(!m)return null;
    return {user_id:S.user.id,lesson_key:`captador-${m[2]}`,module_key:`captador-${m[1]}`,track:'captador'};
  }).filter(Boolean);
  if(rows.length)await db.from('capta_academy_progress').upsert(rows,{onConflict:'user_id,lesson_key',ignoreDuplicates:true});
  for(const [mid,score] of Object.entries(old.quizScores||{})){
    await db.from('capta_academy_quiz_results').upsert({user_id:S.user.id,module_key:`captador-${mid}`,track:'captador',score:Number(score)||0,attempts:1,passed_at:Number(score)>=70?new Date().toISOString():null},{onConflict:'user_id,module_key'});
  }
  if((old.simTotal||0)>0)await db.from('capta_academy_sim_results').upsert({user_id:S.user.id,hits:old.simHits||0,total:old.simTotal||0},{onConflict:'user_id'});
  localStorage.setItem('captaAcademyCloudMigratedV2','1');
}

async function loadData(){
  await ensureProfile();
  await migrateLegacy();
  const [pr,qz,sim,lb,mgr,cert]=await Promise.all([
    db.from('capta_academy_progress').select('lesson_key,module_key,track').eq('user_id',S.user.id),
    db.from('capta_academy_quiz_results').select('*').eq('user_id',S.user.id),
    db.from('capta_academy_sim_results').select('*').eq('user_id',S.user.id).maybeSingle(),
    db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}).limit(100),
    db.from('capta_academy_managers').select('email').maybeSingle(),
    db.from('capta_academy_certificates').select('*').eq('user_id',S.user.id).order('issued_at',{ascending:false})
  ]);
  for(const r of [pr,qz,sim,lb,mgr,cert])if(r.error)throw r.error;
  S.progress=new Set((pr.data||[]).map(x=>x.lesson_key));
  S.quiz=Object.fromEntries((qz.data||[]).map(x=>[x.module_key,x]));
  S.sim=sim.data||{hits:0,total:0};
  S.leaderboard=lb.data||[];
  S.isManager=!!mgr.data;
  S.certificates=cert.data||[];
}

async function bootSession(session){
  S.session=session;S.user=session?.user||null;
  if(!session){S={session:null,user:null,profile:null,isManager:false,progress:new Set(),quiz:{},sim:{hits:0,total:0},leaderboard:[],certificates:[]};authScreen();return;}
  document.body.classList.remove('auth-mode');
  app.innerHTML=`<div class="loader"><div class="spinner"></div><strong>Sincronizando sua jornada...</strong></div>`;
  try{await loadData();renderRoute();}catch(err){console.error(err);authScreen('Não foi possível carregar seus dados. Tente entrar novamente.');}
}

function moduleCard(m){
  const p=moduleLessonProgress(m),open=isUnlocked(m),done=moduleComplete(m);
  return `<article class="card module-card ${open?'':'locked'} ${done?'complete':''}">
    <div><div class="module-num">MÓDULO ${m.id.split('-')[1].padStart(2,'0')} ${done?'• CONCLUÍDO':open?'':'• BLOQUEADO'}</div>
    <h3>${safe(m.title)}</h3><p>${safe(m.desc)}</p></div>
    <div><div class="module-meta"><span class="pill">${m.lessons.length} aulas</span><span class="pill">+${m.xp} XP</span><span class="pill">${p}% aulas</span></div>
    <div class="progress-track"><div class="progress-bar" style="width:${p}%"></div></div>
    ${open?`<button class="${done?'ghost-btn':'secondary-btn'}" onclick="location.hash='modulo-${m.id}'">${done?'Revisar':p?'Continuar':'Começar'}</button>`:'<button class="secondary-btn" disabled>Conclua aulas + quiz anterior</button>'}</div>
  </article>`;
}

function home(){
  setNav('home');
  const t=totals(),list=modules(),next=list.find(m=>isUnlocked(m)&&!moduleComplete(m))||list.at(-1),row=currentLeaderboardRow();
  const pos=S.leaderboard.findIndex(x=>x.user_id===S.user.id)+1;
  app.innerHTML=`<section class="hero hero-dashboard">
    <div><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()} • TRILHA ATIVA</div>
    <h1>Vamos evoluir, ${safe(firstName())}.</h1>
    <p>${TRACK_SUBTITLES[S.profile.track]}. Aprenda, simule, valide e leve para o campo.</p>
    <div class="hero-actions"><button class="primary-btn" onclick="location.hash='modulo-${next.id}'">Continuar treinamento</button><button class="secondary-btn" onclick="location.hash='simulador'">Treinar cenário</button></div></div>
    <div class="level-orb"><small>NÍVEL</small><strong>${Math.max(1,Math.floor(t.xp/1200)+1)}</strong><span>${t.xp.toLocaleString('pt-BR')} XP</span></div>
  </section>
  <section class="stats">
    <div class="stat-card"><small>Progresso</small><strong>${t.pct}%</strong><span>${t.done}/${t.lessonTotal} aulas</span></div>
    <div class="stat-card"><small>XP</small><strong>${t.xp.toLocaleString('pt-BR')}</strong><span>calculado na nuvem</span></div>
    <div class="stat-card"><small>Ranking</small><strong>${pos?`#${pos}`:'—'}</strong><span>${row?.quizzes_passed||0} quizzes aprovados</span></div>
    <div class="stat-card"><small>Simulador</small><strong>${S.sim.total?Math.round(S.sim.hits/S.sim.total*100):0}%</strong><span>${S.sim.hits||0}/${S.sim.total||0} decisões corretas</span></div>
  </section>
  <div class="section-head"><div><h2>Próximas etapas</h2><p>O próximo módulo só abre depois das aulas e do quiz.</p></div><a href="#trilhas">Ver tudo</a></div>
  <section class="grid">${list.slice(0,3).map(moduleCard).join('')}</section>
  <div class="section-head"><div><h2>Seu certificado</h2><p>Conclua a trilha ativa para liberar a emissão.</p></div></div>
  <section class="card certificate-teaser"><div><span class="cert-icon">✦</span><div><strong>Certificação ${trackLabel(S.profile.track)}</strong><p>${t.modulesDone}/${list.length} módulos validados.</p></div></div><button class="secondary-btn" onclick="location.hash='certificado'">${S.certificates.some(c=>c.track===S.profile.track)?'Ver certificado':'Ver requisitos'}</button></section>`;
}

function trilhas(){
  setNav('trilhas');
  const t=totals();
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">JORNADA PROFISSIONAL</div><h1>Trilha de ${trackLabel(S.profile.track)}</h1><p>${TRACK_SUBTITLES[S.profile.track]}. São ${modules().length} módulos e ${t.lessonTotal} aulas.</p></section>
  <div class="track-switcher">${Object.keys(TRACK_LABELS).map(k=>`<button class="${S.profile.track===k?'active':''}" onclick="switchTrack('${k}')"><b>${TRACK_LABELS[k]}</b><small>${TRACK_SUBTITLES[k]}</small></button>`).join('')}</div>
  <section class="grid">${modules().map(moduleCard).join('')}</section>`;
}

function moduleView(key){
  const m=modules().find(x=>x.id===key);
  if(!m){location.hash='trilhas';return;}
  setNav('trilhas');
  if(!isUnlocked(m)){app.innerHTML='<div class="empty">🔒 Conclua as aulas e o quiz do módulo anterior para desbloquear esta etapa.</div>';return;}
  const p=moduleLessonProgress(m),passed=quizPassed(m);
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()} • MÓDULO ${m.id.split('-')[1]}</div><h1>${safe(m.title)}</h1><p>${safe(m.desc)}</p>
  <div class="module-meta"><span class="pill">${p}% aulas</span><span class="pill">${passed?'Quiz aprovado':'Quiz pendente'}</span><span class="pill">+${m.xp} XP</span></div></section>
  <div class="section-head"><div><h2>Aulas</h2><p>Leia o conteúdo e registre sua conclusão.</p></div></div>
  <section class="lesson-list">${m.lessons.map((l,i)=>`<article class="card lesson ${lessonDone(l[0])?'done':''}">
    <div class="lesson-icon">${lessonDone(l[0])?'✓':String(i+1).padStart(2,'0')}</div>
    <div><strong>${safe(l[1])}</strong><p>${safe(l[2])}</p></div>
    <button class="${lessonDone(l[0])?'ghost-btn':'secondary-btn'}" onclick="completeLesson('${m.id}','${l[0]}')" ${lessonDone(l[0])?'disabled':''}>${lessonDone(l[0])?'Concluída':'Concluir aula'}</button>
  </article>`).join('')}</section>
  <div class="section-head"><div><h2>Validação</h2><p>Aprovação mínima: 70%.</p></div></div>
  <section class="card quiz-card"><div class="lesson-icon">${passed?'✓':'?'}</div><div><strong>Quiz do módulo</strong><p>${passed?'Aprovado. Você já garantiu o XP deste módulo.':p<100?'Conclua as três aulas para liberar o quiz.':`Acertando, você recebe +${m.xp} XP.`}</p></div><button class="primary-btn" onclick="openQuiz('${m.id}')" ${p<100?'disabled':''}>${passed?'Refazer quiz':'Iniciar quiz'}</button></section>`;
}

async function completeLesson(moduleKey,lessonKey){
  const m=modules().find(x=>x.id===moduleKey);if(!m||lessonDone(lessonKey))return;
  S.progress.add(lessonKey);moduleView(moduleKey);
  const {error}=await db.from('capta_academy_progress').insert({user_id:S.user.id,lesson_key:lessonKey,module_key:moduleKey,track:S.profile.track});
  if(error){S.progress.delete(lessonKey);toast('Não foi possível salvar a aula.','error');moduleView(moduleKey);return;}
  toast('+75 XP • Aula salva na nuvem','success');
  await refreshLeaderboard();
}

function openQuiz(moduleKey){
  const m=modules().find(x=>x.id===moduleKey);if(!m)return;
  quizContent.innerHTML=`<div class="quiz-status">QUIZ • ${trackLabel(S.profile.track).toUpperCase()}</div><h2>${safe(m.quiz.q)}</h2>
  ${m.quiz.o.map((o,i)=>`<button class="answer-btn" onclick="answerQuiz('${m.id}',${i})">${String.fromCharCode(65+i)}. ${safe(o)}</button>`).join('')}
  <button class="ghost-btn" onclick="quizDialog.close()">Fechar</button>`;
  quizDialog.showModal();
}

async function answerQuiz(moduleKey,index){
  const m=modules().find(x=>x.id===moduleKey),ok=index===m.quiz.a,prev=S.quiz[moduleKey],attempts=(prev?.attempts||0)+1;
  const score=ok?100:Math.max(prev?.score||0,0),payload={user_id:S.user.id,module_key:moduleKey,track:S.profile.track,score,attempts,passed_at:ok?(prev?.passed_at||new Date().toISOString()):prev?.passed_at||null,updated_at:new Date().toISOString()};
  const {error}=await db.from('capta_academy_quiz_results').upsert(payload,{onConflict:'user_id,module_key'});
  if(error){toast('Erro ao registrar quiz.','error');return;}
  S.quiz[moduleKey]=payload;
  if(ok){
    quizContent.innerHTML=`<div class="brand-mark big success-mark">✓</div><h2>Módulo validado!</h2><p>Resposta correta. ${prev?.score>=70?'Sua aprovação continua registrada.':`Você conquistou <strong>+${m.xp} XP</strong>.`}</p><button class="primary-btn" onclick="quizDialog.close();location.hash='trilhas'">Continuar jornada</button>`;
    await refreshLeaderboard();
  }else{
    quizContent.innerHTML=`<div class="quiz-status">REVISAR E TENTAR NOVAMENTE</div><h2>Quase.</h2><p>A resposta ideal prioriza clareza, respeito e entendimento do cliente.</p><button class="primary-btn" onclick="openQuiz('${m.id}')">Tentar novamente</button>`;
  }
}

async function refreshLeaderboard(){
  const r=await db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}).limit(100);
  if(!r.error)S.leaderboard=r.data||[];
}

function simulador(){
  setNav('simulador');
  const pool=SCENARIOS.filter(s=>s.track===S.profile.track),s=pool[Math.floor(Math.random()*pool.length)]||SCENARIOS[0];
  window.__scenario=s;
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">SIMULADOR DE CAMPO</div><h1>Decida em segundos.</h1><p>Treine cenários reais da função de ${trackLabel(S.profile.track)}. O objetivo é praticar escolhas profissionais, claras e respeitosas.</p></section>
  <section class="sim-stage card"><div class="sim-kicker">CENÁRIO</div><h2>${safe(s.q)}</h2><div class="answer-stack">${s.answers.map((a,i)=>`<button onclick="answerScenario(${i})"><span>${String.fromCharCode(65+i)}</span>${safe(a[0])}</button>`).join('')}</div><div id="simFeedback"></div></section>
  <section class="stats mini"><div class="stat-card"><small>Acertos</small><strong>${S.sim.hits||0}</strong></div><div class="stat-card"><small>Tentativas</small><strong>${S.sim.total||0}</strong></div><div class="stat-card"><small>Precisão</small><strong>${S.sim.total?Math.round(S.sim.hits/S.sim.total*100):0}%</strong></div></section>`;
}

async function answerScenario(i){
  const s=window.__scenario;if(!s)return;
  const ok=!!s.answers[i][1],hits=(S.sim.hits||0)+(ok?1:0),total=(S.sim.total||0)+1;
  S.sim={hits,total};
  document.querySelector('#simFeedback').innerHTML=`<div class="feedback ${ok?'ok':'no'}"><strong>${ok?'Boa decisão.':'Melhor opção disponível:'}</strong><p>${safe(s.tip)}</p><button class="secondary-btn" onclick="simulador()">Próximo cenário</button></div>`;
  const {error}=await db.from('capta_academy_sim_results').upsert({user_id:S.user.id,hits,total,updated_at:new Date().toISOString()},{onConflict:'user_id'});
  if(error)toast('Resultado não sincronizado.','error');
}

function ranking(){
  setNav('ranking');
  const filter=window.__rankTrack||'all',rows=S.leaderboard.filter(x=>filter==='all'||x.track===filter).slice(0,30),me=S.leaderboard.find(x=>x.user_id===S.user.id),myPos=S.leaderboard.findIndex(x=>x.user_id===S.user.id)+1;
  app.innerHTML=`<section class="hero compact"><div class="eyebrow">RANKING AO VIVO</div><h1>Performance que aparece.</h1><p>XP vem de aulas concluídas e quizzes aprovados. O ranking é recalculado pelo banco.</p></section>
  <section class="my-rank card"><div><small>SUA POSIÇÃO GERAL</small><strong>${myPos?`#${myPos}`:'—'}</strong></div><div><small>SEU XP</small><strong>${(me?.xp||totals().xp).toLocaleString('pt-BR')}</strong></div><div><small>TRILHA</small><strong>${trackLabel(S.profile.track)}</strong></div></section>
  <div class="rank-filters"><button class="${filter==='all'?'active':''}" onclick="setRankFilter('all')">Geral</button>${Object.keys(TRACK_LABELS).map(k=>`<button class="${filter===k?'active':''}" onclick="setRankFilter('${k}')">${TRACK_LABELS[k]}</button>`).join('')}</div>
  <section class="leaderboard">${rows.length?rows.map((r,i)=>`<div class="rank-row ${r.user_id===S.user.id?'me':''}"><div class="rank-pos">${i<3?['🥇','🥈','🥉'][i]:`#${i+1}`}</div><div class="rank-avatar">${safe((r.display_name||'P').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase())}</div><div class="rank-name"><strong>${safe(r.display_name)}</strong><span>${trackLabel(r.track)} • ${r.lessons_completed} aulas</span></div><div class="rank-xp"><strong>${Number(r.xp).toLocaleString('pt-BR')}</strong><small>XP</small></div></div>`).join(''):'<div class="empty">Ainda não há profissionais neste filtro.</div>'}</section>`;
}

function perfil(){
  setNav('perfil');
  const t=totals(),cert=S.certificates.find(c=>c.track===S.profile.track);
  app.innerHTML=`<section class="profile-hero card"><div class="profile-avatar">${initials()}</div><div><div class="eyebrow">${trackLabel(S.profile.track).toUpperCase()}</div><h1>${safe(S.profile.display_name)}</h1><p>${safe(S.user.email)}</p></div></section>
  <section class="stats mini"><div class="stat-card"><small>XP</small><strong>${t.xp.toLocaleString('pt-BR')}</strong></div><div class="stat-card"><small>Aulas</small><strong>${t.done}</strong></div><div class="stat-card"><small>Módulos</small><strong>${t.modulesDone}/${modules().length}</strong></div></section>
  <div class="section-head"><div><h2>Configurações</h2><p>Seu nome e trilha podem ser alterados a qualquer momento.</p></div></div>
  <form id="profileForm" class="card form-card"><label>Nome<input name="name" value="${safe(S.profile.display_name)}" required maxlength="80" /></label><label>Trilha atual<select name="track">${Object.keys(TRACK_LABELS).map(k=>`<option value="${k}" ${S.profile.track===k?'selected':''}>${TRACK_LABELS[k]}</option>`).join('')}</select></label><button class="primary-btn">Salvar alterações</button></form>
  <section class="card action-list"><button onclick="location.hash='certificado'"><span>✦</span><div><strong>${cert?'Meu certificado':'Certificação'}</strong><small>${cert?'Certificado emitido':'Veja os requisitos da trilha'}</small></div><b>›</b></button>${S.isManager?`<button onclick="location.hash='gestor'"><span>▦</span><div><strong>Painel do Gestor</strong><small>Acompanhe equipe e progresso</small></div><b>›</b></button>`:''}<button class="danger-action" onclick="logout()"><span>↪</span><div><strong>Sair da conta</strong><small>Seu progresso continuará salvo</small></div><b>›</b></button></section>`;
  document.querySelector('#profileForm').onsubmit=saveProfile;
}

async function saveProfile(e){
  e.preventDefault();const f=new FormData(e.currentTarget),btn=e.currentTarget.querySelector('button');
  const display_name=String(f.get('name')).trim(),track=String(f.get('track'));setBusy(btn,true,'Salvando...');
  const {data,error}=await db.from('capta_academy_profiles').update({display_name,track,updated_at:new Date().toISOString()}).eq('id',S.user.id).select().single();
  if(error){toast(error.message,'error');setBusy(btn,false);return;}
  S.profile=data;await loadData();toast('Perfil atualizado.','success');perfil();
}

async function switchTrack(track){
  if(!TRACK_LABELS[track]||track===S.profile.track)return;
  const {data,error}=await db.from('capta_academy_profiles').update({track,updated_at:new Date().toISOString()}).eq('id',S.user.id).select().single();
  if(error){toast('Não foi possível trocar de trilha.','error');return;}
  S.profile=data;await loadData();toast(`Trilha ${trackLabel(track)} ativada.`,'success');trilhas();
}

function certificado(){
  setNav('');
  const t=totals(),cert=S.certificates.find(c=>c.track===S.profile.track),ready=t.modulesDone===modules().length;
  if(cert){
    const date=new Date(cert.issued_at).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
    app.innerHTML=`<section class="certificate-page"><div class="certificate card">
      <div class="cert-top"><span class="brand-mark big">C</span><div><b>CAPTA ACADEMY</b><small>CERTIFICADO DIGITAL</small></div></div>
      <div class="cert-seal">✦</div><p class="cert-label">CERTIFICAMOS QUE</p><h1>${safe(S.profile.display_name)}</h1>
      <p>concluiu integralmente a trilha profissional de</p><h2>${trackLabel(cert.track).toUpperCase()}</h2>
      <p class="cert-desc">${TRACK_SUBTITLES[cert.track]}, com aulas, avaliações e prática em simulador.</p>
      <div class="cert-footer"><div><small>EMITIDO EM</small><strong>${date}</strong></div><div><small>CÓDIGO DE VALIDAÇÃO</small><strong>${safe(cert.certificate_code)}</strong></div></div>
    </div><div class="cert-actions"><button class="secondary-btn" onclick="location.hash='perfil'">Voltar</button><button class="primary-btn" onclick="window.print()">Imprimir / Salvar PDF</button></div></section>`;
  }else{
    app.innerHTML=`<section class="hero compact"><div class="eyebrow">CERTIFICAÇÃO</div><h1>Certificação ${trackLabel(S.profile.track)}</h1><p>O certificado é liberado somente quando todas as aulas e todos os quizzes da trilha estiverem concluídos.</p></section>
    <section class="card requirements"><div class="req ${t.done===t.lessonTotal?'done':''}"><span>${t.done===t.lessonTotal?'✓':'○'}</span><div><strong>Todas as aulas</strong><small>${t.done}/${t.lessonTotal} concluídas</small></div></div><div class="req ${t.quizzes===modules().length?'done':''}"><span>${t.quizzes===modules().length?'✓':'○'}</span><div><strong>Todos os quizzes</strong><small>${t.quizzes}/${modules().length} aprovados</small></div></div><div class="req"><span>✦</span><div><strong>XP da trilha</strong><small>${t.xp.toLocaleString('pt-BR')} XP acumulados</small></div></div></section>
    <div class="cert-actions"><button class="secondary-btn" onclick="location.hash='trilhas'">Continuar treinando</button><button class="primary-btn" onclick="issueCertificate()" ${ready?'':'disabled'}>Emitir certificado</button></div>`;
  }
}

async function issueCertificate(){
  const {error}=await db.rpc('capta_academy_issue_certificate',{p_track:S.profile.track});
  if(error){toast(error.message.includes('track_not_completed')?'Finalize a trilha antes de emitir.':'Não foi possível emitir o certificado.','error');return;}
  const r=await db.from('capta_academy_certificates').select('*').eq('user_id',S.user.id).order('issued_at',{ascending:false});if(!r.error)S.certificates=r.data||[];
  toast('Certificado emitido!','success');certificado();
}

async function gestor(){
  if(!S.isManager){location.hash='home';return;}
  setNav('');
  app.innerHTML=`<div class="loader"><div class="spinner"></div><strong>Carregando painel da equipe...</strong></div>`;
  const [profiles,leader,certs]=await Promise.all([
    db.from('capta_academy_profiles').select('*'),
    db.from('capta_academy_leaderboard').select('*').order('xp',{ascending:false}),
    db.from('capta_academy_certificates').select('user_id,track,issued_at')
  ]);
  if(profiles.error||leader.error||certs.error){app.innerHTML='<div class="empty">Não foi possível carregar o painel do gestor.</div>';return;}
  const ps=profiles.data||[],lb=leader.data||[],cs=certs.data||[],avg=lb.length?Math.round(lb.reduce((n,x)=>n+x.xp,0)/lb.length):0;
  app.innerHTML=`<section class="hero compact manager-hero"><div class="eyebrow">SALA DO GESTOR</div><h1>Academy Control Center</h1><p>Acompanhe capacitação, evolução e certificações de toda a equipe.</p></section>
  <section class="stats"><div class="stat-card"><small>Profissionais</small><strong>${ps.length}</strong></div><div class="stat-card"><small>XP médio</small><strong>${avg.toLocaleString('pt-BR')}</strong></div><div class="stat-card"><small>Certificados</small><strong>${cs.length}</strong></div><div class="stat-card"><small>Quizzes aprovados</small><strong>${lb.reduce((n,x)=>n+x.quizzes_passed,0)}</strong></div></section>
  <div class="section-head"><div><h2>Equipe</h2><p>Visão consolidada das trilhas e desempenho.</p></div></div>
  <section class="manager-table card"><div class="table-head"><span>Profissional</span><span>Trilha</span><span>Aulas</span><span>Quizzes</span><span>XP</span></div>
  ${lb.map((r,i)=>`<div class="table-row"><span><b>#${i+1}</b> ${safe(r.display_name)}</span><span>${trackLabel(r.track)}</span><span>${r.lessons_completed}</span><span>${r.quizzes_passed}</span><span><strong>${Number(r.xp).toLocaleString('pt-BR')}</strong></span></div>`).join('')||'<div class="empty">Nenhum profissional iniciou a Academy ainda.</div>'}</section>
  <div class="section-head"><div><h2>Distribuição por trilha</h2></div></div><section class="track-cards">${Object.keys(TRACK_LABELS).map(k=>`<div class="card"><small>${TRACK_LABELS[k]}</small><strong>${ps.filter(p=>p.track===k).length}</strong><span>profissionais</span></div>`).join('')}</section>`;
}

function setRankFilter(k){window.__rankTrack=k;ranking();}
async function logout(){await db.auth.signOut();location.hash='home';}
window.completeLesson=completeLesson;window.openQuiz=openQuiz;window.answerQuiz=answerQuiz;window.answerScenario=answerScenario;window.setRankFilter=setRankFilter;window.switchTrack=switchTrack;window.issueCertificate=issueCertificate;window.logout=logout;window.simulador=simulador;

function renderRoute(){
  if(!S.session){authScreen();return;}
  document.body.classList.remove('auth-mode');
  const r=route();
  if(r==='home'||!r)home();
  else if(r==='trilhas')trilhas();
  else if(r.startsWith('modulo-'))moduleView(r.replace('modulo-',''));
  else if(r==='simulador')simulador();
  else if(r==='ranking')ranking();
  else if(r==='perfil')perfil();
  else if(r==='certificado')certificado();
  else if(r==='gestor')gestor();
  else home();
}

profileBtn.onclick=()=>location.hash='perfil';
managerBtn.onclick=()=>location.hash='gestor';
window.addEventListener('hashchange',renderRoute);
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.querySelector('#installBtn').hidden=true;};
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

(async()=>{
  if(!db){authScreen('Falha ao carregar a conexão segura. Atualize a página.');return;}
  const {data}=await db.auth.getSession();
  await bootSession(data.session);
  db.auth.onAuthStateChange((event,session)=>{
    if(event==='SIGNED_IN'&&session&&session.user.id!==S.user?.id)setTimeout(()=>bootSession(session),0);
    if(event==='SIGNED_OUT')setTimeout(()=>bootSession(null),0);
  });
})();

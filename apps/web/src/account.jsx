import{useEffect,useState}from'react'
import{LogOut,Package,ShieldCheck,User}from'lucide-react'

const SESSION_KEY='scentra-customer'
const statusLabels={PENDING:'Placed',PAID:'Paid',PROCESSING:'Processing',SHIPPED:'Shipped',DELIVERED:'Delivered',CANCELLED:'Cancelled'}
const money=(value=0)=>'\u20A6'+new Intl.NumberFormat('en-NG').format(Number(value)||0)

function loadSession(){try{return JSON.parse(localStorage.getItem(SESSION_KEY)||'null')}catch{return null}}
function saveSession(session){localStorage.setItem(SESSION_KEY,JSON.stringify(session))}
function clearSession(){localStorage.removeItem(SESSION_KEY)}

async function post(path,body){const response=await fetch('/api'+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(data.error||'Something went wrong');return data}
async function apiGet(path,token){const response=await fetch('/api'+path,{headers:token?{Authorization:'Bearer '+token}:{}});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(data.error||'Something went wrong');return data}

async function authMe(token){return apiGet('/auth/me',token)}
async function authOrders(token){return apiGet('/account/orders',token)}

async function refreshSession(session){const data=await post('/auth/refresh',{refreshToken:session.refreshToken});const next={...session,email:data.user?.email||session.email,name:data.user?.name||session.name,token:data.token,refreshToken:data.refreshToken};saveSession(next);return next}

function AuthForm({mode,setMode,busy,setBusy,error,setError,onAuthed}){
  const[form,setForm]=useState({name:'',email:'',password:''})
  const signUp=async()=>{setError('');setBusy(true);try{await post('/auth/signup',{name:form.name.trim(),email:form.email.trim(),password:form.password});const data=await post('/auth/login',{email:form.email.trim(),password:form.password});saveSession({token:data.token,refreshToken:data.refreshToken,email:data.user.email,name:data.user.name});onAuthed()}catch(requestError){setError(requestError.message)}finally{setBusy(false)}}
  const signIn=async()=>{setError('');setBusy(true);try{const data=await post('/auth/login',{email:form.email.trim(),password:form.password});saveSession({token:data.token,refreshToken:data.refreshToken,email:data.user.email,name:data.user.name});onAuthed()}catch(requestError){setError(requestError.message)}finally{setBusy(false)}}
  return <div className='auth-card'><div className='auth-tabs'><button className={mode==='signin'?'active':''} onClick={()=>setMode('signin')}>Sign in</button><button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Create account</button></div>{error&&<div className='auth-note error-note'>{error}</div>}<form onSubmit={event=>{event.preventDefault();mode==='signin'?signIn():signUp()}}>{mode==='signup'&&<label className='field'><span>Full name</span><input value={form.name} onChange={event=>setForm({...form,name:event.target.value})} placeholder='Ada Obi' required minLength={1}/></label>}<label className='field'><span>Email</span><input type='email' value={form.email} onChange={event=>setForm({...form,email:event.target.value})} placeholder='you@example.com' required/></label><label className='field'><span>Password</span><input type='password' value={form.password} onChange={event=>setForm({...form,password:event.target.value})} placeholder='At least 8 characters' required minLength={8}/></label><button className='btn primary full' disabled={busy}>{busy?'Please wait...':mode==='signin'?'Sign in':'Create my account'}</button></form>{mode==='signin'?<p className='auth-switch'>New to Scentra? <button type='button' onClick={()=>setMode('signup')}>Create an account</button></p>:<p className='auth-switch'>Already have an account? <button type='button' onClick={()=>setMode('signin')}>Sign in</button></p>}<p className='auth-secure'><ShieldCheck size={14}/> Secured with Supabase Auth. We never store your password.</p></div>
}

function OrderCard({order}){
  const date=new Date(order.createdAt).toLocaleDateString('en-NG',{day:'numeric',month:'short',year:'numeric'})
  const names=(order.items||[]).map(item=>`${item.qty}× ${item.name}`).join(', ')
  return <div className='order-card'><div className='order-head'><div><p className='order-number'>{order.orderNumber}</p><p className='order-date'>{date}</p></div><span className={'status-chip '+order.status}>{statusLabels[order.status]||order.status}</span></div><p className='order-items'>{names||'Order placed'}</p><div className='order-foot'><span className='order-total'>{money(order.total)}</span><a className='order-track' href={'/track?order='+encodeURIComponent(order.orderNumber)}>Track <Package size={14}/></a></div></div>
}

export function CustomerAccountPage(){
  const[config,setConfig]=useState(null),[session,setSession]=useState(loadSession),[mode,setMode]=useState('signin'),[busy,setBusy]=useState(false),[orders,setOrders]=useState(null),[error,setError]=useState('')
  useEffect(()=>{apiGet('/config').then(setConfig).catch(()=>setConfig({accounts:{ready:false}}))},[])
  useEffect(()=>{if(!session)return;let cancelled=false;const load=async()=>{setOrders(null);try{let current=session;try{await authMe(current.token)}catch(meError){try{current=await refreshSession(current);await authMe(current.token)}catch(refreshError){clearSession();setSession(null);return}}const data=await authOrders(current.token);if(!cancelled)setOrders(data.orders||[])}catch(loadError){if(!cancelled)setError(loadError.message)}};load();return()=>{cancelled=true}},[session])
  const signOut=()=>{clearSession();setSession(null);setOrders(null)}
  if(!config)return <div className='account-page'><div className='account-hero'><p className='eyebrow'>MY SCENTRA</p><h1>Your account</h1></div><div className='auth-card'><p className='auth-loading'>Loading...</p></div></div>
  if(!config.accounts?.ready)return <div className='account-page'><div className='account-hero'><p className='eyebrow'>MY SCENTRA</p><h1>Your account</h1></div><div className='auth-card'><p className='auth-note'>Customer accounts are coming soon. While we finish wiring them up, you can still <a href='/track'>track your order by order number</a>.</p></div></div>
  if(!session)return <div className='account-page'><div className='account-hero'><p className='eyebrow'>MY SCENTRA</p><h1>Your account</h1><p>Track every order and check out faster.</p></div><AuthForm mode={mode} setMode={setMode} busy={busy} setBusy={setBusy} error={error} setError={setError} onAuthed={()=>setSession(loadSession())}/></div>
  return <div className='account-page'><div className='account-hero'><p className='eyebrow'>MY SCENTRA</p><h1>Hello, {session.name||'there'}</h1><p>{session.email}</p></div><div className='account-bar'><button className='btn ghost' onClick={signOut}><LogOut size={15}/> Sign out</button></div>{error&&<div className='auth-note error-note'>{error}</div>}<section className='account-orders'><div className='account-section-head'><User size={16}/><h2>Order history</h2></div>{orders===null?<p className='auth-loading'>Loading your orders...</p>:orders.length===0?<div className='empty-orders'><Package/><p>No orders yet on this account.</p><a className='btn primary' href='/shop'>Start shopping</a></div>:<div className='order-list'>{orders.map(order=><OrderCard order={order} key={order.orderNumber}/>)}</div>}</section></div>
}

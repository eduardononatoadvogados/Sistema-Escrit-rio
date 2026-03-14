import React,{useState} from 'react';
import axios from 'axios';
function EnviarWhatsApp(){
const [numero,setNumero]=useState('');
const [mensagem,setMensagem]=useState('');
const [status,setStatus]=useState('');
const enviar=async()=>{
try{
const res=await axios.post('http://localhost:5000/api/whatsapp/enviar',{numero,mensagem});
setStatus(res.data.message);
}catch(err){setStatus(err.response?.data?.error||'Erro ao enviar');}
};
return <div className='p-4'>
<h1 className='text-xl font-bold mb-2'>Enviar WhatsApp</h1>
<input placeholder='Número do cliente' value={numero} onChange={e=>setNumero(e.target.value)} className='border p-1 m-1'/>
<textarea placeholder='Mensagem' value={mensagem} onChange={e=>setMensagem(e.target.value)} className='border p-1 m-1'/>
<button onClick={enviar} className='bg-green-500 text-white p-2 m-1'>Enviar</button>
<p className='mt-2'>{status}</p>
</div>;
}
export default EnviarWhatsApp;

// Proxy pra rodar o leitor no SEU domínio (Vercel: coloque em /api/inspect.js).
// Guarda a chave no servidor. No leitor.html: INSPECT_ENDPOINT = "/api/inspect".
// Variável de ambiente necessária: ANTHROPIC_API_KEY
export const config = { api: { bodyParser: { sizeLimit: '12mb' } } };

export default async function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  if(req.method === 'OPTIONS') return res.status(200).end();
  if(req.method !== 'POST')   return res.status(405).json({error:'use POST'});
  try{
    const r = await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version':'2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    return res.status(r.status).json(data);
  }catch(e){
    return res.status(500).json({error:String(e)});
  }
}

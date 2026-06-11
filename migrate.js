const OLD_URL = 'https://gjrinxrbjrcriujbgoia.supabase.co';
const OLD_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcmlueHJianJjcml1amJnb2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2ODgyMTUsImV4cCI6MjA5NjI2NDIxNX0.QjEP_N_mPU4KQvG_wGrvvLG_yfhvbUeMV68NB2Ng75k';
const NEW_URL = 'https://geqggqlfaqwpcazbjlxg.supabase.co';
const NEW_KEY = 'sb_publishable_0-oeDbPpCWFX7RICB6mpGA_YR4gChOb';

async function main() {
  console.log('旧プロジェクトからデータ取得中...');
  const res = await fetch(`${OLD_URL}/rest/v1/posts?select=*`, {
    headers: { 'apikey': OLD_KEY, 'Authorization': `Bearer ${OLD_KEY}` }
  });
  const rows = await res.json();
  if (!Array.isArray(rows)) {
    console.error('取得失敗:', rows);
    return;
  }
  console.log(`${rows.length} 件のデータを取得しました`);
  if (rows.length === 0) { console.log('移行するデータがありません'); return; }

  const cleanRows = rows.map(({ id, data }) => ({ id, data }));
  console.log('新プロジェクトにデータを書き込み中...');
  const ins = await fetch(`${NEW_URL}/rest/v1/posts`, {
    method: 'POST',
    headers: {
      'apikey': NEW_KEY,
      'Authorization': `Bearer ${NEW_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(cleanRows)
  });
  if (ins.ok) {
    console.log('✓ データ移行完了！');
  } else {
    const txt = await ins.text();
    console.error('書き込みエラー:', ins.status, txt);
  }
}

main().catch(console.error);

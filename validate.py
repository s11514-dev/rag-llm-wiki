from pathlib import Path
import json, re, sys
root=Path(__file__).resolve().parent
js=(root/'wiki-data.js').read_text(encoding='utf-8')
assert js.startswith('/*'), 'wiki-data.js 格式不符合預期'
wiki=json.loads(re.search(r'window\.RAG_WIKI\s*=\s*(\{.*\})\s*;',js,re.S).group(1))
ids={s['id'] for s in wiki['sources']}
cids={c['id'] for c in wiki['concepts']}
assert len(wiki['sources'])>=5 and len(ids)==len(wiki['sources']), '來源不足或重複'
assert len(cids)==len(wiki['concepts']), '概念 ID 重複'
for concept in wiki['concepts']:
    assert concept['sources'] and set(concept['sources'])<=ids, f'來源錯誤 {concept["id"]}'
    assert set(concept['related'])<=cids, f'關聯錯誤 {concept["id"]}'
for source in wiki['sources']:
    assert set(source['concepts'])<=cids, f'來源概念錯誤 {source["id"]}'
    assert source['url'].startswith('https://'), f'來源網址格式錯誤 {source["id"]}'
manifest=json.loads((root/'ingest-manifest.json').read_text(encoding='utf-8'))
assert {m['source_id'] for m in manifest}==ids, 'manifest 來源清單不符'
assert all((root/m['source_summary']).exists() for m in manifest), '缺少來源摘要檔'
for name in ['index.html','slides.html','site.css','slides.css','slides.js','workflow.md','check-log.md']:
    assert (root/name).exists(), f'缺少 {name}'
slides=(root/'slides.js').read_text(encoding='utf-8')
assert slides.count("name:")==12, '簡報頁數不是 12'
assert "sourceFooter(s)" in slides and "linkConcept(id)" in slides, '簡報缺少來源/概念連結'
print('PASS | 五份資料、來源 URL 與摘要檔：',len(ids))
print('PASS | Wiki 概念頁與交叉連結：',len(cids))
print('PASS | 靜態簡報頁數：12')
print('PASS | Wiki / 簡報共用資料與引用元件')
print('注意：靜態檢查不等於瀏覽器互動或 GitHub Pages 線上部署測試')

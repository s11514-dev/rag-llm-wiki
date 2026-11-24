# RAG 新手 Wiki + 教學型 HTML 簡報

> 主題：RAG 是什麼？讓 AI 學會先查資料再回答。
>
> 給完全沒接觸過 RAG 的人，一份可以查詢的靜態 Wiki 和 12 頁教學簡報。

## 立即打開

- `index.html`：LLM 輔助 Wiki 成果（可搜尋、可點選概念、可回查來源）。
- `slides.html`：可用滑鼠上一頁／下一頁、鍵盤左右方向鍵操作的教學簡報，第 11 頁有互動問答。
- 不需要 API Key、不需要 npm 安裝、也不需要網路（外部來源連結本身需網路）。

## 來源與對應

來源共有 5 份：`S1` 研究論文、`S2` IBM、`S3` AWS、`S4` Microsoft、`S5` Google Cloud。每份來源的 LLM 改寫摘要保存在 `source-notes/`，詳細登錄見 `ingest-manifest.json`。`wiki-data.js` 是 Wiki 與簡報共同使用的唯一知識檔。

> 注意：這是 **LLM 輔助編寫的靜態 Wiki 原型**，不是持續連線到模型、能自行 ingest 新資料的系統。若課堂要求使用指定的 LLM Wiki 工具，仍需把 5 份摘要實際匯入該工具，並補上操作截圖／紀錄。

## GitHub Pages 免費部署（手動）

1. 在 GitHub 建一個 **Public** repository，例如 `rag-llm-wiki`。
2. 進入 repository → `Add file` → `Upload files`。
3. 上傳專案資料夾中的**所有檔案與 `source-notes` 子目錄**（`index.html` 必須在儲存庫根目錄，不要再包一層資料夾）。
4. Commit changes。
5. 到 `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch`，Branch 選 `main`、Folder 選 `/ (root)` → Save。
6. 網站預期形式：`https://<GitHub 帳號>.github.io/rag-llm-wiki/`（實際網址依 repo 名稱與 Pages 設定而定）。
7. 簡報網址預期形式：`https://<GitHub 帳號>.github.io/rag-llm-wiki/slides.html`。
8. 開啟連結實際檢查 Wiki、來源超連結、上下頁、測驗及手機版。未完成部署前不得把示例網址當作已發布網址繳交。

## 作業繳交必備檔案

- `workflow.md`：Graph / loop 設計與理由。
- `check-log.md`：本地驗證及修改前後的流程說明，**請補上自己實際瀏覽/上傳的結果**。
- `validate.py`：靜態資料一致性檢查程式；執行 `python3 validate.py`。
- `ingest-manifest.json`：五份摘要的來源、日期與處理方式。
- `submission-template.md`：可依實際結果修改的繳交範本。

## 專案結構

```text
index.html           # Wiki 首頁
slides.html          # 教學 HTML 簡報
wiki-data.js         # 共用的來源與 Wiki 概念頁
slides.js            # 12 頁內容、切換與測驗
site.css, slides.css # 樣式
source-notes/        # 5 份來源改寫摘要
ingest-manifest.json # 來源追蹤紀錄
workflow.md          # Graph / Loop
check-log.md         # 執行和檢查紀錄
validate.py          # 靜態一致性測試
submission-template.md
```

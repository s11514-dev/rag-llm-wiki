/* 單一知識來源：Wiki 與教學簡報共同使用，避免維護兩份不同資料。 */
window.RAG_WIKI = {
  "title": "RAG 新手 Wiki：從先查資料到有依據地回答",
  "subtitle": "以 5 份外部資料整理的 LLM 輔助知識庫",
  "built_at": "2026-11-24",
  "version": "1.0",
  "sources": [
    {
      "id": "S1",
      "author": "Lewis et al.",
      "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      "year": "2020",
      "publisher": "NeurIPS / arXiv",
      "url": "https://arxiv.org/abs/2005.11401",
      "date_accessed": "2026-11-24",
      "summary": "RAG 的代表性原始論文，將語言模型的參數化知識與可檢索的外部知識結合，用於需要大量事實資訊的文字任務。",
      "points": [
        "提出結合預先訓練文字生成模型與外部檢索記憶的做法。",
        "外部記憶在研究中使用 Wikipedia 的密集向量索引。",
        "提醒讀者：原始論文的模型設定，不等於今天每一個 RAG 系統都必須使用相同架構。"
      ],
      "concepts": [
        "overview",
        "retrieval",
        "generation"
      ]
    },
    {
      "id": "S2",
      "author": "Ivan Belcic / IBM",
      "title": "What is retrieval augmented generation (RAG)?",
      "year": "2024；更新 2026",
      "publisher": "IBM Think",
      "url": "https://www.ibm.com/think/topics/retrieval-augmented-generation",
      "date_accessed": "2026-11-24",
      "summary": "說明 RAG 如何連接外部知識庫，並介紹分塊、向量化、檢索、生成與微調之間的差異。",
      "points": [
        "文件切塊太小可能失去上下文，太大又會降低檢索精準度。",
        "檢索器先找到相關段落，再與提問一起交給生成模型。",
        "RAG 從外部讀取資料；微調則改變模型的參數，兩者用途不同但可以搭配。"
      ],
      "concepts": [
        "overview",
        "chunking",
        "embedding",
        "retrieval",
        "comparison"
      ]
    },
    {
      "id": "S3",
      "author": "Amazon Web Services",
      "title": "What is Retrieval-Augmented Generation?",
      "year": "未標示",
      "publisher": "AWS",
      "url": "https://aws.amazon.com/what-is/retrieval-augmented-generation/",
      "date_accessed": "2026-11-24",
      "summary": "解釋外部資料在 RAG 中的作用，並說明使用更新資訊、標註來源及不重新訓練模型等實務優點。",
      "points": [
        "RAG 讓模型在生成文字前參考指定的外部知識。",
        "外部資料可以來自文件、資料庫或 API。",
        "引用與來源追溯有助檢查答案，但不代表答案必然正確。"
      ],
      "concepts": [
        "motivation",
        "overview",
        "generation",
        "usecases"
      ]
    },
    {
      "id": "S4",
      "author": "Microsoft Learn",
      "title": "Retrieval augmented generation (RAG) and indexes",
      "year": "更新 2026",
      "publisher": "Microsoft Foundry",
      "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation",
      "date_accessed": "2026-11-24",
      "summary": "把 RAG 描述為 Retrieve、Augment、Generate 三個階段，並介紹索引、檢索品質評估與安全性限制。",
      "points": [
        "建立索引可以協助進行關鍵字、向量或混合檢索。",
        "應檢查相關段落是否真的支援回答，也要檢查來源標示。",
        "檢索不到資訊、索引設定不佳或來源不可信時，RAG 一樣可能給出錯誤。"
      ],
      "concepts": [
        "retrieval",
        "generation",
        "limitations",
        "evaluation"
      ]
    },
    {
      "id": "S5",
      "author": "Google Cloud",
      "title": "What is Retrieval-Augmented Generation (RAG)?",
      "year": "未標示",
      "publisher": "Google Cloud",
      "url": "https://cloud.google.com/use-cases/retrieval-augmented-generation",
      "date_accessed": "2026-11-24",
      "summary": "提供 RAG 的入門總覽，強調外部搜尋、具來源依據的生成，以及檢索效果與回答品質的評估。",
      "points": [
        "RAG 把傳統資訊檢索能力與大型語言模型的生成能力結合。",
        "關鍵字及語意搜尋可以一起使用，以協助找到相關片段。",
        "評估不能只看文句通順，也要看是否符合檢索依據。"
      ],
      "concepts": [
        "overview",
        "embedding",
        "evaluation",
        "usecases"
      ]
    }
  ],
  "concepts": [
    {
      "id": "motivation",
      "name": "為什麼需要 RAG？",
      "category": "入門",
      "intro": "大型語言模型不一定知道最新、私有或非常專門的資訊；而且有時會把不確定的內容說得很肯定。",
      "details": "RAG 的設計目標，是先讓系統找到與問題有關的外部資料，再讓模型參考這些資料回答。這能改善回答的依據，但仍必須驗證。",
      "analogy": "就像考試時，與其只憑印象回答，不如先翻到指定教材的相關頁面。",
      "takeaway": "RAG 是增加『查證依據』的方法，不是百分之百防錯的保證。",
      "sources": [
        "S3",
        "S4"
      ],
      "related": [
        "overview",
        "limitations"
      ]
    },
    {
      "id": "overview",
      "name": "RAG 的核心概念",
      "category": "入門",
      "intro": "RAG 是 Retrieval-Augmented Generation，中文常譯為『檢索增強生成』。",
      "details": "先從外部知識庫檢索相關片段（Retrieve），把片段與問題整合為模型輸入（Augment），最後生成回答（Generate）。",
      "analogy": "提問 → 查筆記 → 帶著筆記解釋答案。",
      "takeaway": "三個關鍵字：檢索、補充上下文、生成。",
      "sources": [
        "S1",
        "S2",
        "S4",
        "S5"
      ],
      "related": [
        "motivation",
        "retrieval",
        "generation"
      ]
    },
    {
      "id": "chunking",
      "name": "資料切塊（Chunking）",
      "category": "建置知識庫",
      "intro": "把長文件分成較短、適合搜尋的片段。",
      "details": "過長的片段不易精準對應問題；太短可能失去句子前後的脈絡。分塊時要兼顧段落完整性與檢索需求。",
      "analogy": "把一本教科書整理成一張張有章節標籤的學習卡片。",
      "takeaway": "切塊不是越小越好，必須保留足夠上下文。",
      "sources": [
        "S2",
        "S4"
      ],
      "related": [
        "embedding",
        "retrieval"
      ]
    },
    {
      "id": "embedding",
      "name": "嵌入向量（Embedding）",
      "category": "建置知識庫",
      "intro": "將句子或段落表示成數字向量，方便比較語意上的相似程度。",
      "details": "使用者問題與文件片段可被轉成向量，系統利用相似度搜尋候選內容。實作上也可能搭配關鍵字搜尋，不是所有 RAG 都只能使用向量。",
      "analogy": "把內容放到一張『語意地圖』上，意思接近的文字可能位於相近區域。",
      "takeaway": "Embedding 是語意搜尋工具，不是 AI 真正理解事實的保證。",
      "sources": [
        "S2",
        "S4",
        "S5"
      ],
      "related": [
        "chunking",
        "retrieval"
      ]
    },
    {
      "id": "retrieval",
      "name": "檢索（Retrieve）",
      "category": "問答階段",
      "intro": "依照問題從知識庫中找出最相關的文章或段落。",
      "details": "可用關鍵字、向量或混合搜尋。找到片段後，還應確認資料是否相關、是否過時，以及是否具有足夠內容。",
      "analogy": "圖書館員先把可能有答案的幾頁資料找出來。",
      "takeaway": "找錯資料，後面的回答通常也會出問題。",
      "sources": [
        "S1",
        "S2",
        "S4"
      ],
      "related": [
        "embedding",
        "generation",
        "evaluation"
      ]
    },
    {
      "id": "generation",
      "name": "增強與生成（Augment / Generate）",
      "category": "問答階段",
      "intro": "把提問與找到的資料放在一起，交給語言模型整理回答。",
      "details": "模型可以依檢索片段產生易讀的解釋，並在答案旁標記來源。若來源沒有答案，應表明資料不足，而不是捏造。",
      "analogy": "拿著剛找到的課本段落，用自己的話講給同學聽，並指出參考哪一頁。",
      "takeaway": "回答要可回溯到證據，不應只看起來合理。",
      "sources": [
        "S1",
        "S3",
        "S4"
      ],
      "related": [
        "retrieval",
        "limitations",
        "evaluation"
      ]
    },
    {
      "id": "comparison",
      "name": "RAG 與微調有何不同？",
      "category": "比較",
      "intro": "RAG 主要為回答提供外部資訊；微調主要透過訓練更新模型參數。",
      "details": "要回答最新公告、企業內部文件等資訊，通常可考慮 RAG；若需要調整模型輸出風格、格式或任務行為，可能考慮微調。兩者不互斥。",
      "analogy": "RAG 像帶著新教材查閱；微調像事先做一段時間的專項訓練。",
      "takeaway": "RAG 不是微調，也不一定要重新訓練 LLM。",
      "sources": [
        "S2",
        "S4"
      ],
      "related": [
        "overview",
        "usecases"
      ]
    },
    {
      "id": "usecases",
      "name": "常見應用情境",
      "category": "應用",
      "intro": "RAG 很適合需要引用指定文件回答問題的情境。",
      "details": "例如：課程講義問答、研究室技術文件查詢、公司內部手冊搜尋、政策或產品說明問答。是否適合使用仍需看資料品質、權限及更新頻率。",
      "analogy": "讓學習助手先看課堂講義，再回答『助教規定的繳交格式是什麼？』",
      "takeaway": "當答案必須依據特定資料來源時，RAG 特別值得考慮。",
      "sources": [
        "S3",
        "S5"
      ],
      "related": [
        "motivation",
        "comparison"
      ]
    },
    {
      "id": "limitations",
      "name": "RAG 的限制",
      "category": "品質檢查",
      "intro": "即使使用 RAG，回答仍可能不完整、不準確或引用不相干的來源。",
      "details": "常見原因有：資料過時、切塊不合理、檢索偏題、來源可信度不足、模型沒有按照證據回答。應避免把 RAG 說成『可以完全消除幻覺』。",
      "analogy": "找到了課本也不代表不會看錯頁、抄錯行。",
      "takeaway": "有引用來源不等於引用正確，還要對照內容。",
      "sources": [
        "S2",
        "S4"
      ],
      "related": [
        "motivation",
        "retrieval",
        "evaluation"
      ]
    },
    {
      "id": "evaluation",
      "name": "如何檢查 RAG 品質？",
      "category": "品質檢查",
      "intro": "檢查的對象不只有最後答案，也要包含『檢索到的資料』。",
      "details": "先問：找到的片段與問題相關嗎？再問：回答是否忠於片段、是否有來源、資料不足時是否誠實告知？最後測試實際操作及畫面呈現。",
      "analogy": "先檢查你找的資料對不對，再檢查你根據資料寫的答案對不對。",
      "takeaway": "把檢查往前移到檢索階段，能少做無效的重生成。",
      "sources": [
        "S4",
        "S5"
      ],
      "related": [
        "retrieval",
        "generation",
        "limitations"
      ]
    }
  ]
};

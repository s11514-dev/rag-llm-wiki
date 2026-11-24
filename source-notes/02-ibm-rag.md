# S2｜What is retrieval augmented generation (RAG)?

- 作者／單位：Ivan Belcic / IBM
- 出處：IBM Think
- 年份：2024；更新 2026
- 原始資料：https://www.ibm.com/think/topics/retrieval-augmented-generation
- 讀取日期：2026-11-24
- 處理方式：LLM 輔助摘要與概念標記，非全文複製。

## 內容摘要（改寫）

說明 RAG 如何連接外部知識庫，並介紹分塊、向量化、檢索、生成與微調之間的差異。

## 核心整理

- 文件切塊太小可能失去上下文，太大又會降低檢索精準度。
- 檢索器先找到相關段落，再與提問一起交給生成模型。
- RAG 從外部讀取資料；微調則改變模型的參數，兩者用途不同但可以搭配。

## 對應 Wiki 概念

overview, chunking, embedding, retrieval, comparison

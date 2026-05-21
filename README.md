# 🎀 りよちゃんプレゼントカタログ

## ページ一覧

| ページ | 内容 | 当選者への送付URL例 |
|---|---|---|
| [catalog_under10000.html](catalog_under10000.html) | 〜10000マイル（79件） | `...catalog_under10000.html?member=Aさん` |
| [catalog_under10000_v2.html](catalog_under10000_v2.html) | 〜10000マイル（79件）コピー | `...catalog_under10000_v2.html?member=Bさん` |
| [catalog_under5000.html](catalog_under5000.html) | 〜5000マイル（8件） | `...catalog_under5000.html?member=Cさん` |

## Gmail通知の設定方法

### ① Googleフォームを作成
1. [Google Forms](https://forms.google.com) で新規フォーム作成
2. 質問を3つ追加：「メンバー名」「商品名」「マイル数」（短文回答）
3. 回答通知設定（フォーム右上 → メール通知 ON）

### ② フォームのentryIDを取得
フォームをプレビューして、入力欄の `name="entry.XXXXXXX"` の番号を確認

### ③ HTMLのPLACEHOLDERを書き換え
各HTMLファイル内の以下を置換：
- `GMAIL_FORM_PLACEHOLDER` → フォームのaction URL
- `entry.MEMBER_ENTRY` → メンバー欄のentry番号
- `entry.PRODUCT_ENTRY` → 商品名欄のentry番号  
- `entry.MILE_ENTRY` → マイル欄のentry番号

### ④ GitHub Pagesで公開
Settings → Pages → Branch: main / (root) → Save

### ⑤ 当選者への送付URL
```
https://ユーザー名.github.io/リポジトリ名/catalog_under10000.html?member=たろうさん
```

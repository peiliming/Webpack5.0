## 📗 プロジェクトの概要

Webpack5 のサンプルアプリケーションです。

### 利用している技術

- Webpack5
- Sass
- Typescript
- ESLint
- Prettier 

## 📦 ディレクトリ構造
```
.
├── README.md
├── dist
├── node_modules
├── package.json
├── src
│   ├── assets
│   ├── blog.html
│   ├── company.html
│   ├── index.html
│   └── ts
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

## 💬 インストール

```
$ node -v
v16.13.1
$ npm install -g yarn
$ yarn
```

## 🖊️ 使い方

```bash
# 開発環境用にビルドする
$ npm dev
# 開発環境用にビルド結果をブラウザで表示する
$ npm start:dev

# 本番環境用にビルドする
$ npm dev
```
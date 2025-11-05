# Recycle Elf — Landing Page (Next.js + Tailwind)

本仓库包含一份可直接部署到 **Vercel** 的 Recycle Elf 落地页源码。

## 快速开始
1. 安装依赖：
```bash
npm i
```

2. 安装页面所需依赖（图标 & 动效）：
```bash
npm i framer-motion lucide-react
```

3. 本地运行：
```bash
npm run dev
# 浏览器访问 http://localhost:3000
```

4. 部署到 Vercel：
- 将本仓库推送到 GitHub/GitLab。
- 在 https://vercel.com 导入该仓库，一键部署，完成后会生成在线 URL。

> 提示：修改代码并 git push 后，Vercel 会自动重新部署。

## 可修改项
- **表单地址**：在 `app/page.tsx` 中搜索 `form action="https://formspree.io/f/your_endpoint"`，替换为你的 Formspree endpoint。
- **Logo 与截图**：Logo 已放在 `public/logo.jpeg`，你可以在顶部导航/页面中替换为自己的图片或增加手机 UI 截图。
- **文案**：Features / Partners / FAQ 文案可按课程要求调整为中文/英文。

## 目录结构
```
app/
  ├─ layout.tsx
  ├─ globals.css
  └─ page.tsx     # 首页（落地页）
public/
  └─ logo.jpeg
tailwind.config.ts
postcss.config.js
tsconfig.json
package.json
```

## 许可证
仅用于课程演示或内部试点。商业使用请联系团队。

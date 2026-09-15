#!/usr/bin/env bash
# 一键部署脚本：创建仓库 + 推送 + 开启 GitHub Pages
# 用法: bash deploy.sh "<CLASSIC_TOKEN>"
# 注意：token 仅通过参数传入，不会写死在脚本里。用后建议在 GitHub 吊销该 token。
set -euo pipefail

TOKEN="${1:-${TOKEN:-}}"
if [ -z "$TOKEN" ]; then
  echo "❌ 用法: bash deploy.sh <CLASSIC_TOKEN>" >&2
  exit 1
fi

OWNER="ELSA-was"
REPO="meimo-hezu"
API="https://api.github.com"
AUTH="Authorization: Bearer $TOKEN"
REPO_URL="https://github.com/$OWNER/$REPO.git"

echo "==> 1/4 校验 token 身份"
LOGIN=$(curl -s -H "$AUTH" -H "Accept: application/vnd.github+json" "$API/user" | grep -o '"login": *"[^"]*"' | head -1)
echo "    身份: $LOGIN"

echo "==> 2/4 创建仓库 $OWNER/$REPO (若已存在则跳过)"
HTTP=$(curl -s -o /tmp/cr.json -w "%{http_code}" -X POST -H "$AUTH" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" \
  -d "{\"name\":\"$REPO\",\"description\":\"毕业后合租，我的舍友都是魅魔？！——现代都市万人迷恋爱修罗场文字游戏（HTML单文件/离线/BGM/R18）\",\"private\":false,\"auto_init\":false}" \
  "$API/user/repos")
if [ "$HTTP" = "201" ]; then
  echo "    仓库已创建 (201)"
elif [ "$HTTP" = "422" ] && grep -q "already exists" /tmp/cr.json; then
  echo "    仓库已存在，跳过创建"
else
  echo "    创建失败 HTTP $HTTP:"; cat /tmp/cr.json; exit 1
fi

echo "==> 3/4 推送 main 分支"
git -c "http.extraHeader=$AUTH" push -u origin main
echo "    推送完成"

echo "==> 4/4 开启 GitHub Pages (source: main /)"
HTTP=$(curl -s -o /tmp/pg.json -w "%{http_code}" -X POST -H "$AUTH" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" \
  -d '{"source":{"branch":"main","path":"/"}}' \
  "$API/repos/$OWNER/$REPO/pages")
if [ "$HTTP" = "201" ] || [ "$HTTP" = "409" ]; then
  echo "    Pages 已开启/已在构建 (HTTP $HTTP)"
else
  echo "    Pages 开启返回 HTTP $HTTP (可稍后在仓库 Settings → Pages 手动开启):"; cat /tmp/pg.json
fi

echo ""
echo "✅ 部署完成！稍候约 30-60 秒构建后访问："
echo "   https://$OWNER.github.io/$REPO/"

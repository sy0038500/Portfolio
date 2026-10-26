#!/usr/bin/env bash
# DUVI Design System Figma 원본 이미지 8개 다운로드
# 실행 위치: React(Vite) 프로젝트 루트. 예: portfolio/
# 사용법: bash download_duvi_design_assets.sh
set -euo pipefail

if [[ ! -f package.json ]] || [[ ! -d public ]]; then
  echo "[오류] package.json, public 폴더가 있는 React 프로젝트 루트에서 실행해 주세요."
  exit 1
fi

DEST="public/assets/DUVI"
mkdir -p "$DEST"

download() {
  local filename="$1"
  local url="$2"
  echo "원본 다운로드: ${filename}"
  curl --fail --location --silent --show-error --retry 2 "$url" -o "$DEST/$filename"
  if [[ ! -s "$DEST/$filename" ]]; then
    echo "[오류] 이미지 저장 실패: $filename"
    exit 1
  fi
}

# Figma node 362:1379 / 1382 / 1386 / 1390 / 1391
# 아래 URLs는 임시 Figma export 링크이며 최초 다운로드 후 로컬 PNG만 사용합니다.
download "ds_years.png" "https://www.figma.com/api/mcp/asset/26b76615-2e68-4269-81ed-85cb9d6e39f8.png"
download "ds_domains.png" "https://www.figma.com/api/mcp/asset/a72088a3-61f2-4aec-a49b-efdf5f2d2115.png"
download "ds_detail.png" "https://www.figma.com/api/mcp/asset/7605f2dc-3535-4fa4-aa5e-ce4716d5adf6.png"
download "ds_ranking_top.png" "https://www.figma.com/api/mcp/asset/8eb5f248-ccae-4413-9fe2-4075edf4b692.png"
download "ds_ranking_bottom.png" "https://www.figma.com/api/mcp/asset/2bce230f-2e39-4a3b-95ad-5121032f0393.png"

# Figma node 362:1394 / 1397 / 1400: Interaction 이미지도 같은 크롭으로 다운로드
download "ds_map_default.png" "https://www.figma.com/api/mcp/asset/b595e1b6-91eb-47bb-9604-ab2f345b7868.png"
download "ds_map_hover.png" "https://www.figma.com/api/mcp/asset/d051723e-380e-4535-94f8-1338738b112b.png"
download "ds_map_selected.png" "https://www.figma.com/api/mcp/asset/5d636b80-7544-4b3f-a05f-25301d7421ea.png"

echo "완료: $DEST 안에 PNG 8개가 생성되었습니다."

# Compass 플러그인 추가
require 'compass/import-once/activate'

# 기본 언어 인코딩 설정
Encoding.default_external = "utf-8"

# 프로젝트 폴더 경로 지정
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

# SASS => CSS 변경 시에 변경되는 아웃풋 스타일 설정
# :expanded
# :nested
# :compact
# :compressed
output_style = :expanded

# 상대 경로 지정 설정
# relative_assets = true

# 변경된 내용 주석 처리 여부
# line_comments = false

# Sass 선호 문법 설정
preferred_syntax = :sass
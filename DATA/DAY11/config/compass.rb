# ------------------------------------------------------------------------
# Compass 설정 참고자료
# http://compass-style.org/help/documentation/configuration-reference/

# ------------------------------------------------------------------------
# Compass 플러그인 추가
require 'compass/import-once/activate'
require 'sass-globbing'
require 'bourbon'

# ------------------------------------------------------------------------
# 기본 언어 인코딩 설정
# Windows 사용자에게 주로 발생하는 오류(언어 인코딩: CP949)
Encoding.default_external = "utf-8"

# ------------------------------------------------------------------------
# 개발 또는 빌드 여부 환경설정
# :development
# :production
environment = :development

# ------------------------------------------------------------------------
# 프로젝트 폴더 경로 지정
http_path       = "/"
css_dir         = "css"
sass_dir        = "sass"
javascripts_dir = "js"
images_dir      = "images"
fonts_dir       = "fonts"

# ------------------------------------------------------------------------
# SASS => CSS 변경 시에 변경되는 아웃풋 스타일 설정
# :expanded
# :nested
# :compact
# :compressed
# output_style = :expanded
output_style = (environment == :production) ? :compressed : :expanded

# ------------------------------------------------------------------------
# 상대 경로 지정 설정
relative_assets = true

# ------------------------------------------------------------------------
# 변경된 내용 주석 처리 여부
line_comments = false

# ------------------------------------------------------------------------
# Sass 선호 문법 설정
preferred_syntax = :sass

# ------------------------------------------------------------------------
# Sourcemap 사용 유무
# sourcemap = true

# ------------------------------------------------------------------------
# 스프라이트 이미지 설정

# generated_images_dir = "images/sprites"
# sprite_load_path     = [images_path]
# sprite_engine        = :chunky_png # :oily_png
# chunky_png_options   = {:compression => Zlib::BEST_COMPRESSION}

# 스프라이트 이미지 생성 엔진 참고URL
# [ chunky_png ] https://github.com/wvanbergen/chunky_png
# [ oily_png ] https://github.com/wvanbergen/oily_png

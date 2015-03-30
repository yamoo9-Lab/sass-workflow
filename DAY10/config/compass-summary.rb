* --------------------------------
* Compass 설치
* --------------------------------
$ gem install compass # 정식 버전 설치
$ gem install compass --pre # 베타 버전 설치

* --------------------------------
* Compass 프로젝트 생성
* --------------------------------
$ compass create {프로젝트이름}
# 옵션 설정
$ compass create {프로젝트이름} --bare
$ compass create {프로젝트이름} --bare -x sass
$ compass create {프로젝트이름} --bare -x sass -s expaneded
$ compass create {프로젝트이름} --bare -x sass -s expaneded --sass-dir "sass" --css-dir "css" --javascripts-dir "js" --images-dir "imgs"

* --------------------------------
* Compass 명령어 정리
* --------------------------------

Compass 설명:
	Compass 스타일시트 프레임워크는 CSS 스타일을 보다 쉽고 강력하게 처리할 수 있도록 도와줍니다. (Sass 활용)

기본 명령어:
	* clean       - sass cache 폴더와 생성된 파일 제거
	* compile     - Sass 파일을 CSS 파일로 변경 (1회)
	* create      - 새로운 Compass 프로젝트를 생성
	* init        - 존재하는 프로젝트 파일에 Compass를 초기 설정
	* watch       - 변경된 Sass 파일을 관찰하여 CSS 파일로 변경 (지속)

보조 명령어:
	* config      - 명령어 옵션에 따라 config.rb 설정 파일 생성
	* extension   - 시스템에 설치된 Compass 익스텐션 목록 관리
	* frameworks  - 사용 가능한 Compass 프레임워크 화면에 출력
	* help        - Compass 명령어 또는 익스텐션 관련 도움말 제공
	* install     - Compass 프로젝트에 익스텐션 도구 설치
	* interactive - Sass 스크립트 인터랙티브하게 실행
	* sprite      - 스프라이트 이미지 생성
	* stats       - 스타일시트 통계 리포트
	* unpack      - 익스텐션 폴더에 위치한 익스텐션 도구를 프로젝트 폴더에 복사
	* validate    - 생성된 CSS 유효성 검사
	* version     - 버전 정보 출력


전역 옵션 설정:
	-r, --require LIBRARY            명령을 실행하기 전에 루비 라이브러리 호출
	-l, --load FRAMEWORK_DIR         프레임워크 폴더에서 익스텐션 또는 프레임워크를 찾아 로딩
	-L, --load-all FRAMEWORKS_DIR    프레임워크 폴더에서 모든 익스텐션 또는 프레임워크를 찾아 로딩
	-I, --import-path IMPORT_PATH    Sass @omport 지시어로부터 찾은 파일을 IMPORT_PATH 폴더 안에 생성
	-q, --quiet                      저소음 모드?!
	    --trace                      오류 사항 출력
	    --force                      강제 실행
	    --boring                     출력 결과물의 컬러 효과 끄기
	-?, -h, --help                   도움말 출력





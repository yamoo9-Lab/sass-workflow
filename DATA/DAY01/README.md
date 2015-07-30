## 1일차 수업 내용 요약
__수업 진행을 위한 환경설정__<br>
`TeamViewer`, `Ruby`, `Node.js`, `Sass`, `Sublime Text 3`, `Git` & `GitHub`, `Git Bash` 준비

-

1. __원격 Q&A를 위한 [TeamViewer](http://www.teamviewer.com/ko/) 설치__

2. __Sass 사용 환경 설정__<br>
	[Ruby](https://www.ruby-lang.org/ko/), [Node.js](https://nodejs.org/)

3. __Sass 설치__<br>
	[Ruby Sass](http://sass-lang.com/), [Node Sass](https://github.com/sass/node-sass)

4. __에디터 설정__<br>
	- [Sublime Text 3](http://www.sublimetext.com/3)
	- [Package Control](https://packagecontrol.io/)
		- Theme
		- Color Scheme
		- Color Picker
		- IMESupport
		- ConvertToUTF8
		- SideBarEnhancements
		- AdvancedNewFile
		- Emmet
		- Syntax Highlighting for Sass

5. __[Git](http://git-scm.com/) & [GitHub](https://github.com/) 버전 관리 도구__ 설치/준비

6. __[CLI](http://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9_%EC%A4%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4 "Command Line Interface") 명령어 인터페이스 학습__
	- 디렉토리 이동 및 생성하기<br>
	`cd`, `mkdir`
	- 파일 생성<br>
	`touch`, `echo`
	- 내용 확인<br>
	`cat`
	- 목록 출력<br>
	`ls`, `ls -1`
	- 이동/이름 변경<br>
	`mv`
	- 복제<br>
	`cp`
	- 제거<br>
	`rmdir`, `rm`, `rm -rf`

	-

	```sh
	$ cd     # 디렉토리 이동 (change directory)
	$ mkdir  # 디렉토리 생성 (make directory)
	$ touch  # 파일 생성 (make files)
	$ ls     # 목록 출력 (list view)
	$ rm     # 파일 제거 (remove files)
	$ rmdir  # 빈 디렉토리 제거 (remove empty directory)
	$ rm -r  # 하위 디렉토리 지우는 옵션(--recursive)
	$ rm -f  # 강제 제거 옵션(--force)
	$ rm -rf # 하위 디렉토리까지 강제로 제거 옵션
	```

7. __[`subl` 명령어 등록(Windows)](http://yamoo9.net/subl-sublime-text-2-open-command-line-on-windows/)__

---

#### Ruby 버전 확인 및 Gem을 활용한 Sass 설치/제거 명령

```sh
$ ruby --version # ruby -v
$ gem -v
$ gem list

$ gem update --system # 시스템 업데이트

$ gem install sass   # gem i sass 설치
$ gem list sass      # 설치 목록 확인
$ gem uninstall sass # 제거
```

-

#### Sass 명령어

```sh
$ sass -h # 도움말 보기
$ sass [options] [INPUT] [OUTPUT] # 컴파일 (1회)
$ sass --watch [INPUT]:[OUTPUT] # sass -w [INPUT]:[OUTPUT], 지속적 관찰
$ sass -w -t compact [INPUT]:[OUTPUT] # nested expanded compact compressed
```

-

#### Ruby Gem 설치 오류 문제 발생 시, 해결 방법

```sh
$ gem source --add https://s3.amazonaws.com/production.s3.rubygems.org/
$ gem source --remove https://rubygems.org/
```

-

#### Windows 환경에서 한글(CP949) 오류 발생 시, 언어 인코딩 UTF-8로 설정
```sh
$ sass -E utf-8 sass/style.scss css/style.css # 인코딩 옵션 설정 -E utf-8
```

---

#### openWithST3.bat 설치 시 확인사항
windows 8.1 사용자의 경우, `openWithST3.bat` 파일 위에 마우스 오른쪽 클릭하고 관리자 권한(`Run as administrator`)으로 실행하세요.
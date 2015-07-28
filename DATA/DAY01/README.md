## 1일차 수업 내용 요약
__수업 진행을 위한 환경설정__<br>
TeamViewer, Ruby, Node.js, Sass, Sublime Text 3, Git & GitHub, Git Bash 준비

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

7. __[`subl` 명령어 등록](http://yamoo9.net/subl-sublime-text-2-open-command-line-on-windows/)__

---

## openWithST3.bat 설치 시 확인사항
windows 8.1 사용자의 경우, openWithST3.bat 파일 위에 마우스 오른쪽 클릭하고<br>
관리자 권한(Run as administrator)으로 실행하세요.

---

### Ruby Gem 설치 오류 문제 발생 시, 해결책

```sh
gem source --add https://s3.amazonaws.com/production.s3.rubygems.org/
gem source --remove https://rubygems.org/
```

---

### 수업 때 사용한 명령어 모음
```sh
$ ruby --version # ruby -v
$ gem -v
$ gem list

$ gem install sass # gem i sass
$ gem list sass
$ gem uninstall sass
```


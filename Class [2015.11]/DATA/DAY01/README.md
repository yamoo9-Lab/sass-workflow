## 1일차 [`2015.11.17`]

###__환경설정__

`Sass` 강의를 진행하기 위한 환경을 설치 구성해봅니다. (플랫폼/도구 설치)

[`TeamViewer`](http://www.teamviewer.com/ko/), `Ruby`, `Node.js`, `Git`/`GitHub`, `Git Bash`/[`Cmder`](http://cmder.net/), `Sass`, `Sublime Text 3`

![Sass](../../../IMAGES/Sass.png)

-

#### __플랫폼 설치__

- [Ruby](https://www.ruby-lang.org/ko/)
- [Node.js](https://nodejs.org/)

-

#### 플랫폼 별, Sass

- [Ruby Sass](http://sass-lang.com/)
- [Node Sass](https://github.com/sass/node-sass)

-

#### 에디터

- [**Sublime Text 3**](http://www.sublimetext.com/3)
- [**Package Control**](https://packagecontrol.io/)
	- [Material Theme](https://packagecontrol.io/packages/Material%20Theme)
	- [Color Picker](https://packagecontrol.io/packages/ColorPicker)
	- [IMESupport](https://packagecontrol.io/packages/IMESupport)
	- [ConvertToUTF8](https://packagecontrol.io/packages/ConvertToUTF8)
	- [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements)
	- [AdvancedNewFile](https://packagecontrol.io/packages/AdvancedNewFile)
	- [Emmet](https://packagecontrol.io/packages/Emmet)
	- [Syntax Highlighting for Sass](https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20Sass)

-

#### 버전관리 도구

- __[Git](http://git-scm.com/)__
- __[GitHub](https://github.com/)__
- __Octotree__
  - [Chrome](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)
  - [Firefox](https://addons.mozilla.org/ko/firefox/addon/octotree/)

-

#### [CLI](http://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9_%EC%A4%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4 "Command Line Interface") 명령어 인터페이스

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

-

#### `subl` 명령어(Command) 등록

##### Windows

원도우즈 사용자는 [영상 강의](http://yamoo9.net/subl-sublime-text-2-open-command-line-on-windows/)를 보고 `subl` 명령어를 등록해주세요.


##### OSX

```sh
# [sudo] OSX 관리자 권한으로 프로그램을 실행합니다.
# [ln]   link를 생성할 때 쓰는 명령어입니다.
# [-s]   심볼링크를 생성하는 옵션입니다.
# Sublime Text Application 설치 경로에서 `subl` 명령어를 찾아 실행 가능하도록 설정합니다.
$ sudo ln -s /Applications/Sublime\ Text\ 3.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```

---

### Ruby 버전 확인 및 Gem을 활용한 Sass 설치/제거 명령

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

### Sass 명령어

```sh
$ sass -h # 도움말 보기
$ sass [options] [INPUT] [OUTPUT] # 컴파일 (1회)
$ sass --watch [INPUT]:[OUTPUT] # sass -w [INPUT]:[OUTPUT], 지속적 관찰
$ sass -w -t compact [INPUT]:[OUTPUT] # nested expanded compact compressed
```

-

### Ruby Gem 설치 오류 문제 발생 시, 해결 방법

```sh
$ gem source --add https://s3.amazonaws.com/production.s3.rubygems.org/
$ gem source --remove https://rubygems.org/
```

-

### Windows 환경에서 한글(CP949) 오류 발생 시,<br>언어 인코딩 UTF-8로 설정
```sh
$ sass -E utf-8 sass/style.scss css/style.css # 인코딩 옵션 설정 -E utf-8
```

---

### openWithST3.bat 설치 시 확인사항
windows 8.1 사용자의 경우, `openWithST3.bat` 파일 위에 마우스 오른쪽 클릭하고 관리자 권한(`Run as administrator`)으로 실행하세요.
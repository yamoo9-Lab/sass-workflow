## 2일차 [`2015.11.19`]

### Scss ↔ Sass 변환 도구 활용

```js
$ sass-convert [OPTIONS] [INPUT] [OUTPUT]
$ sass-convert scss/style.scss sass/style.sass
```

**sass-convert 명령어 (옵션 활용) 예시**

> 옵션

- `-F  --from` ─── 변경할 파일 문법 (css|sass|scss)
- `-T  --to`  ─── 변경하여 생성할 파일 문법 (sass|scss)
- `-R  --recursive` ─── 하위 디렉토리까지 모두 변환
- `    --indent t`  ─── 스페이스가 아닌, 탭으로 들여쓰기 (2|t)

> 디렉토리 이름

- `sass` ─── [INPUT] 소스 폴더 이름
- `convert` ─── [OUTPUT] 내보낼 폴더 이름

```sh
$ sass-convert -F scss -T sass -R --indent t sass convert

	# 컴파일 결과 출력
    convert sass/common/_classes.scss
     create convert/common/_classes.sass
    convert sass/common/_normalize.scss
     create convert/common/_normalize.sass
    convert sass/sass-part/_comments.scss
     create convert/sass-part/_comments.sass
    convert sass/sass-part/_nested.scss
     create convert/sass-part/_nested.sass
    convert sass/style.scss
     create convert/style.sass
```

-

### Sourcemap 생성/비생성 옵션 설정
```sh
$ sass -w --sourcemap=none sass/style.scss:css/style.css # --sourcemap=none
```

-

### Compass 설치
```sh
$ gem update --system # 시스템 업데이트
$ gem install compass # Compass 설치
```

-

### [[OSX] Permission denied](http://superuser.com/questions/717663/permission-denied-when-trying-to-cd-usr-local-bin-from-terminal)[#](http://unix.stackexchange.com/questions/164185/changed-terminal-permissions)

```sh
$ sudo chown -R $(whoami) /usr/local
$ sudo chown -R $(whoami) /usr/local/bin
$ sudo chmod -R 755 /usr/local/bin
```
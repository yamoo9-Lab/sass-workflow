### .bashrc 문서에 별칭(Alias) 등록

`.bashrc`의 위치: 사용자 계정(`~/`)

```sh
# Alias
alias ls='ls -ph --show-control-chars'
alias lsa='ls -al --color=auto --show-control-chars'
alias cls='clear'

# Sass Alias
alias sass='sass -w -t compact -E utf-8'
alias sass-e='sass -w -t expaned -E utf-8'
alias sass-c='sass -w -t compressed -E utf-8'
```

-

### PSD → HTML/Sass
[Branch PSD2HTML-Sass 참고](https://github.com/yamoo9-Lab/sass-workflow/tree/PSD2HTML-Sass)
# 1차 과제 피드백

1차 과제를 확인하면서 놓친 부분을 모아서 하나의 파일로 만들었습니다.

# Security 관련
- node_modules, package-lock.json의 파일은 Git에 올릴 필요가 없다. <br/>
따라서 .git ignore 파일을 추가해주는 것이 좋다.

> [git ignore란](https://nesoy.github.io/articles/2017-01/Git-Ignore) 특정 파일, 폴더를 commit하지 않고 무시하도록 설정하는 방법입니다. 보통 불필요한 파일, **공개되면 안되는 설정파일이나 보안 등급이 높은 파일**, 로그 파일등을 git ignore에 추가한다.

> node_modules는 프로젝트에 의존되는 모듈을 뫃아 놓은 폴더이다. 즉 `npm install`를 통해서 설치되는 모듈이 이곳에 저장된다. 즉 git에 업로드를 할 필요가 없다.

> [package-lock.json이란](https://medium.com/@trustyoo86/package-lock-json%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-57ba51bdc365)

# Coding Convention 관련

**19.8** Do not pad your blocks with blank lines. eslint: padded-blocks

=> block안에 불필요한 blank line을 추가하지 않는다.

**19.9** Do not use multiple blank lines to pad your code. eslint: no-multiple-empty-lines

=> 2줄 이상의 blank line을 사용하지 않는다.

**6.1** Use single quotes '' for strings. eslint: quotes

=> String을 나타낼때는 ''를 사용한다.
(또는 '', "" 둘 중 하나로 통일한다)


**19.5** End files with a single newline character. eslint: eol-last

=> 파일에 마지막에는 newline character를 추가한다.

**2.1** Use const for all of your references; avoid using var. eslint: prefer-const, no-const-assign

=> var대신 const를 최대한 활용해라.<br/>
(express 및 router 변수도 const로 변경하는 것이 좋다.)


**18.1** Use /** ... */ for multi-line comments.

=> 여러 줄 이상의 주석은 //대신 /** ... */를 이용합니다.

**18.2** Use // for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

주석은 코드와 같은 라인에 입력하지 않습니다.

**8.1** When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint: prefer-arrow-callback, arrow-spacing

=> 콜백 함수로 넘겨지는 익명 함수는 arrow function notation을 이용해야 한다.
> 즉 router.get에서 지정되는 콜백함수는 arrow function notation을 이용하는 것이 좋습니다. 이는 lexical scope와 관련되있습니다.

출처: [airbnb-javascript-code-convention](https://github.com/airbnb/javascript)

# Project Structure 관련

1. index.js의 역할

index.js은 라우팅 경로를 지정해주는 역할을 맡게 됩니다. 제출한 코드들을 보면 많은 분들이 `/api/news`에 해당하는 콜백 함수가 index.js에 지정되어 있습니다. 하지만 이렇게 되면 index.js에서 `/api/news`에 해당하는 비즈니스 로직을 포함하게 됩니다. 즉 index.js가 갖는 라우팅 경로 설정이라는 책임 이외에 비즈니스 로직에 대한 책임을 갖게 됩니다. 이는 나중에 코드가 복잡해지거나 오류를 추적하기 힘들어 지는 원인이 될 수 있습니다. 따라서 index.js는 라우팅 경로 설정이라는 책임만 갖도록 설계하고 비즈니스 로직은 다른 파일로 만들어서 관리하는 것을 지향합니다.
즉 `index.js`내에서는 `router.use`메소드만 사용하는 것을 지향합니다.

> 테스트를 위해서 `index.js`에서 `router.get` 메소드을 이용하는 것은 개발자의 자유입니다.

2. index.js 생략

폴더에 파일을 지정안하면 default로 index파일로 인식하게 됩니다.
따라서 require(./api/index) 는 require(./api)로 표기할 수 있습니다.

./api/index = ./api

3. `require('./news.js')`에서 js 생략

require는 javascript 외부 모듈을 import하는 문법입니다. 즉 require에서 js확장자를 안써줘도 됩니다

`require('./news.js')` => `require('./news')`

4. app.js파일은 최대한 수정하지 않는다.

`app.js`파일은 express에서 생성된 코드입니다. 즉 실제적으로 서버를 동작시키는 다양한 코드들이 연결 되어있습니다. `app.js`를 수정을 하다가 다른 코드를 바꾸거나 변수를 잘못 건드리게 된다면 에러의 원인이 될 수 있습니다. 또한 이런 경우 에러를 고치기 위해서는 `app.js`의 전체 소스코드를 분석해야 하는 상황이 오게 됩니다. 따라서 `app.js`에서 코드를 작성하는 것보다 `routes/index.js`에서 코드를 작성하는 것이 더 안전한 방법입니다.

5. `router.use('./api/blog', require('./api/blog'))`와 같이 2단계 이상 이동 지양

router.use를 이용해서 디렉토리 구조에서 2단계 이동하는 코드가 있습니다. 하지만 2단계 이상 이동하는 코드가 생긴다면 라우팅 경로를 추적하는 과정에서 모든 파일과 관계를 확인해야 하는 어려움이 생길 수 있습니다. 따라서 1단계 이하로만 라우팅을 연결해 준다면 상위/하위 디렉토리만 보면 해당 파일의 라우팅 경로를 확인할 수 있게 됩니다.

6. 불필요한 주석 삭제

아무 의미 없는 주석은 제거합니다.

7. 라우팅 경로의 중복된 경로
```
router.use('/', require('./cafe'));
router.use('/', require('./blog'));
router.use('/',require('./news'));
```
위와 같이 코드를 작성하면 어떤 경우더라도 각각의 세가지 파일에 모두 접근하게 됩니다.

좀 더 자세한 동작 구조는 `.../news`로 request가 들어왔을때 첫 번째 use에서 인식하여서 cafe.js파일로 연결이 됩니다. 하지만 `cafe.js`에서 `/news`에 해당하는 이벤트를 지정 안했기 때문에 다시 현재 파일로 돌아오게 됩니다. 그러면 다음 use코드에 의해서 `blog.js`로 이동하며 `/news`에 해당하는 이벤트가 없기 때문에 돌아온 이후에 `news.js`로 전달하게 됩니다.
이는 `router.use('/news',require('./news'))`에 비해서 비효율적이며 만약 다른 파일에서 `news`를 인식하는 이벤트가 있다면(예를 들어 `/cafe/news`) 오류를 일으키는 요인이 될 수 있습니다. 따라서 라우팅 경로를 제대로 지정하는 것이 중요합니다.

```
router.use('/cafe', require('./cafe'));
router.use('/blog', require('./blog'));
router.use('/news',require('./news'));
```

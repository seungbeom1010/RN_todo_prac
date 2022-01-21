# 일일 일정관리 앱

오늘하루, 일정관리 프로젝트입니다.

## HomeScreen

|First Image|Second Image|Third Image|
|:-:|:-:|:-:|
|<img width="100%" height="50%" src="https://user-images.githubusercontent.com/93919347/150471482-3ca8a335-8b6f-4071-9807-0fdfd4874f79.png">|<img width="100%" height="30%" src="https://user-images.githubusercontent.com/93919347/150471447-ccf909a2-fe54-4cb7-be8d-83760afb6bec.png"> |<img width="100%" height="30%" src="https://user-images.githubusercontent.com/93919347/150471519-43d8d2e3-87e1-4b56-b8b0-5fee3fcba899.png">|

<주요기능>

1. 하루 목표 및 계획하는 일 추가
2. 미션 완료시 해당 미션 탭하여 제거

## 🦊 팀원

[🙋🏻장승범](https://github.com/seungbeom1010)<br>
<br>
<br>

## 🦊 스택

![react](https://img.shields.io/badge/react-17.0.2-brightgreen) ![redux](https://img.shields.io/badge/redux-4.0.5-yellowgreen) ![react-redux](https://img.shields.io/badge/react--redux-7.2.3-yellow) ![react-thunk](https://img.shields.io/badge/react--thunk-2.3.0-red) <br>![router](https://img.shields.io/badge/router-1.3.5-%23a0f48d) ![react-router](https://img.shields.io/badge/react--router-5.2.0-%23f6f990) ![firebase](https://img.shields.io/badge/firebase-8.3.3-blue) ![styled-components](https://img.shields.io/badge/styled--components-5.2.3-blueviolet) <br>![framer-motion](https://img.shields.io/badge/framer--motion-4.1.3-orange) ![eslint](https://img.shields.io/badge/eslint-7.23.0-9cf) ![prettier](https://img.shields.io/badge/prettier-2.2.1-critical) <br> ![polished](https://img.shields.io/badge/polished-4.1.1-%23f9c2fc) ![react-icons](https://img.shields.io/badge/react--icons-4.2.0-%2392fcfc)
<br>
<br>

## 🦊 프로젝트 소개

### 🍽기획 의도

```
✔️ 현대인의 건강한 식습관을 위한 프로젝트!
✔️ 바쁜 일상 속에 잊고 지내기 쉬운 우리의 소중한 한끼를 꼼꼼히 기록하며, 잘못된 식습관을 찾아 고치자!
✔️ 내 몸이 편한 음식을 찾으며 알아가는 소중한 나!
✔️ 좋은 식단을 서로 나누어요!
```

### 🍽구현 기능

```
✔️ 로그인, 회원가입
✔️ 식단 리스트
		🔸 하루 단위로 게시물 확인 가능
		🔸 한끼 당 게시물 확인 가능 : 캐러셀
		🔸 좋아요, 총 칼로리, 물 섭취량 추가 및 표시
		🔸 데일리 리뷰 작성 및 수정 가능
		🔸 끼니별 삭제 또는 날짜 전체 삭제 가능
✔️ 홈(메인 페이지)
		🔸 게시글 인기순, 최신순 정렬
		🔸 게시물 검색
		🔸 좋아요 클릭 및 좋아요 수 확인 가능
		🔸 로그인한 유저 게시물 구별
		🔸 인기순, 최신순, 검색순으로 정렬 가능
		🔸 게시물 클릭 시 끼니 리스트 전부 확인 가능 (캐러셀)
✔️ 캘린더
		🔸 날짜 클릭 시, 해당 날짜 게시물로 이동
		🔸 달력 내 식단 등록된 날짜 표시
		🔸 투데이 버튼 클릭 시, 오늘 날짜로 이동
✔️ 식단 포스팅
		🔸 날짜, 칼로리, 식사 타입, 메뉴 기록
		🔸 사진 드래그 & 드랍 / 썸네일 표시
		🔸 리뷰 작성
		🔸 공개 여부 설정 가능
✔️ 헬스 바
		🔸 최근 3일간의 칼로리, 물 섭취량 표시
✔️ 식단 수정
✔️ 회원 정보 수정

```

<br>
<br>

## 🦊프로젝트 목표

    	🍕 git을 통한 팀원간 협업 연습
    	✔️ git Wiki
    	✔️ git Kanban

    	✔️ 6개월간 여정의 종점을 찍는 마지막 프로젝트
    	✔️ 웹 접근성 학습
    	✔️ firebase 활용한 인증 및 CRUD
    	✔️ react, redux를 활용한 상태관리
    	✔️ redux-thunk, async-await를 활용한 비동기 처리
    	✔️ router를 활용한 SPA 제작

<br>
<br>

## 🦊API

###

    	✔️ 인증 - firebase(authentication)
    	✔️ DB - firebase(firestore), AWS s3

<br>
<br>

## 🦊프로젝트 구조도

```md
├── LICENSE
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│ ├── favicon.svg
│ ├── home-welcome.jpg
│ ├── index.html
│ ├── login-bg.jpg
│ ├── manifest.json
│ ├── robots.txt
│ └── setting-\_image.jpg
├── src
│ ├── api
│ │ ├── amazon.js
│ │ ├── auth.js
│ │ ├── diets.js
│ │ └── firestore.js
│ ├── app
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.styled.js
│ │ └── App.test.js
│ ├── assets
│ │ ├── icons
│ │ │ ├── InputIcons
│ │ │ │ ├── edit.svg
│ │ │ │ ├── edit_black.svg
│ │ │ │ ├── email.svg
│ │ │ │ ├── eye-slash.svg
│ │ │ │ ├── eye.svg
│ │ │ │ ├── framing.svg
│ │ │ │ ├── gender.svg
│ │ │ │ ├── height.svg
│ │ │ │ ├── id.svg
│ │ │ │ ├── lock.svg
│ │ │ │ ├── nickname.svg
│ │ │ │ ├── photo.svg
│ │ │ │ ├── picture.svg
│ │ │ │ └── weight.svg
│ │ │ ├── MenuList
│ │ │ │ ├── donut.svg
│ │ │ │ └── waterDrop.svg
│ │ │ └── dropdown.svg
│ │ └── logos
│ │ └── logo1.svg
│ ├── components
│ │ ├── Board
│ │ │ ├── Board.js
│ │ │ └── Board.styled.js
│ │ ├── BoardNavigation
│ │ │ ├── BoardNavigation.js
│ │ │ └── BoardNavigation.styled.js
│ │ ├── Button
│ │ │ ├── Button.js
│ │ │ └── Button.styled.js
│ │ ├── Calendar
│ │ │ ├── Calendar.js
│ │ │ └── Calendar.styled.js
│ │ ├── DailyReview
│ │ │ ├── DailyReview.js
│ │ │ └── DailyReview.styled.js
│ │ ├── DataGroup
│ │ │ ├── DataGroup.js
│ │ │ └── DataGroup.styled.js
│ │ ├── DietCard
│ │ │ ├── DietCard.js
│ │ │ └── DietCard.styled.js
│ │ ├── DragDrop
│ │ │ ├── DragDrop.js
│ │ │ └── DragDrop.styled.js
│ │ ├── Dropdown
│ │ │ ├── Dropdown.js
│ │ │ └── Dropdown.styled.js
│ │ ├── Footer
│ │ │ ├── Footer.js
│ │ │ └── Footer.styled.js
│ │ ├── Form
│ │ │ ├── Form.js
│ │ │ └── Form.styled.js
│ │ ├── HealthBar
│ │ │ ├── HealthBar.js
│ │ │ └── HealthBar.styled.js
│ │ ├── HomeLink
│ │ │ ├── HomeLink.js
│ │ │ └── HomeLink.styled.js
│ │ ├── Icon
│ │ │ ├── Icons.js
│ │ │ └── Icons.styled.js
│ │ ├── Input
│ │ │ ├── Input.js
│ │ │ └── Input.styled.js
│ │ ├── LoginForm
│ │ │ ├── LoginForm.js
│ │ │ └── LoginForm.styled.js
│ │ ├── MealDialog
│ │ │ ├── MealDialog.js
│ │ │ └── MealDialog.styled.js
│ │ ├── MealList
│ │ │ ├── MealList.js
│ │ │ └── MealList.styled.js
│ │ ├── MealWrapper
│ │ │ ├── MealModalGroup.js
│ │ │ └── MealModalGroup.styled.js
│ │ ├── MenuList
│ │ │ ├── MenuList.js
│ │ │ └── MenuList.styled.js
│ │ ├── MenuListBar
│ │ │ ├── MenuListBar.js
│ │ │ └── MenuListBar.styled.js
│ │ ├── MenuListToPostingButton
│ │ │ ├── MenuListToPosting.js
│ │ │ └── MenuListToPosting.styled.js
│ │ ├── Modal
│ │ │ ├── Modal.js
│ │ │ ├── Modal.styled.js
│ │ │ └── MyPhotoView
│ │ ├── MyPhotoView
│ │ │ ├── MyPhotoView.js
│ │ │ └── MyPhotoView.styled.js
│ │ ├── MyReview
│ │ │ ├── MyReview.js
│ │ │ └── MyReview.styled.js
│ │ ├── MyTitle
│ │ │ ├── MyTitle.js
│ │ │ └── MyTitle.styled.js
│ │ ├── Navigation
│ │ │ ├── Navigation.js
│ │ │ └── Navigation.styled.js
│ │ ├── NotFound
│ │ │ ├── NotFound.js
│ │ │ └── NotFound.styled.js
│ │ ├── Portal
│ │ │ ├── Portal.js
│ │ │ └── Portal.styled.js
│ │ ├── Radio
│ │ │ ├── InputRadio.js
│ │ │ └── InputRadio.styled.js
│ │ ├── RadioGroup
│ │ │ ├── RadioGroup.js
│ │ │ └── RadioGroup.styled.js
│ │ ├── ReviewBox
│ │ │ ├── ReviewBox.js
│ │ │ └── ReviewBox.styled.js
│ │ ├── ScrollTopButton
│ │ │ ├── ScrollTopButton.js
│ │ │ └── ScrollTopButton.styled.js
│ │ ├── Setting
│ │ │ ├── Setting.js
│ │ │ └── Setting.styled.js
│ │ ├── SideBar
│ │ │ ├── SideBar.js
│ │ │ └── SideBar.styled.js
│ │ ├── SignUp
│ │ │ ├── SignUpForm.js
│ │ │ └── SignUpForm.styled.js
│ │ ├── SignUpRadioGroup
│ │ │ ├── SignUpRadioGroup.js
│ │ │ └── SignUpRadioGroup.styled.js
│ │ ├── Title
│ │ │ ├── Title.js
│ │ │ └── Title.styled.js
│ │ ├── Toggle
│ │ │ ├── Toggle.js
│ │ │ └── Toggle.styled.js
│ │ ├── UserNavigation
│ │ │ ├── UserNavigation.js
│ │ │ └── UserNavigation.styled.js
│ │ ├── Welcome
│ │ │ ├── Welcome.js
│ │ │ └── Welcome.styled.js
│ │ └── index.js
│ ├── containers
│ │ ├── BoardContainer
│ │ │ └── BoardContainer.js
│ │ ├── CalendarContainer
│ │ │ └── CalendarContainer.js
│ │ ├── HealthBarContainer
│ │ │ └── HealthBarContainer.js
│ │ ├── LogInContainer
│ │ │ └── LogInContainer.js
│ │ ├── MealModalContainer
│ │ │ └── MealModalContainer.js
│ │ ├── MenuListContainer
│ │ │ └── MenuListContainer.js
│ │ ├── PostEditContainer
│ │ │ └── PostEditContainer.js
│ │ ├── PostingContainer
│ │ │ └── PostingContainer.js
│ │ ├── SettingContainer
│ │ │ └── SettingContainer.js
│ │ ├── SignUpContainer
│ │ │ └── SignUpContainer.js
│ │ ├── UserBar
│ │ │ └── UserBar.js
│ │ └── index.js
│ ├── index.css
│ ├── index.js
│ ├── lib
│ │ └── boardUtils.js
│ ├── logo.svg
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.js
│ │ │ └── Home.styled.js
│ │ ├── MyPage
│ │ │ ├── MyPage.js
│ │ │ └── MyPage.styled.js
│ │ ├── PostEdit
│ │ │ ├── PostEditPage.js
│ │ │ └── PostEditPage.styled.js
│ │ ├── PostingPage
│ │ │ ├── PostingPage.js
│ │ │ └── PostingPage.styled.js
│ │ ├── SettingPage
│ │ │ ├── SettingPage.js
│ │ │ └── SettingPage.styled.js
│ │ └── index.js
│ ├── redux
│ │ ├── modules
│ │ │ ├── auth
│ │ │ │ └── auth.js
│ │ │ ├── board.js
│ │ │ ├── healthBar.js
│ │ │ ├── index.js
│ │ │ ├── menuList.js
│ │ │ └── postingMenuList.js
│ │ └── store.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ ├── styles
│ │ ├── a11y.js
│ │ ├── color.js
│ │ ├── font.js
│ │ ├── index.js
│ │ └── reset.js
│ └── utils
│ └── validation
│ ├── DailyReviewValidation.js
│ ├── LogInValidation.js
│ ├── PostingValidation.js
│ └── SignUpValidation.js
└── yarn.lock
```

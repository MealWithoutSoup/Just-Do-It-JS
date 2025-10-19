# Just-Do-It-JS

Vanilla JavaScript로 만든 To-Do List Web Application

![Momentum App](https://img.shields.io/badge/Vanilla-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

## 🎯 주요 기능

### ⏰ 실시간 시계
- 매 초마다 업데이트되는 디지털 시계
- `HH:MM:SS` 형식
- `padStart()`를 활용한 두 자리 포맷팅

### 👤 로컬 스토리지를 활용한 사용자 로그인
- LocalStorage를 활용한 사용자 이름 저장
- 첫 방문 시 이름 입력 폼 표시
- 재방문 시 저장된 이름으로 인사

### ✅ To-Do-List
- LocalStorage를 통한 데이터 저장
- 할 일 추가 및 삭제 기능
- 새로고침 후에도 데이터 유지
- 실시간 UI 업데이트

### 🌈 랜덤 배경 이미지
- 페이지 로드 시마다 다른 배경 이미지
- 5개의 이미지 중 랜덤 선택
- 전체 화면 커버 효과

### 🌤️ 날씨 정보
- Geolocation API로 사용자 위치 자동 감지
- OpenWeatherMap API 연동
- 실시간 날씨 상태 및 온도 표시
- 날씨별 이모지 아이콘 (☀️ 맑음, ☁️ 흐림, 🌧️ 비 등)

### 💬 명언 표시
- 10개의 영감을 주는 명언 컬렉션
- 페이지 로드 시 랜덤 명언 표시
- 명언과 저자 정보 함께 제공

## 🎨 CSS 디자인 시스템

### 레이아웃 구조
```
┌─────────────────────────────────────────┐
│                                   Weather│ (우측 상단 고정)
│                                         │
│                                         │
│              🕐 CLOCK                  │ (화면 중앙)
│                                         │
│           Hello, Username               │ (시계 아래)
│                                         │
│       [Todo Input Field]                │ (인사말 아래)
│       • Todo Item 1              ❌    │
│       • Todo Item 2              ❌    │
│                                         │
│                                         │
│         "Inspiring Quote"               │ (하단 중앙 고정)
│              - Author                   │
└─────────────────────────────────────────┘
```

### 사용 기술
- **Tailwind CSS CDN**: 유틸리티 기반 스타일링
- **Custom CSS**: 세밀한 애니메이션 및 효과
- **Glassmorphism**: 반투명 배경 + 블러 효과

### 핵심 스타일링 요소

#### 1. Glassmorphism 효과
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 2px solid rgba(255, 255, 255, 0.2);
```
- 입력 필드, Todo 항목, 날씨 위젯에 적용
- 배경 이미지가 은은하게 비치는 유리 효과

#### 2. 부드러운 애니메이션

**페이드인 애니메이션**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**슬라이드업 애니메이션**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**스케일 인 애니메이션**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### 3. 순차적 등장 효과
- `.fade-in`: 시계 (0초)
- `.fade-in-delay-1`: 인사말 (0.2초)
- `.fade-in-delay-2`: Todo 섹션 (0.4초)
- `.fade-in-delay-3`: 명언 (0.6초)

#### 4. 인터랙티브 효과

**입력 필드 포커스**
```css
.input-field:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
```

**Todo 항목 호버**
```css
.todo-list li:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}
```

**삭제 버튼 효과**
```css
.todo-list li button:hover {
  background: rgba(255, 59, 48, 1);
  transform: scale(1.1);
}
```

#### 5. 커스텀 스크롤바
```css
.todo-list::-webkit-scrollbar {
  width: 8px;
}
.todo-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
```

#### 6. 배경 오버레이
```css
body::before {
  content: '';
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
```
- 배경 이미지에 어두운 오버레이 추가
- 텍스트 가독성 향상

### 반응형 디자인
- **모바일 (< 768px)**: 축소된 폰트, 적응형 레이아웃
- **데스크탑**: 큰 폰트, 여유로운 간격
- 모든 디바이스에서 최적화된 사용자 경험

### 색상 시스템
- **주 텍스트**: 흰색 (`text-white`)
- **투명 배경**: `rgba(255, 255, 255, 0.1)`
- **강조 요소**: `drop-shadow-2xl`
- **삭제 버튼**: `rgba(255, 59, 48, 0.8)` (빨간색)

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 애니메이션, Glassmorphism
- **Tailwind CSS**: 유틸리티 클래스 기반 스타일링
- **Vanilla JavaScript**: 프레임워크 없는 순수 JS
- **LocalStorage API**: 데이터 영구 저장
- **Geolocation API**: 위치 정보 수집
- **OpenWeatherMap API**: 날씨 데이터

## 📦 프로젝트 구조

```
Just-Do-It-JS/
├── index.html              # 메인 HTML
├── css/
│   └── style.css          # 커스텀 CSS (애니메이션, Glassmorphism)
├── js/
│   ├── clock.js           # 실시간 시계
│   ├── greetings.js       # 사용자 인증
│   ├── todo.js            # Todo 기능
│   ├── quotes.js          # 랜덤 명언
│   ├── background.js      # 배경 이미지
│   └── weather.js         # 날씨 정보
├── img/
│   ├── 0.jpg ~ 4.jpg      # 배경 이미지들
└── README.md
```

## 🚀 실행 방법

1. 프로젝트 클론
```bash
git clone https://github.com/yourusername/Just-Do-It-JS.git
cd Just-Do-It-JS
```

2. 브라우저에서 `index.html` 파일 열기
   - 또는 Live Server 확장 프로그램 사용

3. 위치 정보 접근 허용 (날씨 정보 표시를 위해)

## 🌐 배포
GitHub Pages를 통한 베포

**Made with ❤️ using Vanilla JavaScript**

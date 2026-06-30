export interface Contest {
  title: string;
  category: string;
  dDay: number;
  teamCount?: number;
  thumbnailColor: string;
  targets: string[];
  region: string;
  prize: number;
}

export interface TeamRole {
  name: string;
  filled: boolean;
}

export interface Team {
  teamName: string;
  contestName: string;
  roles: TeamRole[];
  memberCount: number;
  maxMembers: number;
  deadline: string;
  tags?: string[];
}

export interface Award {
  title: string;
  prize: string;
  year: number;
  contestName: string;
  thumbnailColor: string;
  team?: string;
}

export const CONTESTS: Contest[] = [
  { title: "2025 공공데이터 활용 창업 경진대회", category: "창업", dDay: 3, teamCount: 3, thumbnailColor: "#FFF0EB", targets: ["대학생", "일반인"], region: "전국", prize: 2000 },
  { title: "청년 창업 아이디어 공모전", category: "창업", dDay: 5, teamCount: 1, thumbnailColor: "#F0FDF4", targets: ["대학생", "청소년"], region: "서울", prize: 500 },
  { title: "ESG 소셜벤처 공모전", category: "소셜", dDay: 6, teamCount: 2, thumbnailColor: "#DFF7FF", targets: ["일반인", "누구나"], region: "전국", prize: 1000 },
  { title: "AI 서비스 기획 공모전", category: "AI", dDay: 14, teamCount: 5, thumbnailColor: "#F5F5F5", targets: ["대학생", "일반인"], region: "전국", prize: 300 },
  { title: "소셜 임팩트 해커톤", category: "소셜", dDay: 21, teamCount: 4, thumbnailColor: "#FFF0EB", targets: ["대학생"], region: "서울", prize: 200 },
  { title: "핀테크 아이디어 챌린지", category: "핀테크", dDay: 30, teamCount: 2, thumbnailColor: "#DFF7FF", targets: ["일반인", "누구나"], region: "전국", prize: 1500 },
  { title: "제22회 전국 대학생 프로그래밍 대회", category: "IT/SW", dDay: 45, teamCount: 8, thumbnailColor: "#F5F5F5", targets: ["대학생"], region: "전국", prize: 500 },
  { title: "스마트시티 아이디어 공모전", category: "AI", dDay: 60, teamCount: 5, thumbnailColor: "#FFF0EB", targets: ["대학생", "일반인"], region: "경기", prize: 800 },
  { title: "2024 문화체육관광부 창작 공모전", category: "소셜", dDay: 90, teamCount: 2, thumbnailColor: "#F0FDF4", targets: ["누구나"], region: "전국", prize: 300 },
  { title: "그린테크 환경 이노베이션 챌린지", category: "환경", dDay: 12, teamCount: 6, thumbnailColor: "#F0FDF4", targets: ["대학생", "일반인"], region: "전국", prize: 2000 },
  { title: "K-Design 공모전 2025", category: "디자인", dDay: 18, teamCount: 3, thumbnailColor: "#DFF7FF", targets: ["대학생", "누구나"], region: "서울", prize: 500 },
  { title: "부산 스타트업 챌린지", category: "창업", dDay: 25, teamCount: 4, thumbnailColor: "#FFF0EB", targets: ["일반인", "누구나"], region: "부산", prize: 1000 },
  { title: "전국 청소년 IT 경진대회", category: "IT/SW", dDay: 35, teamCount: 7, thumbnailColor: "#F5F5F5", targets: ["청소년"], region: "전국", prize: 200 },
  { title: "헬스케어 AI 해커톤", category: "AI", dDay: 8, teamCount: 9, thumbnailColor: "#F0FDF4", targets: ["대학생", "일반인"], region: "서울", prize: 600 },
  { title: "경기 환경 아이디어 공모전", category: "환경", dDay: 50, teamCount: 2, thumbnailColor: "#DFF7FF", targets: ["누구나"], region: "경기", prize: 150 },
];

export const TEAMS: Team[] = [
  {
    teamName: "데이터 드리머스",
    contestName: "2025 공공데이터 활용 창업 경진대회",
    roles: [
      { name: "기획", filled: true },
      { name: "프론트엔드", filled: true },
      { name: "백엔드", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 2,
    maxMembers: 4,
    deadline: "12/15",
    tags: ["React", "Python"],
  },
  {
    teamName: "그린 이노베이터",
    contestName: "K-Water 환경 공모전",
    roles: [
      { name: "기획", filled: true },
      { name: "프론트엔드", filled: false },
      { name: "백엔드", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 4,
    deadline: "12/20",
    tags: ["환경", "IoT"],
  },
  {
    teamName: "AI 프론티어",
    contestName: "2025 AI 챌린지 해커톤",
    roles: [
      { name: "기획", filled: true },
      { name: "프론트엔드", filled: true },
      { name: "백엔드", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 2,
    maxMembers: 4,
    deadline: "12/10",
    tags: ["ML", "FastAPI"],
  },
  {
    teamName: "스마트시티 팀",
    contestName: "스마트시티 아이디어 공모전",
    roles: [
      { name: "기획", filled: false },
      { name: "프론트엔드", filled: false },
      { name: "백엔드", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 4,
    deadline: "12/18",
    tags: ["UX", "도시계획"],
  },
];

export const AWARDS: Award[] = [
  { title: "도시 열섬 현상 저감을 위한 스마트 그린인프라 플랫폼", prize: "대상", year: 2024, contestName: "스마트시티 공모전", team: "그린빌더스", thumbnailColor: "#FFF0EB" },
  { title: "AI 기반 수어 번역 앱 사인링크", prize: "최우수상", year: 2024, contestName: "AI 챌린지", team: "사인링크팀", thumbnailColor: "#DFF7FF" },
  { title: "지역 소상공인 연결 O2O 플랫폼 로컬핏", prize: "우수상", year: 2023, contestName: "창업 경진대회", team: "로컬핏", thumbnailColor: "#F0FDF4" },
  { title: "대학생 정신건강 관리 앱 마음픽", prize: "장려상", year: 2023, contestName: "헬스케어 공모전", team: "마음팀", thumbnailColor: "#F5F5F5" },
  { title: "블록체인 기반 탄소 크레딧 거래 플랫폼", prize: "대상", year: 2023, contestName: "친환경 이노베이션", team: "그린체인", thumbnailColor: "#FFF0EB" },
  { title: "실버세대 디지털 리터러시 교육 앱", prize: "최우수상", year: 2022, contestName: "사회혁신 공모전", team: "실버브릿지", thumbnailColor: "#DFF7FF" },
  { title: "AI 기반 공공데이터 시각화 대시보드", prize: "최우수상", year: 2024, contestName: "공공데이터 활용 경진대회", team: "데이터비주얼", thumbnailColor: "#F5F5F5" },
  { title: "청각장애인을 위한 AR 자막 안경 프로토타입", prize: "우수상", year: 2024, contestName: "보조기기 아이디어전", team: "씨어팀", thumbnailColor: "#FFF0EB" },
  { title: "농업용 IoT 스마트팜 관리 시스템", prize: "장려상", year: 2022, contestName: "농업기술 공모전", team: "스마트팜러", thumbnailColor: "#F0FDF4" },
];

export const HOME_URGENT_CONTESTS = CONTESTS.slice(0, 4);
export const HOME_RECOMMENDED_CONTESTS = CONTESTS.slice(6, 10);
export const HOME_TEAMS = TEAMS.slice(0, 4);
export const HOME_AWARDS = AWARDS.slice(0, 4);

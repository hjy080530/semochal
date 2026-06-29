import ContestCard from "@/components/ContestCard";
import TeamCard from "@/components/TeamCard";
import AwardCard from "@/components/AwardCard";
import Link from "next/link";

const URGENT_CONTESTS = [
  { title: "2024 공공데이터 활용 창업 경진대회", category: "창업", dDay: 2, teamCount: 3, thumbnailColor: "#FFF0EB" },
  { title: "제13회 K-Water 공모전", category: "환경", dDay: 5, teamCount: 7, thumbnailColor: "#DFF7FF" },
  { title: "2024 AI 챌린지 해커톤", category: "IT·AI", dDay: 7, teamCount: 12, thumbnailColor: "#F0FDF4" },
  { title: "스마트시티 아이디어 공모전", category: "아이디어", dDay: 14, teamCount: 5, thumbnailColor: "#FFF0EB" },
];

const RECOMMENDED_CONTESTS = [
  { title: "제22회 전국 대학생 프로그래밍 대회", category: "IT·AI", dDay: 21, teamCount: 8, thumbnailColor: "#F5F5F5" },
  { title: "2024 문화체육관광부 창작 공모전", category: "문화·예술", dDay: 30, teamCount: 2, thumbnailColor: "#FFF0EB" },
  { title: "대학생 창업 아이디어 경진대회", category: "창업", dDay: 45, teamCount: 6, thumbnailColor: "#F0FDF4" },
  { title: "청년 사회혁신 아이디어 공모전", category: "사회", dDay: 60, thumbnailColor: "#DFF7FF" },
];

const TEAMS = [
  {
    teamName: "데이터 드리머스",
    contestName: "2024 공공데이터 활용 창업 경진대회",
    roles: [
      { name: "개발자", filled: true },
      { name: "기획자", filled: true },
      { name: "디자이너", filled: false },
    ],
    memberCount: 2,
    maxMembers: 3,
    deadline: "12/15",
    tags: ["React", "Python"],
  },
  {
    teamName: "그린 이노베이터",
    contestName: "K-Water 환경 공모전",
    roles: [
      { name: "PM", filled: false },
      { name: "개발자", filled: true },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 3,
    deadline: "12/20",
    tags: ["환경", "IoT"],
  },
  {
    teamName: "AI 프론티어",
    contestName: "2024 AI 챌린지 해커톤",
    roles: [
      { name: "AI 엔지니어", filled: false },
      { name: "백엔드", filled: true },
    ],
    memberCount: 1,
    maxMembers: 2,
    deadline: "12/10",
    tags: ["ML", "FastAPI"],
  },
  {
    teamName: "스마트시티 팀",
    contestName: "스마트시티 아이디어 공모전",
    roles: [
      { name: "기획자", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 3,
    deadline: "12/18",
    tags: ["UX", "도시계획"],
  },
];

const AWARDS = [
  { title: "도시 열섬 현상 저감을 위한 스마트 그린인프라 플랫폼", prize: "대상", year: 2024, contestName: "스마트시티 공모전", thumbnailColor: "#FFF0EB" },
  { title: "AI 기반 수어 번역 앱 사인링크", prize: "최우수상", year: 2024, contestName: "AI 챌린지", thumbnailColor: "#DFF7FF" },
  { title: "지역 소상공인 연결 O2O 플랫폼 로컬핏", prize: "우수상", year: 2023, contestName: "창업 경진대회", thumbnailColor: "#F0FDF4" },
  { title: "대학생 정신건강 관리 앱 마음픽", prize: "장려상", year: 2023, contestName: "헬스케어 공모전", thumbnailColor: "#F5F5F5" },
];

export default function HomePage() {
  return (
    <div className="bg-surface">
      {/* Accent Banner */}
      <div className="bg-primary text-white text-center py-2.5 text-[13px] font-medium">
        🎉 마감 임박 공모전이 4개 있어요! 지금 팀원을 모집하세요.
      </div>

      {/* Hero */}
      <section className="bg-surface-subtle border-b border-divider py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-[36px] font-bold text-text-900 mb-3 leading-tight">
            공모전, 혼자 말고{" "}
            <span className="text-primary">팀으로</span>
          </h1>
          <p className="text-[16px] text-text-600 mb-8">
            세모챌에서 공모전을 찾고, 딱 맞는 팀원을 만나보세요.
          </p>
          <div className="flex items-center max-w-[560px] mx-auto bg-surface border border-border rounded-2xl px-5 py-3 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mr-3">
              <circle cx="8" cy="8" r="5.5" stroke="#999999" strokeWidth="1.5" />
              <path d="M12.5 12.5L16 16" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="공모전, 분야, 팀 이름으로 검색"
              className="flex-1 text-[14px] text-text-900 placeholder-text-400 outline-none bg-transparent"
            />
            <button className="ml-3 px-4 py-1.5 bg-primary text-white text-[13px] font-semibold rounded-xl hover:bg-orange-600 transition-colors">
              검색
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-12 space-y-14">
        {/* 마감 임박 */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[20px] font-bold text-text-900">마감 임박 공모전</h2>
              <p className="text-[13px] text-text-400 mt-0.5">놓치지 마세요, 곧 마감돼요</p>
            </div>
            <Link href="/explore" className="text-[13px] font-medium text-text-600 hover:text-primary transition-colors">
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {URGENT_CONTESTS.map((c) => (
              <ContestCard key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* 관심분야 추천 */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[20px] font-bold text-text-900">관심분야 추천</h2>
              <p className="text-[13px] text-text-400 mt-0.5">내 분야와 딱 맞는 공모전</p>
            </div>
            <Link href="/explore" className="text-[13px] font-medium text-text-600 hover:text-primary transition-colors">
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {RECOMMENDED_CONTESTS.map((c) => (
              <ContestCard key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* 팀원 모집 중 */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[20px] font-bold text-text-900">팀원 모집 중</h2>
              <p className="text-[13px] text-text-400 mt-0.5">지금 바로 합류할 수 있어요</p>
            </div>
            <Link href="/team" className="text-[13px] font-medium text-text-600 hover:text-primary transition-colors">
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {TEAMS.map((t) => (
              <TeamCard key={t.teamName} {...t} />
            ))}
          </div>
        </section>

        {/* 새 수상작 */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[20px] font-bold text-text-900">새 수상작</h2>
              <p className="text-[13px] text-text-400 mt-0.5">최근 등록된 수상 프로젝트</p>
            </div>
            <Link href="/awards" className="text-[13px] font-medium text-text-600 hover:text-primary transition-colors">
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {AWARDS.map((a) => (
              <AwardCard key={a.title} {...a} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

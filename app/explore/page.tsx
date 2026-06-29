import ContestCard from "@/components/ContestCard";

const CATEGORIES = ["전체", "IT·AI", "창업", "환경", "문화·예술", "사회", "과학·기술", "교육", "스포츠"];
const PRIZES = ["전체", "1억 이상", "1000만~1억", "100만~1000만", "소정의 상품"];
const ORGANIZERS = ["전체", "정부·공공기관", "기업", "학교·대학", "비영리단체"];

const CONTESTS = [
  { title: "2024 공공데이터 활용 창업 경진대회", category: "창업", dDay: 2, teamCount: 3, thumbnailColor: "#FFF0EB" },
  { title: "제13회 K-Water 공모전", category: "환경", dDay: 5, teamCount: 7, thumbnailColor: "#DFF7FF" },
  { title: "2024 AI 챌린지 해커톤", category: "IT·AI", dDay: 7, teamCount: 12, thumbnailColor: "#F0FDF4" },
  { title: "스마트시티 아이디어 공모전", category: "아이디어", dDay: 14, teamCount: 5, thumbnailColor: "#FFF0EB" },
  { title: "제22회 전국 대학생 프로그래밍 대회", category: "IT·AI", dDay: 21, teamCount: 8, thumbnailColor: "#F5F5F5" },
  { title: "2024 문화체육관광부 창작 공모전", category: "문화·예술", dDay: 30, teamCount: 2, thumbnailColor: "#FFF0EB" },
  { title: "대학생 창업 아이디어 경진대회", category: "창업", dDay: 45, teamCount: 6, thumbnailColor: "#F0FDF4" },
  { title: "청년 사회혁신 아이디어 공모전", category: "사회", dDay: 60, thumbnailColor: "#DFF7FF" },
  { title: "2024 글로벌 스타트업 챌린지", category: "창업", dDay: 75, teamCount: 4, thumbnailColor: "#FFF0EB" },
  { title: "ICT 이노베이션 스퀘어 해커톤", category: "IT·AI", dDay: 90, teamCount: 9, thumbnailColor: "#F5F5F5" },
  { title: "대한민국 과학기술 공모전", category: "과학·기술", dDay: 120, teamCount: 1, thumbnailColor: "#F0FDF4" },
  { title: "청소년 환경 캠페인 아이디어전", category: "환경", dDay: 180, thumbnailColor: "#DFF7FF" },
];

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar Filter */}
      <aside className="w-[260px] shrink-0 bg-surface-subtle border-r border-border p-6 space-y-8 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">분야</h3>
          <div className="space-y-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  cat === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">시상 규모</h3>
          <div className="space-y-1">
            {PRIZES.map((p) => (
              <button
                key={p}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  p === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">주최</h3>
          <div className="space-y-1">
            {ORGANIZERS.map((org) => (
              <button
                key={org}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  org === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {org}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">마감일</h3>
          <div className="space-y-1">
            {["전체", "7일 이내", "30일 이내", "90일 이내"].map((d) => (
              <button
                key={d}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  d === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Contest Grid */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] font-bold text-text-900">
            전체 공모전 <span className="text-text-400 font-normal text-[15px]">({CONTESTS.length})</span>
          </h1>
          <select className="text-[13px] text-text-600 border border-border rounded-lg px-3 py-1.5 bg-surface outline-none cursor-pointer">
            <option>마감임박순</option>
            <option>최신순</option>
            <option>인기순</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {CONTESTS.map((c) => (
            <ContestCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}

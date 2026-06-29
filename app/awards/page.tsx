import AwardCard from "@/components/AwardCard";

const FILTER_CHIPS = ["전체", "IT·AI", "창업", "환경", "문화·예술", "사회", "과학·기술", "2024", "2023", "2022"];

const AWARDS = [
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

export default function AwardsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-text-900 mb-2">수상작 아카이브</h1>
          <p className="text-[15px] text-text-600">역대 공모전 수상 프로젝트를 모아봤어요</p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-surface-subtle border border-border rounded-2xl px-5 py-3.5 mb-6 max-w-[560px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mr-3">
            <circle cx="8" cy="8" r="5.5" stroke="#999999" strokeWidth="1.5" />
            <path d="M12.5 12.5L16 16" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="수상작, 팀 이름, 공모전으로 검색"
            className="flex-1 text-[14px] text-text-900 placeholder-text-400 outline-none bg-transparent"
          />
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                chip === "전체"
                  ? "bg-primary text-white"
                  : "bg-surface-muted text-text-600 hover:bg-primary-light hover:text-primary"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-5 mb-14">
          {AWARDS.map((a) => (
            <AwardCard key={a.title} {...a} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-primary p-10 text-center text-white">
          <h2 className="text-[22px] font-bold mb-2">수상작을 등록해보세요</h2>
          <p className="text-[15px] opacity-90 mb-6">공모전에서 수상한 프로젝트를 세모챌에 아카이빙하고, 팀원들과 공유해보세요.</p>
          <button className="px-8 py-3 rounded-xl bg-white text-primary text-[15px] font-bold hover:bg-primary-light transition-colors">
            수상작 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

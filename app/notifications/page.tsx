const TABS = ["전체", "팀매칭", "마감", "공고"];

const NOTIFICATIONS = [
  {
    type: "team",
    title: "데이터 드리머스 팀에서 지원 승인",
    body: "2024 공공데이터 활용 창업 경진대회 팀에 합류하게 되었습니다.",
    time: "5분 전",
    unread: true,
  },
  {
    type: "deadline",
    title: "공모전 마감 D-2",
    body: "스크랩한 「2024 AI 챌린지 해커톤」이 이틀 후 마감됩니다.",
    time: "1시간 전",
    unread: true,
  },
  {
    type: "team",
    title: "그린 이노베이터 팀 지원 요청",
    body: "팀원 1명이 디자이너 포지션에 지원했습니다.",
    time: "3시간 전",
    unread: true,
  },
  {
    type: "notice",
    title: "새 공모전 등록",
    body: "관심 분야(IT·AI)에 「2024 글로벌 스타트업 챌린지」가 등록되었습니다.",
    time: "어제",
    unread: false,
  },
  {
    type: "deadline",
    title: "공모전 마감 D-7",
    body: "스크랩한 「K-Water 환경 공모전」이 일주일 후 마감됩니다.",
    time: "어제",
    unread: false,
  },
  {
    type: "team",
    title: "AI 프론티어 팀 지원 결과",
    body: "AI 엔지니어 포지션 지원이 검토 중입니다.",
    time: "2일 전",
    unread: false,
  },
  {
    type: "notice",
    title: "세모챌 업데이트",
    body: "프로필 기능이 업데이트되었습니다. 스택 태그를 추가해보세요.",
    time: "3일 전",
    unread: false,
  },
];

const TYPE_DOT: Record<string, string> = {
  team: "bg-success",
  deadline: "bg-primary",
  notice: "bg-info",
};

export default function NotificationsPage() {
  return (
    <div className="bg-surface-subtle min-h-screen py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[22px] font-bold text-text-900">알림</h1>
          <button className="text-[13px] text-text-400 hover:text-primary transition-colors">
            모두 읽음 처리
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-border mb-6 bg-surface rounded-t-2xl overflow-hidden">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-[14px] font-medium transition-colors border-b-2 ${
                i === 0
                  ? "border-primary text-primary"
                  : "border-transparent text-text-400 hover:text-text-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notification list */}
        <div className="space-y-2">
          {NOTIFICATIONS.map((n, i) => (
            <div
              key={i}
              className={`bg-surface rounded-2xl border p-5 flex gap-4 cursor-pointer hover:border-primary/30 transition-colors ${
                n.unread ? "border-primary/20 bg-primary-light/30" : "border-border"
              }`}
            >
              <div className="mt-1 shrink-0">
                <span className={`block w-2.5 h-2.5 rounded-full ${TYPE_DOT[n.type]} ${n.unread ? "" : "opacity-30"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <p className={`text-[14px] leading-snug ${n.unread ? "font-semibold text-text-900" : "font-medium text-text-600"}`}>
                    {n.title}
                  </p>
                  <span className="text-[11px] text-text-400 shrink-0 mt-0.5">{n.time}</span>
                </div>
                <p className="text-[13px] text-text-600 mt-1 leading-relaxed">{n.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

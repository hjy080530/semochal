import TabBar from "@/components/ui/TabBar";

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
    <div className="min-h-[calc(100vh-56px)] bg-surface">
      <div className="mx-auto w-[720px] py-8">
        <h1 className="text-center text-[22px] font-bold leading-[27px] text-text-900">알림</h1>

        <TabBar
          tabs={TABS}
          className="mt-6 h-10 border-b border-border"
          tabClassName="h-10"
          fill
        />

        <div className="mt-6">
          {NOTIFICATIONS.map((n, i) => (
            <div
              key={i}
              className="flex h-[68px] cursor-pointer items-center border-b border-divider transition-colors hover:bg-surface-subtle"
            >
              <span className={`mr-3 block size-2 shrink-0 rounded-full ${TYPE_DOT[n.type]} ${n.unread ? "" : "opacity-30"}`} />
              <div className="min-w-0 flex-1">
                <p className={`truncate text-[14px] leading-[17px] ${n.unread ? "font-semibold text-text-900" : "font-normal text-text-600"}`}>
                    {n.title}
                </p>
                <p className="mt-1 truncate text-[12px] font-normal leading-[15px] text-text-400">{n.body}</p>
              </div>
              {i === 0 ? (
                <button className="ml-3 h-9 rounded-lg border border-border px-3.5 text-[12px] font-normal leading-[15px] text-text-600">
                  확인
                </button>
              ) : null}
              <span className="sr-only">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

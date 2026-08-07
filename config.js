/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */


 
const CONFIG = {
  
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김범준",
    nameEn: "Groom",
    father: "김동희",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "임수정",
    nameEn: "Bride",
    father: "임종국",
    mother: "김현경",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "12:10",
    venue: "원주 빌라드아모르",
    hall: "르 블랑 포레 4층",
    address: "강원도 원주시 북원로 2888",
    tel: "033-746-1400",
    mapLinks: {
      kakao: "https://place.map.kakao.com/21341701",
      naver: "https://naver.me/FeXRP0Lf"
    }
    
  },
  
 
  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김범준", bank: "카카오뱅크", number: "3333022716101" },
      { role: "아버지", name: "김동희", bank: "우체국", number: "20222602058177" },
    
    ],
    bride: [
      { role: "신부", name: "임수정", bank: "카카오뱅크", number: "3333133603580" },
      { role: "아버지", name: "임종국", bank: "신한은행", number: "52004232352" },
      { role: "어머니", name: "김현경", bank: "신한은행", number: "110395166120" }
    ]
  },



  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김범준 ♥ 임수정 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }

 

};
  
  
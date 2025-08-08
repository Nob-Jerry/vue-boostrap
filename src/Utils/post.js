export const items = [
  {
    id: 1,
    title: 'Tổng quan AI hiện đại: LLM, RAG và ứng dụng thực tế',
    image: 'https://mygpt.vn/wp-content/uploads/2024/07/rag-improve.jpg',
    content:
      'Hiểu kiến trúc LLM, kỹ thuật RAG và các mô hình ứng dụng AI trong doanh nghiệp.',
    detail:
      'AI thế hệ mới xoay quanh mô hình ngôn ngữ lớn và kỹ thuật truy xuất tri thức (RAG). Kết hợp dữ liệu nội bộ, công cụ suy luận và giám sát con người giúp sản phẩm thông minh, an toàn và có thể mở rộng trong bối cảnh thực tế phức tạp.',
  },
  {
    id: 2,
    title: 'Kỹ thuật Prompt Engineering cho lập trình viên',
    image: 'https://nal.vn/wp-content/uploads/2023/11/Prompt-engineering-1.jpg',
    content:
      'Khung tư duy và mẫu prompt giúp tăng độ chính xác, kiểm soát và tái lập.',
    detail:
      'Prompt tốt cần nêu rõ vai trò, mục tiêu, ràng buộc, ví dụ và tiêu chí đánh giá. Tách bước suy luận, kiểm chứng đầu ra và lặp tinh chỉnh dựa trên phản hồi. Tư duy hệ thống giúp quy trình ổn định khi mở rộng quy mô và đội ngũ.',
  },
  {
    id: 3,
    title: 'Xây dựng kiến trúc microservices không hối hận',
    image: 'https://jamstackvietnam.com/uploads/Blog/2023-07-04-14-57-microservices-loi-ich-va-thach-thuc-khi-su-dung-trong-website-jamstack.jpg',
    content:
      'Ranh giới dịch vụ, hợp đồng API, giao tiếp bất đồng bộ và giám sát.',
    detail:
      'Bắt đầu từ monolith mô-đun hóa để hiểu domain, tách dần thành dịch vụ tự chủ. Sử dụng sự kiện và message broker để giảm coupling. Tập trung observability: logs, metrics, tracing để vận hành và tối ưu chi phí hạ tầng.',
  },
  {
    id: 4,
    title: 'Hiệu năng Web: Tối ưu Core Web Vitals theo lộ trình',
    image: 'https://www.toponseek.com/wp-content/uploads/2024/07/core-web-vitals-addy-1.png',
    content:
      'Từ đo lường đến tối ưu: LCP, INP, CLS với chiến thuật thực tế.',
    detail:
      'Phân tích đường tới byte, lazy-load tài nguyên, split mã bằng dynamic import, tối ưu ảnh và font. Theo dõi số liệu thực tế (RUM) và thiết lập ngân sách hiệu năng để kiểm soát chất lượng phát hành liên tục.',
  },
  {
    id: 5,
    title: 'TypeScript thực dụng: Kiểu hóa vừa đủ để tăng tốc',
    image: 'https://ninavietnam.net.vn/upload/filemanager/images/Blog_032025/typescript-introduction.jpg',
    content:
      'Mức độ kiểu hóa hợp lý giúp code an toàn mà không cồng kềnh.',
    detail:
      'Ưu tiên kiểu cho biên API, mô hình dữ liệu và module dùng chung. Tránh lạm dụng generic phức tạp. Sử dụng công cụ kiểm tra kiểu trong CI, đồng thời cho phép “escape hatch” có kiểm soát khi cần tốc độ thử nghiệm.',
  },
  {
    id: 6,
    title: 'CI/CD hiện đại: Từ pipeline đơn giản đến platform',
    image: 'https://encantotek.com/wp-content/uploads/2024/12/hezezlhc.CI_CD_CT_with_Nix_pic1.jpg',
    content:
      'Chuẩn hóa build, test, release và tự động hóa rollback an toàn.',
    detail:
      'Tách pipeline theo module, cache hợp lý, dùng preview environments. Triển khai progressive (blue/green, canary) và giám sát tự động. Platform engineering giúp đội nhóm tự phục vụ mà vẫn tuân thủ tiêu chuẩn.',
  },
  {
    id: 7,
    title: 'Bảo mật ứng dụng Web: Tư duy “secure by default”',
    image: 'https://static.vietnix.vn/wp-content/uploads/2022/07/bao-mat-website-1.webp',
    content:
      'Phòng thủ nhiều lớp: input validation, auth, secrets và supply chain.',
    detail:
      'Áp dụng Content Security Policy, hạn chế quyền token, quét phụ thuộc định kỳ. Nguyên tắc least privilege và tách nhiệm vụ giúp giảm tác động khi có sự cố. Huấn luyện đội ngũ về quy trình phản ứng sự cố.',
  },
  {
    id: 8,
    title: 'Next.js 15: Server Components và hiệu năng thực tế',
    image: 'https://thinhphattpf.com/filemanager/userfiles/posts/2025-05/so-sanh-nextjs-14-va-nextjs-15.webp',
    content:
      'Khai thác streaming, caching và route handlers để tối ưu TTFB.',
    detail:
      'Tổ chức cây route rõ ràng, dùng RSC cho phần đọc nhiều, tận dụng kết hợp ISR và revalidate để cân bằng chi phí. Đo đạc bằng lab + field để tránh tối ưu mù quáng.',
  },
  {
    id: 9,
    title: 'Vue 3 + Vite: Kiến trúc dự án dễ mở rộng',
    image: 'https://cafedev.vn/wp-content/uploads/2024/03/cafedev_6cf647b7-228d-444c-98dd-917a36f42458.png',
    content:
      'Module hoá rõ ràng, alias, auto-import và tổ chức router/store.',
    detail:
      'Tách domain theo feature, dùng composables cho logic dùng lại, thiết lập alias và lazy-load route. Duy trì chuẩn code với ESLint, Prettier, và CI checks nhất quán.',
  },
  {
    id: 10,
    title: 'Kubernetes cho backend hiện đại: Những lưu ý cốt lõi',
    image: 'https://images.viblo.asia/0b267d81-2389-4c23-96d5-08f85cb421a8.png',
    content:
      'Resource request/limit, liveness/readiness và cấu hình rollout.',
    detail:
      'Định cỡ tài nguyên theo số liệu thực, thiết lập probes đúng để giảm downtime. Dùng HPA, Pod Disruption Budget và NetworkPolicy để đạt độ tin cậy và bảo mật cần thiết.',
  },
  {
    id: 11,
    title: 'Performance Budget: Giữ web nhanh khi dự án lớn dần',
    image: 'https://blog.dktcdn.net/files/huong-dan-tao-website-cach-lap-trang-web-2.jpg',
    content:
      'Đặt ngân sách kích thước, số request, thời gian LCP/INP mục tiêu.',
    detail:
      'Tự động kiểm tra trong CI, báo động sớm khi vượt ngưỡng. Kết hợp code-splitting, tree-shaking và tối ưu ảnh để giữ trải nghiệm mượt mà trên thiết bị phổ thông.',
  },
  {
    id: 12,
    title: 'Bun và Deno: Những lựa chọn mới ngoài Node.js',
    image: 'https://statics.cdn.200lab.io/2024/10/so-sanh-bun-nodejs-deno.png',
    content:
      'Tốc độ, built-in tools và mức độ tương thích hệ sinh thái.',
    detail:
      'Bun nổi bật về tốc độ và tích hợp test/bundler. Deno chú trọng bảo mật theo quyền. Đánh giá trade-off theo yêu cầu hiệu năng, đội ngũ và hạ tầng sẵn có.',
  },
  {
    id: 13,
    title: 'Thiết kế API: REST, GraphQL hay tRPC?',
    image: 'https://hackernoon.imgix.net/images/iOvSeC4bWUctj2q3XImABGDqXVO2-q1s3cl9.jpeg',
    content:
      'Chọn công nghệ theo bối cảnh team, sản phẩm và yêu cầu hiệu năng.',
    detail:
      'REST đơn giản, cache tốt; GraphQL linh hoạt cho client phức tạp; tRPC tận dụng TypeScript end-to-end. POC nhanh và đo đạc để đưa quyết định thay vì tranh luận thuần lý thuyết.',
  },
  {
    id: 14,
    title: 'Monorepo thực dụng: Khi nào dùng và dùng thế nào?',
    image: 'https://images.viblo.asia/6ed2d04e-dde1-485a-a10c-7dc6d9a887a8.jpeg',
    content:
      'Quản lý đa package với pnpm, Turbo, changesets và kiểm thử.',
    detail:
      'Monorepo giúp chia sẻ code và chuẩn hoá toolchain. Tuy nhiên cần kiểm soát boundary, caching hợp lý và quy định review để tránh nợ kỹ thuật tích tụ.',
  },
  {
    id: 15,
    title: 'Edge computing: Khi nào nên đẩy logic ra biên?',
    image: 'https://base.vn/wp-content/uploads/2025/05/edge-computing.webp',
    content:
      'Giảm độ trễ, tối ưu chi phí và cải thiện bảo mật dữ liệu khu vực.',
    detail:
      'Phù hợp cho personalisation theo vùng, kiểm tra auth nhẹ, và cache động. Cần cân nhắc cold start, giới hạn runtime và chiến lược đồng bộ dữ liệu.',
  },
  {
    id: 16,
    title: 'Testing chiến lược: Unit, Integration, E2E và Contract',
    image: 'https://testgrid.io/blog/wp-content/uploads/2022/09/End-to-End-Testing-vs.-Integration-Testing-%E2%80%93-7-Key-Differences.webp',
    content:
      'Kim tự tháp kiểm thử hợp lý để cân bằng tốc độ và độ tin cậy.',
    detail:
      'Viết unit test cho logic phức tạp, integration cho module trọng yếu, E2E cho luồng chính. Contract test giữa dịch vụ tránh vỡ tương thích khi phát hành độc lập.',
  },
  {
    id: 17,
    title: 'Shadcn UI + Tailwind: Thiết kế giao diện thống nhất',
    image: 'https://sspark.genspark.ai/cfimages?u1=owxRNqcxG%2BOArG%2FYSAlBsm2dsBxCdQp7IB13E6Tq%2BdplP%2BY04jCPS%2FyNcTM0gze8g%2FGZ1Ta6GMsCWdbEqnx5KlLTHxuQJ0vg%2FsCqlA2d73WALbWXvXHfI04EVeJJjSBQzJiHlkIbIEgzsaPBVZNVw4RfKdbPX%2FXTqXDyP2pnOhaxDNipQoaDovghCdQXJdE%3D&u2=odn1i3mNRlgkT2tF&width=1024',
    content:
      'Thư viện component có thể copy, tuỳ biến cao và dễ bảo trì.',
    detail:
      'Kết hợp token thiết kế, variant theo state và accessibility đầy đủ. Chuẩn hoá typography, spacing, màu để UI đồng nhất trên nhiều tính năng.',
  },
  {
    id: 18,
    title: 'Observability 101: Logs, Metrics, Traces phối hợp',
    image: 'https://statics.cdn.200lab.io/2025/03/observability-vs-monitoring-1.png',
    content:
      'Theo dõi hệ thống hiện đại để chẩn đoán và tối ưu chủ động.',
    detail:
      'Dùng OpenTelemetry chuẩn hoá thu thập; thiết lập dashboards theo SLO; cảnh báo dựa trên lỗi và độ trễ người dùng thực để ưu tiên công việc có tác động.',
  },
  {
    id: 19,
    title: 'Clean Architecture cho ứng dụng Frontend',
    image: 'https://user-images.githubusercontent.com/15076665/143027719-d68bcf1d-758e-42eb-84cb-5a21ac371251.jpeg',
    content:
      'Tách biệt tầng UI, domain và hạ tầng để dễ kiểm thử và mở rộng.',
    detail:
      'Tránh phụ thuộc framework ở lõi domain; UI chỉ là lớp biểu diễn. Adapter kết nối domain với API, storage, router để giảm ràng buộc công nghệ.',
  },
  {
    id: 20,
    title: 'Roadmap học Backend hiện đại trong 6 tháng',
    image: 'https://asia-1-fileserver-2.stringee.com/0/asia-1_1_8EUDSL90C48KY2F/1684134905-backend-roadmap.jpg',
    content:
      'Ngôn ngữ, framework, database, message queue và triển khai.',
    detail:
      'Chọn ngôn ngữ phù hợp, nắm vững HTTP, SQL/NoSQL, caching và hàng đợi. Thực hành triển khai container, giám sát, logging và bảo mật cơ bản để sẵn sàng cho môi trường thực.',
  },
]

export const getStoredPosts = () => {
  try {
    const raw = localStorage.getItem('userPosts')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const saveStoredPosts = (posts) => {
  localStorage.setItem('userPosts', JSON.stringify(posts))
}

export const getAllPosts = () => {
  const stored = getStoredPosts()
  // Ưu tiên bài mới (stored) hiển thị trước
  return [...stored, ...items]
}

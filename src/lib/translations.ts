export type Lang = 'en' | 'kr'

const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      simulation: 'Try Simulation',
      login: 'Login',
      quote: 'Get a Quote',
    },
    hero: {
      badge: 'Warehouse Automation Solutions',
      heading_before: 'The Future of',
      heading_highlight: 'Warehouse Robotics',
      heading_after: 'is Here',
      sub: 'Incheon Robotics presents new standards in logistics automation through innovative technology — maximizing efficiency and precision for your business.',
      cta_primary: 'Try 3D Simulation',
      cta_secondary: 'Get in Touch',
      stats: [
        { value: '3D', label: 'Real-time Simulation' },
        { value: '100%', label: 'Custom Solutions' },
        { value: '24/7', label: 'System Monitoring' },
      ],
    },
    services: {
      badge: 'What We Offer',
      title: 'End-to-End Robotics Solutions',
      subtitle:
        'From simulation to deployment, we provide comprehensive warehouse automation services tailored to your specific needs.',
      items: [
        {
          title: 'Warehouse Robotics',
          description:
            'Advanced robotic systems designed for warehouse environments, optimizing picking, sorting, and transportation tasks.',
        },
        {
          title: '3D Simulation',
          description:
            'Preview robot movements in a 3D environment matching your real-world warehouse before any physical deployment.',
        },
        {
          title: 'Logistics Analytics',
          description:
            'Real-time data analytics and reporting to monitor performance, identify bottlenecks, and continuously optimize operations.',
        },
        {
          title: 'Custom Integration',
          description:
            'Seamless integration with your existing WMS, ERP, and enterprise systems with minimal disruption to operations.',
        },
        {
          title: 'Safety Systems',
          description:
            'Multi-layer safety protocols ensuring human-robot collaboration remains safe and compliant with international standards.',
        },
        {
          title: 'Performance Optimization',
          description:
            'Continuous AI-driven optimization of robot paths and schedules to maximize throughput and minimize energy usage.',
        },
      ],
    },
    projects: {
      badge: 'Our Work',
      title: 'Projects & Portfolio',
      subtitle:
        'Explore our innovative robotics projects transforming warehouse operations across South Korea.',
      view_live: 'View Live Project',
      coming_soon: 'Coming Soon',
      items: [
        {
          title: 'Smart Warehouse Simulation Platform',
          description:
            'A real-time 3D simulation platform that models robot movements and warehouse layouts before physical deployment, reducing setup time significantly.',
          tags: ['3D Simulation', 'Real-time', 'WebGL'],
        },
        {
          title: 'Multi-Robot Coordination System',
          description:
            'AI-powered coordination system that manages a fleet of robots simultaneously, optimizing paths and preventing collisions in real-time.',
          tags: ['AI/ML', 'Fleet Management', 'Path Planning'],
        },
        {
          title: 'Logistics Automation Suite',
          description:
            'End-to-end warehouse management integration connecting robotic systems with WMS and ERP platforms for seamless, unified operation.',
          tags: ['WMS Integration', 'ERP', 'Automation'],
        },
      ],
    },
    about: {
      badge: 'About Us',
      title: 'Pioneering Warehouse Automation in Korea',
      subtitle:
        'A cutting-edge robotics company based at Incheon Global Campus, dedicated to transforming logistics through intelligent automation.',
      mission_title: 'Our Mission',
      mission_p1:
        "At Incheon Robotics, we believe intelligent automation should be accessible to businesses of all sizes. We present new standards in logistics automation through innovative technology, maximizing efficiency and precision to grow our clients' businesses.",
      mission_p2:
        'Our flagship 3D simulation platform lets clients visualize and optimize robot movements in a virtual environment that perfectly mirrors real-world warehouse conditions — before a single robot is deployed.',
      highlights: [
        'Real-world 3D environment simulation',
        'Custom-fit solutions for every warehouse',
        'Continuous optimization with AI',
        'Full lifecycle support & maintenance',
      ],
      stats: [
        { label: 'Founded', value: '2025' },
        { label: 'Location', value: 'Incheon, KR' },
        { label: 'Focus', value: 'Warehouse AI' },
        { label: 'Campus', value: 'Global Campus' },
      ],
      office_label: 'Our Office',
      reg_label: 'Business Registration',
    },
    contact: {
      badge: 'Contact',
      title: 'Get In Touch',
      subtitle:
        "Ready to transform your warehouse operations? Let's discuss how our robotics solutions can work for you.",
      info_title: 'Contact Information',
      info_desc:
        'Reach out to learn how Incheon Robotics can revolutionize your warehouse operations with cutting-edge robotic solutions.',
      email_label: 'Email',
      address_label: 'Address',
      name_label: 'Full Name',
      name_placeholder: 'John Doe',
      email_field_label: 'Email Address',
      email_placeholder: 'john@company.com',
      company_label: 'Company',
      company_placeholder: 'Your Company Name',
      message_label: 'Message',
      message_placeholder: 'Tell us about your warehouse automation needs...',
      send_btn: 'Send Message',
      success_title: 'Message Sent!',
      success_desc: "Thank you for reaching out. We'll get back to you within 24 hours.",
    },
    footer: {
      tagline:
        'Presenting new standards in logistics automation through innovative technology — maximizing efficiency and precision.',
      quick_links: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      reg: 'Reg:',
    },
    login: {
      title: 'Welcome Back',
      subtitle: 'Sign in to your Incheon Robotics account',
      email_label: 'Email Address',
      email_placeholder: 'Enter your email',
      password_label: 'Password',
      password_placeholder: 'Enter your password',
      btn: 'Sign In',
      forgot: 'Forgot password?',
      no_account: "Don't have an account?",
      contact_admin: 'Contact Admin',
      back_home: 'Back to Home',
    },
    quote: {
      cta: 'Get a Quote Now',
      title: 'Request a Free Quote',
      subtitle: "Upload your warehouse floor plan and we'll design a custom robotics solution for you.",
      name_label: 'Full Name',
      name_placeholder: 'John Doe',
      email_label: 'Email Address',
      email_placeholder: 'john@company.com',
      company_label: 'Company',
      company_placeholder: 'Your Company Name',
      message_label: 'Additional Notes',
      message_placeholder: 'Warehouse size, current challenges, automation goals...',
      floorplan_label: 'Warehouse Floor Plan',
      floorplan_hint: 'Drag & drop or click to upload (PNG, JPG, PDF — max 10 MB)',
      floorplan_change: 'Change file',
      submit_btn: 'Submit Quote Request',
      success_title: 'Quote Request Submitted!',
      success_desc: "We'll analyze your floor plan and send a detailed proposal within 48 hours.",
    },
  },

  kr: {
    nav: {
      about: '소개',
      services: '서비스',
      projects: '프로젝트',
      contact: '문의하기',
      simulation: '시뮬레이션 체험',
      login: '로그인',
      quote: '견적 받기',
    },
    hero: {
      badge: '창고 자동화 솔루션',
      heading_before: '',
      heading_highlight: '창고 로보틱스의 미래',
      heading_after: '가 왔습니다',
      sub: '인천로보틱스는 혁신적인 기술을 통해 물류 자동화의 새로운 기준을 제시합니다 — 효율성과 정밀도를 극대화하여 고객사의 비즈니스 성장을 지원합니다.',
      cta_primary: '3D 시뮬레이션 체험',
      cta_secondary: '문의하기',
      stats: [
        { value: '3D', label: '실시간 시뮬레이션' },
        { value: '100%', label: '맞춤형 솔루션' },
        { value: '24/7', label: '시스템 모니터링' },
      ],
    },
    services: {
      badge: '서비스 소개',
      title: '통합 로봇 자동화 솔루션',
      subtitle:
        '시뮬레이션부터 배포까지, 고객사의 니즈에 맞춘 종합 창고 자동화 서비스를 제공합니다.',
      items: [
        {
          title: '창고 로보틱스',
          description:
            '피킹, 분류, 운반 작업을 최적화하는 창고 전용 고성능 로봇 시스템입니다.',
        },
        {
          title: '3D 시뮬레이션',
          description:
            '실제 창고 환경과 동일한 3D 가상 환경에서 로봇 동작을 미리 확인하고 최적화하세요.',
        },
        {
          title: '물류 분석',
          description:
            '실시간 데이터 분석과 리포팅으로 성능을 모니터링하고 운영을 지속 최적화합니다.',
        },
        {
          title: '커스텀 연동',
          description:
            '기존 WMS, ERP 및 기업 시스템과의 원활한 연동으로 운영 중단 없이 도입할 수 있습니다.',
        },
        {
          title: '안전 시스템',
          description:
            '다중 안전 프로토콜로 인간-로봇 협업 환경의 안전성과 국제 기준 준수를 보장합니다.',
        },
        {
          title: '성능 최적화',
          description:
            'AI 기반 경로 및 스케줄 최적화로 처리량을 극대화하고 에너지 소비를 절감합니다.',
        },
      ],
    },
    projects: {
      badge: '프로젝트',
      title: '주요 프로젝트 & 포트폴리오',
      subtitle: '대한민국 창고 운영을 혁신하는 인천로보틱스의 프로젝트를 만나보세요.',
      view_live: '프로젝트 보기',
      coming_soon: '준비 중',
      items: [
        {
          title: '스마트 창고 시뮬레이션 플랫폼',
          description:
            '실물 배포 전 로봇 동작 및 창고 레이아웃을 모델링하는 실시간 3D 시뮬레이션 플랫폼입니다.',
          tags: ['3D 시뮬레이션', '실시간', 'WebGL'],
        },
        {
          title: '다중 로봇 조율 시스템',
          description:
            'AI 기반으로 로봇 군집을 동시에 관리하며, 실시간으로 경로를 최적화하고 충돌을 방지합니다.',
          tags: ['AI/ML', '군집 관리', '경로 계획'],
        },
        {
          title: '물류 자동화 통합 솔루션',
          description:
            'WMS 및 ERP와 로봇 시스템을 연결하는 엔드-투-엔드 창고 관리 통합 솔루션입니다.',
          tags: ['WMS 연동', 'ERP', '자동화'],
        },
      ],
    },
    about: {
      badge: '회사 소개',
      title: '대한민국 창고 자동화의 선두주자',
      subtitle:
        '인천글로벌캠퍼스에 위치한 첨단 로보틱스 기업으로, 지능형 자동화를 통해 물류 산업을 혁신합니다.',
      mission_title: '우리의 미션',
      mission_p1:
        '인천로보틱스는 규모에 상관없이 모든 기업이 지능형 자동화를 도입할 수 있어야 한다고 믿습니다. 혁신적인 기술을 통해 물류 자동화의 새로운 기준을 제시하고, 효율성과 정밀도를 극대화하여 고객사의 성장을 지원합니다.',
      mission_p2:
        '대표 서비스인 3D 시뮬레이션 플랫폼은 실제 창고 환경을 완벽하게 재현한 가상 공간에서 로봇 동작을 미리 시각화하고 최적화할 수 있게 해줍니다 — 로봇을 단 한 대도 배치하기 전에.',
      highlights: [
        '실제 환경 기반 3D 시뮬레이션',
        '창고별 맞춤형 솔루션 제공',
        'AI 기반 지속적 최적화',
        '전 주기 지원 및 유지보수',
      ],
      stats: [
        { label: '설립', value: '2025' },
        { label: '위치', value: '인천, 한국' },
        { label: '분야', value: '창고 AI' },
        { label: '캠퍼스', value: '글로벌 캠퍼스' },
      ],
      office_label: '사무실 위치',
      reg_label: '사업자 등록번호',
    },
    contact: {
      badge: '문의',
      title: '문의하기',
      subtitle:
        '창고 운영 혁신을 준비하셨나요? 저희 로봇 솔루션이 어떻게 도움이 될 수 있는지 상담해 드립니다.',
      info_title: '연락처 정보',
      info_desc:
        '인천로보틱스의 첨단 로봇 솔루션으로 창고 운영을 혁신하는 방법을 알아보세요.',
      email_label: '이메일',
      address_label: '주소',
      name_label: '성함',
      name_placeholder: '홍길동',
      email_field_label: '이메일 주소',
      email_placeholder: 'example@company.com',
      company_label: '회사명',
      company_placeholder: '회사 이름을 입력하세요',
      message_label: '문의 내용',
      message_placeholder: '창고 자동화 도입과 관련하여 궁금한 점을 알려주세요...',
      send_btn: '메시지 보내기',
      success_title: '전송 완료!',
      success_desc: '문의해 주셔서 감사합니다. 24시간 이내에 답변 드리겠습니다.',
    },
    footer: {
      tagline: '혁신적인 기술로 물류 자동화의 새로운 기준을 제시합니다.',
      quick_links: '빠른 링크',
      contact: '연락처',
      rights: 'All rights reserved.',
      reg: '사업자:',
    },
    login: {
      title: '다시 오셨군요',
      subtitle: '인천로보틱스 계정으로 로그인하세요',
      email_label: '이메일 주소',
      email_placeholder: '이메일을 입력하세요',
      password_label: '비밀번호',
      password_placeholder: '비밀번호를 입력하세요',
      btn: '로그인',
      forgot: '비밀번호 찾기',
      no_account: '계정이 없으신가요?',
      contact_admin: '관리자 문의',
      back_home: '홈으로 돌아가기',
    },
    quote: {
      cta: '지금 견적 받기',
      title: '무료 견적 요청',
      subtitle: '창고 도면을 업로드하시면 맞춤형 로봇 솔루션을 설계해 드립니다.',
      name_label: '성함',
      name_placeholder: '홍길동',
      email_label: '이메일 주소',
      email_placeholder: 'example@company.com',
      company_label: '회사명',
      company_placeholder: '회사 이름을 입력하세요',
      message_label: '추가 사항',
      message_placeholder: '창고 규모, 현재 과제 또는 자동화 목표를 알려주세요...',
      floorplan_label: '창고 도면',
      floorplan_hint: '드래그하거나 클릭하여 업로드 (PNG, JPG, PDF — 최대 10MB)',
      floorplan_change: '파일 변경',
      submit_btn: '견적 요청 제출',
      success_title: '견적 요청 완료!',
      success_desc: '도면을 분석하여 48시간 이내에 상세 제안서를 발송해 드립니다.',
    },
  },
} as const

export type Translations = typeof translations.en
export default translations

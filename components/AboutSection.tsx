import Image from "next/image"

export function AboutSection() {
  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/profile.png?height=200&width=200"
          width={200}
          height={200}
          alt="About me"
          className="w-52 h-52 shadow-lg rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold">PROFILE</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">About Me</h1>
          <p className="text-sm text-gray-300">Get to know me better</p>
        </div>
      </div>

      <div className="bg-white/10 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Hello, I'm Jinho Seo</h2>
        <p className="mb-4">
          FastAPI와 Nvidia Triton을 활용한 머신러닝·딥러닝 모델 서빙 경험이 있으며, 백엔드와 MLOps 전반에 대한 실무 역량을 갖추고 있습니다.
        </p>
        <p className="mb-4">
          API 설계부터 배포, 운영까지 전 주기를 직접 경험하며, 안정성과 효율성을 높이는 방법에 대해 지속적으로 고민하고 있습니다.
        </p>
        <p className="mb-4">
          그래프 신경망(GNN)과 사이버 보안, 특히 캐시 사이드채널 공격 탐지와 같은 교차 영역에 깊은 관심을 가지고 있으며, 이와 관련된 기술을 학습하고 적용해보고자 꾸준히 노력하고 있습니다. 
        </p>
        <p className="mb-4">
          기술적인 깊이와 더불어, 개발자에게 가장 중요한 역량 중 하나는 커뮤니케이션이라고 생각합니다. 문제 해결을 위한 능동적인 소통과 협업을 중시하며, 더 나은 서비스를 만들기 위해 끊임없이 학습하고 성장하고자 합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <div className="mb-4">
            <p className="font-semibold">Bachelor of Science in Computer Science</p>
            <p className="text-gray-300">Catholic University of Korea</p>
            <p className="text-gray-400">2023 ~</p>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Interests</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Security Development</li>
            <li>Cache Side Channel Attack</li>
            <li>Graph Neural Network</li>
            <li>DevSecOps</li>
            <li>MLOps</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '网络软件开发',
    }),
    description: (
      <Translate>
        作为一名网络相关专业学生，为网络提供安全、稳定的连接，提高多人协作开发效率。
      </Translate>
    ),
    header: <WebDeveloperSvg className={'h-auto w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '会点Java & 安全',
    }),
    description: (
      <Translate>
        作为一名正在学习Java与网络安全的开发者，对于网络有着浓厚的兴趣，同时较好的网络管理能力。没有看不懂的，只有不想看的。
      </Translate>
    ),
    header: <SpiderSvg className={'h-auto w-full'} height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    description: (
      <Translate>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES

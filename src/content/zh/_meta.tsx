import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  'tutorials-overview': {
    title: '📚 教程总览',
    type: 'page',
    href: '/zh/tutorials',
  },
  'code-examples': {
    title: '💻 代码示例',
    type: 'page',
  },
  'mdx-demo': {
    title: '🎯 MDX演示',
    type: 'page',
  },
  'test-global-components': {
    title: '🧪 全局组件测试',
    type: 'page',
  },
  'frontmatter-demo': {
    title: '📄 Frontmatter指南',
    type: 'page',
  },
  'frontmatter-access': {
    title: '🔗 元数据访问',
    type: 'page',
  },
  'nextra-structure-guide': {
    title: '📁 内容组织指南',
    type: 'page',
  },
  docs: {
    title: '📦 示例代码',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        新变化
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord

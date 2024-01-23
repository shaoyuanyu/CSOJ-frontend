export interface ProblemDetail {
  /**
   * 编号
   */
  problemId: string

  /**
   * 标题
   */
  title: string

  /**
   * 作者
   */
  author: string

  /**
   * 创建者
   */
  createdByUser: string

  /**
   * 修改题目的用户的用户名
   */
  lastModifiedByUser: string

  /**
   * 类型，如ACM/OI/...
   */
  problemType: number

  /**
   * 时间限制，单位ms
   */
  timeLimit: number

  /**
   * 空间限制，单位mb
   */
  memoryLimit: number

  /**
   * 栈限制，单位mb
   */
  stackLimit: number

  /**
   * 题目描述
   */
  problemDescription: string

  /**
   * 输入描述
   */
  inputDescription: string

  /**
   * 输出描述
   */
  outputDescription: string

  /**
   * 题面样例
   */
  examples: string

  /**
   * 是否为vj判题
   */
  isRemoteJudge: boolean

  /**
   * 题目来源
   *
   * vj判题时例如：HDU-1000的链接
   */
  problemSource: string

  /**
   * 题目难度
   */
  difficulty: number

  /**
   * 备注/提醒
   */
  hint: string

  /**
   * 当该题目为oi题目时的分数
   */
  oiScore: number

  /**
   * 创建日期
   */
  dateCreated: string

  /**
   * 修改日期
   */
  dateLastModified: string
}

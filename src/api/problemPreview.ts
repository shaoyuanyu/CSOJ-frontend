import $axios from '@/utils/axios'

import type { ProblemPreview, ProblemPreviewsQuery } from '@/models/problemPreview'

/**
 * 获取题目预览队列
 *
 * path: /problem/getPreviews
 */
export function queryProblemPreviews(problemPreviewsQuery: ProblemPreviewsQuery) {
  return $axios.post<ProblemPreview[]>('/problem/getPreviews', problemPreviewsQuery)
}

import type { Problem } from '@/models/problem'
import type { RespObj, RespStr } from '@/models/response'
import $axios from '@/utils/axios'

/**
 * 新建题目
 *
 * path: /problem/add
 */
export function addProblem(problem: Problem) {
  return $axios.post<RespStr>('/problem/add', problem)
}

/**
 * 根据id删除题目
 *
 * path: /problem/delete/{id}
 */
export function deleteProblemById(id: string) {
  return $axios.delete<RespStr>('/problem/delete' + id)
}

/**
 * 编辑题目
 *
 * path: /problem/edit
 */
export function editProblem(problem: Problem) {
  return $axios.put<RespStr>('/problem/edit', problem)
}

/**
 * 查询
 *
 * path: /problem/{id}
 */
export function queryProblemVOById(id: string) {
  //return $axios.get<RespObj<Problem>>('/problem/' + id)
  return $axios.get<Problem>('/problem/getProblem/' + id)
}

// /**
//  * 页
//  *
//  * path: /problem/page
//  */
// export function queryRecordWithPagination(problemQuery: ProblemQuery) {
//   return $axios.get<RespPage<Problem>>('/problem/page', { params: problemQuery })
// }

/**
 * 查询我的题目
 *
 * path: /problem/mine/{id}
 */
export function queryMyProblemById(id: string) {
  return $axios.get<RespObj<Problem>>('/problem/mine/' + id)
}

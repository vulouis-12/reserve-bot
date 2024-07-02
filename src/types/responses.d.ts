import { TColor } from './common'

export interface ISuccessResponse<T> {
  code: number
  success: boolean
  data: T
  msg: string
}

export type TResponseData = {
  total: number
  size: number
  current: number
  orders: any[]
  optimizeCountSql: boolean
  hitCount: boolean
  countId: any
  maxLimit: any
  searchCount: any
  pages: number
  records: [
    {
      formatValue: string
      value: string
      planDrawTime: number
      expand: any
      issue: number
      issueDate: number
      completeSettleTime: number
      serviceCode: string
      subServiceCode: string
      productId: string
      simpleResultFormatList: [
        {
          optionVal: string[]
          optionI18n: string[]
          color: TColor
          resultSimpleAlias: any[]
        }
      ]
      resultFormatValueI18n: string[]
      status: number
      startPlanDrawTime: any
      endPlanDrawTime: any
    }
  ]
}

export type IssuesResponse = ISuccessResponse<TResponseData>

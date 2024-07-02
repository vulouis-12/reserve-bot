import axios from 'axios'
import { Agent } from 'https'
export const getIssues = async <Response>(subServiceCode: string = 'RG1', size: number = 20) => {
  try {
    const issues = await axios.get<Response>(
      `http://coinvid.obtainapi.com:8881/api/game/issue/result/?subServiceCode=${subServiceCode}M&size=${size}`,
      {
        httpsAgent: new Agent({
          rejectUnauthorized: false
        })
      }
    )
    return issues.data
  } catch (error) {
    console.log(error)
  }
}

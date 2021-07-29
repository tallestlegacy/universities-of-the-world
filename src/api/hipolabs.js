import axios from "axios"

export async function getUniversities(country) {
  return await axios.get(
    `http://universities.hipolabs.com/search?country=${country}`
  ).then((res) => {
    console.log(res)
    return res
  })
}

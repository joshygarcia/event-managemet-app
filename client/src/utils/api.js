export const fetchApi = async (url, setter) => {
  const target = "https://levelup-server.onrender.com"
  const response = await fetch(target + url, {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  })

  const data = await response.json()
  setter(data)
}

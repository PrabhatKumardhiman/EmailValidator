console.log("Script Running");


handleSubmit.addEventListener('click', async (e) => {
    resultList.innerHTML = `
    <img src="images/loading.svg" width="100" alt="" srcset="">`
    e.preventDefault()
    let url = await `https://api.emailvalidation.io/v1/info?apikey=ema_live_y6FKhQqmfF4U5YD3gUjPhQqZlg2XfwCouqJ7amnM&email=${email.value}`
    let response = await fetch(url);
    let result = await response.json()
    let str = ``
    for (keys of Object.keys(result)) {
        if (result[keys]) {
            str = str + `<div> ${keys} : ${result[keys]} </div>`
        }
    }
    resultList.innerHTML = str

})




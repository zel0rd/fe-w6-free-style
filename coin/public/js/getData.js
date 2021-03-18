const getTickData = function() {
    fetch('https://api.korbit.co.kr/v1/ticker/detailed/all')
        .then(function(response) {
            console.log(response.json())
            return response.json()
        })
        .catch(function() {
            console.log("error")
        })
}

export { getTickData }

// def getTickAllMarket(temp):
// URL = 'https://api.korbit.co.kr/v1/ticker/detailed/all'
// response = requests.get(URL)
// response_json = json.loads(response.text)
// # print(response_json.keys())
// for i in response_json.keys():
//     # print(i + ":" +str(temp))
//     print(i + ":" +str(response_json[i]['last']))
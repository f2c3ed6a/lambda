// var rune_api_base = 'http://host.docker.internal:8580' // beta
var rune_api_base = 'http://host.docker.internal:8570' // prod

var token = []
if (req.query.tokens && req.query.tokens.length > 0) {
    token = req.query.tokens[0].split(',')
}

var payload = {
    func_name: 'FuncGetRecent8DaysInfoRedeemEthereum',
    params: JSON.stringify({ token: token })
}

var resp = fetch(rune_api_base + '/dsn/execsql', {
    method: 'POST',
    body: JSON.stringify(payload)
})

resp.body

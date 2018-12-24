const home_base_url = 'http://127.0.0.1:2333/api/home/'

let request_url = {
    token: {
        checkToken: () => {
            return 'http://localhost:2333/api/passport/oauth/check_token'
        }
    },
    home: {
        login: {
            valid: () => {
                return 'http://localhost:2333/api/passport/oauth/token';
            }
        },
        content: {
            single: id => {
                return id == null ? home_base_url + "content" : home_base_url + "content/" + id;
            },
            multiple: type => {
                return home_base_url + "contents/" + type;
            }
        },
        carousel: {
            single: id => {
                return id == null ? home_base_url + "carousel" : home_base_url + "carousel/" + id;
            },
            multiple: () => {
                return home_base_url + "carousels";
            }
        }
    }
}

module.exports = request_url
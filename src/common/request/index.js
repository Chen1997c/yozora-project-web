const home_base_url = 'http://127.0.0.1:7001/api/home/'

let request_url = {
    home: {
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
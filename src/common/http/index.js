const http_request = {
  axios: (vueComponent, type, url, successMethod, data, fallBackMethod) => {
    vueComponent.axios({
      method: type,
      url: url,
      data: data,
    }).then(response => {
      if (response.data.code == 200) {
        vueComponent.$Message.success(response.data.message);
        successMethod(response.data);
      } else {
        vueComponent.$Message.error(response.data.message);
      }
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      try {
        fallBackMethod();
      } catch (e) {
      }
    })
  },
  axiosInit: (vueComponent, url, successMethod, fallBackMethod, data) => {
    vueComponent.axios.get(url, data)
      .then(response => {
        if (response.data.code == 200) {
          successMethod(response.data)
        } else {
          console.log(response.data.message);
        }
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        try {
          fallBackMethod();
        } catch (e) {
        }
      })
  }
}

module.exports = http_request
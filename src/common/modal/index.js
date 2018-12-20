const msg_modal = {
    confirm: (vueComponet,msg,okMethod) => {
        vueComponet.$Modal.confirm({
            loading: "true",
            title: "提示信息",
            content: msg,
            onOk: () => {
                okMethod();
            }
        });
    }
}

module.exports = msg_modal
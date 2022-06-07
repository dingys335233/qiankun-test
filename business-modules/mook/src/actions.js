function emptyAction() {
    /*警告：提示当前使用的是空 Action*/ 
    // console.warn('Current execute action is empty!');
}

class Action {
    actions = {
        onGlobalStateChange: emptyAction(),
        setGlobalState: emptyAction(),
    }
    constructor(){
    }
    /*设置actions*/
    setActions(actions) {
        this.actions = actions
    }

    /*映射*/
    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args);
    }

    /*映射*/
    setGlobalState(...args) {
        return this.actions.setGlobalState(...args);
    }
}

const actions = new Action;
export default actions;
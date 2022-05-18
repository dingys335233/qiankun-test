// eslint配置

module.exports = {
  root: true, // 制定配置文件根目录：表示当前文件为eslint的跟配置文件，逐层查找时无需往更上一级的文件目录中进行搜索。
  env: { // 运行环境
    browser: true, // 浏览器环境
  },
  parser: 'babel-eslint', // 制定解析器：babel-eslint是围绕Babel解析器的包装器使其与eslint兼容。
  parserOption: { // eslint解析器配置项
    sourceType: 'module' // 指定js的导入方式，默认script，module是指模块导入。
  },
  plugins:
  [ // 提供插件，用于js的扩展解析
    'vue'
  ],
  rules: { // 具体规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 2: 0, // 生产环境禁止debugger
    'no-alert': process.env.NODE_ENV === 'production' ? 2: 0, // 生产环境禁止alert
    'no-console': process.env.NODE_ENV === 'production' ? 2: 0, // 生产环境禁止console
    'no-var': 2, // 不允许使用var
    'arrow-parent': 0, // 关掉箭头函数必须使用圆括号
    'space-before-function-paren': 0, // 关掉function的圆括号之前必须有空格
    'quotes': [2, 'single'], // 强制使用一致的单引号
    'semi': [2, 'never'] // 分号
  }
};

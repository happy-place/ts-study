/**
 * tsc number.ts 编译得到 number.js
 * 运行方式1：使用 nodejs
 * node number.js 运行
 * # 10
 *
 * 运行方式 2：使用 deno 直接运行 ts
 * 安装 idea  deno 插件，并且在 Preference 中 Enable 它
 * 安装依赖 npm install ts-node --save-dev
 * curl -fsSL https://deno.land/x/install/install.sh | sh
 * export DENO_INSTALL="/Users/huhao/.deno"
 * export PATH="$DENO_INSTALL/bin:$PATH"
 *
 * 然后就可以直接在 idea 中使用了
 * deno run number.ts
 *
 *
 */
var numbb;
(function (numbb) {
    let a = 10;
    console.log(a);
})(numbb || (numbb = {}));

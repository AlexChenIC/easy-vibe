const e={common:{reset:"重置",clearMessage:"清除消息"},annotation:{title:"TypeScript 类型注解演示",initialName:"张三",changedName:"李四",successName:"修改成功！类型检查通过",ageError:'TypeScript 错误：不能将类型 "string" 分配给类型 "number"',activeMessage:"状态切换为 {value}",buttons:{modifyName:"修改 name (正确)",ageError:"赋值错误类型",toggleActive:"切换 isActive"},panels:{javascript:"JavaScript (无类型检查)",typescript:"TypeScript (编译时检查)"},jsCode:`let name = "张三"
name = 123  // 运行时才会报错（可能很晚才发现）`,tsCode:`let name: string = "张三"
name = 123  // 编译时立即报错（写代码时就发现）`},inference:{title:"类型推断演示",conceptTitle:"什么是类型推断？",conceptText:"TypeScript 很聪明，它能根据你写的代码自动推断出变量的类型，不需要每次都手动标注。",selectorTitle:"选择一个示例看看类型推断是如何工作的：",codeLabel:"代码",inferredTypeLabel:"推断的类型",tryError:"尝试类型错误",errorMessage:'TypeScript 错误：不能将类型 "number" 分配给类型 "{type}"',practicesTitle:"最佳实践",comparisonTitle:"类型推断 vs 显式注解",inferenceLabel:"使用推断",annotationLabel:"显式注解",examples:[{id:1,code:'let name = "张三"',inferredType:"string",explanation:"TypeScript 根据赋值的字符串推断出 name 的类型是 string"},{id:2,code:"let age = 25",inferredType:"number",explanation:"TypeScript 根据数字字面量推断出 age 的类型是 number"},{id:3,code:"let isActive = true",inferredType:"boolean",explanation:"TypeScript 根据布尔值推断出 isActive 的类型是 boolean"},{id:4,code:"let numbers = [1, 2, 3]",inferredType:"number[]",explanation:"TypeScript 推断出这是一个数字数组"}],practices:[{title:"何时使用类型推断",items:["变量初始化时有明确的值","函数返回值可以明显推断","简单的字面量赋值"]},{title:"何时需要显式注解",items:["函数参数（必须）","对象或数组的复杂结构","无法从初始值推断类型","需要明确的类型约束"]}],comparisons:[{scenario:"函数返回值",withInference:`function add(a: number, b: number) {
  return a + b  // 推断为 number
}`,withAnnotation:`function add(a: number, b: number): number {
  return a + b
}`,recommendation:"推荐使用推断"},{scenario:"复杂对象",withInference:`const user = {
  name: "张三",
  age: 25,
  email: "test@example.com"
}  // 类型自动推断`,withAnnotation:`interface User {
  name: string
  age: number
  email: string
}

const user: User = { ... }`,recommendation:"复杂结构建议用接口"}]},interfaceDemo:{title:"Interface 接口演示",definitionTitle:"User Interface 定义",ageLabel:"年龄:",initialUser:{id:1,name:"张三",email:"zhangsan@example.com",age:25},newUser:{id:2,name:"李四",email:"lisi@example.com",age:30},messages:{typeError:'TypeScript 错误：类型 "string" 不可分配给类型 "number"',newUser:"创建新用户成功！类型检查通过",ageUpdated:"年龄更新为 {age}"},buttons:{increaseAge:"增加年龄",typeError:"尝试赋值错误类型",newUser:"创建新用户"},examples:{correctTitle:"正确使用",errorTitle:"错误使用",correctCode:`const user: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
  age: 25
} // 类型完全匹配`,errorCode:`const user: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
  age: "25"  // 错误：age 应该是 number，不是 string
}`}},generics:{title:"泛型 (Generics) 演示",conceptStrong:"泛型就像“通用模板”",conceptText:"可以处理不同类型的数据，同时保持类型安全",definitionTitle:"泛型函数定义",definitionCode:`// T 是类型变量，使用时才会确定具体类型
function identity<T>(arg: T): T {
  return arg
}

// 泛型数组反转
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse()
}`,selectType:"选择数据类型：",numberArray:"数字数组",stringArray:"字符串数组",inputLabel:"输入数组（逗号分隔）：",numberPlaceholder:"1, 2, 3, 4, 5",stringPlaceholder:"苹果, 香蕉, 橙子",loadNumber:"加载数字示例",loadString:"加载字符串示例",execute:"执行反转",resultTitle:"执行结果",inputType:"输入类型：",inputArray:"输入数组：",outputArray:"输出数组：",typeSafety:"类型安全：输入 {type}，输出 {type}",usageTitle:"泛型使用示例",numberExampleTitle:"数字数组",stringExampleTitle:"字符串数组",emptyError:"请输入内容",unknownType:"未知类型",formatError:"输入格式错误",stringExampleValue:"苹果, 香蕉, 橙子, 葡萄",numberExampleCode:`const nums = [1, 2, 3, 4, 5]
const reversed = reverseArray<number>(nums)
// 结果: [5, 4, 3, 2, 1]
// 类型: number[]`,stringExampleCode:`const strs = ["a", "b", "c"]
const reversed = reverseArray<string>(strs)
// 结果: ["c", "b", "a"]
// 类型: string[]`}},n={common:{reset:"Reset",clearMessage:"Clear message"},annotation:{title:"TypeScript Type Annotation Demo",initialName:"Alice",changedName:"Bob",successName:"Updated successfully. Type check passed",ageError:'TypeScript error: type "string" is not assignable to type "number"',activeMessage:"Status changed to {value}",buttons:{modifyName:"Change name (valid)",ageError:"Assign wrong type",toggleActive:"Toggle isActive"},panels:{javascript:"JavaScript (no type checking)",typescript:"TypeScript (compile-time checking)"},jsCode:`let name = "Alice"
name = 123  // Runtime error may appear much later`,tsCode:`let name: string = "Alice"
name = 123  // Compile-time error appears immediately`},inference:{title:"Type Inference Demo",conceptTitle:"What is type inference?",conceptText:"TypeScript can infer variable types from your code, so you do not need to annotate every value manually.",selectorTitle:"Choose an example to see how type inference works:",codeLabel:"Code",inferredTypeLabel:"Inferred type",tryError:"Try a type error",errorMessage:'TypeScript error: type "number" is not assignable to type "{type}"',practicesTitle:"Best Practices",comparisonTitle:"Type Inference vs Explicit Annotation",inferenceLabel:"Use inference",annotationLabel:"Explicit annotation",examples:[{id:1,code:'let name = "Alice"',inferredType:"string",explanation:"TypeScript infers that name has type string from the assigned string value."},{id:2,code:"let age = 25",inferredType:"number",explanation:"TypeScript infers that age has type number from the numeric literal."},{id:3,code:"let isActive = true",inferredType:"boolean",explanation:"TypeScript infers that isActive has type boolean from the boolean value."},{id:4,code:"let numbers = [1, 2, 3]",inferredType:"number[]",explanation:"TypeScript infers this as an array of numbers."}],practices:[{title:"When to use inference",items:["A variable has a clear initial value","The function return type is obvious","The assignment is a simple literal"]},{title:"When to add annotations",items:["Function parameters are required","Objects or arrays have complex structure","The initial value cannot reveal the type","You need an explicit type constraint"]}],comparisons:[{scenario:"Function return value",withInference:`function add(a: number, b: number) {
  return a + b  // inferred as number
}`,withAnnotation:`function add(a: number, b: number): number {
  return a + b
}`,recommendation:"Inference is recommended"},{scenario:"Complex object",withInference:`const user = {
  name: "Alice",
  age: 25,
  email: "test@example.com"
}  // type is inferred automatically`,withAnnotation:`interface User {
  name: string
  age: number
  email: string
}

const user: User = { ... }`,recommendation:"Use an interface for complex structures"}]},interfaceDemo:{title:"Interface Demo",definitionTitle:"User Interface Definition",ageLabel:"Age:",initialUser:{id:1,name:"Alice",email:"alice@example.com",age:25},newUser:{id:2,name:"Bob",email:"bob@example.com",age:30},messages:{typeError:'TypeScript error: type "string" is not assignable to type "number"',newUser:"New user created. Type check passed",ageUpdated:"Age updated to {age}"},buttons:{increaseAge:"Increase age",typeError:"Try assigning wrong type",newUser:"Create new user"},examples:{correctTitle:"Correct usage",errorTitle:"Incorrect usage",correctCode:`const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25
} // fully matches the type`,errorCode:`const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: "25"  // error: age should be number, not string
}`}},generics:{title:"Generics Demo",conceptStrong:"Generics are reusable templates",conceptText:"They handle different data types while preserving type safety",definitionTitle:"Generic Function Definition",definitionCode:`// T is a type variable decided when the function is used
function identity<T>(arg: T): T {
  return arg
}

// Generic array reversal
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse()
}`,selectType:"Choose data type:",numberArray:"Number array",stringArray:"String array",inputLabel:"Input array (comma-separated):",numberPlaceholder:"1, 2, 3, 4, 5",stringPlaceholder:"apple, banana, orange",loadNumber:"Load number example",loadString:"Load string example",execute:"Run reverse",resultTitle:"Result",inputType:"Input type:",inputArray:"Input array:",outputArray:"Output array:",typeSafety:"Type safe: input {type}, output {type}",usageTitle:"Generic Usage Examples",numberExampleTitle:"Number array",stringExampleTitle:"String array",emptyError:"Please enter content",unknownType:"Unknown type",formatError:"Invalid input format",stringExampleValue:"apple, banana, orange, grape",numberExampleCode:`const nums = [1, 2, 3, 4, 5]
const reversed = reverseArray<number>(nums)
// result: [5, 4, 3, 2, 1]
// type: number[]`,stringExampleCode:`const strs = ["a", "b", "c"]
const reversed = reverseArray<string>(strs)
// result: ["c", "b", "a"]
// type: string[]`}},r={"zh-cn":e,en:n};export{r as t};

// document.createElement('div')
// const div = dom.create("div");

const div = dom.create("<div>newDiv</div>");
const div1 = dom.create("<div>新增一个子节点</div>");
const div2 = dom.create("<div>插入一个节点</div>");
// const div = dom.create("<td>123</td>");
console.log(div);

dom.after(test, div);

dom.before(test, div);

dom.append(test, div1);

dom.wrap(div1, div2);

// dom.remove(div1);
// dom.remove(empty);
// dom.empty(empty);
// 写入
dom.attr(test, "title", "I am title!");
// 读取
const title = dom.attr(test, "title");
console.log(`title:${title}`);

dom.text(test, "Hi, 听我的指令, 这是新的文本内容!");

// dom.html(test, "<span>这里新插入了一个span!</span>");
const text = dom.text(test);
console.log(text);
console.log(dom.html(div1));

dom.style(test, { border: "1px solid red", color: "green" });
dom.style(test, "border");

dom.class.add(test, "red");
// dom.class.remove(test, "red");
// dom.class.has(test, "red");
console.log(dom.class.has(test, "red"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);

// dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);

const testParent = dom.parent(test);
console.log(testParent);

const e2 = dom.find("#e2")[0];

console.log(dom.siblings(e2));
console.log(dom.next(e2));
// console.log(`next:${dom.next(e2)}`);

console.log(dom.previous(e2));

const t = dom.find("#travel")[0];
console.log(t);

dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

// console.log(e2);

// console.log(t);
// console.log(dom.children(t));

// console.log(`travel children:${dom.children(t)}`);

// console.log(`e2:${e2}`);
// console.log(dom.index(e2));

// console.log(`e2-index:${dom.index(e2)}`);

// dom.index(`index:${e2}`);

const divff = dom.find("#test>.red")[0];
console.log(`divff:${divff}`);

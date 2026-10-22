// Create element through js


// const header1 = document.createElement('h1');
// header1.innerText = "Hello coder";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h1');
// header2.innerText = "Hello coder";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);


// const react = {
//     createElement: function(tag, style, children) {
//         const element = document.createElement(tag);
//         if(typeof children === 'object'){
//             for(let val of children){
//                 element.append(val);
//             }
//         } 
//         else
//         element.innerText = children;
//         for(let key in style) {
//             element.style[key]  = style[key];
//         }
//         return element;
//     }
// }
// const reactDom = {
//     render : function(element, root) {
//         root.append(element);
//     }
// }
// const header1 = react.createElement('h1', {fontSize: "30px", backgroundColor: "blue", color: "white"}, "Hello coders");
// const header2 = react.createElement('h2', {fontSize: "30px", backgroundColor: "black", color: "white"}, "hello Akash");

// const li1 = react.createElement('li', {}, "html");
// const li2 = react.createElement('li', {}, "css");
// const li3 = react.createElement('li', {}, "js");
// const Ul = react.createElement('ul', {fontSize: "30px", backgroundColor: "blue", color: "white"}, [li1,li2,li3]);










reactDom.render(header1, document.getElementById('root'));
reactDom.render(header2, document.getElementById('root'));
reactDom.render(Ul, document.getElementById('root'));



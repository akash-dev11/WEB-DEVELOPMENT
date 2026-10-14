
import Product from "./Product.jsx";

function ProductTab() {
    // let options1 = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li> ];
    let options1 = ["hi-tech", "durable", "fast"];
    // let options2 = {a: "hi-tech", b: "durable", c: "fast"};
    return (
        <>
            {/* <Product title="phone" price={30000} features={options1} features2 ={options2}/> */}
            <Product title="phone" price={30000} features={options1} />
            {/* <Product title="laptop" price={40000}/> */}
            {/* <Product title="pen" price={1}/> */}
        </>
    );
}

export default ProductTab;
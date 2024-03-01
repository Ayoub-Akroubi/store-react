export default function Product({product,key}) {
    console.log(key)
    return <tr key={key}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td> <img width={200} src={product.image}></img></td>
        <td> <span className="badge badge-pill bg-primary">  {product.rating.rate} / {product.rating.count}</span> </td>
    </tr> 
}
import Layout from '../components/Layout'
import data from '../dat/data';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <Layout title="Ferreteria la ruta">
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map((product)=>
          <ProductItem products={product} key={product.slug}></ProductItem>
        )}
      </div>
    </Layout>
  );
}

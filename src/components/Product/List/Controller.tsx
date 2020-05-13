import React from 'react';
import View from './View';
import { Product, loadCollectionsByIds } from 'resources/product';

interface Props {
  categorySlug?: string
}

interface State {
  products: Product[];
  loading: boolean;
}

class ProductListController extends React.Component<Props> {
  state: State = { products: [], loading: true };
  async componentDidMount() {
    const collections = await loadCollectionsByIds([1, 2, 3]);
    const products = collections.reduce(
      (result, collection) => result.concat(
        collection.products.map(product => ({ ...product, is_feature: false }))
      ),
      [] as Product[],
    );
    const loading = false;
    this.setState({ products, loading });
  }
  render() {
    return <View
      loading={this.state.loading}
      products={this.state.products} />
  }
}

export default ProductListController;

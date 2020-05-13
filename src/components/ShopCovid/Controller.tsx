import React from 'react';
import View from './View';
import { loadCollections, loadCollectionsByIds, ProductCollection } from 'resources/product';

interface Props {
  ids?: number[]
  categorySlug?: string
}

interface State {
  collections?: ProductCollection[];
}

class ShopController extends React.Component<Props> {
  state: State = {};
  async componentDidMount() {
    const collections = this.props.ids
      ? await loadCollectionsByIds(this.props.ids)
      : await loadCollections();
    console.log(collections);
    const noFeatureCollections = collections.map(collection => ({
      ...collection,
      products: collection.products.map(product => ({
        ...product,
        is_feature: false,
      })),
    }));

    this.setState({ collections: noFeatureCollections });
  }
  render() {
    return <View collections={this.state.collections} />
  }
}

export default ShopController;

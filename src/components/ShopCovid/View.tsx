import React from "react";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { Classes } from "@blueprintjs/core";

import { ProductCollection } from "resources/product";
import Item from "components/Product/Item";
import styles from "./styles.module.scss";

interface Props {
  collections?: ProductCollection[];
}

const ShopView: React.FC<Props> = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.collection}>
        <div className={styles.info}>
          <h1>#StayHome</h1>
          <p className={classNames(Classes.TEXT_LARGE, Classes.RUNNING_TEXT)}>
            <a href="https://www.instagram.com/p/B-Ju1jpAQ68/?igshid=1n8jk9ymqq6z7">#stayhome</a>
            <span> Ở nhà trong vài tuần kế tiếp để giữ an toàn cho bạn và cộng đồng. Phát Thành sẽ cung cấp cà phê đến tận nhà. Hãy cùng chung tay nhau chiến thắng Covid-19!</span>
          </p>
        </div>
      </div>

      {props.collections === undefined
        ? (
          <div className={styles.collection}>{Array(8).fill(null).map((_, index) =>
            <div key={`skeleton-${index}`} className={styles.item}><Item /></div>)}
          </div>
        )
        : props.collections.map((collection, index) =>
          <div key={collection.id} className={styles.collection}>
            {collection.name && <div className={classNames(styles.info, Classes.RUNNING_TEXT, Classes.TEXT_LARGE)}>
              <ReactMarkdown className={styles.description} source={collection.description} />
            </div>}
            {collection.products && collection.products.map(product =>
              <div key={product.id} className={classNames({
                [styles.item]: true,
                [styles.feature]: product.is_feature,
              })}>
                <Item product={product} />
              </div>
            )}
            <div className={styles.item} /><div className={styles.item} /><div className={styles.item} />
          </div>
        )}
    </div>
  );
}

export default ShopView;

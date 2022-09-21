import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import AttributePills from 'components/UI/molecules/AttributePills';
import RatingStar from 'components/UI/atoms/product-review/RatingStar';
const ProductDescriptionContainer = ({ showCartButton, showPillsAndRating }) => {
  return (
    <div className={styles['vertical-list_infoContainer']}>
      <div className={styles['info']}>
        <div className={styles['info__name']}>BRILLARE</div>
        <div className={styles['info__truncate-title']}>
          Hair Fall Control Oil Shots To Reduce Seasonal Hair Fall(6mlX8)
        </div>
        <div className={styles['pricing']}>
          <span className={styles['pricing__sp']} style={{ fontSize: 17 }}>
            ₹ 397{' '}
          </span>
          <span className={styles['pricing__mrp']} style={{ fontSize: 16 }}>
            ₹ 795
          </span>

          <span className={styles['pricing__discount-percent']} style={{ fontSize: 16 }}>
            50% off
          </span>
        </div>
        <div className={styles['info__offerText']}>
          Get this for 10% off{' '}
          {showCartButton && (
            <div className={styles['vertical-list-card__addtoBag']}>
              <img alt="Add To Bag" src={images.addToBag} height={42} width={42} />
            </div>
          )}
        </div>
        {showPillsAndRating && (
          <div className={styles['info__rating']}>
            <RatingStar rating={4} />
          </div>
        )}
        {showPillsAndRating && (
          <div className={styles['info__pills']}>
            <AttributePills />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescriptionContainer;

// import images from 'assets/images';
// const VerticalList = ({ image = '' }) => {
//   return (
//     <div
//       className={styles['vertical-list-card']}
//       style={{
//         marginLeft: Utilities.spacingBetweenItems,
//         marginRight: Utilities.spacingBetweenItems,
//         width: Utilities.getScreenWidth() - 24,
//       }}>
//       <div className={styles['vertical-list-card__image']}>
//         <img src={image} height={116} width={116} />
//       </div>
//       <div className={styles['vertical-list_infoContainer']}>
//         <div className={styles['info']}>
//           <div className={styles['info__name']}>BRILLARE</div>
//           <div className={styles['info__truncate-title']}>
//             Hair Fall Control Oil Shots To Reduce Seasonal Hair Fall(6mlX8)
//           </div>
//           <div className={styles['pricing']}>
//             <span className={styles['pricing__sp']} style={{ fontSize: 17 }}>
//               ₹ 397{' '}
//             </span>
//             <span className={styles['pricing__mrp']} style={{ fontSize: 16 }}>
//               ₹ 795
//             </span>

//             <span className={styles['pricing__discount-percent']} style={{ fontSize: 16 }}>
//               50% off
//             </span>
//           </div>
//           <div className={styles['info__offerText']}>
//             Get this for 10% off{' '}
//             <div className={styles['vertical-list-card__addtoBag']}>
//               <img src={images.addToBag} height={42} width={42} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalList;

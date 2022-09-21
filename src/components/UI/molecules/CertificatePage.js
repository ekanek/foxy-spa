import { useNavigate, useLocation } from 'react-router-dom';
import styles from 'styles/productPage.module.scss';
import images from 'assets/images';
const CertificatePage = () => {
  const { state } = useLocation();
  const { brand } = state;
  const { name = '', certificate_image_url = '' } = brand;
  const navigate = useNavigate();
  return (
    <div className={styles['certificate-container']}>
      <div className={styles['cross-image']} onClick={() => navigate('/')}>
        <img alt="Cross Image" height={12} width={12} src={images.cross_image} />
      </div>
      <div className={styles['certificate-sub-container']}>
        <div className={styles['certificate-header-text']}>
          <div className={styles['headline']}>
            <span style={{ fontSize: 20 }}>100% original products</span>
          </div>
          <div className={styles['headline-content']}>
            All {name} products are sourced directly from brand and/or their authorized resellers
            and are 100% original
          </div>
        </div>
        <div className={styles['certificate-image']}>
          <img alt="Certificate" src={certificate_image_url} height={400} width={300} />
        </div>
        <div className={styles['outer-container-got-it']}>
          <div onClick={() => navigate('/')} className={styles['got-it-button-style']}>
            <span>Got It!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;

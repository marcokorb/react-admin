import React from 'react';

import PageBreadcrumbs from '../../../common/PageBreadcrumbs';
import PageContainer from '../../../common/PageContainer';
import PageToolbar from '../../../common/PageToolbar';

const ProductsList: React.FC = () => {

  return (
    <PageContainer>
      <PageToolbar />
      <PageBreadcrumbs />
      Products
    </PageContainer>
  );
}

export default ProductsList;
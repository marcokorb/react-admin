import React from 'react';

import PageBreadcrumbs from '../../common/PageBreadcrumbs';
import PageContainer from '../../common/PageContainer';
import PageToolbar from '../../common/PageToolbar';

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <PageToolbar title="Dashboard"/>
      <PageBreadcrumbs />
      <div>fdsfsd</div>
    </PageContainer>
  );
}

export default Dashboard;

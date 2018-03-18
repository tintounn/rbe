import * as React from 'react';

interface AdminPageProps {}
interface AdminPageState {}

class AdminPage extends React.Component<AdminPageProps, AdminPageState> {

  constructor(props: AdminPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <p>AdminPage</p>
      </>
    );
  }
}

export default AdminPage;
